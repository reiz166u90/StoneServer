const express = require("express"); // Corrected the way express is imported
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');

const UserModel = require("./models/user");

const app = express(); // Instantiate express application
app.use(express.json()); // Enable JSON parsing
app.use(cors()); // Enable CORS

// Log the Mongo URI for debugging
console.log("Mongo URI:", process.env.MONGO_URI); 

// Connect to MongoDB using the provided URI
mongoose.connect("mongodb+srv://reired63:GPyuw758DzBPgBVh@stone-db.uxivk.mongodb.net/?retryWrites=true&w=majority&appName=Stone-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

// Define the POST route to create a user
app.post("/auth/user", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.status(201).json(user)) // Return created user with status 201
    .catch((err) => res.status(500).json({ error: err.message })); // Return error message with status 500
});

// Create the HTTP server and listen on port 3000
const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
