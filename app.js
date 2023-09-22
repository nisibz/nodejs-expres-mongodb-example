const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// api route
app.get("", async (req, res) => {
  res.status(200).send("my app123333");
});

const data = [{ user: "nantachai" }];

app.get("/api", async (req, res) => {
  res.status(200).json({ data });
});

app.post("/api", async (req, res) => {
  data.push({ user: req.body.user });
  res.status(201).send("add data success");
});

app.put("/api/:user", async (req, res) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].user == req.params.user) {
      data[i].user = req.body.user;
    }
  }

  res.status(200).send("update data succes");
});

app.delete("/api/:user", async (req, res) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].user === req.params.user) {
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
