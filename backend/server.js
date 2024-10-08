import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cors from "cors";

import connectMongo from "./db/connectMongo.js";

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/",(req,res) => {
//     res.send("Hello World!!");
// });

app.listen(PORT, () => {
  connectMongo();
  console.log(`server listening on port ${PORT}`);
});
