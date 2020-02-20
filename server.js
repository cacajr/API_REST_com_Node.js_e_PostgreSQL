const express = require("express");
const app = express();

const db = require("./queries");


app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);

app.listen(3000);