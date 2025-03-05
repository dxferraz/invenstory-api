require("dotenv").config();
const express = require("express");
const cors = require("cors");
const personaRoutes = require("./routes/personaRoute");
const setupSwagger = require("./swagger");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*", methods: [ "GET", "POST", "PUT", "DELETE" ], allowedHeaders: [ "Content-Type", "Authorization" ] }));
app.use(express.json());

app.use("/", personaRoutes);

setupSwagger(app);

app.listen(PORT, () =>
  console.log(
    `🚀 Server running! Access http://localhost:${PORT}/api-docs/ to see documentation.`
  )
);
