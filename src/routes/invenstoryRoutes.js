const express = require("express");
const router = express.Router();
const { generatePersona } = require("../controllers/invenstoryController");

/**
 * @swagger
 * /api/persona:
 *   get:
 *     summary: Generates a fictional persona with random attributes, photo, documents and etc.
 *     description: Returns a fictional persona with name, age, gender, nationality, profession, photo, biography, documents, address and bank accounts.
 *     tags: [Persona]
 *     parameters:
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *         description: Gender of the persona. Randomly generated if not provided.
 *         example: "male" 
 *       - in: query
 *         name: nationality
 *         schema:
 *           type: string
 *         description: Nationality of the persona. Randomly generated if not provided.
 *         example: "Brazilian"
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
