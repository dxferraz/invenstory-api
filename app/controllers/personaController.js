const faker = require("@faker-js/faker");
const {
  generatePersonaBiography,
  generatePersonaAddress,
  generatePersonaName,
  generatePersonaProfession,
} = require("../services/openaiService");
const { generatePersonaPhoto } = require("../services/falaiService");

const generatePersona = async (req, res) => {
  const persona = {
    name: "",
    age: req.query.age || faker.faker.number.int({ min: 18, max: 90 }),
    gender: req.query.gender || (Math.random() > 0.5 ? "male" : "female"),
    origin: req.query.origin || faker.faker.location.country(),
    address: "",
    profession: "",
    biography: "",
    photo: "",
  };

  persona.name = await generatePersonaName(persona);

  persona.address = await generatePersonaAddress(persona);

  persona.profession =
    req.query.profession || (await generatePersonaProfession(persona));

  persona.biography = await generatePersonaBiography(persona);

  persona.photo = await generatePersonaPhoto(persona);

  res.json({ persona });
};

module.exports = { generatePersona };