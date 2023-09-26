const { Test } = require("../model/Test.model");

const getAllTest = async (req, res) => {
  try {
    const test = await Test.find();
    res.status(200).send({ data: test });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getAllTest,
};
