require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const { SERVER_PORT, CONNECTION_STRING } = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

port = SERVER_PORT;
app.listen(port, () => {
  console.log(`server on ${port} `);
});
