const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// connect mongodb database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectMongodb = () => {
  const db = mongoose.connection;

  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

module.exports = { connectMongodb };
