const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Invenstory API",
      version: "1.1.0",
      description: `
An API for generating fictional personas.  
It can be used for various purposes, such as creating characters for stories, games, or simulations.  
The API provides a wide range of attributes for the personas, including name, age, gender, origin, address, profession, biography, and photo.

---

### 🔐 JWT Authentication

Use **POST /login** to authenticate with **email and password**.  
You will receive a JWT token:

\`\`\`json
{
  "token": "your-jwt-token"
}
\`\`\`

Use this token in the \`Authorization\` header for protected routes:

\`\`\`http
Authorization: Bearer <your-token>
\`\`\`

Click the **"Authorize"** button above and paste the token including the **Bearer** prefix.

---

### 📦 Available Endpoints

- **POST /login** – Authenticate and receive a token
- **GET /persona** – Protected route, requires Bearer Token
      `,
      contact: {
        name: "Github",
        url: "https://github.com/dxferraz/invenstory-api",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
          description: "Chave de autenticação",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "https://api.invenstory.dev",
        description: "Production server",
      },
      {
        url: "http://localhost:5000",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
