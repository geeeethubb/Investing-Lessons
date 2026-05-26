const DEFAULT_EMAIL = "zuyu.alex06@gmail.com";

export function buildReminderEmail({ dashboardUrl, test = false }) {
  const title = test ? "Test reminder: Pennywise Stocks" : "Your Pennywise Stocks morning check-in";
  const preview = "Open your dashboard, read today's lesson, and review your research list.";

  return {
    subject: title,
    html: `
      <div style="font-family: Arial, sans-serif; color: #18212f; line-height: 1.5; max-width: 560px;">
        <p style="font-size: 13px; font-weight: 700; color: #19734a; text-transform: uppercase;">Pennywise Stocks</p>
        <h1 style="font-size: 28px; margin: 0 0 12px;">${test ? "Your test reminder worked" : "Good morning - your dashboard is ready"}</h1>
        <p>${preview}</p>
        <p style="margin: 28px 0;">
          <a href="${dashboardUrl}" style="background: #18212f; color: white; padding: 12px 18px; border-radius: 8px; text-decoration: none; font-weight: 700;">Open dashboard</a>
        </p>
        <p style="color: #667085; font-size: 13px;">Educational content only. This is not financial advice.</p>
      </div>
    `,
    text: `${preview}\n\nOpen dashboard: ${dashboardUrl}\n\nEducational content only. This is not financial advice.`,
  };
}

export async function sendReminder({ email = DEFAULT_EMAIL, dashboardUrl, test = false }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.REMINDER_FROM || "Pennywise Stocks <onboarding@resend.dev>";
  const resolvedUrl = dashboardUrl || process.env.PUBLIC_DASHBOARD_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  if (!apiKey) {
    return {
      ok: false,
      status: 501,
      error: "Email sending is not configured yet.",
      setup: "Add RESEND_API_KEY, REMINDER_EMAIL, REMINDER_FROM, and PUBLIC_DASHBOARD_URL in Vercel.",
    };
  }

  if (!resolvedUrl) {
    return {
      ok: false,
      status: 400,
      error: "Dashboard URL is missing.",
      setup: "Set PUBLIC_DASHBOARD_URL in Vercel or pass dashboardUrl from the app.",
    };
  }

  const emailBody = buildReminderEmail({ dashboardUrl: resolvedUrl, test });
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email || process.env.REMINDER_EMAIL || DEFAULT_EMAIL],
      subject: emailBody.subject,
      html: emailBody.html,
      text: emailBody.text,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      error: data.message || "Resend could not send the reminder.",
    };
  }

  return {
    ok: true,
    status: 200,
    id: data.id,
    message: test ? "Test reminder sent." : "Morning reminder sent.",
  };
}
