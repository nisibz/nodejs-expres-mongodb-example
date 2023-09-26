const express = require("express");
const router = express.Router();

const {
  getAllTodolist,
  insertTodolist,
  updateTodolist,
  deleteTodolist,
} = require("../controller/Todolist.controller");

router
  .route("/todolist")

  .get(getAllTodolist)
  .post(insertTodolist);

router
  .route("/todolist/:id")

  .put(updateTodolist)
  .delete(deleteTodolist);

module.exports = {
  Todolist: router,
};
