const db = require("../db/database")
const bcryptjs = require("bcryptjs");
// TODO implement login and signup logic

class Account {
  constructor(username=undefined, id=undefined) {
    this.username = username;
    this.id = id;
    this.winstreak = 0;
  }

  encryptPassword = (password) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, () => {
        // Store password in DB
      });
    });
  };

  login = (username, password) => {
    // TODO
  }

  signup = (username, password) => {
    // TODO
  }
}
