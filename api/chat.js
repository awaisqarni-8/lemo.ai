export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: message }]
          }
        ]
      })
    }
  );

  const data = await response.json();
console.log(JSON.stringify(data, null, 2));

  res.status(200).json({
  reply: data.candidates[0].content.parts[0].text
});
  apiKeyExists: !!API_KEY,
  data
});
}