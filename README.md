# 👤 Invenstory API

🚀 **Invenstory API** é uma API REST que gera personas fictícias aleatórias. Ela retorna informações como nome, idade, nacionalidade, profissão e um avatar, útil para testes, prototipação e geração de personagens fictícios.

## 📌 Recursos

✅ Geração automática de personas fictícias  
✅ Filtros opcionais por gênero (`male` ou `female`)  
✅ JSON estruturado para fácil integração  
✅ Documentação com Swagger  

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Faker.js](https://fakerjs.dev/)
- [Swagger UI](https://swagger.io/)

---

## 📥 Como Instalar e Rodar Localmente

1️⃣ **Clone este repositório:**
```sh
git clone https://github.com/dxferraz/invenstory-api.git
cd invenstory-api
```

2️⃣ **Instale as dependências:**
```sh
npm install
```

3️⃣ **Crie um arquivo `.env` na raiz do projeto e adicione:**
```env
PORT=5000
```

4️⃣ **Execute a API:**
```sh
node src/server.js
```

A API estará rodando e sua documentação pode ser acessada em **http://localhost:5000/api-docs/**.

---

## 🔥 Como Usar a API

### 🔹 **Gerar uma Persona Aleatória**
```http
GET /api/persona
```

🔹 **Exemplo de Resposta JSON**
```json
{
  "name": "Daniel Ximenes Ferraz",
  "age": 23,
  "gender": "male",
  "nationality": "Brazilian",
  "profession": "Software Developer",
  "bio": "Software developer with 3 years of experience...",
  "avatar": "https://randomuser.me/api/portraits/men/45.jpg"
}
```

### 🔹 **Gerar uma Persona Específica por Gênero**
```http
GET /api/persona?gender=female
```

🔹 **Exemplo de Resposta JSON**
```json
{
  "name": "Mariana Souza",
  "age": 29,
  "gender": "female",
  "nationality": "Portuguese",
  "profession": "Graphic Designer",
  "bio": "Graphic designer who loves drawing on screens...",
  "avatar": "https://randomuser.me/api/portraits/women/20.jpg"
}
```

---

## 📜 Documentação com Swagger

A API possui uma **documentação interativa** com Swagger.  
Após rodar a API, acesse:

```
http://localhost:5000/api-docs
```
<!-- 
Se a API estiver hospedada, acesse:

```
https://invenstory.onrender.com/api-docs
``` -->

---

<!-- ## 🚀 Deploy e URL Pública

A API está hospedada em **Render** e pode ser acessada em:

```
https://invenstory.onrender.com/api/persona
```

--- -->

## 🛠️ Melhorias Futuras

✅ Adicionar mais filtros (idade mínima/máxima, nacionalidade)
✅ Adicionar suporte a LGBTQIA+ para gerar personas de diferentes generos
✅ Melhorar as biografias geradas  
✅ Criar uma interface web para visualizar as personas 

---

## 📝 Licença

Este projeto é de código aberto sob a licença **Apache License**.

---

💡 **Desenvolvido por [Daniel Ferraz](https://github.com/dxferraz)**. Contribuições são bem-vindas! 😃
