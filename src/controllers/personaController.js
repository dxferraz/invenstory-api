const faker = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const {
  generatePersonaBiography,
  generatePersonaAddress,
  generatePersonaName,
  generatePersonaProfession,
} = require("../services/openaiService");
const { generatePersonaPhoto } = require("../services/falaiService");
const { uploadImageToFirebase } = require("../services/firebaseService");
const { supabase } = require("../supabaseClient");

const generatePersona = async (req, res) => {
  const id = uuidv4();
  const persona = {
    id: id,
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

  const firebasePhotoUrl = await uploadImageToFirebase(persona.photo, id);

  if (firebasePhotoUrl) {
    persona.photo = firebasePhotoUrl;
  }

  const { data, error } = await supabase.from("personas").insert([persona]);

  if (error) {
    console.error("Error saving persona to Supabase:", error);
    return res.status(500).json({ error: "Failed to save persona." });
  }

  res.json({ persona });
};

module.exports = { generatePersona };