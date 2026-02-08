import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

/*
===========================
MIDDLEWARE
===========================
*/
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://your-frontend-domain.netlify.app"
  ],
  credentials: true
}));

app.use(express.json());


/*
===========================
API ROUTES
===========================
*/
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/upload", uploadRoutes);


/*
===========================
HEALTH CHECK
===========================
*/
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});


/*
===========================
GLOBAL ERROR HANDLER
===========================
*/
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ error: "Server Error" });
});


/*
===========================
START SERVER AFTER DB CONNECT
===========================
*/
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ DB Connection Failed:", error);
  }
};

startServer();
