import { sendReminder } from "./reminder-email.js";

export default async function handler(request, response) {
  const secret = process.env.CRON_SECRET;
  const authorization = request.headers.authorization || "";
  const bearer = authorization.startsWith("Bearer ") ? authorization.slice("Bearer ".length) : "";
  const provided = bearer || request.headers["x-cron-secret"] || request.query.secret;

  if (secret && provided !== secret) {
    response.status(401).json({ error: "Unauthorized cron request." });
    return;
  }

  const result = await sendReminder({
    email: process.env.REMINDER_EMAIL || "zuyu.alex06@gmail.com",
    dashboardUrl: process.env.PUBLIC_DASHBOARD_URL,
  });

  response.status(result.status).json(result);
}
