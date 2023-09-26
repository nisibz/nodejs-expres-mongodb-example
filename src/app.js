const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { connectMongodb } = require("./utils/Mongoose.utils");
const { Todolist } = require("./routes/Todolist.route");
const { Test } = require("./routes/Test.route");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

connectMongodb();

app.use("/api", Todolist);
app.use("/api", Test);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
