const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    const userAvailable = await db.check_username(username);
    userAvailable = userAvailable[0];
    if (!userAvailable) {
      res.status(401).send("username incorrect");
    }
    const authentic = bcrypt.compareSync(
      password,
      userAvailable.helo_user_password
    );

    if (authentic) {
      delete userAvailable.helo_user_password;
      req.session.user = userAvailable;
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send("password incorrect");
    }
  },

  register: async (req, res) => {
      
  }
};
