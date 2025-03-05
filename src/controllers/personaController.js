const faker = require("@faker-js/faker");
const { generatePersonaBio, generatePersonaAddress, generatePersonaName, generatePersonaProfession } = require("../services/openaiService");
const { generatePersonaPhoto } = require("../services/falaiService");

exports.generatePersona = async (req, res) => {
  const gender = req.query.gender || (Math.random() > 0.5 ? "male" : "female");

  const persona = {
    name: "",
    age: req.query.age || faker.faker.number.int({ min: 18, max: 90 }),
    gender: req.query.gender || gender,
    origin: req.query.origin || faker.faker.location.country(),
    address: "",
    profession: "",
  };

  persona.name = await generatePersonaName(persona);

  persona.address = await generatePersonaAddress(persona);

  persona.profession = req.query.profession || await generatePersonaProfession(persona);

  persona.bio = await generatePersonaBio(persona);

  persona.photo = await generatePersonaPhoto(persona);

  res.json(persona);
};
