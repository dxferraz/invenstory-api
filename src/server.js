require("dotenv").config();
const express = require("express");
const cors = require("cors");
const personaRoutes = require("./routes/invenstoryRoutes");
const setupSwagger = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", personaRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `🚀 Server running! Access http://localhost:${PORT}/api-docs/ to see documentation.`
  )
);
