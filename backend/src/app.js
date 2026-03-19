import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectMongoDB from "./utils/mongoDBConnection.js";

import userRoutes from "./routes/user-route.js";
import rootRoutes from "./routes/index.js";

const app = express();

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Database Connection
connectMongoDB();

// Routes
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.use("/api/users", userRoutes);
app.use("/api", rootRoutes);

export default app;