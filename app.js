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
  {
    title: "Revenue is the top line",
    minutes: 4,
    body:
      "Revenue is the money a company brings in before expenses. When you read a report, ask whether revenue is growing because more customers are buying, prices are rising, a new product is working, or one temporary event boosted sales. Growth is better when you understand where it comes from.",
  },
  {
    title: "Profit margins show quality",
    minutes: 4,
    body:
      "A company can sell a lot and still struggle if expenses eat most of the money. Gross margin, operating margin, and net margin help you see how much revenue turns into profit. Rising margins can signal efficiency or pricing power; falling margins can warn that competition or costs are biting.",
  },
  {
    title: "Cash flow keeps companies honest",
    minutes: 5,
    body:
      "Net income is important, but cash flow shows whether money is actually coming in. For beginners, operating cash flow and free cash flow are useful reality checks. A business that reports profits but never produces cash deserves extra skepticism.",
  },
  {
    title: "Valuation is expectations",
    minutes: 4,
    body:
      "A stock price reflects what investors already expect. A great company can disappoint if the price assumes perfection. A boring company can do well if expectations are low and results are steady. When you research, ask: what does this price already assume about the future?",
  },
  {
    title: "Diversification protects humility",
    minutes: 3,
    body:
      "No one gets every investment right. Diversification is not admitting defeat; it is building a portfolio that survives mistakes. If one stock would wreck your plan, the position is probably too large for your current stage.",
  },
  {
    title: "Dividends are not free money",
    minutes: 4,
    body:
      "Dividends can be useful, but they come from company cash. A high dividend yield might mean a strong cash machine, or it might mean investors worry the payout will be cut. Check whether earnings and free cash flow comfortably cover the dividend.",
  },
  {
    title: "Debt changes the risk",
    minutes: 4,
    body:
      "Debt can help a business grow, but it also adds obligations. In a downturn, interest payments still come due. Look at total debt, cash, interest expense, and debt maturity dates. A company with too much debt has less room to make mistakes.",
  },
  {
    title: "Share count matters",
    minutes: 3,
    body:
      "If a company keeps issuing new shares, each existing share can represent a smaller ownership slice. Buybacks can do the opposite when done at sensible prices. Watch diluted shares outstanding over time so you know whether your ownership is being diluted or concentrated.",
  },
  {
    title: "Build a thesis and a kill switch",
    minutes: 5,
    body:
      "Before buying, write what would make you right and what would prove you wrong. A kill switch could be a broken growth story, worsening debt, shrinking margins, or management changing direction. This keeps you from turning every bad result into an excuse to keep holding.",
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
  "BRK-B": { price: 412.54, changePercent: 0.12, name: "Berkshire Hathaway" },
  SOFI: { price: 8.62, changePercent: 0.15, name: "SoFi Technologies" },
  F: { price: 12.18, changePercent: -0.2, name: "Ford Motor Company" },
  T: { price: 18.44, changePercent: 0.05, name: "AT&T Inc." },
  PFE: { price: 28.19, changePercent: 0.11, name: "Pfizer Inc." },
  BAC: { price: 39.88, changePercent: 0.09, name: "Bank of America" },
  KO: { price: 62.4, changePercent: 0.07, name: "Coca-Cola Company" },
  DIS: { price: 101.28, changePercent: -0.12, name: "Walt Disney Company" },
  PG: { price: 165.5, changePercent: 0.08, name: "Procter & Gamble" },
  VTI: { price: 258.2, changePercent: 0.18, name: "Vanguard Total Stock Market ETF" },
  SCHD: { price: 78.64, changePercent: 0.16, name: "Schwab U.S. Dividend Equity ETF" },
  FXAIX: { price: 192.35, changePercent: 0.2, name: "Fidelity 500 Index Fund" },
  AMD: { price: 161.2, changePercent: 0.4, name: "Advanced Micro Devices" },
  INTC: { price: 30.15, changePercent: -0.25, name: "Intel Corporation" },
  UBER: { price: 68.7, changePercent: 0.18, name: "Uber Technologies" },
  PYPL: { price: 63.8, changePercent: -0.11, name: "PayPal Holdings" },
  SBUX: { price: 83.5, changePercent: 0.06, name: "Starbucks Corporation" },
  NKE: { price: 92.4, changePercent: -0.08, name: "Nike Inc." },
  WMT: { price: 67.25, changePercent: 0.1, name: "Walmart Inc." },
  CVS: { price: 59.6, changePercent: -0.14, name: "CVS Health" },
  NEE: { price: 71.1, changePercent: 0.04, name: "NextEra Energy" },
  O: { price: 54.9, changePercent: 0.09, name: "Realty Income" },
  PLTR: { price: 22.8, changePercent: 0.55, name: "Palantir Technologies" },
  RBLX: { price: 38.1, changePercent: 0.2, name: "Roblox Corporation" },
  SNAP: { price: 15.4, changePercent: -0.18, name: "Snap Inc." },
  HOOD: { price: 20.2, changePercent: 0.22, name: "Robinhood Markets" },
  GM: { price: 45.8, changePercent: 0.02, name: "General Motors" },
  XOM: { price: 113.4, changePercent: 0.05, name: "Exxon Mobil" },
  JPM: { price: 198.5, changePercent: 0.06, name: "JPMorgan Chase" },
  JNJ: { price: 151.3, changePercent: 0.03, name: "Johnson & Johnson" },
  QQQM: { price: 184.2, changePercent: 0.25, name: "Invesco NASDAQ 100 ETF" },
  SPLG: { price: 61.8, changePercent: 0.17, name: "SPDR Portfolio S&P 500 ETF" },
  VXUS: { price: 60.7, changePercent: 0.12, name: "Vanguard Total International Stock ETF" },
  BND: { price: 72.1, changePercent: 0.03, name: "Vanguard Total Bond Market ETF" },
  FZROX: { price: 18.1, changePercent: 0.16, name: "Fidelity ZERO Total Market Index Fund" },
  FSKAX: { price: 145.2, changePercent: 0.18, name: "Fidelity Total Market Index Fund" },
};

const budgetUniverse = [
  {
    symbol: "SOFI",
    name: "SoFi Technologies",
    category: "Growth stock",
    risk: "High",
    tags: ["cheap", "growth", "balanced", "fintech", "student", "banking"],
    why: "A lower-priced fintech stock for learning growth, banking risk, profitability, and how a popular app tries to become a durable business.",
  },
  {
    symbol: "F",
    name: "Ford",
    category: "Cyclical value",
    risk: "Medium",
    tags: ["cheap", "dividend", "balanced", "cars", "autos", "value"],
    why: "A familiar company with a lower share price where you can study cyclical demand, debt, EV investment, and dividends.",
  },
  {
    symbol: "T",
    name: "AT&T",
    category: "Dividend stock",
    risk: "Medium",
    tags: ["cheap", "dividend", "income", "telecom", "stable"],
    why: "A dividend-oriented telecom to study debt, cash flow, competition, and whether a high yield is actually sustainable.",
  },
  {
    symbol: "PFE",
    name: "Pfizer",
    category: "Healthcare",
    risk: "Medium",
    tags: ["cheap", "dividend", "balanced", "healthcare", "defensive", "medicine"],
    why: "A healthcare stock for learning patent cliffs, drug pipelines, dividend coverage, and why revenue can change after one-time product booms.",
  },
  {
    symbol: "BAC",
    name: "Bank of America",
    category: "Financial stock",
    risk: "Medium",
    tags: ["cheap", "balanced", "bank", "rates", "financials"],
    why: "A big bank to study interest rates, credit losses, deposits, and why banks behave differently from ordinary product companies.",
  },
  {
    symbol: "KO",
    name: "Coca-Cola",
    category: "Defensive dividend",
    risk: "Lower",
    tags: ["dividend", "balanced", "defensive", "brand", "consumer", "stable"],
    why: "A classic brand business for studying pricing power, global distribution, margins, and steady dividend growth.",
  },
  {
    symbol: "DIS",
    name: "Disney",
    category: "Consumer brand",
    risk: "Medium",
    tags: ["growth", "balanced", "brand", "media", "streaming", "parks", "turnaround"],
    why: "A familiar company that teaches parks, streaming economics, media disruption, debt, and turnaround investing.",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    category: "AI growth",
    risk: "High",
    tags: ["growth", "ai", "chips", "semiconductor", "tech"],
    why: "A high-expectations AI company where valuation, data-center demand, supply limits, and margins all matter.",
  },
  {
    symbol: "SCHD",
    name: "Schwab U.S. Dividend Equity ETF",
    category: "Dividend ETF",
    risk: "Medium",
    tags: ["funds", "etf", "dividend", "income", "balanced", "diversified"],
    why: "A dividend ETF to compare against individual dividend stocks while reducing single-company risk.",
  },
  {
    symbol: "VTI",
    name: "Vanguard Total Stock Market ETF",
    category: "Broad ETF",
    risk: "Medium",
    tags: ["funds", "etf", "balanced", "index", "diversified", "beginner", "broad market"],
    why: "A broad-market ETF that works as a simple benchmark before taking extra risk on individual stocks.",
  },
  {
    symbol: "FXAIX",
    name: "Fidelity 500 Index Fund",
    category: "Mutual fund",
    risk: "Medium",
    tags: ["funds", "mutual fund", "index", "fidelity", "s&p", "sp500", "beginner"],
    why: "An S&P 500 mutual fund for learning expense ratios, index exposure, and fund-style investing by dollar amount.",
  },
  {
    symbol: "AAPL",
    name: "Apple",
    category: "Quality growth",
    risk: "Medium",
    tags: ["growth", "balanced", "brand", "consumer", "tech", "cash flow"],
    why: "A consumer brand and services business where you can connect products you know to revenue, margins, and buybacks.",
  },
  {
    symbol: "INTC",
    name: "Intel",
    category: "Turnaround tech",
    risk: "High",
    tags: ["cheap", "tech", "chips", "semiconductor", "turnaround", "value"],
    why: "A lower-priced chip company for studying turnarounds, manufacturing spending, competition, and whether a legacy business can regain momentum.",
  },
  {
    symbol: "UBER",
    name: "Uber",
    category: "Platform growth",
    risk: "High",
    tags: ["growth", "platform", "consumer", "transportation", "cash flow"],
    why: "A platform business for learning network effects, operating leverage, delivery economics, and the difference between revenue growth and durable profits.",
  },
  {
    symbol: "PYPL",
    name: "PayPal",
    category: "Fintech value",
    risk: "Medium",
    tags: ["cheap", "value", "fintech", "payments", "turnaround"],
    why: "A payments company where you can study competition, margins, user growth, and whether a cheaper valuation reflects opportunity or weakness.",
  },
  {
    symbol: "SBUX",
    name: "Starbucks",
    category: "Consumer brand",
    risk: "Medium",
    tags: ["brand", "consumer", "dividend", "global", "familiar"],
    why: "A familiar brand for learning same-store sales, international growth, labor costs, and pricing power.",
  },
  {
    symbol: "NKE",
    name: "Nike",
    category: "Consumer brand",
    risk: "Medium",
    tags: ["brand", "consumer", "turnaround", "global", "apparel"],
    why: "A brand-heavy business for studying inventory, margins, direct-to-consumer strategy, and whether brand strength translates into growth.",
  },
  {
    symbol: "WMT",
    name: "Walmart",
    category: "Defensive retail",
    risk: "Lower",
    tags: ["defensive", "consumer", "retail", "stable", "dividend"],
    why: "A defensive retailer for learning scale, grocery demand, operating margins, and how large companies grow slowly but steadily.",
  },
  {
    symbol: "CVS",
    name: "CVS Health",
    category: "Healthcare value",
    risk: "Medium",
    tags: ["cheap", "healthcare", "value", "defensive", "debt"],
    why: "A healthcare business for studying debt, insurance margins, pharmacy economics, and why cheap stocks can still have real risks.",
  },
  {
    symbol: "NEE",
    name: "NextEra Energy",
    category: "Utility / renewables",
    risk: "Medium",
    tags: ["dividend", "utility", "renewable", "stable", "income"],
    why: "A utility and renewables company for studying regulated returns, interest-rate sensitivity, capital spending, and dividends.",
  },
  {
    symbol: "O",
    name: "Realty Income",
    category: "REIT income",
    risk: "Medium",
    tags: ["dividend", "income", "reit", "real estate", "monthly dividend"],
    why: "A REIT for learning how real estate stocks use rent, debt, occupancy, and interest rates to support dividends.",
  },
  {
    symbol: "PLTR",
    name: "Palantir",
    category: "Speculative software",
    risk: "High",
    tags: ["cheap", "growth", "ai", "software", "government", "speculative"],
    why: "A high-interest software company for studying government contracts, commercial growth, AI narratives, margins, and valuation risk.",
  },
  {
    symbol: "RBLX",
    name: "Roblox",
    category: "Speculative consumer tech",
    risk: "High",
    tags: ["growth", "gaming", "consumer", "speculative", "younger users"],
    why: "A consumer platform for learning bookings, user engagement, losses, and how hard it can be to turn attention into durable profits.",
  },
  {
    symbol: "SNAP",
    name: "Snap",
    category: "Speculative social media",
    risk: "High",
    tags: ["cheap", "social media", "advertising", "speculative", "consumer"],
    why: "A smaller social media stock for studying ad cycles, user growth, competition, and why low share price does not mean low risk.",
  },
  {
    symbol: "HOOD",
    name: "Robinhood",
    category: "Fintech platform",
    risk: "High",
    tags: ["cheap", "fintech", "brokerage", "crypto", "student", "platform"],
    why: "A brokerage platform for learning transaction revenue, interest income, crypto exposure, and regulatory risk.",
  },
  {
    symbol: "GM",
    name: "General Motors",
    category: "Cyclical value",
    risk: "Medium",
    tags: ["cheap", "cars", "autos", "value", "cyclical"],
    why: "An automaker for comparing valuation, debt, buybacks, EV investments, and how cyclical companies handle downturns.",
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil",
    category: "Energy dividend",
    risk: "Medium",
    tags: ["dividend", "energy", "oil", "cash flow", "cyclical"],
    why: "An energy major for learning commodity cycles, dividends, buybacks, capital spending, and geopolitical exposure.",
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase",
    category: "Large bank",
    risk: "Medium",
    tags: ["bank", "financials", "dividend", "quality", "stable"],
    why: "A large bank for studying deposits, credit quality, interest rates, capital ratios, and management quality.",
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    category: "Defensive healthcare",
    risk: "Lower",
    tags: ["healthcare", "dividend", "defensive", "stable", "quality"],
    why: "A defensive healthcare company for studying product diversity, litigation risk, dividends, and steady cash generation.",
  },
  {
    symbol: "SPLG",
    name: "SPDR Portfolio S&P 500 ETF",
    category: "Low-cost ETF",
    risk: "Medium",
    tags: ["funds", "etf", "index", "s&p", "sp500", "beginner", "low cost"],
    why: "A lower-priced S&P 500 ETF for learning broad exposure, expense ratios, and why funds can be easier than picking one company.",
  },
  {
    symbol: "QQQM",
    name: "Invesco NASDAQ 100 ETF",
    category: "Growth ETF",
    risk: "High",
    tags: ["funds", "etf", "growth", "tech", "index", "nasdaq"],
    why: "A tech-heavy ETF for comparing diversified growth exposure against buying one expensive tech stock.",
  },
  {
    symbol: "VXUS",
    name: "Vanguard Total International Stock ETF",
    category: "International ETF",
    risk: "Medium",
    tags: ["funds", "etf", "international", "diversified", "global"],
    why: "An international ETF for learning why diversification can include countries and currencies, not just U.S. companies.",
  },
  {
    symbol: "BND",
    name: "Vanguard Total Bond Market ETF",
    category: "Bond ETF",
    risk: "Lower",
    tags: ["funds", "etf", "bond", "income", "safer", "defensive"],
    why: "A bond ETF for learning how fixed income behaves differently from stocks and why risk level matters for short-term money.",
  },
  {
    symbol: "FZROX",
    name: "Fidelity ZERO Total Market Index Fund",
    category: "Mutual fund",
    risk: "Medium",
    tags: ["funds", "mutual fund", "index", "fidelity", "zero fee", "beginner"],
    why: "A mutual fund example for learning dollar-based fund investing, expense ratios, and broad market exposure.",
  },
  {
    symbol: "FSKAX",
    name: "Fidelity Total Market Index Fund",
    category: "Mutual fund",
    risk: "Medium",
    tags: ["funds", "mutual fund", "index", "fidelity", "total market"],
    why: "A total-market mutual fund for comparing broad diversification, costs, and long-term core holdings.",
  },
];

const secSteps = [
  {
    title: "1. Start With Business",
    section: "Item 1",
    why: "This tells you what the company actually does, how it makes money, and what segments matter.",
    lookFor: "Main products, customer types, geography, business segments, and whether revenue depends on one product or market.",
  },
  {
    title: "2. Read Risk Factors Slowly",
    section: "Item 1A",
    why: "This is where the company lists what could go wrong. Some risks are boilerplate, but repeated or very specific risks matter.",
    lookFor: "Customer concentration, debt, competition, regulation, supply constraints, cybersecurity, lawsuits, and dependence on key suppliers.",
  },
  {
    title: "3. Compare Management Discussion",
    section: "Item 7",
    why: "Management explains why revenue, costs, margins, and cash flow changed. This is often more useful than the headline earnings number.",
    lookFor: "Plain-English reasons for growth or decline, one-time events, margin pressure, capital spending, and management's tone.",
  },
  {
    title: "4. Check The Income Statement",
    section: "Financial Statements",
    why: "The income statement shows sales, expenses, and profit. It helps you see whether the business is growing efficiently.",
    lookFor: "Revenue trend, gross margin, operating income, net income, and whether profits grow with revenue.",
  },
  {
    title: "5. Check Cash Flow",
    section: "Cash Flow Statement",
    why: "Cash flow shows whether profits are turning into actual cash. For beginners, this is a reality check.",
    lookFor: "Operating cash flow, capital expenditures, free cash flow, buybacks, dividends, and debt repayment.",
  },
  {
    title: "6. Scan Debt And Dilution",
    section: "Balance Sheet / Notes",
    why: "A company can look exciting but still be risky if debt is heavy or share count keeps rising.",
    lookFor: "Cash, total debt, interest costs, debt due soon, share count, stock compensation, and new share issuance.",
  },
];

const focusProfiles = {
  balanced: {
    wholeShareTags: ["balanced", "quality", "consumer", "healthcare", "bank"],
    fundTags: ["beginner", "index", "diversified", "balanced"],
    stretchTags: ["growth", "quality", "tech"],
  },
  growth: {
    wholeShareTags: ["growth", "tech", "ai", "software", "platform", "consumer"],
    fundTags: ["growth", "tech", "nasdaq", "etf"],
    stretchTags: ["growth", "ai", "semiconductor", "software"],
  },
  dividend: {
    wholeShareTags: ["dividend", "income", "stable", "defensive", "reit", "utility"],
    fundTags: ["dividend", "income", "bond", "defensive"],
    stretchTags: ["dividend", "quality", "cash flow"],
  },
  funds: {
    wholeShareTags: ["balanced", "defensive"],
    fundTags: ["funds", "mutual fund", "etf", "index", "bond", "international"],
    stretchTags: ["funds", "index", "growth"],
  },
  cheap: {
    wholeShareTags: ["cheap", "value", "student", "turnaround"],
    fundTags: ["low cost", "zero fee", "beginner"],
    stretchTags: ["cheap", "growth", "speculative"],
  },
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
  lessonProgress: "pennywise-lesson-progress",
  rules: "pennywise-rules",
  preference: "pennywise-preference",
};

const dateKey = getLocalDateKey();
let currentLesson = getInitialLessonIndex();
let quotes = {};
let budgetQuotes = {};
let budgetMixSeed = 0;
let researchMixSeed = 0;
let budgetRenderRequest = 0;
let liveRenderTimer;

const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");
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
const holdingType = document.querySelector("#holding-type");
const amountInput = document.querySelector("#amount-input");
const amountLabel = document.querySelector("#amount-label");
const costInput = document.querySelector("#cost-input");
const costLabel = document.querySelector("#cost-label");
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
const budgetForm = document.querySelector("#budget-form");
const budgetInput = document.querySelector("#budget-input");
const budgetFocus = document.querySelector("#budget-focus");
const budgetSummary = document.querySelector("#budget-summary");
const budgetResults = document.querySelector("#budget-results");
const budgetRefresh = document.querySelector("#budget-refresh");
const watchlistRefresh = document.querySelector("#watchlist-refresh");
const secGuideForm = document.querySelector("#sec-guide-form");
const secGuideSymbol = document.querySelector("#sec-guide-symbol");
const secReportLinks = document.querySelector("#sec-report-links");
const secStepGrid = document.querySelector("#sec-step-grid");

function money(value) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(value || 0);
}

function percent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${Number(value || 0).toFixed(2)}%`;
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCalendarLessonIndex() {
  const start = new Date("2026-01-01T00:00:00");
  const day = Math.floor((new Date() - start) / 86400000);
  return Math.abs(day) % lessons.length;
}

function getLessonProgress() {
  return JSON.parse(localStorage.getItem(storageKeys.lessonProgress) || "{}");
}

function saveLessonProgress(progress) {
  localStorage.setItem(storageKeys.lessonProgress, JSON.stringify(progress));
}

function getInitialLessonIndex() {
  const progress = getLessonProgress();

  if (!Number.isInteger(progress.currentIndex)) {
    const currentIndex = getCalendarLessonIndex();
    saveLessonProgress({ currentIndex });
    return currentIndex;
  }

  if (
    progress.lastReadDate &&
    progress.lastReadDate < dateKey &&
    progress.lastCompletedIndex === progress.currentIndex
  ) {
    const currentIndex = (progress.currentIndex + 1) % lessons.length;
    saveLessonProgress({
      ...progress,
      currentIndex,
      lastCompletedIndex: null,
    });
    return currentIndex;
  }

  return progress.currentIndex % lessons.length;
}

function isCurrentLessonReadToday() {
  const progress = getLessonProgress();
  return progress.lastReadDate === dateKey && progress.lastCompletedIndex === currentLesson;
}

function getHoldings() {
  return JSON.parse(localStorage.getItem(storageKeys.holdings) || "[]");
}

function saveHoldings(holdings) {
  localStorage.setItem(storageKeys.holdings, JSON.stringify(holdings));
}

function normalizeHolding(holding) {
  if (holding.mode === "dollars") return holding;
  if (holding.amount && !holding.shares) return { ...holding, mode: "dollars" };
  return {
    symbol: holding.symbol,
    mode: "shares",
    shares: Number(holding.shares || 0),
    cost: Number(holding.cost || 0),
  };
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
  markRead.textContent = isCurrentLessonReadToday() ? "Read today" : "Mark read";
}

function switchTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tabPanel === tabName);
  });
}

async function fetchQuotes(symbols, { updateStatus = true } = {}) {
  if (!symbols.length) return {};
  try {
    const response = await fetch(`/api/quote?symbols=${encodeURIComponent(symbols.join(","))}`);
    if (!response.ok) throw new Error("Quote API unavailable");
    const data = await response.json();
    if (updateStatus) {
      quoteStatus.textContent = `Quotes updated ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.`;
    }
    return data.quotes || {};
  } catch {
    if (updateStatus) {
      quoteStatus.textContent = "Using demo quotes in local preview. Deploy to Vercel for live quote routes.";
    }
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
    holdingList.innerHTML = `<div class="holding-card"><div><strong>No holdings yet</strong><span>Add shares for stocks/ETFs, or a dollar amount for mutual/index funds.</span></div></div>`;
    portfolioValue.textContent = "$0.00";
    portfolioChange.textContent = "Add holdings to track performance";
    return;
  }

  let totalValue = 0;
  let totalCost = 0;
  holdingList.innerHTML = holdings
    .map((holding, index) => {
      const normalized = normalizeHolding(holding);
      const quote = quotes[normalized.symbol] || fallbackQuotes[normalized.symbol] || {};
      const price = Number(quote.price || 0);
      const basis =
        normalized.mode === "dollars"
          ? Number(normalized.amount || 0)
          : Number(normalized.cost || 0) * Number(normalized.shares || 0);
      const estimatedShares =
        normalized.mode === "dollars" && normalized.cost
          ? Number(normalized.amount || 0) / Number(normalized.cost)
          : Number(normalized.shares || 0);
      const hasLiveValue = Boolean(price && estimatedShares);
      const value = hasLiveValue ? price * estimatedShares : basis;
      const gain = value - basis;
      totalValue += value;
      totalCost += basis;
      const gainClass = gain >= 0 ? "gain" : "loss";
      const positionText =
        normalized.mode === "dollars"
          ? `${money(normalized.amount)} invested${normalized.cost ? ` - est. ${estimatedShares.toFixed(4)} shares` : ""}`
          : `${normalized.shares} shares`;
      const performanceText = basis
        ? hasLiveValue
          ? `${money(gain)} since entered basis`
          : "Tracked at entered amount"
        : `${percent(quote.changePercent)} today`;
      const displayName = quote.name && quote.name !== normalized.symbol ? quote.name : "Manual position";
      return `
        <div class="holding-card">
          <div>
            <strong>${normalized.symbol}</strong>
            <span>${displayName} - ${positionText} - ${price ? `${money(price)} latest` : "manual value"}</span>
            <span class="${gainClass}">${performanceText}</span>
          </div>
          <button type="button" data-remove="${index}" aria-label="Remove ${normalized.symbol}">x</button>
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

function updateHoldingFormMode() {
  const isDollarMode = holdingType.value === "dollars";
  amountLabel.textContent = isDollarMode ? "Dollars invested" : "Shares";
  amountInput.placeholder = isDollarMode ? "550" : "0.5";
  amountInput.step = isDollarMode ? "0.01" : "0.001";
  costLabel.textContent = isDollarMode ? "NAV at purchase" : "Avg cost";
  costInput.placeholder = isDollarMode ? "optional" : "185";
}

async function renderBudgetIdeas() {
  const requestId = ++budgetRenderRequest;
  const budget = Number(budgetInput.value || 0);
  const focus = budgetFocus.value;
  const tokens = getPreferenceTokens();
  if (!budget || budget <= 0) {
    budgetSummary.textContent = "Enter a budget above $0 to generate ideas.";
    budgetResults.innerHTML = "";
    return;
  }

  const symbols = budgetUniverse.map((idea) => idea.symbol);
  budgetSummary.textContent = "Checking prices and matching ideas to your budget...";
  budgetQuotes = await fetchQuotes(symbols, { updateStatus: false });
  if (requestId !== budgetRenderRequest) return;

  const profile = focusProfiles[focus] || focusProfiles.balanced;
  const ranked = budgetUniverse
    .map((idea) => {
      const quote = budgetQuotes[idea.symbol] || fallbackQuotes[idea.symbol] || {};
      const price = Number(quote.price || 0);
      const isFund = idea.tags.includes("funds") || idea.tags.includes("mutual fund") || idea.tags.includes("etf");
      const isAffordable = price > 0 && price <= budget;
      const focusScore = getTagScore(idea, [...profile.wholeShareTags, ...profile.fundTags, ...profile.stretchTags]);
      const preferenceScore = getMatchScore(idea, tokens) * 4;
      const cheapScore = price ? Math.max(0, 1 - price / Math.max(budget, 1)) : 0;
      const rotationScore = getRotationScore(idea.symbol, budgetMixSeed);
      return {
        ...idea,
        price,
        quoteName: quote.name,
        isFund,
        isAffordable,
        score: (isAffordable ? 8 : 0) + (isFund ? 3 : 0) + focusScore + preferenceScore + cheapScore + rotationScore,
      };
    })
    .sort((a, b) => b.score - a.score);

  const affordable = pickByProfile(
    ranked.filter((idea) => idea.isAffordable && !idea.isFund),
    profile.wholeShareTags,
    5,
  );
  const funds = pickByProfile(
    ranked.filter((idea) => idea.isFund),
    profile.fundTags,
    5,
  );
  const fractional = pickByProfile(
    ranked.filter((idea) => !idea.isAffordable && !idea.isFund),
    profile.stretchTags,
    5,
  );

  budgetSummary.textContent = `Matched a ${money(budget)} budget, ${budgetFocus.options[budgetFocus.selectedIndex].text.toLowerCase()}${tokens.length ? `, and your mood: "${getPreference()}"` : ""}. Use New mix for another set.`;
  budgetResults.innerHTML = [
    renderBudgetCategory("Whole-share ideas within budget", affordable),
    renderBudgetCategory("Funds or ETFs to research by dollar amount", funds),
    renderBudgetCategory("Stretch ideas for fractional-share research", fractional),
  ].join("");
}

function getTagScore(idea, tags) {
  return tags.reduce((score, tag) => score + (idea.tags?.includes(tag) ? 3 : 0), 0);
}

function getRotationScore(symbol, seed) {
  const hash = [...symbol].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return ((hash + seed * 17) % 11) / 5;
}

function pickByProfile(candidates, profileTags, limit) {
  const preferred = candidates.filter((idea) => profileTags.some((tag) => idea.tags?.includes(tag)));
  const fallback = candidates.filter((idea) => !preferred.includes(idea));
  return [...preferred, ...fallback].slice(0, limit);
}

function scheduleLiveRecommendationRender() {
  window.clearTimeout(liveRenderTimer);
  liveRenderTimer = window.setTimeout(() => {
    renderWatchlist();
    renderBudgetIdeas();
  }, 250);
}

function renderBudgetCategory(title, ideas) {
  if (!ideas.length) return "";
  return `
    <section class="budget-category">
      <div class="category-heading">
        <h3>${title}</h3>
        <span>${ideas.length} ideas</span>
      </div>
      <div class="budget-card-grid">
        ${ideas.map(renderBudgetCard).join("")}
      </div>
    </section>
  `;
}

function renderBudgetCard(idea) {
  const canBuyWholeShare = idea.price > 0 && idea.price <= Number(budgetInput.value || 0);
  const priceText = idea.price ? money(idea.price) : "quote unavailable";
  const affordability = canBuyWholeShare ? "Within budget" : idea.isFund ? "Research by dollar amount" : "Consider only if fractional shares fit";
  const linkUrl = idea.isFund
    ? `https://finance.yahoo.com/quote/${idea.symbol}`
    : `https://www.sec.gov/edgar/search/#/q=${encodeURIComponent(idea.symbol)}`;
  const linkLabel = idea.isFund ? "Fund page" : "SEC filings";
  const matchText = [idea.category, `${idea.risk} risk`].filter(Boolean).join(" - ");

  return `
    <article class="budget-card">
      <header>
        <div>
          <strong>${idea.symbol}</strong>
          <span>${idea.quoteName || idea.name}</span>
        </div>
        <em>${priceText}</em>
      </header>
      <span>${affordability}</span>
      <span>${matchText}</span>
      <p>${idea.why}</p>
      <a href="${linkUrl}" target="_blank" rel="noreferrer">${linkLabel}</a>
    </article>
  `;
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
  return preferenceInput?.value?.trim() || localStorage.getItem(storageKeys.preference) || "";
}

function getPreferenceTokens() {
  return getPreference()
    .toLowerCase()
    .split(/[^a-z0-9&]+/)
    .filter((word) => word.length > 2);
}

function getIdeaSearchText(idea) {
  return [idea.symbol, idea.name, idea.category, idea.risk, idea.angle, idea.why, ...(idea.tags || [])]
    .join(" ")
    .toLowerCase();
}

function getMatchScore(idea, tokens) {
  if (!tokens.length) return 0;
  const searchText = getIdeaSearchText(idea);
  return tokens.reduce((score, token) => score + (searchText.includes(token) ? 1 : 0), 0);
}

function getCombinedResearchUniverse(extraIdeas = []) {
  const normalizedExtra = extraIdeas.map((idea) => ({
    ...idea,
    category: idea.category || "Daily idea",
    risk: idea.risk || "Varies",
    tags: idea.tags || ["balanced"],
  }));
  return [...budgetUniverse, ...personalizedIdeas, ...normalizedExtra].filter(
    (idea, index, list) => list.findIndex((candidate) => candidate.symbol === idea.symbol) === index,
  );
}

function personalizeIdeas(defaultIdeas) {
  const preference = getPreference().trim();
  const tokens = getPreferenceTokens();
  const dayOffset = (Math.floor(Date.now() / 86400000) + researchMixSeed) % 13;
  const universe = getCombinedResearchUniverse(defaultIdeas);

  const ranked = universe
    .map((idea, index) => ({
      ...idea,
      score:
        getMatchScore(idea, tokens) * 10 +
        (idea.tags?.includes("balanced") ? 2 : 0) +
        getRotationScore(idea.symbol, dayOffset) +
        ((index + dayOffset) % 7 === 0 ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  personalizationSummary.textContent = preference
    ? `Personalized around: "${preference}".`
    : "Using a rotating beginner research mix. Add a mood to steer it.";

  return ranked;
}

function renderIdeas(ideas) {
  watchlist.innerHTML = ideas
    .map(
      (idea) => {
        const descriptor = idea.angle || [idea.category, idea.risk ? `${idea.risk} risk` : ""].filter(Boolean).join(" - ");
        return `
          <article class="stock-card">
            <div>
              <strong>${idea.symbol}</strong>
              <span>${idea.name || ""}</span>
            </div>
            <p>${idea.why}</p>
            <span>${descriptor}</span>
            <a href="${idea.linkUrl || `https://www.sec.gov/edgar/search/#/q=${encodeURIComponent(idea.symbol)}`}" target="_blank" rel="noreferrer">${idea.linkLabel || "SEC filings"}</a>
          </article>
        `;
      },
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
    <h3>${company.symbol} ${company.name ? `- ${company.name}` : ""}</h3>
    <span>${company.summary}</span>
    <div class="insight-links">
      ${links.secSearch ? `<a href="${links.secSearch}" target="_blank" rel="noreferrer">SEC reports</a>` : ""}
      ${links.latest10k ? `<a href="${links.latest10k}" target="_blank" rel="noreferrer">Latest 10-K</a>` : ""}
      ${links.latest10q ? `<a href="${links.latest10q}" target="_blank" rel="noreferrer">Latest 10-Q</a>` : ""}
      ${links.yahoo ? `<a href="${links.yahoo}" target="_blank" rel="noreferrer">Market page</a>` : ""}
    </div>
  `;
}

async function renderSecGuide(symbol = "AAPL") {
  const cleanSymbol = symbol.trim().toUpperCase().replace(".", "-") || "AAPL";
  secGuideSymbol.value = cleanSymbol;
  secReportLinks.innerHTML = `<span class="quiet-copy">Loading report links for ${cleanSymbol}...</span>`;

  try {
    const response = await fetch(`/api/company?symbol=${encodeURIComponent(cleanSymbol)}`);
    if (!response.ok) throw new Error("Company report lookup unavailable");
    const company = await response.json();
    renderSecLinks(company);
  } catch {
    renderSecLinks({
      symbol: cleanSymbol,
      name: cleanSymbol,
      links: {
        secSearch: `https://www.sec.gov/edgar/search/#/q=${cleanSymbol}`,
        yahoo: `https://finance.yahoo.com/quote/${cleanSymbol}`,
      },
    });
  }

  secStepGrid.innerHTML = secSteps
    .map(
      (step) => `
        <article class="sec-step-card">
          <strong>${step.title}</strong>
          <span>${step.section}</span>
          <p>${step.why}</p>
          <span><b>Look for:</b> ${step.lookFor}</span>
        </article>
      `,
    )
    .join("");
}

function renderSecLinks(company) {
  const links = company.links || {};
  secReportLinks.innerHTML = `
    <a href="${links.secSearch || `https://www.sec.gov/edgar/search/#/q=${company.symbol}`}" target="_blank" rel="noreferrer">Open SEC filings</a>
    ${links.latest10k ? `<a href="${links.latest10k}" target="_blank" rel="noreferrer">Latest 10-K</a>` : ""}
    ${links.latest10q ? `<a href="${links.latest10q}" target="_blank" rel="noreferrer">Latest 10-Q</a>` : ""}
    ${links.yahoo ? `<a href="${links.yahoo}" target="_blank" rel="noreferrer">Market page</a>` : ""}
    <span class="quiet-copy">Use the links, then read the sections below in order for ${company.symbol}${company.name ? ` - ${company.name}` : ""}.</span>
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

holdingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const symbol = symbolInput.value.trim().toUpperCase().replace(".", "-");
  const mode = holdingType.value;
  const amount = Number(amountInput.value);
  const cost = Number(costInput.value || 0);
  if (!symbol || !amount) return;
  const holding =
    mode === "dollars"
      ? { symbol, mode, amount, cost }
      : { symbol, mode, shares: amount, cost };
  saveHoldings([...getHoldings(), holding]);
  holdingForm.reset();
  updateHoldingFormMode();
  refreshPortfolio();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tab));
});

refreshQuotes.addEventListener("click", refreshPortfolio);
holdingType.addEventListener("change", updateHoldingFormMode);

budgetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  budgetMixSeed += 1;
  renderBudgetIdeas();
});

budgetRefresh.addEventListener("click", () => {
  budgetMixSeed += 1;
  renderBudgetIdeas();
});

budgetInput.addEventListener("input", () => scheduleLiveRecommendationRender());
budgetFocus.addEventListener("change", () => {
  budgetMixSeed += 1;
  renderBudgetIdeas();
});

markRead.addEventListener("click", () => {
  saveReadDates([...getReadDates(), dateKey]);
  saveLessonProgress({
    ...getLessonProgress(),
    currentIndex: currentLesson,
    lastCompletedIndex: currentLesson,
    lastReadDate: dateKey,
  });
  renderLesson();
});

previousLesson.addEventListener("click", () => {
  currentLesson = (currentLesson - 1 + lessons.length) % lessons.length;
  saveLessonProgress({
    ...getLessonProgress(),
    currentIndex: currentLesson,
  });
  renderLesson();
});

nextLesson.addEventListener("click", () => {
  currentLesson = (currentLesson + 1) % lessons.length;
  saveLessonProgress({
    ...getLessonProgress(),
    currentIndex: currentLesson,
  });
  renderLesson();
});

companyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openCompany(companySymbol.value);
});

secGuideForm.addEventListener("submit", (event) => {
  event.preventDefault();
  renderSecGuide(secGuideSymbol.value);
});

preferenceInput.value = getPreference();
personalizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(storageKeys.preference, preferenceInput.value.trim());
  researchMixSeed += 1;
  budgetMixSeed += 1;
  renderWatchlist();
  renderBudgetIdeas();
});

preferenceInput.addEventListener("input", () => {
  localStorage.setItem(storageKeys.preference, preferenceInput.value.trim());
  scheduleLiveRecommendationRender();
});

watchlistRefresh.addEventListener("click", () => {
  researchMixSeed += 1;
  renderWatchlist();
});

renderLesson();
restoreChecklist();
updateHoldingFormMode();
refreshPortfolio();
renderWatchlist();
renderBudgetIdeas();
renderSecGuide("AAPL");
openCompany("AAPL");
