require("dotenv").config();
const { fal } = require("@fal-ai/client");

/**
 * Generates a persona image using the Fal.ai API.
 * @param {Object} persona - The fictional persona object containing name, age, gender, profession, and origin.
 * @returns {Promise<string>} - A promise that resolves to the generated image URL.
 */
async function generatePersonaPhoto(persona) {
  const prompt = `A realistic portrait of a ${persona.age}-year-old ${persona.gender} named ${persona.name}, who works as a ${persona.profession} and is from ${persona.origin} with all the regional and gender details.`;

  fal.config({ credentials: process.env.FALAI_API_KEY });

  try {
    const response = await fal.subscribe("fal-ai/flux/dev", {
      input: {
        prompt: prompt,
        image_size: {
          width: 512,
          height: 512,
        },
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });

    return response.data.images[0].url;
  } catch (error) {
    console.error(
      "Error generating persona photo:",
      error.response?.data || error.message
    );
    return "";
  }
}

module.exports = { generatePersonaPhoto };
