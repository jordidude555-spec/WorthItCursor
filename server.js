import 'dotenv/config'
import express from 'express'
import { GoogleGenAI } from '@google/genai'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 3001
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

app.use(express.json({ limit: '20kb' }))

function cleanText(value) {
  return String(value || '').trim().slice(0, 800)
}

function buildPrompt(feature, input) {
  if (feature === 'coach') {
    const question = cleanText(input?.question)
    if (!question) return null

    return `
You are WorthIt's friendly AI money coach for teens.
Give practical, safe, non-judgmental money advice in 3-5 short bullets or short paragraphs.
Avoid financial guarantees and avoid telling users to take risky debt or investments.

User question:
${question}
`
  }

  if (feature === 'value-finder') {
    const item = cleanText(input?.item)
    const budget = cleanText(input?.budget)
    const mainUse = cleanText(input?.mainUse)
    if (!item || !mainUse) return null

    return `
You are WorthIt's Value Finder for teens.
The user wants help choosing the smartest budget option.

Item: ${item}
Max budget: ${budget || 'not provided'}
Main use: ${mainUse}

Give a concise recommendation with:
1. What to prioritize.
2. 3 realistic budget-friendly options or types to compare.
3. Red flags to avoid.
4. A final "WorthIt pick" summary.
Do not invent live prices or claim you searched the web. Say to compare current prices before buying.
`
  }

  return null
}

app.post('/api/gemini', async (req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY in .env' })
  }

  const { feature, input } = req.body || {}
  const prompt = buildPrompt(feature, input)

  if (!prompt) {
    return res.status(400).json({ error: 'Invalid feature or missing input.' })
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    })

    res.json({ feature, text: response.text || 'Gemini did not return a response.' })
  } catch (error) {
    console.error('Gemini request failed:', error)
    res.status(500).json({ error: 'Gemini request failed. Please try again.' })
  }
})

const distPath = path.join(__dirname, 'dist')
if (existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get(/.*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`WorthIt API running on http://localhost:${port}`)
})
