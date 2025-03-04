const faker = require("@faker-js/faker");
const { generateBio } = require("../services/openaiService");
const { generatePersonaPhoto } = require("../services/falaiService");

exports.generatePersona = async (req, res) => {
  const gender = req.query.gender || (Math.random() > 0.5 ? "male" : "female");

  const persona = {
    name: faker.faker.person.firstName(),
    age: faker.faker.number.int({ min: 18, max: 80 }),
    gender: gender,
    nationality: faker.faker.location.country(),
    profession: faker.faker.person.jobTitle()
  };

  persona.bio = await generateBio(persona);

  persona.photo = await generatePersonaPhoto(persona);

  res.json(persona);
};
