const express = require("express");
const app = express();

//call the arq. that contain the db's queries
const db = require("./queries");

//routes for each query
app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);

app.listen(3000);