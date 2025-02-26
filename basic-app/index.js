const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 

const app = express();
const PORT = 3000;

const MONGO_URI = process.env.MONGO_URI || "mongodb://admin:password@localhost:27017/userdb?authSource=admin";

// Format: mongodb://username:password@host:port/database

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB successfully!"))
  .catch(err => console.error("❌ MongoDB connection error:", err));




  // Define Schema for Hospitals
// const HospitalSchema = new mongoose.Schema({
//   name: String,
//   location: String,
//   capacity: Number
// }, { collection: "hospitals" }); // <-- Custom collection name

// // Create Model
// const Hospital = mongoose.model("Hospital", HospitalSchema);

// // module.exports = Hospital;

// const newHos= new Hospital(req.body);
// await newHos.save();   //to save the data

// const hos = await Hospital.find(); // to get all result




app.get("/", (req, res) => {
  res.send("Hello, MongoDB is connected!");
});

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

const cors = require("cors");
const bodyParser = require("body-parser");
// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected!"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

// Define Schema & Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model("User", UserSchema);

// API Route: Store Data in MongoDB
app.post("/add_users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added successfully!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API Route: Fetch Data from MongoDB
app.get("/get_users", async (req, res) => {
  try {
    console.log("Fetching Users...");
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);  // Log the actual error
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});