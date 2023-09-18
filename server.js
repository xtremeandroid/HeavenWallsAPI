import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import wallRoutes from "./routes/wallRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB();
const port = process.env.PORT;
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//fix cors issue
app.use(
  cors({
    origin: "https://heavenwalls.netlify.app",
  })
);

//cookie parse middleware
app.use(cookieParser());
// routes
app.use("/api/users", userRoutes);
app.use("/api/wallhaven", wallRoutes);

app.get("/", (req, res) => {
  res.send("Hello This is HeavenWalls API");
});

//custom error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running on Port - ${port}`);
});
