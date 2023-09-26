const { TodoList } = require("../model/Todolist.model");

const getAllTodolist = async (req, res) => {
  try {
    const todolist = await TodoList.find();
    res.status(200).json({ data: todolist });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const insertTodolist = async (req, res) => {
  try {
    const newItem = new TodoList(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateTodolist = async (req, res) => {
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
};

const deleteTodolist = async (req, res) => {
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
};

module.exports = {
  getAllTodolist,
  insertTodolist,
  updateTodolist,
  deleteTodolist,
};
