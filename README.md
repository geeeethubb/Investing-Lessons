# Pennywise Stocks

A beginner-friendly investing dashboard built for a college student with a small budget.

## What it does

- Tracks a small stock portfolio from locally saved holdings.
- Fetches quote data through Vercel serverless routes when deployed.
- Shows a daily "stocks to research" list with plain-English reasons.
- Links to SEC filings and market pages for company research.
- Keeps a short daily investing lesson on the first screen.

This is educational software, not financial advice.

## Local preview

Open `index.html` directly, or run a static server from this folder.

For API routes, install and use Vercel CLI:

```bash
npm run dev
```

## Deploy

1. Push this folder to a new GitHub repository.
2. Import the repository into Vercel.
3. Keep the default static project settings. Vercel will detect the `api/` serverless routes.

Daily email reminders can be added with Vercel Cron plus an email provider such as Resend, or sent manually from Gmail once the public URL exists.

## Active email reminders

The app includes a test-send endpoint and a daily Vercel Cron route. To activate real email delivery in Vercel, add these environment variables:

```bash
RESEND_API_KEY=...
REMINDER_EMAIL=zuyu.alex06@gmail.com
REMINDER_FROM=Pennywise Stocks <your-verified-sender@example.com>
PUBLIC_DASHBOARD_URL=https://your-vercel-app.vercel.app
```

The cron schedule in `vercel.json` runs at `13:00 UTC`, which is 7:00 AM Mountain Daylight Time.
