const lessons = [
  {
    title: "Start small, think like an owner",
    minutes: 4,
    body:
      "A stock is a small ownership claim on a business. With a college budget, your first edge is not guessing the next hot ticker. It is learning how businesses make money, keeping fees low, and only investing money that can stay invested through bad weeks and bad years.",
  },
  {
    title: "Index funds are the benchmark",
    minutes: 5,
    body:
      "Before picking single stocks, compare every idea to a low-cost index fund. Broad funds spread your money across many companies, which reduces the damage from one wrong call. Individual stocks can be useful learning tools, but a simple diversified baseline keeps you honest.",
  },
  {
    title: "Fees quietly eat returns",
    minutes: 3,
    body:
      "Small accounts feel fees more sharply. A few dollars a month can be a huge drag when you are starting with $50 or $100. Before investing, check account fees, trading costs, fund expense ratios, and transfer fees. Boring cost control is real investing skill.",
  },
  {
    title: "Risk includes needing cash soon",
    minutes: 4,
    body:
      "Stocks can drop right when tuition, rent, groceries, or books are due. That is why emergency savings and near-term school costs usually come before investing. Good investing is not bravery; it is matching risk to your real life.",
  },
  {
    title: "Research before buying",
    minutes: 4,
    body:
      "When a company interests you, write down the basic thesis: what it sells, how it earns money, why customers choose it, what could go wrong, and what price would make sense. Waiting a day before buying is a simple way to cool down hype.",
  },
];

const fallbackQuotes = {
  AAPL: { price: 198.12, changePercent: 0.42, name: "Apple Inc." },
  MSFT: { price: 443.09, changePercent: 0.31, name: "Microsoft Corporation" },
  GOOGL: { price: 169.37, changePercent: -0.18, name: "Alphabet Inc." },
  V: { price: 286.41, changePercent: 0.22, name: "Visa Inc." },
  COST: { price: 812.3, changePercent: -0.09, name: "Costco Wholesale" },
  NVDA: { price: 117.63, changePercent: 1.2, name: "NVIDIA Corporation" },
  BRK_B: { price: 412.54, changePercent: 0.12, name: "Berkshire Hathaway" },
};

const fallbackIdeas = [
  {
    symbol: "AAPL",
    name: "Apple",
    why: "A useful first research case because you can connect products you know to revenue, services growth, margins, and buybacks.",
    angle: "Consumer brand, ecosystem, cash flow",
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    why: "Good for learning how software subscriptions, cloud infrastructure, and AI spending show up in earnings reports.",
    angle: "Cloud, enterprise software, AI capex",
  },
  {
    symbol: "COST",
    name: "Costco",
    why: "A clear business model for beginners: membership fees, loyal customers, inventory discipline, and steady store economics.",
    angle: "Retail, membership model, defensiveness",
  },
];

const personalizedIdeas = [
  {
    symbol: "SOFI",
    name: "SoFi Technologies",
    why: "A lower-priced stock to research if you want to practice reading growth, losses or profits, banking risk, and whether a popular app can become a durable business.",
    angle: "Cheaper share price, fintech, higher risk",
    tags: ["cheap", "cheaper", "low price", "small", "student", "fintech"],
  },
  {
    symbol: "F",
    name: "Ford",
    why: "A familiar lower-priced company for learning cyclical businesses, debt, electric vehicle spending, labor costs, and dividend sustainability.",
    angle: "Cheaper share price, autos, cyclical risk",
    tags: ["cheap", "cheaper", "dividend", "cars", "value"],
  },
  {
    symbol: "SCHD",
    name: "Schwab U.S. Dividend Equity ETF",
    why: "A dividend-focused fund to compare against individual dividend stocks, especially if you want income, diversification, and lower single-company risk.",
    angle: "ETF, dividends, diversification",
    tags: ["dividend", "income", "etf", "fund", "mutual fund", "safer"],
    linkLabel: "Fund page",
    linkUrl: "https://finance.yahoo.com/quote/SCHD",
  },
  {
    symbol: "VTI",
    name: "Vanguard Total Stock Market ETF",
    why: "A broad-market fund that works well as a benchmark before you pick individual stocks. It helps you ask whether your idea is worth taking extra risk.",
    angle: "Broad market, low-cost fund, beginner baseline",
    tags: ["mutual fund", "fund", "index", "etf", "safer", "beginner", "diversified"],
    linkLabel: "Fund page",
    linkUrl: "https://finance.yahoo.com/quote/VTI",
  },
  {
    symbol: "FXAIX",
    name: "Fidelity 500 Index Fund",
    why: "A mutual fund example for studying expense ratios, S&P 500 exposure, minimums, and how mutual funds differ from ETFs.",
    angle: "Mutual fund, S&P 500, expense ratios",
    tags: ["mutual fund", "fund", "index", "fidelity", "s&p", "sp500"],
    linkLabel: "Fund page",
    linkUrl: "https://finance.yahoo.com/quote/FXAIX",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    why: "A high-expectations company for learning how AI demand, valuation, margins, and supply constraints can all matter at the same time.",
    angle: "AI, semiconductors, valuation risk",
    tags: ["ai", "tech", "growth", "semiconductor", "chips"],
  },
  {
    symbol: "PG",
    name: "Procter & Gamble",
    why: "A steadier consumer staples company for studying brands, pricing power, dividends, and defensive demand when the economy gets shaky.",
    angle: "Defensive, consumer staples, dividends",
    tags: ["safe", "safer", "defensive", "dividend", "stable"],
  },
  {
    symbol: "DIS",
    name: "Disney",
    why: "A company you probably know that lets you study parks, streaming, media economics, debt, and whether brand strength turns into shareholder returns.",
    angle: "Familiar brand, entertainment, turnaround",
    tags: ["brands", "company i know", "familiar", "media", "consumer"],
  },
];

const storageKeys = {
  holdings: "pennywise-holdings",
  readDates: "pennywise-read-dates",
  rules: "pennywise-rules",
  preference: "pennywise-preference",
};

const dateKey = new Date().toISOString().slice(0, 10);
let currentLesson = getLessonIndexForToday();
let quotes = {};

const todayLabel = document.querySelector("#today-label");
const portfolioValue = document.querySelector("#portfolio-value");
const portfolioChange = document.querySelector("#portfolio-change");
const lessonTime = document.querySelector("#lesson-time");
const lessonTitle = document.querySelector("#lesson-title");
const lessonBody = document.querySelector("#lesson-body");
const markRead = document.querySelector("#mark-read");
const previousLesson = document.querySelector("#previous-lesson");
const nextLesson = document.querySelector("#next-lesson");
const holdingForm = document.querySelector("#holding-form");
const symbolInput = document.querySelector("#symbol-input");
const sharesInput = document.querySelector("#shares-input");
const costInput = document.querySelector("#cost-input");
const holdingList = document.querySelector("#holding-list");
const quoteStatus = document.querySelector("#quote-status");
const refreshQuotes = document.querySelector("#refresh-quotes");
const watchlist = document.querySelector("#watchlist");
const watchlistDate = document.querySelector("#watchlist-date");
const personalizationForm = document.querySelector("#personalization-form");
const preferenceInput = document.querySelector("#preference-input");
const personalizationSummary = document.querySelector("#personalization-summary");
const companyForm = document.querySelector("#company-form");
const companySymbol = document.querySelector("#company-symbol");
const companyInsights = document.querySelector("#company-insights");
const emailLink = document.querySelector("#email-link");

function money(value) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(value || 0);
}

function percent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${Number(value || 0).toFixed(2)}%`;
}

function getLessonIndexForToday() {
  const start = new Date("2026-01-01T00:00:00");
  const day = Math.floor((new Date() - start) / 86400000);
  return Math.abs(day) % lessons.length;
}

function getHoldings() {
  return JSON.parse(localStorage.getItem(storageKeys.holdings) || "[]");
}

function saveHoldings(holdings) {
  localStorage.setItem(storageKeys.holdings, JSON.stringify(holdings));
}

function getReadDates() {
  return JSON.parse(localStorage.getItem(storageKeys.readDates) || "[]");
}

function saveReadDates(dates) {
  localStorage.setItem(storageKeys.readDates, JSON.stringify([...new Set(dates)]));
}

function renderLesson() {
  const lesson = lessons[currentLesson];
  todayLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  }).format(new Date());
  lessonTime.textContent = `${lesson.minutes} min read`;
  lessonTitle.textContent = lesson.title;
  lessonBody.textContent = lesson.body;
  markRead.textContent = getReadDates().includes(dateKey) ? "Read today" : "Mark read";
}

async function fetchQuotes(symbols) {
  if (!symbols.length) return {};
  try {
    const response = await fetch(`/api/quote?symbols=${encodeURIComponent(symbols.join(","))}`);
    if (!response.ok) throw new Error("Quote API unavailable");
    const data = await response.json();
    quoteStatus.textContent = `Quotes updated ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.`;
    return data.quotes || {};
  } catch {
    quoteStatus.textContent = "Using demo quotes in local preview. Deploy to Vercel for live quote routes.";
    return Object.fromEntries(symbols.map((symbol) => [symbol, fallbackQuotes[symbol] || { price: 0, changePercent: 0, name: symbol }]));
  }
}

async function refreshPortfolio() {
  const holdings = getHoldings();
  const symbols = holdings.map((holding) => holding.symbol);
  quotes = await fetchQuotes(symbols);
  renderPortfolio();
}

function renderPortfolio() {
  const holdings = getHoldings();
  if (!holdings.length) {
    holdingList.innerHTML = `<div class="holding-card"><div><strong>No holdings yet</strong><span>Add a stock symbol, shares, and optional average cost to start tracking.</span></div></div>`;
    portfolioValue.textContent = "$0.00";
    portfolioChange.textContent = "Add holdings to track performance";
    return;
  }

  let totalValue = 0;
  let totalCost = 0;
  holdingList.innerHTML = holdings
    .map((holding, index) => {
      const quote = quotes[holding.symbol] || fallbackQuotes[holding.symbol] || {};
      const price = Number(quote.price || 0);
      const value = price * holding.shares;
      const basis = Number(holding.cost || 0) * holding.shares;
      const gain = value - basis;
      totalValue += value;
      totalCost += basis;
      const gainClass = gain >= 0 ? "gain" : "loss";
      return `
        <div class="holding-card">
          <div>
            <strong>${holding.symbol}</strong>
            <span>${quote.name || "Company"} · ${holding.shares} shares · ${money(price)} latest</span>
            <span class="${gainClass}">${basis ? `${money(gain)} since avg cost` : `${percent(quote.changePercent)} today`}</span>
          </div>
          <button type="button" data-remove="${index}" aria-label="Remove ${holding.symbol}">×</button>
        </div>
      `;
    })
    .join("");

  portfolioValue.textContent = money(totalValue);
  const gain = totalValue - totalCost;
  portfolioChange.textContent = totalCost ? `${money(gain)} vs. your entered cost basis` : "Enter avg costs to see total gain/loss";

  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = getHoldings().filter((_, index) => index !== Number(button.dataset.remove));
      saveHoldings(next);
      refreshPortfolio();
    });
  });
}

async function renderWatchlist() {
  watchlistDate.textContent = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date());
  try {
    const response = await fetch("/api/watchlist");
    if (!response.ok) throw new Error("Watchlist API unavailable");
    const data = await response.json();
    renderIdeas(personalizeIdeas(data.ideas || fallbackIdeas));
  } catch {
    renderIdeas(personalizeIdeas(fallbackIdeas));
  }
}

function getPreference() {
  return localStorage.getItem(storageKeys.preference) || "";
}

function personalizeIdeas(defaultIdeas) {
  const preference = getPreference().trim();
  if (!preference) {
    personalizationSummary.textContent = "Using the default beginner research list.";
    return defaultIdeas;
  }

  const normalized = preference.toLowerCase();
  const matches = personalizedIdeas.filter((idea) => idea.tags.some((tag) => normalized.includes(tag)));
  const selected = matches.length ? matches : personalizedIdeas.filter((idea) => normalized.split(/\W+/).some((word) => idea.tags.join(" ").includes(word)));
  const ideas = [...selected, ...defaultIdeas].filter(
    (idea, index, list) => list.findIndex((candidate) => candidate.symbol === idea.symbol) === index,
  );

  personalizationSummary.textContent = selected.length
    ? `Personalized around: "${preference}"`
    : `No exact match for "${preference}" yet, so I mixed in broad beginner ideas.`;

  return ideas.slice(0, 3);
}

function renderIdeas(ideas) {
  watchlist.innerHTML = ideas
    .map(
      (idea) => `
        <article class="stock-card">
          <div>
            <strong>${idea.symbol}</strong>
            <span>${idea.name || ""}</span>
          </div>
          <p>${idea.why}</p>
          <span>${idea.angle}</span>
          <a href="${idea.linkUrl || `https://www.sec.gov/edgar/search/#/q=${encodeURIComponent(idea.symbol)}`}" target="_blank" rel="noreferrer">${idea.linkLabel || "SEC filings"}</a>
        </article>
      `,
    )
    .join("");
}

async function openCompany(symbol) {
  const cleanSymbol = symbol.trim().toUpperCase().replace(".", "-");
  if (!cleanSymbol) return;
  companyInsights.innerHTML = `<span>Loading ${cleanSymbol} reports and signals...</span>`;
  try {
    const response = await fetch(`/api/company?symbol=${encodeURIComponent(cleanSymbol)}`);
    if (!response.ok) throw new Error("Company API unavailable");
    const data = await response.json();
    renderCompany(data);
  } catch {
    const quote = fallbackQuotes[cleanSymbol] || { name: cleanSymbol };
    renderCompany({
      symbol: cleanSymbol,
      name: quote.name,
      summary: "Local preview could not reach the report API. The deployed app will request SEC and market data through serverless routes.",
      links: {
        secSearch: `https://www.sec.gov/edgar/search/#/q=${cleanSymbol}`,
        yahoo: `https://finance.yahoo.com/quote/${cleanSymbol}`,
      },
    });
  }
}

function renderCompany(company) {
  const links = company.links || {};
  companyInsights.innerHTML = `
    <h3>${company.symbol} ${company.name ? `· ${company.name}` : ""}</h3>
    <span>${company.summary}</span>
    <div class="insight-links">
      ${links.secSearch ? `<a href="${links.secSearch}" target="_blank" rel="noreferrer">SEC reports</a>` : ""}
      ${links.latest10k ? `<a href="${links.latest10k}" target="_blank" rel="noreferrer">Latest 10-K</a>` : ""}
      ${links.latest10q ? `<a href="${links.latest10q}" target="_blank" rel="noreferrer">Latest 10-Q</a>` : ""}
      ${links.yahoo ? `<a href="${links.yahoo}" target="_blank" rel="noreferrer">Market page</a>` : ""}
    </div>
  `;
}

function restoreChecklist() {
  const saved = JSON.parse(localStorage.getItem(storageKeys.rules) || "{}");
  document.querySelectorAll("[data-rule]").forEach((box) => {
    box.checked = Boolean(saved[box.dataset.rule]);
    box.addEventListener("change", () => {
      saved[box.dataset.rule] = box.checked;
      localStorage.setItem(storageKeys.rules, JSON.stringify(saved));
    });
  });
}

function updateEmailLink() {
  const url = location.protocol.startsWith("http") ? location.href : "https://your-vercel-url.vercel.app";
  const subject = "Your Pennywise Stocks morning dashboard";
  const body = `Good morning! Open today's dashboard here: ${url}`;
  emailLink.href = `mailto:zuyu.alex06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

holdingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const symbol = symbolInput.value.trim().toUpperCase().replace(".", "-");
  const shares = Number(sharesInput.value);
  const cost = Number(costInput.value || 0);
  if (!symbol || !shares) return;
  saveHoldings([...getHoldings(), { symbol, shares, cost }]);
  holdingForm.reset();
  refreshPortfolio();
});

refreshQuotes.addEventListener("click", refreshPortfolio);

markRead.addEventListener("click", () => {
  saveReadDates([...getReadDates(), dateKey]);
  renderLesson();
});

previousLesson.addEventListener("click", () => {
  currentLesson = (currentLesson - 1 + lessons.length) % lessons.length;
  renderLesson();
});

nextLesson.addEventListener("click", () => {
  currentLesson = (currentLesson + 1) % lessons.length;
  renderLesson();
});

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openCompany(companySymbol.value);
});

preferenceInput.value = getPreference();
personalizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(storageKeys.preference, preferenceInput.value.trim());
  renderWatchlist();
});

renderLesson();
restoreChecklist();
updateEmailLink();
refreshPortfolio();
renderWatchlist();
openCompany("AAPL");
