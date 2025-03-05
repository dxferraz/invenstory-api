require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates a name for a fictional persona using ChatGPT based on persona's origin.
 * @param {Object} persona - The fictional persona object containing age, profession, and origin.
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
    console.error("Error generating name:", error);
    return "Name unavailable.";
  }
}

/**
 * Generates a address for a fictional persona using ChatGPT based on persona's origin.
 * @param {Object} persona - The fictional persona object containing age, profession, and origin.
 * @returns {Promise<string>} - A promise that resolves to the generated name.
 */
async function generatePersonaAddress(persona) {
  const prompt = `Create a full regional address for a fictitious person who lives in ${persona.origin}. Return only the full address without any extra text.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a realistic address generator." },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating address:", error);
    return "Address unavailable.";
  }
}

/**
 * Generates a profession for a fictional persona using ChatGPT based on persona's age and origin.
 * @param {Object} persona - The fictional persona object containing age, and origin.
 * @returns {Promise<string>} - A promise that resolves to the generated name.
 */
async function generatePersonaProfession(persona) {
  const prompt = `Create a coherent profession for a fictitious ${persona.age}-year-old person who lives in ${persona.origin}. Return only the profession without any extra text.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a realistic profession generator.",
        },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating profession:", error);
    return "Profession unavailable.";
  }
}

/**
 * Generates a biography for a fictional persona using ChatGPT.
 * @param {Object} persona - The fictional persona object containing name, age, profession, and origin.
 * @returns {Promise<string>} - A promise that resolves to the generated biography.
 */
async function generatePersonaBio(persona) {
  const prompt = `Create a short one-paragraph creative biography in the language spoken in ${persona.origin} for a fictional ${persona.gender} person who lives in ${persona.address} called ${persona.name}, aged ${persona.age}, 
  who works as ${persona.profession}.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a creative biography generator." },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating biography:", error);
    return "Biography unavailable.";
  }
}

module.exports = {
  generatePersonaName,
  generatePersonaAddress,
  generatePersonaProfession,
  generatePersonaBio,
};
