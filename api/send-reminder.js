import { sendReminder } from "./reminder-email.js";

async function readBody(request) {
  if (request.body && typeof request.body === "object") return request.body;

  return new Promise((resolve) => {
    let raw = "";
    request.on("data", (chunk) => {
      raw += chunk;
    });
    request.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Use POST to send a reminder." });
    return;
  }

  const body = await readBody(request);
  const result = await sendReminder({
    email: body.email,
    dashboardUrl: body.dashboardUrl,
    test: Boolean(body.test),
  });

  response.status(result.status).json(result);
}
