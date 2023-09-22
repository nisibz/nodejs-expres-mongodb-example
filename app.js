const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
