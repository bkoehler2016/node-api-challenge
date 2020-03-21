const express = require("express");
const actionRouter = require("./routers/actionRouter");
const projectRouter = require("./routers/projectRouter");

const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use("/api/actions", actionRouter);
server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Node Sprint Challange</h1>`);
});

module.exports = server;
