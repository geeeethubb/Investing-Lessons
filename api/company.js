const SEC_TICKERS_URL = "https://www.sec.gov/files/company_tickers.json";
const SEC_USER_AGENT = "PennywiseStocks/1.0 contact:zuyu.alex06@gmail.com";
const FALLBACK_COMPANIES = {
  AAPL: { cik: 320193, name: "Apple Inc." },
  MSFT: { cik: 789019, name: "Microsoft Corporation" },
  GOOGL: { cik: 1652044, name: "Alphabet Inc." },
  COST: { cik: 909832, name: "Costco Wholesale Corporation" },
  V: { cik: 1403161, name: "Visa Inc." },
  NVDA: { cik: 1045810, name: "NVIDIA Corporation" },
  "BRK-B": { cik: 1067983, name: "Berkshire Hathaway Inc." },
};

function normalizeSymbol(symbol) {
  return String(symbol || "").trim().toUpperCase().replace(".", "-");
}

function accessionPath(cik, accessionNumber, documentName) {
  if (!cik || !accessionNumber || !documentName) return null;
  const cleanAccession = accessionNumber.replaceAll("-", "");
  return `https://www.sec.gov/Archives/edgar/data/${Number(cik)}/${cleanAccession}/${documentName}`;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": SEC_USER_AGENT,
      Accept: "application/json",
    },
  });
  if (!response.ok) throw new Error(`Request failed: ${url}`);
  return response.json();
}

async function findCompany(symbol) {
  const tickers = await fetchJson(SEC_TICKERS_URL);
  return Object.values(tickers).find((company) => normalizeSymbol(company.ticker) === symbol);
}

export default async function handler(request, response) {
  const symbol = normalizeSymbol(request.query.symbol);
  if (!symbol) {
    response.status(400).json({ error: "Pass a symbol query parameter." });
    return;
  }

  const fallback = FALLBACK_COMPANIES[symbol];

  try {
    const company = await findCompany(symbol);
    if (!company) {
      response.status(404).json({ error: `No SEC company found for ${symbol}.` });
      return;
    }

    const cikPadded = String(company.cik_str).padStart(10, "0");
    const submissions = await fetchJson(`https://data.sec.gov/submissions/CIK${cikPadded}.json`);
    const recent = submissions?.filings?.recent || {};
    const forms = recent.form || [];
    const accessionNumbers = recent.accessionNumber || [];
    const primaryDocuments = recent.primaryDocument || [];

    const indexFor = (form) => forms.findIndex((value) => value === form);
    const latest10kIndex = indexFor("10-K");
    const latest10qIndex = indexFor("10-Q");

    const latest10k = accessionPath(company.cik_str, accessionNumbers[latest10kIndex], primaryDocuments[latest10kIndex]);
    const latest10q = accessionPath(company.cik_str, accessionNumbers[latest10qIndex], primaryDocuments[latest10qIndex]);

    response.status(200).json({
      symbol,
      name: company.title,
      cik: company.cik_str,
      summary:
        "Start with the latest annual report for the business model and risks, then compare the latest quarterly report for recent changes in revenue, margins, cash flow, and management commentary.",
      recentForms: forms.slice(0, 8),
      links: {
        secSearch: `https://www.sec.gov/edgar/browse/?CIK=${company.cik_str}`,
        latest10k,
        latest10q,
        yahoo: `https://finance.yahoo.com/quote/${symbol}`,
      },
    });
  } catch (error) {
    if (!fallback) {
      response.status(500).json({ error: error.message });
      return;
    }

    response.status(200).json({
      symbol,
      name: fallback.name,
      cik: fallback.cik,
      summary:
        "SEC live lookup was unavailable in this environment, so this view is using curated company metadata. Use the SEC reports link for filings and the market page for current quote context.",
      recentForms: [],
      links: {
        secSearch: `https://www.sec.gov/edgar/browse/?CIK=${fallback.cik}`,
        latest10k: null,
        latest10q: null,
        yahoo: `https://finance.yahoo.com/quote/${symbol}`,
      },
    });
  }
}
