const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;
const server = "https://wallhaven.cc/api/v1";
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://heavenwalls.netlify.app"); // Replace with your React app's URL
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/wallhaven/home", async (req, res) => {
  try {
    const apiUrl = `${server}/search?q=4k`; // Your Wallhaven API URL
    const response = await axios.get(apiUrl);

    // Extract the relevant data from the response
    const data = response.data; // Adjust this based on the structure of the Wallhaven API response

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/wallhaven/latest", async (req, res) => {
  const page = req.query.page;
  try {
    const apiUrl = `${server}/search?page=${page}`; // Your Wallhaven API URL
    const response = await axios.get(apiUrl);

    // Extract the relevant data from the response
    const data = response.data; // Adjust this based on the structure of the Wallhaven API response

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/wallhaven/topwalls", async (req, res) => {
  const page = req.query.page;
  const toprange = req.query.toprange;
  try {
    const apiUrl = `${server}/search?sorting=toplist&topRange=${toprange}&page=${page}`; // Your Wallhaven API URL
    const response = await axios.get(apiUrl);

    // Extract the relevant data from the response
    const data = response.data; // Adjust this based on the structure of the Wallhaven API response

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/wallhaven/random", async (req, res) => {
  const page = req.query.page;
  try {
    const apiUrl = `${server}/search?sorting=random&page=${page}`; // Your Wallhaven API URL
    const response = await axios.get(apiUrl);

    // Extract the relevant data from the response
    const data = response.data; // Adjust this based on the structure of the Wallhaven API response

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/wallhaven/search", async (req, res) => {
  const page = req.query.page;
  const searchTerm = req.query.search;
  try {
    const apiUrl = `${server}/search?q=${searchTerm}`; // Your Wallhaven API URL
    const response = await axios.get(apiUrl);

    // Extract the relevant data from the response
    const data = response.data; // Adjust this based on the structure of the Wallhaven API response

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get("/api/wallhaven/w/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const apiUrl = `${server}/w/${id}`; // Your Wallhaven API URL
    const response = await axios.get(apiUrl);

    // Extract the relevant data from the response
    const data = response.data; // Adjust this based on the structure of the Wallhaven API response

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
