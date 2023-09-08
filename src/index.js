const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({ destination: (req, file, cb) => {
    cb(null, './src/uploads/');
}, filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
} })
const upload = multer({ storage })

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("/");
});

// User
app.get("/user", (req, res) => {
  const user = [
    {
      id: 1,
      name: "wei",
    },
    {
      id: 2,
      name: "siska",
    },
  ];

  res.send(user);
});

app.post("/user", (req, res) => {
  const data = req.body;

  res.send(data);
});

app.put("/user", (req, res) => {
  const data = req.body;

  res.send(data);
});

app.delete("/user/:id", (req, res) => {
  console.log(req.params.id);

  res.send("Deleted Succesfuly")
});

// Recipes
app.post("/recipes", upload.single("file"), (req, res) => {
    res.send("Upload Succesfuly")
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
