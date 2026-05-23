const ideas = [
  {
    symbol: "AAPL",
    name: "Apple",
    why: "A useful first research case because products you know connect directly to revenue, services growth, margins, and buybacks.",
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
  {
    symbol: "V",
    name: "Visa",
    why: "A strong example of a toll-road style business that earns a small amount from huge payment volume.",
    angle: "Payments, network effects, margins",
  },
  {
    symbol: "GOOGL",
    name: "Alphabet",
    why: "Useful for studying advertising, cloud losses or profits, and how one business can fund many long-term bets.",
    angle: "Ads, cloud, optionality",
  },
  {
    symbol: "BRK-B",
    name: "Berkshire Hathaway",
    why: "A beginner-friendly way to study insurance float, capital allocation, and a diversified collection of operating businesses.",
    angle: "Conglomerate, insurance, value investing",
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    why: "A timely research case for cyclicality, valuation expectations, data-center demand, and supply chain concentration.",
    angle: "Semiconductors, AI demand, valuation risk",
  },
];

export default function handler(_request, response) {
  const day = Math.floor(Date.now() / 86400000);
  const selected = [0, 1, 2].map((offset) => ideas[(day + offset * 2) % ideas.length]);
  response.status(200).json({
    asOf: new Date().toISOString(),
    disclaimer: "Educational research prompts only, not buy or sell recommendations.",
    ideas: selected,
  });
}
