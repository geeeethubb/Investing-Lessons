const YAHOO_CHART_URL = "https://query1.finance.yahoo.com/v8/finance/chart/";

function normalizeSymbol(symbol) {
  return String(symbol || "").trim().toUpperCase().replace(".", "-");
}

async function getQuote(symbol) {
  const response = await fetch(`${YAHOO_CHART_URL}${encodeURIComponent(symbol)}?range=1d&interval=1m`);
  if (!response.ok) throw new Error(`Quote request failed for ${symbol}`);
  const data = await response.json();
  const result = data?.chart?.result?.[0];
  const meta = result?.meta || {};
  return {
    symbol,
    name: meta.longName || meta.shortName || symbol,
    price: Number(meta.regularMarketPrice || meta.previousClose || 0),
    previousClose: Number(meta.previousClose || 0),
    changePercent:
      meta.previousClose && meta.regularMarketPrice
        ? ((meta.regularMarketPrice - meta.previousClose) / meta.previousClose) * 100
        : 0,
    currency: meta.currency || "USD",
    marketState: meta.marketState || "unknown",
    updatedAt: new Date().toISOString(),
  };
}

export default async function handler(request, response) {
  const symbols = String(request.query.symbols || "")
    .split(",")
    .map(normalizeSymbol)
    .filter(Boolean)
    .slice(0, 20);

  if (!symbols.length) {
    response.status(400).json({ error: "Pass symbols as a comma-separated query parameter." });
    return;
  }

  try {
    const results = await Promise.allSettled(symbols.map(getQuote));
    const quotes = {};
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        quotes[symbols[index]] = result.value;
      }
    });
    response.status(200).json({ quotes });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
