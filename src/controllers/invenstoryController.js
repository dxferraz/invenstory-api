const faker = require("@faker-js/faker");

exports.generatePersona = (req, res) => {
  const gender = req.query.gender || (Math.random() > 0.5 ? "male" : "female");

  const persona = {
    name: faker.faker.person.firstName(),
    age: faker.faker.number.int({ min: 18, max: 80 }),
    gender: gender,
    nationality: faker.faker.location.country(),
    profession: faker.faker.person.jobTitle(),
    bio: faker.faker.lorem.sentence(),
    avatar: `https://randomuser.me/api/portraits/${gender === "male" ? "men" : "women"}/${faker.faker.number.int({ min: 1, max: 99 })}.jpg`
  };

  res.json(persona);
};
