import './style.css'

/* Inline SVGs — no extra libraries */
const icon = {
  gear: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg>`,
  plus: `<svg class="ico ico-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`,
  wallet: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path stroke-linecap="round" stroke-linejoin="round" d="M18 12a1 1 0 0 0 1 1h1v-2h-1a1 1 0 0 0-1 1Z"/></svg>`,
  spark: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m12 3 1.5 4.2L18 9l-4.5 1.8L12 15l-1.5-4.2L6 9l4.5-1.8L12 3Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 19.5 7.5 18M18.5 5.5 17 7"/></svg>`,
  trend: `<svg class="ico ico-trend" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17 9 11l4 4 8-8"/><path d="M14 7h7v7"/></svg>`,
  home: `<svg class="ico tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 11 12 4l8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9Z"/></svg>`,
  activity: `<svg class="ico tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v0Z"/><path stroke-linecap="round" d="M9 12h6"/><path stroke-linecap="round" d="M9 16h6"/></svg>`,
  learn: `<svg class="ico tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path stroke-linecap="round" stroke-linejoin="round" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path stroke-linecap="round" d="M12 6v6"/></svg>`,
  coach: `<svg class="ico tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>`,
  ai: `<svg class="ico tab-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m12 3 1.8 5.5h5.7l-4.6 3.3 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.6-3.3h5.7L12 3Z"/></svg>`,
  close: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  chevron: `<svg class="ico ico-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`,
  search: `<svg class="ico ico-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  trash: `<svg class="ico ico-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>`,
  trendDown: `<svg class="ico ico-trend-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 7l-6 6-4-4"/><path d="M17 12V7h-5"/></svg>`,
  send: `<svg class="ico ico-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>`,
}

document.querySelector('#app').innerHTML = `
  <div class="app neon" id="worthit-app">
    <header class="app-header">
      <button type="button" class="icon-circle" aria-label="Settings" data-open-settings-modal>
        ${icon.gear}
      </button>
      <div class="header-titles">
        <p class="greeting neon-muted" id="header-greeting">Hey there 👋</p>
        <h1 class="brand-title">WorthIt</h1>
      </div>
      <button type="button" class="btn-log" data-open-log-modal>
        ${icon.plus}
        <span>Log</span>
      </button>
    </header>

    <main class="app-main" id="app-main">
      <section
        class="panel is-active"
        id="panel-home"
        role="tabpanel"
        aria-labelledby="tab-home"
        data-panel="home"
      >
        <article class="card card-budget">
          <p class="budget-kicker">Monthly budget</p>
          <div class="budget-row">
            <span class="budget-big" id="dash-left">$168</span>
            <span class="budget-rest neon-muted" id="dash-budget-label">of $300 budget</span>
          </div>
          <div
            class="progress neon-progress"
            id="dash-progress"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="300"
            aria-valuenow="132"
            aria-label="Dollars spent of monthly budget"
          >
            <div class="progress-fill" id="dash-progress-fill" style="width: 44%"></div>
          </div>
          <div class="budget-subgrid">
            <div class="sub-tile">
              <span class="sub-ico">${icon.wallet}</span>
              <p class="sub-label neon-muted">Spent</p>
              <p class="sub-amt" id="dash-spent">$132.00</p>
            </div>
            <div class="sub-tile sub-tile-glow">
              <span class="sub-ico sub-ico-green">${icon.spark}</span>
              <p class="sub-label neon-muted">Safe today</p>
              <p class="sub-amt sub-amt-green">$9.87</p>
              <p class="sub-hint neon-muted">17 days left</p>
            </div>
          </div>
        </article>

        <article class="card card-breakdown">
          <div class="card-head">
            <h2 class="card-title">Where it goes</h2>
            <span class="trend-ico" aria-hidden="true">${icon.trend}</span>
          </div>
          <div class="breakdown-body">
            <div class="donut-wrap" aria-hidden="true">
              <div class="donut-ring" id="donut-ring"></div>
              <div class="donut-hole">
                <span class="donut-label">Total</span>
                <span class="donut-val" id="donut-total">$132</span>
              </div>
            </div>
            <ul class="legend" id="spend-legend">
              <li><span class="dot dot-cyan"></span> Food <span class="leg-amt" data-cat="Food">$43</span></li>
              <li><span class="dot dot-purple"></span> Entertainment <span class="leg-amt" data-cat="Entertainment">$6</span></li>
              <li><span class="dot dot-green"></span> Savings <span class="leg-amt" data-cat="Savings">$25</span></li>
              <li><span class="dot dot-pink"></span> Shopping <span class="leg-amt" data-cat="Shopping">$38</span></li>
              <li><span class="dot dot-muted"></span> Other <span class="leg-amt" data-cat="Other">$0</span></li>
              <li><span class="dot dot-amber"></span> Transport <span class="leg-amt" data-cat="Transport">$20</span></li>
            </ul>
          </div>
        </article>

        <section class="categories-block">
          <h2 class="section-heading">Categories</h2>
          <article class="card card-category">
            <div class="cat-row">
              <span class="cat-name">Food</span>
              <span class="cat-ratio neon-muted" data-home-cat-meta="Food">$43 / $75</span>
            </div>
            <div class="neon-progress neon-progress-thin">
              <div class="progress-fill" data-home-cat-bar="Food" style="width: 57%"></div>
            </div>
          </article>
          <article class="card card-category">
            <div class="cat-row">
              <span class="cat-name">Entertainment</span>
              <span class="cat-ratio neon-muted" data-home-cat-meta="Entertainment">$12 / $60</span>
            </div>
            <div class="neon-progress neon-progress-thin">
              <div class="progress-fill progress-fill-purple" data-home-cat-bar="Entertainment" style="width: 20%"></div>
            </div>
          </article>
          <article class="card card-category">
            <div class="cat-row">
              <span class="cat-name">Savings</span>
              <span class="cat-ratio neon-muted" data-home-cat-meta="Savings">$0 / $100</span>
            </div>
            <div class="neon-progress neon-progress-thin">
              <div class="progress-fill progress-fill-green" data-home-cat-bar="Savings" style="width: 0%"></div>
            </div>
          </article>
          <article class="card card-category">
            <div class="cat-row">
              <span class="cat-name">Shopping</span>
              <span class="cat-ratio neon-muted" data-home-cat-meta="Shopping">$38 / $75</span>
            </div>
            <div class="neon-progress neon-progress-thin">
              <div class="progress-fill progress-fill-pink" data-home-cat-bar="Shopping" style="width: 51%"></div>
            </div>
          </article>
          <article class="card card-category">
            <div class="cat-row">
              <span class="cat-name">Transport</span>
              <span class="cat-ratio neon-muted" data-home-cat-meta="Transport">$16 / $50</span>
            </div>
            <div class="neon-progress neon-progress-thin">
              <div class="progress-fill progress-fill-amber" data-home-cat-bar="Transport" style="width: 32%"></div>
            </div>
          </article>
          <article class="card card-category">
            <div class="cat-row">
              <span class="cat-name">Other</span>
              <span class="cat-ratio neon-muted" data-home-cat-meta="Other">$0 / $40</span>
            </div>
            <div class="neon-progress neon-progress-thin">
              <div class="progress-fill progress-fill-muted" data-home-cat-bar="Other" style="width: 0%"></div>
            </div>
          </article>
        </section>
      </section>

      <section class="panel activity-panel" id="panel-activity" role="tabpanel" aria-labelledby="activity-heading" hidden data-panel="activity">
        <p class="activity-kicker neon-muted">All your moves</p>
        <h2 class="activity-title" id="activity-heading">Activity</h2>

        <div class="activity-stats">
          <article class="activity-stat-card">
            <p class="activity-stat-label">Total</p>
            <p class="activity-stat-value" id="activity-stat-total">$0.00</p>
            <p class="activity-stat-hint neon-muted"><span id="activity-stat-count">0</span> purchases</p>
          </article>
          <article class="activity-stat-card">
            <p class="activity-stat-label activity-stat-label-row">
              Avg / item
              <span class="activity-stat-ico" aria-hidden="true">${icon.trendDown}</span>
            </p>
            <p class="activity-stat-value" id="activity-stat-avg">$0.00</p>
            <p class="activity-stat-hint neon-muted" id="activity-stat-scope">all categories</p>
          </article>
        </div>

        <div class="activity-search-wrap">
          <span class="activity-search-ico" aria-hidden="true">${icon.search}</span>
          <input
            type="search"
            class="activity-search-input"
            id="activity-search"
            placeholder="Search purchases..."
            autocomplete="off"
            aria-label="Search purchases"
          />
        </div>

        <div class="activity-filters" role="group" aria-label="Filter by category">
          <button type="button" class="filter-pill is-active" data-filter="All">All</button>
          <button type="button" class="filter-pill" data-filter="Food">Food</button>
          <button type="button" class="filter-pill" data-filter="Entertainment">Entertainment</button>
          <button type="button" class="filter-pill" data-filter="Savings">Savings</button>
          <button type="button" class="filter-pill" data-filter="Shopping">Shopping</button>
          <button type="button" class="filter-pill" data-filter="Other">Other</button>
          <button type="button" class="filter-pill" data-filter="Transport">Transport</button>
        </div>

        <div id="activity-groups" class="activity-groups"></div>
      </section>

      <section class="panel" id="panel-learn" role="tabpanel" aria-labelledby="tab-learn" hidden data-panel="learn">
        <h2 class="screen-heading">Learn</h2>
        <p class="screen-sub neon-muted">Bite-size money lessons for busy weeks.</p>
        <article class="card glass lesson-card">
          <p class="lesson-tag">2 min</p>
          <h3 class="lesson-title">The 48-hour wishlist rule</h3>
          <p class="lesson-body neon-muted">Sleep on it before you tap “buy.” WorthIt can park wants in a list so you decide calm.</p>
        </article>
        <article class="card glass lesson-card">
          <p class="lesson-tag">3 min</p>
          <h3 class="lesson-title">Split cash without drama</h3>
          <p class="lesson-body neon-muted">Track who owes who after hangouts — less awkward texts later.</p>
        </article>
      </section>

      <section class="panel ai-panel" id="panel-ai" role="tabpanel" aria-labelledby="ai-heading" hidden data-panel="ai">
        <p class="value-badge ai-powered-badge">
          <span aria-hidden="true">${icon.spark}</span>
          Powered by Gemini
        </p>
        <h2 class="value-title ai-title" id="ai-heading">SpendWise AI</h2>
        <p class="value-sub ai-sub neon-muted">Chat with your money coach or find the smartest buy.</p>

        <div class="ai-switch" role="tablist" aria-label="AI tool">
          <button type="button" class="ai-switch-btn is-active" role="tab" aria-selected="true" data-ai-mode="coach">
            <span aria-hidden="true">${icon.coach}</span>
            Coach
          </button>
          <button type="button" class="ai-switch-btn" role="tab" aria-selected="false" data-ai-mode="value">
            <span aria-hidden="true">${icon.spark}</span>
            Value Finder
          </button>
        </div>

        <div class="ai-mode-panel is-active" data-ai-mode-panel="coach">
          <article class="coach-welcome card glass">
            <p>Hey! 👋 I'm your AI money coach. Ask me about budgeting, saving, or whether that purchase is actually worth it.</p>
          </article>

          <article class="coach-response card glass" id="coach-response" hidden>
            <p class="response-kicker">Coach says</p>
            <div class="response-text" id="coach-response-text"></div>
          </article>

          <section class="coach-prompts" aria-labelledby="coach-prompts-title">
            <h3 class="coach-prompts-title" id="coach-prompts-title">Try asking</h3>
            <div class="coach-prompt-list">
              <button type="button" class="coach-prompt" data-coach-prompt="How do I start a budget?">
                How do I start a budget?
              </button>
              <button type="button" class="coach-prompt" data-coach-prompt="Tips to save for a new phone?">
                Tips to save for a new phone?
              </button>
              <button type="button" class="coach-prompt" data-coach-prompt="Is this $200 hoodie worth it?">
                Is this $200 hoodie worth it?
              </button>
              <button type="button" class="coach-prompt" data-coach-prompt="Explain compound interest simply">
                Explain compound interest simply
              </button>
            </div>
          </section>

          <form class="coach-composer" id="coach-form">
            <label class="sr-only" for="coach-input">Ask your money coach</label>
            <input
              class="coach-input"
              id="coach-input"
              type="text"
              placeholder="Ask your money coach..."
              autocomplete="off"
            />
            <button type="submit" class="coach-send" aria-label="Send message">
              ${icon.send}
            </button>
          </form>
        </div>

        <div class="ai-mode-panel" data-ai-mode-panel="value" hidden>
          <form class="value-card card glass" id="value-form">
            <div class="value-field value-field-full">
              <label class="value-label" for="value-item">Item</label>
              <input
                class="value-input"
                id="value-item"
                type="text"
                placeholder="Wireless headphones"
                autocomplete="off"
              />
            </div>
            <div class="value-field">
              <label class="value-label" for="value-budget">Max Budget</label>
              <input
                class="value-input"
                id="value-budget"
                type="text"
                inputmode="decimal"
                placeholder="$150"
                autocomplete="off"
              />
            </div>
            <div class="value-field">
              <label class="value-label" for="value-use">Main use</label>
              <input
                class="value-input"
                id="value-use"
                type="text"
                placeholder="Gym + study"
                autocomplete="off"
              />
            </div>
            <button type="submit" class="value-submit">
              <span aria-hidden="true">${icon.search}</span>
              Find smartest buy
            </button>
          </form>

          <article class="value-result card glass" id="value-result" hidden>
            <p class="response-kicker">Smartest buy guide</p>
            <div class="response-text" id="value-result-text"></div>
          </article>

          <section class="value-try" aria-labelledby="value-try-title">
            <h3 class="value-try-title" id="value-try-title">
              <span aria-hidden="true">${icon.spark}</span>
              Try one
            </h3>
            <div class="value-chip-list">
              <button type="button" class="value-chip" data-value-item="Wireless headphones" data-value-budget="$150" data-value-use="Gym + study">
                Wireless headphones
              </button>
              <button type="button" class="value-chip" data-value-item="Running shoes" data-value-budget="$120" data-value-use="Track + everyday">
                Running shoes
              </button>
              <button type="button" class="value-chip" data-value-item="Laptop for school" data-value-budget="$700" data-value-use="Homework + video calls">
                Laptop for school
              </button>
              <button type="button" class="value-chip" data-value-item="Skincare routine" data-value-budget="$45" data-value-use="Simple daily routine">
                Skincare routine
              </button>
              <button type="button" class="value-chip" data-value-item="Backpack" data-value-budget="$80" data-value-use="School + sports">
                Backpack
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>

    <button type="button" class="fab" aria-label="Log a purchase" data-open-log-modal>
      ${icon.plus}
    </button>

    <div class="modal" id="log-modal" hidden>
      <div class="modal-backdrop" data-close-log-modal tabindex="-1" aria-hidden="true"></div>
      <div
        class="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="log-modal-title"
      >
        <header class="modal-head">
          <h2 class="modal-title" id="log-modal-title">Log a purchase</h2>
          <button type="button" class="modal-close" aria-label="Close" data-close-log-modal>
            ${icon.close}
          </button>
        </header>
        <form class="log-form" id="log-form" novalidate>
          <div class="field">
            <label class="field-label" for="log-what">What’d you buy?</label>
            <input
              class="field-input field-input-focus"
              type="text"
              id="log-what"
              name="what"
              placeholder="Iced latte"
              autocomplete="off"
            />
          </div>
          <div class="field-row">
            <div class="field field-grow">
              <label class="field-label" for="log-category">Category</label>
              <div class="select-wrap">
                <select class="field-select" id="log-category" name="category">
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Savings">Savings</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Other">Other</option>
                  <option value="Transport">Transport</option>
                </select>
                <span class="select-chevron">${icon.chevron}</span>
              </div>
            </div>
            <div class="field field-price">
              <label class="field-label" for="log-price">Price</label>
              <input
                class="field-input"
                type="number"
                id="log-price"
                name="price"
                inputmode="decimal"
                min="0"
                step="0.01"
                placeholder="9.99"
              />
            </div>
          </div>
          <button type="submit" class="btn-add-it">Add it</button>
        </form>
      </div>
    </div>

    <div class="modal" id="settings-modal" hidden>
      <div class="modal-backdrop" data-close-settings-modal tabindex="-1" aria-hidden="true"></div>
      <div
        class="modal-dialog settings-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-modal-title"
      >
        <header class="modal-head">
          <h2 class="modal-title" id="settings-modal-title">Settings</h2>
          <button type="button" class="modal-close" aria-label="Close settings" data-close-settings-modal>
            ${icon.close}
          </button>
        </header>
        <form class="settings-form" id="settings-form">
          <div class="field">
            <label class="field-label" for="setting-name">Display name</label>
            <input
              class="field-input"
              type="text"
              id="setting-name"
              name="displayName"
              placeholder="Jordan"
              autocomplete="given-name"
            />
          </div>
          <div class="field">
            <label class="field-label" for="setting-budget">Monthly budget</label>
            <input
              class="field-input"
              type="number"
              id="setting-budget"
              name="monthlyBudget"
              min="1"
              step="1"
              inputmode="decimal"
              placeholder="300"
            />
          </div>
          <p class="settings-hint neon-muted">
            These settings only affect this demo and are saved in this browser.
          </p>
          <button type="submit" class="btn-add-it">Save settings</button>
        </form>
      </div>
    </div>

    <nav class="tab-bar" role="tablist" aria-label="Main">
      <button type="button" class="tab is-active" id="tab-home" role="tab" aria-selected="true" aria-controls="panel-home" data-target="home">
        ${icon.home}
        <span class="tab-label">Home</span>
      </button>
      <button type="button" class="tab" id="tab-activity" role="tab" aria-selected="false" aria-controls="panel-activity" data-target="activity">
        ${icon.activity}
        <span class="tab-label">Activity</span>
      </button>
      <button type="button" class="tab" id="tab-learn" role="tab" aria-selected="false" aria-controls="panel-learn" data-target="learn">
        ${icon.learn}
        <span class="tab-label">Learn</span>
      </button>
      <button type="button" class="tab" id="tab-ai" role="tab" aria-selected="false" aria-controls="panel-ai" data-target="ai">
        ${icon.ai}
        <span class="tab-label">AI</span>
      </button>
    </nav>

    <div id="toast" class="toast" role="status" aria-live="polite" hidden></div>
  </div>
`

function showPanel(name) {
  document.getElementById('worthit-app')?.classList.toggle('ai-active', name === 'ai')

  document.querySelectorAll('[data-panel]').forEach((panel) => {
    const isMatch = panel.dataset.panel === name
    panel.classList.toggle('is-active', isMatch)
    panel.hidden = !isMatch
  })

  document.querySelectorAll('.tab-bar .tab').forEach((tab) => {
    const isMatch = tab.dataset.target === name
    tab.classList.toggle('is-active', isMatch)
    tab.setAttribute('aria-selected', isMatch ? 'true' : 'false')
  })
}

function wireTabs() {
  document.querySelectorAll('.tab-bar .tab').forEach((tab) => {
    tab.addEventListener('click', () => showPanel(tab.dataset.target))
  })
}

function wireToasts() {
  const toast = document.getElementById('toast')
  let hideTimer

  document.querySelectorAll('[data-toast]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!toast) return
      toast.textContent = btn.getAttribute('data-toast')
      toast.hidden = false
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => {
        toast.hidden = true
      }, 2800)
    })
  })
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}

const DEFAULT_SETTINGS = {
  displayName: '',
  monthlyBudget: 300,
}

let appSettings = loadSettings()
let monthlyBudget = appSettings.monthlyBudget

const CATEGORY_BUDGETS = {
  Food: 75,
  Entertainment: 60,
  Savings: 100,
  Shopping: 75,
  Other: 40,
  Transport: 50,
}

const CATEGORY_KEYS = Object.keys(CATEGORY_BUDGETS)

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('worthit-settings') || '{}')
    return {
      ...DEFAULT_SETTINGS,
      ...saved,
      monthlyBudget: Number(saved.monthlyBudget) > 0 ? Number(saved.monthlyBudget) : 300,
    }
  } catch {
    return { ...DEFAULT_SETTINGS }
  }
}

function saveSettings(nextSettings) {
  appSettings = {
    ...appSettings,
    ...nextSettings,
  }
  monthlyBudget = Number(appSettings.monthlyBudget) > 0 ? Number(appSettings.monthlyBudget) : 300
  localStorage.setItem('worthit-settings', JSON.stringify(appSettings))
}

function dateKeyFromDate(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function parseLocalDateKey(key) {
  const [y, mo, d] = key.split('-').map(Number)
  return new Date(y, mo - 1, d)
}

function lastSameWeekdayOnOrBefore(anchor, weekdayWant) {
  const d = new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate())
  const delta = (d.getDay() - weekdayWant + 7) % 7
  d.setDate(d.getDate() - delta)
  return d
}

let nextTxId = 0
function makeTx(dateKey, label, category, amount) {
  return { id: ++nextTxId, date: dateKey, label, category, amount }
}

const now = new Date()
const todayKey = dateKeyFromDate(now)
const saturdayKey = dateKeyFromDate(lastSameWeekdayOnOrBefore(now, 6))

/** Demo seed: 7 purchases, $132.24 total — Saturday group sums to $41 */
const transactions = [
  makeTx(todayKey, 'water', 'Food', 2.25),
  makeTx(saturdayKey, 'DoorDash', 'Food', 24.5),
  makeTx(saturdayKey, 'Snacks', 'Food', 4.5),
  makeTx(saturdayKey, 'Movie tickets', 'Entertainment', 12.0),
  makeTx(dateKeyFromDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 8)), 'Hoodie', 'Shopping', 38.0),
  makeTx(dateKeyFromDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)), 'Uber', 'Transport', 15.75),
  makeTx(dateKeyFromDate(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5)), 'Groceries', 'Food', 35.24),
]

let activityFilter = 'All'
let activitySearch = ''

function getCategoryTotals() {
  const totals = Object.fromEntries(CATEGORY_KEYS.map((k) => [k, 0]))
  for (const t of transactions) {
    if (totals[t.category] !== undefined) totals[t.category] += t.amount
  }
  return totals
}

const DONUT_ORDER = [
  ['Food', '#33ccff'],
  ['Entertainment', '#a78bfa'],
  ['Savings', '#34d399'],
  ['Shopping', '#fb7185'],
  ['Other', '#94a3b8'],
  ['Transport', '#fbbf24'],
]

function money(amount) {
  return `$${Number(amount).toFixed(2)}`
}

function totalSpentAmount() {
  return transactions.reduce((s, t) => s + t.amount, 0)
}

function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

function renderGeminiText(text) {
  return escapeHtml(text)
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => `<p>${line}</p>`)
    .join('')
}

async function askGemini(feature, input) {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ feature, input }),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.error || 'Gemini request failed.')
  }

  return data.text || ''
}

function buildDonutBackground() {
  const totals = getCategoryTotals()
  const total = Object.values(totals).reduce((a, b) => a + b, 0)
  if (total <= 0) {
    return 'conic-gradient(#334155 0deg 360deg)'
  }
  const gapDeg = 0
  let acc = 0
  const parts = []
  for (const [key, color] of DONUT_ORDER) {
    const v = totals[key] || 0
    if (v <= 0) continue
    const startDeg = acc * 360
    acc += v / total
    const endDeg = acc * 360
    const sliceEndDeg = Math.max(startDeg, endDeg - gapDeg)
    parts.push(`${color} ${startDeg}deg ${sliceEndDeg}deg`)
    parts.push(`#0a0e17 ${sliceEndDeg}deg ${endDeg}deg`)
  }
  return `conic-gradient(${parts.join(', ')})`
}

function showToastMessage(message) {
  const toast = document.getElementById('toast')
  if (!toast) return
  toast.textContent = message
  toast.hidden = false
  window.clearTimeout(showToastMessage._t)
  showToastMessage._t = window.setTimeout(() => {
    toast.hidden = true
  }, 2800)
}

const CATEGORY_BADGE = {
  Food: 'F',
  Entertainment: 'E',
  Savings: 'S',
  Shopping: 'P',
  Other: 'O',
  Transport: 'T',
}

function formatGroupLabel(dateKey) {
  const d = parseLocalDateKey(dateKey)
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const d0 = new Date(d.getFullYear(), d.getMonth(), d.getDate())
  if (d0.getTime() === today0.getTime()) return 'TODAY'
  const y0 = new Date(today0)
  y0.setDate(y0.getDate() - 1)
  if (d0.getTime() === y0.getTime()) return 'YESTERDAY'
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${days[d.getDay()].toUpperCase()}, ${months[d.getMonth()].toUpperCase()} ${d.getDate()}`
}

function badgeClass(cat) {
  return cat.replace(/[^a-z]/gi, '').toLowerCase() || 'misc'
}

function filteredTransactions() {
  let list = transactions.slice()
  if (activityFilter !== 'All') list = list.filter((t) => t.category === activityFilter)
  const q = activitySearch.trim().toLowerCase()
  if (q) {
    list = list.filter(
      (t) => t.label.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
    )
  }
  list.sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date)
    return b.id - a.id
  })
  return list
}

function renderActivityList() {
  const container = document.getElementById('activity-groups')
  const totalEl = document.getElementById('activity-stat-total')
  const countEl = document.getElementById('activity-stat-count')
  const avgEl = document.getElementById('activity-stat-avg')
  const scopeEl = document.getElementById('activity-stat-scope')
  if (!container) return

  const list = filteredTransactions()
  const statTotal = list.reduce((s, t) => s + t.amount, 0)
  const count = list.length
  const avg = count ? statTotal / count : 0

  if (totalEl) totalEl.textContent = money(statTotal)
  if (countEl) countEl.textContent = String(count)
  if (avgEl) avgEl.textContent = money(avg)
  if (scopeEl) {
    if (activityFilter === 'All' && !activitySearch.trim()) scopeEl.textContent = 'all categories'
    else if (activityFilter !== 'All') scopeEl.textContent = activityFilter
    else scopeEl.textContent = 'search results'
  }

  if (count === 0) {
    container.innerHTML =
      '<p class="activity-empty neon-muted">No purchases match — try another filter or search.</p>'
    return
  }

  const byDay = new Map()
  for (const t of list) {
    if (!byDay.has(t.date)) byDay.set(t.date, [])
    byDay.get(t.date).push(t)
  }
  const days = Array.from(byDay.keys()).sort((a, b) => b.localeCompare(a))

  const parts = []
  for (const day of days) {
    const rows = byDay.get(day).slice().sort((a, b) => b.id - a.id)
    const dayTotal = rows.reduce((s, t) => s + t.amount, 0)

    const rowHtml = rows
      .map((t) => {
        const letter = CATEGORY_BADGE[t.category] || t.category.charAt(0)
        const bClass = badgeClass(t.category)
        return `
            <li class="activity-tx card glass">
              <span class="tx-badge tx-badge-${bClass}" aria-hidden="true">${letter}</span>
              <div class="tx-body">
                <p class="tx-title">${escapeHtml(t.label)}</p>
                <p class="tx-sub neon-muted">${escapeHtml(t.category)}</p>
              </div>
              <div class="tx-actions">
                <span class="tx-amt">-${money(t.amount)}</span>
                <button type="button" class="tx-del" data-delete-tx="${t.id}" aria-label="Delete ${escapeHtml(t.label)}">
                  ${icon.trash}
                </button>
              </div>
            </li>`
      })
      .join('')

    parts.push(`
      <section class="activity-day">
        <header class="activity-day-head">
          <span class="activity-day-label">${formatGroupLabel(day)}</span>
          <span class="activity-day-total">${money(dayTotal)}</span>
        </header>
        <ul class="activity-tx-list">
          ${rowHtml}
        </ul>
      </section>
    `)
  }

  container.innerHTML = parts.join('')

  container.querySelectorAll('[data-delete-tx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.deleteTx)
      const idx = transactions.findIndex((t) => t.id === id)
      if (idx >= 0) {
        transactions.splice(idx, 1)
        renderActivityList()
        syncDashboardFromState()
        showToastMessage('Purchase removed.')
      }
    })
  })
}

function wireActivityUi() {
  const search = document.getElementById('activity-search')
  search?.addEventListener('input', () => {
    activitySearch = search.value
    renderActivityList()
  })

  document.querySelectorAll('.activity-filters .filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activityFilter = btn.dataset.filter || 'All'
      document.querySelectorAll('.activity-filters .filter-pill').forEach((b) => {
        b.classList.toggle('is-active', (b.dataset.filter || '') === activityFilter)
      })
      renderActivityList()
    })
  })
}

function wireCoachUi() {
  const input = document.getElementById('coach-input')
  const form = document.getElementById('coach-form')
  const result = document.getElementById('coach-response')
  const resultText = document.getElementById('coach-response-text')
  const sendButton = form?.querySelector('.coach-send')

  document.querySelectorAll('[data-coach-prompt]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!input) return
      input.value = btn.dataset.coachPrompt || ''
      input.focus()
    })
  })

  form?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const question = input?.value.trim() || ''
    if (!question) {
      showToastMessage('Ask your coach a money question first.')
      input?.focus()
      return
    }

    if (result && resultText) {
      result.hidden = false
      resultText.innerHTML = '<p>Thinking...</p>'
    }
    if (sendButton) sendButton.disabled = true

    try {
      const answer = await askGemini('coach', { question })
      if (resultText) resultText.innerHTML = renderGeminiText(answer)
      input.value = ''
    } catch (error) {
      if (resultText) resultText.innerHTML = `<p>${escapeHtml(error.message)}</p>`
      showToastMessage(error.message)
    } finally {
      if (sendButton) sendButton.disabled = false
    }
  })
}

function showAiMode(mode) {
  document.querySelectorAll('[data-ai-mode]').forEach((btn) => {
    const isActive = btn.dataset.aiMode === mode
    btn.classList.toggle('is-active', isActive)
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false')
  })

  document.querySelectorAll('[data-ai-mode-panel]').forEach((panel) => {
    const isActive = panel.dataset.aiModePanel === mode
    panel.classList.toggle('is-active', isActive)
    panel.hidden = !isActive
  })

  document.getElementById('worthit-app')?.classList.toggle('ai-coach-mode', mode === 'coach')
  document.getElementById('worthit-app')?.classList.toggle('ai-value-mode', mode === 'value')
}

function wireAiSwitch() {
  document.querySelectorAll('[data-ai-mode]').forEach((btn) => {
    btn.addEventListener('click', () => showAiMode(btn.dataset.aiMode || 'coach'))
  })
}

function wireValueFinderUi() {
  const item = document.getElementById('value-item')
  const budget = document.getElementById('value-budget')
  const use = document.getElementById('value-use')
  const form = document.getElementById('value-form')
  const result = document.getElementById('value-result')
  const resultText = document.getElementById('value-result-text')
  const submit = form?.querySelector('.value-submit')

  document.querySelectorAll('.value-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      if (item) item.value = chip.dataset.valueItem || ''
      if (budget) budget.value = chip.dataset.valueBudget || ''
      if (use) use.value = chip.dataset.valueUse || ''
      item?.focus()
    })
  })

  form?.addEventListener('submit', async (e) => {
    e.preventDefault()
    const itemName = item?.value.trim() || ''
    const mainUse = use?.value.trim() || ''
    if (!itemName) {
      showToastMessage('Tell Value Finder what item you need first.')
      item?.focus()
      return
    }

    if (!mainUse) {
      showToastMessage('Add the main use so Gemini can compare better options.')
      use?.focus()
      return
    }

    if (result && resultText) {
      result.hidden = false
      resultText.innerHTML = '<p>Finding smart options...</p>'
    }
    if (submit) submit.disabled = true

    try {
      const answer = await askGemini('value-finder', {
        item: itemName,
        budget: budget?.value.trim() || '',
        mainUse,
      })
      if (resultText) resultText.innerHTML = renderGeminiText(answer)
    } catch (error) {
      if (resultText) resultText.innerHTML = `<p>${escapeHtml(error.message)}</p>`
      showToastMessage(error.message)
    } finally {
      if (submit) submit.disabled = false
    }
  })
}

function syncDashboardFromState() {
  const totals = getCategoryTotals()
  const spent = totalSpentAmount()
  const left = Math.max(0, monthlyBudget - spent)
  const pct = Math.min(100, (spent / monthlyBudget) * 100)

  const greetingEl = document.getElementById('header-greeting')
  const leftEl = document.getElementById('dash-left')
  const budgetLabelEl = document.getElementById('dash-budget-label')
  const spentEl = document.getElementById('dash-spent')
  const fillEl = document.getElementById('dash-progress-fill')
  const barEl = document.getElementById('dash-progress')
  const donutTotal = document.getElementById('donut-total')
  const donutRing = document.getElementById('donut-ring')

  if (greetingEl) {
    greetingEl.textContent = appSettings.displayName
      ? `Hey ${appSettings.displayName} 👋`
      : 'Hey there 👋'
  }
  if (leftEl) leftEl.textContent = money(left)
  if (budgetLabelEl) budgetLabelEl.textContent = `of ${money(monthlyBudget)} budget`
  if (spentEl) spentEl.textContent = money(spent)
  if (fillEl) fillEl.style.width = `${pct}%`
  if (barEl) {
    barEl.setAttribute('aria-valuenow', String(Math.round(spent)))
    barEl.setAttribute('aria-valuemax', String(monthlyBudget))
  }
  if (donutTotal) donutTotal.textContent = money(spent)
  if (donutRing) donutRing.style.background = buildDonutBackground()

  document.querySelectorAll('[data-cat]').forEach((el) => {
    const key = el.dataset.cat
    if (key && key in totals) {
      el.textContent = money(totals[key])
    }
  })

  document.querySelectorAll('[data-home-cat-meta]').forEach((el) => {
    const key = el.dataset.homeCatMeta
    const cap = CATEGORY_BUDGETS[key] || 1
    el.textContent = `${money(totals[key] || 0)} / ${money(cap)}`
  })

  document.querySelectorAll('[data-home-cat-bar]').forEach((el) => {
    const key = el.dataset.homeCatBar
    const cap = CATEGORY_BUDGETS[key] || 1
    el.style.width = `${Math.min(100, ((totals[key] || 0) / cap) * 100)}%`
  })
}

function openLogModal() {
  const modal = document.getElementById('log-modal')
  const app = document.getElementById('worthit-app')
  const input = document.getElementById('log-what')
  if (!modal) return
  modal.hidden = false
  app?.classList.add('modal-open')
  window.setTimeout(() => input?.focus(), 10)
}

function closeLogModal() {
  const modal = document.getElementById('log-modal')
  const app = document.getElementById('worthit-app')
  const form = document.getElementById('log-form')
  if (!modal) return
  modal.hidden = true
  app?.classList.remove('modal-open')
  form?.reset()
}

function openSettingsModal() {
  const modal = document.getElementById('settings-modal')
  const app = document.getElementById('worthit-app')
  const nameInput = document.getElementById('setting-name')
  const budgetInput = document.getElementById('setting-budget')
  if (!modal) return

  if (nameInput) nameInput.value = appSettings.displayName || ''
  if (budgetInput) budgetInput.value = String(monthlyBudget)
  modal.hidden = false
  app?.classList.add('modal-open')
  window.setTimeout(() => nameInput?.focus(), 10)
}

function closeSettingsModal() {
  const modal = document.getElementById('settings-modal')
  const app = document.getElementById('worthit-app')
  if (!modal) return

  modal.hidden = true
  app?.classList.remove('modal-open')
}

function wireSettingsModal() {
  const modal = document.getElementById('settings-modal')
  const form = document.getElementById('settings-form')

  document.querySelectorAll('[data-open-settings-modal]').forEach((btn) => {
    btn.addEventListener('click', () => openSettingsModal())
  })

  document.querySelectorAll('[data-close-settings-modal]').forEach((el) => {
    el.addEventListener('click', () => closeSettingsModal())
  })

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    if (modal && !modal.hidden) {
      closeSettingsModal()
    }
  })

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameInput = document.getElementById('setting-name')
    const budgetInput = document.getElementById('setting-budget')
    const nextBudget = Number(budgetInput?.value || 0)

    if (!(nextBudget > 0)) {
      showToastMessage('Monthly budget needs to be above zero.')
      budgetInput?.focus()
      return
    }

    saveSettings({
      displayName: nameInput?.value.trim() || '',
      monthlyBudget: nextBudget,
    })
    syncDashboardFromState()
    closeSettingsModal()
    showToastMessage('Settings saved.')
  })
}

function wireLogModal() {
  const modal = document.getElementById('log-modal')
  const form = document.getElementById('log-form')

  document.querySelectorAll('[data-open-log-modal]').forEach((btn) => {
    btn.addEventListener('click', () => openLogModal())
  })

  document.querySelectorAll('[data-close-log-modal]').forEach((el) => {
    el.addEventListener('click', () => closeLogModal())
  })

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return
    if (modal && !modal.hidden) {
      closeLogModal()
    }
  })

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const whatInput = document.getElementById('log-what')
    const catInput = document.getElementById('log-category')
    const priceInput = document.getElementById('log-price')

    const what = whatInput?.value.trim() || ''
    const cat = catInput?.value || 'Food'
    const price = parseFloat(priceInput?.value || '0')

    if (!what) {
      showToastMessage('Name what you bought — even “snacks” counts.')
      whatInput?.focus()
      return
    }

    if (!(price > 0)) {
      showToastMessage('Add a price above zero.')
      priceInput?.focus()
      return
    }

    transactions.push({
      id: ++nextTxId,
      date: dateKeyFromDate(new Date()),
      label: what,
      category: cat,
      amount: price,
    })

    renderActivityList()
    syncDashboardFromState()
    showToastMessage(`Saved ${money(price)} under ${cat}.`)
    closeLogModal()
  })
}

wireTabs()
wireToasts()
registerServiceWorker()
wireLogModal()
wireSettingsModal()
wireActivityUi()
wireCoachUi()
wireAiSwitch()
wireValueFinderUi()
syncDashboardFromState()
renderActivityList()
showAiMode('coach')
