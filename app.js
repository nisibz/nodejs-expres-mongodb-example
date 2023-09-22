const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(cors());

// connect mongodb database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

// model
const dataSchema = new mongoose.Schema({
  user: String,
});

const Data = mongoose.model("Datas", dataSchema);

const postSchema = new mongoose.Schema({
  user: String,
});

const post = mongoose.model("Posts", postSchema);

// api route
app.get("", async (req, res) => {
  res.status(200).send("my app");
});

app.get("/api", async (req, res) => {
  const data = await Data.find();
  res.status(200).json({ data });
});

app.post("/api", async (req, res) => {
  const data = new Data({ user: req.body.user });
  await data.save();
  res.status(201).send("add data success");
});

app.put("/api/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const updatedItem = await Data.findByIdAndUpdate(itemId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const deletedItem = await Data.findByIdAndRemove(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(204).json(); // Respond with no content for successful deletion
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// model todo list

const todoListSchema = new mongoose.Schema({
  name: String,
  time: Date,
  success: Boolean,
});

const TodoList = mongoose.model("TodoLists", todoListSchema);

// route

app.get("/api/todoList", async (req, res) => {
  try {
    const items = await TodoList.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/todoList", async (req, res) => {
  try {
    const newItem = new TodoList(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/api/todoList/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const updatedItem = await TodoList.findByIdAndUpdate(itemId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/todolist/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const deletedItem = await TodoList.findByIdAndRemove(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(204).json(); // Respond with no content for successful deletion
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
