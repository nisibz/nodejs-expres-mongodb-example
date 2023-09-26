const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  user: String,
});

const Data = mongoose.model("Datas", dataSchema);

module.exports = { Data };
