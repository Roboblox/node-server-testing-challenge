const express = require("express");

const Users = require("../users/usersModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/users", (req, res) => {
  // endpoint with supertest
  Users.getAll() // db helpers jest
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = server;
