![Node.js](https://img.shields.io/badge/Node.js-v18.0.0-green)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# 🛒 E-commerce Backend App

This is a Node.js-based backend for an E-commerce application, built with Express.js and MongoDB. It includes user authentication (JWT), image uploads, product management, and a secure admin interface. The frontend is rendered using EJS and styled with Tailwind CSS.

---

## 🚀 Features

- 🧾 User Registration & Login with JWT
- 👨‍💼 Admin: Create and manage products
- 🛍️ Shop page: View all products
- 🛒 Cart system with item addition/removal
- 🖼️ Image upload using Multer
- 🌈 Custom colors for product cards (background, panel, text)
- 🔐 Protected routes using middleware
- 📦 MongoDB integration using Mongoose

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating Engine**: EJS
- **Styling**: Tailwind CSS
- **Authentication**: JWT
- **Image Upload**: Multer
- **Session & Flash Messages**: express-session, connect-flash

---

## 📁 Folder Structure
E-commerce web/
├── config/
│   ├── default.json
│   └── mongoose-connection.js
├── controllers/
├── middlewares/
├── models/
├── public/
├── routes/
├── views/
├── utils/
├── app.js
└── README.md
---

## 📦 Installation

```bash
git clone https://github.com/SIMIIMISHRA/ecommerce-backend.git
cd ecommerce-backend
npm install

Environment Configuration (config/default.json):
{
  "MONGODB_URI": "mongodb://127.0.0.1:27017",
  "JWT_SECRET": "your_jwt_secret"
}

📦 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/ecommerce-backend.git
cd ecommerce-backend
Install dependencies

bash
Copy
Edit
npm install
▶️ Run the Application
bash
Copy
Edit
npm start
# or
npx nodemon app.js
Visit http://localhost:3000 to access the app locally.

📤 Deployment
This backend can be deployed using:

Render

Railway

Make sure to configure environment variables like MONGODB_URI and JWT_SECRET on the deployment platform.

🖼️ Image Uploads
Product images are uploaded via Multer

Stored in MongoDB as binary Buffer data

Rendered in the UI using Base64 encoding

🙋‍♀️ Author:
Simi Mishra
Full Stack Developer | MERN | Java | MongoDB
GitHub: https://github.com/SIMIIMISHRA


📃 License
This project is licensed under the MIT License.

📌 Notes
The project uses Flash messages for alerts on login/register

Routes like /create are protected and only accessible after login

Works best with MongoDB running locally or via cloud (MongoDB Atlas)

yaml
Copy
Edit


