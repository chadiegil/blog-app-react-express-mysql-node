import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
