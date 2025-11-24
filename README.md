# Real-Time Chat Application (MERN + Socket.IO + TailwindCSS)

A full-stack real-time chat application built with **MongoDB, Express.js, React, Node.js**, and **Socket.IO**, featuring live messaging, user authentication, online/offline indicators, and a clean UI using **TailwindCSS + DaisyUI**.

This project demonstrates end-to-end development of a complete real-time system — including backend architecture, frontend UI/UX, authentication, database design, and production deployment.

---

## 🚀 Live Demo

🔗 **https://chat-app-1149.onrender.com**  

---

## 🛠 Tech Stack

### Frontend
- React.js  
- Vite  
- Zustand  
- Socket.IO Client  
- TailwindCSS + DaisyUI  
- React Router  
- React Icons  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Socket.IO  
- JWT Authentication  
- Bcrypt.js  

### Deployment
- Render Web Service  
- MongoDB Atlas  

---

## ✨ Features

### 🔐 Authentication
- Signup & Login  
- Secure JWT authentication  
- HTTP-only cookies  
- Password hashing  

### 💬 Real-Time Messaging
- Instant messaging with WebSockets  
- Online/offline user status  
- New message notifications  
- Auto-scroll to latest message  

### 🧑‍💻 User Experience
- Clean responsive UI  
- Sidebar user list  
- Toast notifications  
- Smooth animations  

### ⚙️ Architecture
- Modular Express routes  
- MVC-style controllers  
- Resilient Socket.IO setup  
- Centralized Mongo connection  
- Reusable socket helpers  

---
## 📁 Folder Structure

chat-app/ <br>
│ <br>
├── backend/ <br>
│ ├── controllers/ <br>
│ ├── routes/ <br>
│ ├── models/ <br>
│ ├── socket/ <br>
│ │ └── socket.js <br>
│ ├── db/ <br>
│ │ └── connectMongo.js <br>
│ └── server.js <br>
│ <br>
├── frontend/ <br>
│ ├── src/ <br>
│ ├── public/ <br>
│ ├── package.json <br>
│ └── vite.config.js <br>
│ <br>
├── package.json (root) <br>
└── README.md <br>

---

## 🧩 Environment Variables

### Backend (`backend/.env`)

PORT=5000
MONGO_DB_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
NODE_ENV=development

### Frontend (`frontend/.env`)

### Production (Render)

MONGO_DB_URI=your_atlas_url
JWT_SECRET=your_secret
CLIENT_URL=https://your-render-url
NODE_ENV=production

## 🏗 Running Locally

### 1. Clone Repo

```bash
git clone https://github.com/vinay7626/chat-app
cd chat-app
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies
```
cd frontend
npm install
cd ..
```

### 4. Start backend server
```
npm run server
```

### 5. Start frontend dev server
```
cd frontend
npm run dev
```

Local URLs

Frontend: http://localhost:3000

Backend: http://localhost:5000
