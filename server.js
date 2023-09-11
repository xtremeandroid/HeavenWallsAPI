import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import wallRoutes from "./routes/wallRoutes.js";

connectDB();
const port = process.env.PORT;
const app = express();

// Fixes cors issue
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://heavenwalls.netlify.app"); // Replace with your React app's URL
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parse middleware
app.use(cookieParser());
// routes
app.use("/api/users", userRoutes);
app.use("/api/wallhaven", wallRoutes);

app.get("/", (req, res) => {
  res.send("Hello This is HeavenWalls API");
});

app.listen(port, () => {
  console.log(`Server Running on Port - ${port}`);
});
