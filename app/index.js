require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const personaRoutes = require("./routes/personaRoute");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const setupSwagger = require("./swagger");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "*", methods: [ "GET", "POST", "PUT", "DELETE" ], allowedHeaders: [ "Content-Type", "Authorization" ] }));

app.use("/persona", personaRoutes);
app.use("/register", registerRoute);
app.use("/login", loginRoute);

setupSwagger(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `🚀 Server running! Access http://localhost:${PORT}/api-docs/ to see documentation.`
  )
);
