const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
  name: String,
  time: Date,
  success: Boolean,
  successDate: Date,
});

const TodoList = mongoose.model("TodoLists", todoListSchema);

module.exports = { TodoList };
