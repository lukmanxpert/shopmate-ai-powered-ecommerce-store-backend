# 🛍️ ShopMate — AI‑Powered E‑commerce Store Backend

[![Deployed](https://img.shields.io/badge/Deployed‑Live‑green)](https://shopmate-server.onrender.com/)  
🔗 **Live Backend API:** https://shopmate-server.onrender.com/

ShopMate is a robust **AI‑powered e‑commerce backend server** built with Node.js, Express, and MongoDB. It provides secure REST APIs to power online shopping functionalities like user authentication, product & order management, cart, and more — ready to be consumed by any frontend (web, mobile, PWA).

---

## 🚀 Features

- RESTful API endpoints for core e‑commerce operations  
- User authentication (signup & login)  
- Product CRUD (Create, Read, Update, Delete)  
- Category & Brand management  
- Shopping cart handling  
- Order creation & management  
- Wishlist support  
- Secured with JWT authentication  
- Scalable backend architecture

---

## 🧠 Tech Stack

| Layer | Technology |
|------|------------|
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JSON Web Token (JWT) |
| Hosting | Render |
| Environment | dotenv |

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/lukmanxpert/shopmate-ai-powered-ecommerce-store-backend.git
cd shopmate-ai-powered-ecommerce-store-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run the server

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## 📑 API Endpoints (Overview)

### 🔐 Authentication
- POST `/auth/register`
- POST `/auth/login`

### 🛍️ Products
- GET `/products`
- POST `/products`
- GET `/products/:id`
- PUT `/products/:id`
- DELETE `/products/:id`

### 🛒 Cart
- GET `/cart`
- POST `/cart`
- DELETE `/cart/:id`

### 📦 Orders
- POST `/orders`
- GET `/orders`

*(Endpoints may vary slightly based on implementation)*

---

## 📁 Project Structure

```
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── server.js
├── app.js
├── package.json
```

---

## 🧪 Testing

Use **Postman**, **Insomnia**, or connect with a frontend client to test APIs.

---

## 👨‍💻 Author

**Lukman Hossain**  
GitHub: https://github.com/lukmanxpert

---

## 📜 License

This project is licensed under the **MIT License**.
