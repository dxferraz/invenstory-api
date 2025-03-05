const express = require("express");
const router = express.Router();
const { generatePersona } = require("../controllers/invenstoryController");

/**
 * @swagger
 * /persona:
 *   get:
 *     summary: Generates a fictional persona with random attributes, photo, documents and etc.
 *     description: Returns a fictional persona with name, age, gender, nationality, profession, photo, biography, documents, address and bank accounts.
 *     tags: [Persona]
 *     parameters:
 *       - in: query
 *         name: gender
 *         description: Gender of the persona. Randomly generated if not provided.
 *         example: "male"
 *         required: false
 *         schema:
 *           type: string
 *           nullable: true
 *           enum:
 *             - Male
 *             - Female
 *             - Non-binary
 *             - Agender
 *             - Androgynous
 *             - Bigender
 *             - Cisgender
 *             - Demiboy
 *             - Demigirl
 *             - Genderfluid
 *             - Genderqueer
 *             - Intersex
 *             - Neutrois
 *             - Pangender
 *             - Transgender
 *             - Transmasculine
 *             - Transfeminine
 *             - Two-Spirit
 *             - Third Gender
 *             - Hijra
 *             - Xenogender
 *             - Maverique
 *             - Polygender
 *             - Omnigender
 *       - in: query
 *         name: origin
 *         description: Origin of the persona. Randomly generated if not provided.
 *         example: "Brazil"
 *         required: false
 *         schema:
 *           type: string
 *           nullable: true
 *           enum:
 *             - Afghanistan
 *             - Albania
 *             - Algeria
 *             - Andorra
 *             - Angola
 *             - Antigua and Barbuda
 *             - Argentina
 *             - Armenia
 *             - Australia
 *             - Austria
 *             - Azerbaijan
 *             - Bahamas
 *             - Bahrain
 *             - Bangladesh
 *             - Barbados
 *             - Belarus
 *             - Belgium
 *             - Belize
 *             - Benin
 *             - Bhutan
 *             - Bolivia
 *             - Bosnia and Herzegovina
 *             - Botswana
 *             - Brazil
 *             - Brunei
 *             - Bulgaria
 *             - Burkina Faso
 *             - Burundi
 *             - Cabo Verde
 *             - Cambodia
 *             - Cameroon
 *             - Canada
 *             - Central African Republic
 *             - Chad
 *             - Chile
 *             - China
 *             - Colombia
 *             - Comoros
 *             - Congo (Congo-Brazzaville)
 *             - Congo (Democratic Republic)
 *             - Costa Rica
 *             - Croatia
 *             - Cuba
 *             - Cyprus
 *             - Czechia
 *             - Denmark
 *             - Djibouti
 *             - Dominica
 *             - Dominican Republic
 *             - Ecuador
 *             - Egypt
 *             - El Salvador
 *             - Equatorial Guinea
 *             - Eritrea
 *             - Estonia
 *             - Eswatini
 *             - Ethiopia
 *             - Fiji
 *             - Finland
 *             - France
 *             - Gabon
 *             - Gambia
 *             - Georgia
 *             - Germany
 *             - Ghana
 *             - Greece
 *             - Grenada
 *             - Guatemala
 *             - Guinea
 *             - Guinea-Bissau
 *             - Guyana
 *             - Haiti
 *             - Honduras
 *             - Hungary
 *             - Iceland
 *             - India
 *             - Indonesia
 *             - Iran
 *             - Iraq
 *             - Ireland
 *             - Israel
 *             - Italy
 *             - Jamaica
 *             - Japan
 *             - Jordan
 *             - Kazakhstan
 *             - Kenya
 *             - Kiribati
 *             - Kuwait
 *             - Kyrgyzstan
 *             - Laos
 *             - Latvia
 *             - Lebanon
 *             - Lesotho
 *             - Liberia
 *             - Libya
 *             - Liechtenstein
 *             - Lithuania
 *             - Luxembourg
 *             - Madagascar
 *             - Malawi
 *             - Malaysia
 *             - Maldives
 *             - Mali
 *             - Malta
 *             - Marshall Islands
 *             - Mauritania
 *             - Mauritius
 *             - Mexico
 *             - Micronesia
 *             - Moldova
 *             - Monaco
 *             - Mongolia
 *             - Montenegro
 *             - Morocco
 *             - Mozambique
 *             - Myanmar
 *             - Namibia
 *             - Nauru
 *             - Nepal
 *             - Netherlands
 *             - New Zealand
 *             - Nicaragua
 *             - Niger
 *             - Nigeria
 *             - North Korea
 *             - North Macedonia
 *             - Norway
 *             - Oman
 *             - Pakistan
 *             - Palau
 *             - Palestine
 *             - Panama
 *             - Papua New Guinea
 *             - Paraguay
 *             - Peru
 *             - Philippines
 *             - Poland
 *             - Portugal
 *             - Qatar
 *             - Romania
 *             - Russia
 *             - Rwanda
 *             - Saint Kitts and Nevis
 *             - Saint Lucia
 *             - Saint Vincent and the Grenadines
 *             - Samoa
 *             - San Marino
 *             - Sao Tome and Principe
 *             - Saudi Arabia
 *             - Senegal
 *             - Serbia
 *             - Seychelles
 *             - Sierra Leone
 *             - Singapore
 *             - Slovakia
 *             - Slovenia
 *             - Solomon Islands
 *             - Somalia
 *             - South Africa
 *             - South Korea
 *             - South Sudan
 *             - Spain
 *             - Sri Lanka
 *             - Sudan
 *             - Suriname
 *             - Sweden
 *             - Switzerland
 *             - Syria
 *             - Tajikistan
 *             - Tanzania
 *             - Thailand
 *             - Timor-Leste
 *             - Togo
 *             - Tonga
 *             - Trinidad and Tobago
 *             - Tunisia
 *             - Turkey
 *             - Turkmenistan
 *             - Tuvalu
 *             - Uganda
 *             - Ukraine
 *             - United Arab Emirates
 *             - United Kingdom
 *             - United States
 *             - Uruguay
 *             - Uzbekistan
 *             - Vanuatu
 *             - Vatican City
 *             - Venezuela
 *             - Vietnam
 *             - Yemen
 *             - Zambia
 *             - Zimbabwe
 *     responses:
 *       200:
 *         description: Success! Returns a fictional persona.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Daniel Ximenes Ferraz"
 *                 age:
 *                   type: integer
 *                   example: 23
 *                 gender:
 *                   type: string
 *                   example: "male"
 *                 nationality:
 *                   type: string
 *                   example: "Brazilian"
 *                 profession:
 *                   type: string
 *                   example: "Software Developer"
 *                 bio:
 *                   type: string
 *                   example: "Software developer with 3 years of experience..."
 *                 photo:
 *                   type: string
 *                   example: "https://randomuser.me/api/portraits/men/45.jpg"
 */
router.get("/persona", generatePersona);

module.exports = router;
