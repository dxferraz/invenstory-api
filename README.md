# 👤 Invenstory API

🚀 **Invenstory API** is a REST API that generates random fictional personas. It returns information such as name, age, origin, profession, and an avatar, useful for testing, prototyping, and creating fictional characters.

## 📌 Features

✅ Automatically generates fictional personas\
✅ Optional filters for age, gender, origin and profession\
✅ Structured JSON for easy integration\
✅ Swagger documentation

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Faker.js](https://fakerjs.dev/)
- [Swagger UI](https://swagger.io/)
- [OpenAI API](https://beta.openai.com/)
- [FalAI API](https://fal.ai/)

---

## 📥 How to Install and Run Locally

1️⃣ **Clone this repository:**

```sh
git clone https://github.com/dxferraz/invenstory-api.git
cd invenstory-api
```

2️⃣ **Install dependencies:**

```sh
npm install
```

3️⃣ **Create a **`.env`** file in the project's root and add:**

```env
PORT=5000
OPENAI_API_KEY=your_openai_api_key
FALAI_API_KEY=your_falai_api_key
```

4️⃣ **Run the API:**

```sh
node src/server.js
```

The API will be running, and its documentation can be accessed at [**http://localhost:5000/api-docs/**](http://localhost:5000/api-docs/).

---

## 🔥 How to Use the API

### 🔹 **Generate a Random Persona**

```http
GET https://api.invenstory.dev/persona
```

🔹 **Example JSON Response**

```json
{
  "name": "Daniel Ximenes Ferraz",
  "age": 23,
  "gender": "male",
  "origin": "Brazilian",
  "profession": "Software Developer",
  "biography": "Software developer with 3 years of experience...",
  "photo": "https://randomuser.me/api/portraits/men/45.jpg"
}
```

### 🔹 **Generate a Persona by Gender**

```http
GET /persona?gender=female
```

🔹 **Example JSON Response**

```json
{
  "name": "Sofia Almeida Andrade",
  "age": "29",
  "gender": "Female",
  "origin": "Portugal",
  "address": "Maria Silva  \nRua da Liberdade, 45  \n8500-123 Portimão  \nAlgarve, Portugal",
  "profession": "Graphic Designer",
  "biography": "Sofia Almeida Andrade, uma talentosa designer gráfica de 29 anos, vive na encantadora Rua da Liberdade, em Portimão, no deslumbrante Algarve. Desde pequena, Sofia sempre teve uma paixão pela arte e pela tecnologia, o que a levou a criar visuais fascinantes que cativam e inspiram. Com um estilo único que mistura cores vibrantes com elementos minimalistas, ela tem conquistado o coração de clientes locais e internacionais. Nas horas vagas, Sofia gosta de explorar as praias douradas da região, onde busca inspiração nas ondas e no pôr do sol alaranjado, sempre pronta para transformar a beleza do mundo em obras-primas digitais.",
  "photo": "https://v3.fal.media/files/panda/kwY-60W1HPDjrYqsMaweV.png"
}
```

---

## 📜 Swagger Documentation

The API has an **interactive documentation** with Swagger.\
After running the API, access:

```
http://localhost:5000/api-docs
```

---

## 🛠️ Future Improvements

✅ Create a web interface to visualize personas

---

## 📝 License

This project is open-source under the **Apache License**.

---

💡 **Developed by **[**Daniel Ferraz**](https://github.com/dxferraz). Contributions are welcome! 😃
