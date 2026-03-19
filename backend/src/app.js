require("dotenv").config();
const express = require("express");
const connectMongoDB = require("./utils/mongoDBConnection");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// DB connect
connectMongoDB();

// test route
app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

// routes
const router = require("./routes/index");
app.use("/api", router);

// start server
app.listen(PORT, () => {
  console.log(`Server Started At PORT : ${PORT}`);
});