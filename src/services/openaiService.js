require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates a biography for a fictional persona using ChatGPT.
 * @param {Object} persona - The fictional persona object containing name, age, profession, and nationality.
 * @returns {Promise<string>} - A promise that resolves to the generated biography.
 */
async function generateBio(persona) {
  const prompt = `Crie uma pequena biografia de um parágrafo no idioma que se fala em ${persona.nationality} para uma pessoa fictícia chamada ${persona.name}, de ${persona.age} anos, 
  que trabalha como ${persona.profession} e é ${persona.nationality}.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é um escritor criativo." },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Erro ao gerar biografia:", error);
    return "Biografia indisponível no momento.";
  }
}

module.exports = { generateBio };
