# 👤 Invenstory API

🚀 **Invenstory API** is a REST API that generates random fictional personas. It returns information such as name, age, origin, profession, and an avatar, useful for testing, prototyping, and creating fictional characters.

## 📌 Features

✅ Automatically generates fictional personas\
✅ Optional filters for gender (`male` or `female`)\
✅ Structured JSON for easy integration\
✅ Swagger documentation

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Faker.js](https://fakerjs.dev/)
- [Swagger UI](https://swagger.io/)

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

3️⃣ **Create a **``** file in the project's root and add:**

```env
PORT=5000
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
GET /persona
```

🔹 **Example JSON Response**

```json
{
  "name": "Daniel Ximenes Ferraz",
  "age": 23,
  "gender": "male",
  "origin": "Brazilian",
  "profession": "Software Developer",
  "bio": "Software developer with 3 years of experience...",
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
  "name": "Isadora Luzia Carvalho",
  "age": "25",
  "gender": "Transfeminine",
  "origin": "Brazil",
  "address": "Maria Silva  \nRua das Flores, 123  \nBairro Jardim das Acácias  \nCidade São Paulo  \nEstado São Paulo  \nCEP 01234-567  \nBrasil",
  "profession": "Mechanic",
  "bio": "Isadora Luzia Carvalho, uma mecânica de 25 anos, vive na Rua das Flores, no encantador Bairro Jardim das Acácias, em São Paulo. Desde pequena, Isadora sempre teve uma paixão inabalável por motores e engrenagens, transformando sua curiosidade em uma carreira habilidosa que desafia estereótipos de gênero. Transfeminina e orgulhosa, ela é conhecida na vizinhança por sua técnica impecável e pelo sorriso acolhedor que ilumina a oficina onde trabalha. Às vezes, entre consertos, ela sonha em abrir sua própria escola de mecânica para inspirar mais jovens a seguirem seus sonhos, provando que a força vem de dentro, não importa a forma que ela assuma.",
  "photo": "https://v3.fal.media/files/tiger/yAHn7HomkKyPtvtpOzoin.png"
}
{
  "name": "Mariana Souza",
  "age": 29,
  "gender": "female",
  "origin": "Portuguese",
  "profession": "Graphic Designer",
  "bio": "Graphic designer who loves drawing on screens...",
  "photo": "https://randomuser.me/api/portraits/women/20.jpg"
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
