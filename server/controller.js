const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");

    let userAvailable = await db.check_username(username);
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
      const { username, password } = req.body;
      const db = req.app.get('db')

      const result = await db.check_username(username)
      const newUser = result[0]
      if(newUser){
          return res.status(409).send('Username not available')
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const registerUser = await db.register_user(username, hash)
      const user = registerUser[0];
      req.session.user = {username: user.username, id: user.id };
      return res.status(200).send(req.session.user)

  },

  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send('good to go')
  }
};
