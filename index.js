const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: "0128888888" },
  { id: 1, name: "Moriom", email: "moriom@gmail.com", phone: "0128888888" },
  { id: 2, name: "Badhon", email: "badhon@gmail.com", phone: "0128888888" },
  { id: 3, name: "Jhontus", email: "jhontus@gmail.com", phone: "0128888888" },
  { id: 4, name: "Nilima", email: "nilima@gmail.com", phone: "0128888888" },
  { id: 5, name: "Bipasha", email: "bipasha@gmail.com", phone: "0128888888" },
];
//create api
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

//adding data to api
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
  console.log("receiving the data of", req.body);
});

app.listen(port, () => {
  console.log("Listening to port: ", port);
});
