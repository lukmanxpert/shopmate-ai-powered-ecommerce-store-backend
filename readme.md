# ShopMate AI-Powered E-commerce Store Backend

**Live Server:** [https://shopmate-server.onrender.com/](https://shopmate-server.onrender.com/)

## Overview

ShopMate is an AI-powered e-commerce store backend built with Node.js, Express, and PostgreSQL. It provides robust API endpoints to manage users, products, orders, payments, and authentication. This backend is designed to support scalable and secure e-commerce platforms with modern features.

---

## Features

- **User Authentication & Authorization**
  - Sign up, login, JWT-based authentication
  - Role-based access (admin, user)
- **Product Management**
  - CRUD operations for products
  - Image uploads via Cloudinary
- **Order & Booking Management**
  - Place orders, view orders
  - Stripe payment integration
- **Secure Data Handling**
  - Password hashing using Bcrypt
  - Cookie-based authentication
- **Email Notifications**
  - Nodemailer integration for notifications
- **File Uploads**
  - Handle product images and user uploads

---

## Technology Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL (`pg` package)  
- **Authentication:** JWT, Cookie-parser  
- **File Uploads:** express-fileupload, Cloudinary  
- **Payments:** Stripe  
- **Email Service:** Nodemailer  
- **Other Utilities:** dotenv, bcrypt, cors  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/lukmanxpert/shopmate-ai-powered-ecommerce-store-backend.git
cd shopmate-ai-powered-ecommerce-store-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the root directory with your environment variables:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

4. **Start the server**

```bash
npm start
```

The server will run at [http://localhost:5000](http://localhost:5000) or the port specified in your `.env`.

---

## API Endpoints

> This is a brief overview. For full documentation, you can explore the `/routes` folder in the repo.

- **Users**
  - `POST /api/users/register` – Register a new user
  - `POST /api/users/login` – User login
  - `GET /api/users/me` – Get current user profile

- **Products**
  - `GET /api/products` – List all products
  - `POST /api/products` – Add a new product (admin)
  - `PUT /api/products/:id` – Update product (admin)
  - `DELETE /api/products/:id` – Delete product (admin)

- **Orders**
  - `POST /api/orders` – Place a new order
  - `GET /api/orders/:id` – Get order details
  - `GET /api/orders/user/:id` – Get orders of a specific user

- **Payments**
  - `POST /api/payments` – Stripe payment endpoint

---

## Folder Structure

```
backend/
│
├── config/          # DB and Cloudinary configuration
├── controllers/     # Request handlers for API endpoints
├── middleware/      # Authentication & error handling
├── routes/          # API route definitions
├── utils/           # Helper functions (email, cloudinary, etc.)
├── server.js        # Entry point of the backend
├── package.json
└── .env             # Environment variables
```

---

## Contribution

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Make your changes and commit (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Create a Pull Request

---

## License

This project is licensed under the **ISC License**.

---

## Contact

**Author:** Sheikh Lukman  
**GitHub:** [https://github.com/lukmanxpert](https://github.com/lukmanxpert)

