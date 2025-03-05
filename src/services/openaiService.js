require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates a name for a fictional persona using ChatGPT based on persona's origin.
 * @param {Object} persona - The fictional persona object containing age, profession, and nationality.
 * @returns {Promise<string>} - A promise that resolves to the generated name.
 */
async function generatePersonaName(persona) {
  const prompt = `Create a full name for a fictitious ${persona.gender} person aged ${persona.age}, who works as ${persona.profession} and is from ${persona.origin}. Return only the full name without any extra text.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a creative birth name generator." },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erro ao gerar nome:", error);
    return "Nome indisponível no momento.";
  }
}

/**
 * Generates a biography for a fictional persona using ChatGPT.
 * @param {Object} persona - The fictional persona object containing name, age, profession, and nationality.
 * @returns {Promise<string>} - A promise that resolves to the generated biography.
 */
async function generatePersonaBio(persona) {
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

module.exports = { generatePersonaBio, generatePersonaName };
