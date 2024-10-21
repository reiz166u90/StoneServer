const express = require("express"); // Corrected the way express is imported
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');

const UserModel = require("./models/user");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://reired63:GPyuw758DzBPgBVh@stone-db.uxivk.mongodb.net/?retryWrites=true&w=majority&appName=Stone-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB", err));

app.post("/auth/user", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json({ error: err.message })); 
});
app.get("/start", (req, res) => {
  res.status(200).json({ message: "Start endpoint hit!" });
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server is running on port 3000!");
});