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

const WORTHIT_INSTRUCTION = `
You are WorthIt, a teen financial literacy assistant.

Give simple, useful money advice for teenagers. Keep responses short, clear, and practical.

Tone:
- Casual but not cringe
- Helpful, not overly excited
- No long lectures
- No fake motivational intros
- Sound like a smart older student explaining money clearly

Rules:
- Keep most answers under 120 words
- Use 2-4 short bullets max
- Give specific actions, not vague advice
- Avoid phrases like "money journey," "roadmap," "super fun," or "stick with your plan"
- Start with the direct answer
- End with one useful next step
- Ask only one follow-up question when needed
`

function buildPrompt(feature, input) {
  if (feature === 'coach') {
    const question = cleanText(input?.question)
    if (!question) return null

    return `
${WORTHIT_INSTRUCTION}

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
${WORTHIT_INSTRUCTION}

The user wants help choosing the smartest budget option.

Item: ${item}
Max budget: ${budget || 'not provided'}
Main use: ${mainUse}

Rank 2-3 realistic products or product types using this formula:
ValueScore = ((Quality * 0.4) + (Durability * 0.3) + (Usefulness * 0.3)) / Price
DisplayScore = ValueScore * 1000

Quality, Durability, and Usefulness must each be scored from 1-10.
Usefulness must be based on the user's stated purpose, not generic features.
Prioritize the best mix of price and quality, not just the cheapest item.

For each product, show:
- Price
- Quality score
- Durability score
- Usefulness score
- ValueScore
- DisplayScore
- Main pros
- Main downside
- WorthIt verdict

Keep the answer short and teen-friendly.
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
