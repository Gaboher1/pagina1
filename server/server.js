import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { mensaje } = req.body;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: mensaje }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const texto =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No pude responder en este momento.";

    res.json({ respuesta: texto });
  } catch (error) {
    res.status(500).json({
      respuesta: "Error al conectar con el servidor",
    });
  }
});

app.listen(3001, () => {
  console.log("Servidor activo en http://localhost:3001");
});
