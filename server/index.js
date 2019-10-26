require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: { maxAge: 100 * 60 * 60 }
  })
);

app.post("/auth/register", ctrl.register);
app.post("/auth/login", ctrl.login);
app.delete("/auth/logout", ctrl.logout);

port = SERVER_PORT;
app.listen(port, () => {
  console.log(`server on ${port} `);
});
