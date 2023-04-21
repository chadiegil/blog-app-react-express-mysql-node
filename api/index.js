const express = require("express");
const app = express();
const PORT = 3001;
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
