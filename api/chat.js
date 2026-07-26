export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
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
  apiKeyExists: !!API_KEY,
  data
});
}