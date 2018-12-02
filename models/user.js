const db = require("../db/database");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

class User {
  constructor(username=undefined, id=undefined) {
    this.username = username;
    this.id = id;
    this.wins = 0;
    this.loses = 0;
    this.winstreak = 0;
  }

  encryptPassword = (password) => {
    return new Promise((resolve, reject) =>
      bcrypt.hash(password, 10, (err, hash) => {
        err ? reject(err) : resolve(hash)
      })
    )
  }

  createToken = () => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, data) => {
        err ? reject(err) : resolve(data.toString('base64'))
      })
    })
  }

  register (username, password) {
    return new Promise((resolve, reject) => {
      this.encryptPassword(password).then((result) => {
        db.executeQuery(
          `INSERT INTO public."USERS"("USERNAME", "PASSWORD")` +
           `VALUES ($1, $2);`,
          [username, result]).then((result) => { resolve(result) })
      })
    })
  }

  login = (username, password) => {
    return new Promise((resolve, reject) => {
      db.executeQuery(`SELECT * FROM public."USERS" WHERE "USERNAME" = '${username}';`).then((queryResult) => {
        let result = JSON.parse(queryResult)
        if (result.length > 0 && bcrypt.compareSync(password, result[0]['PASSWORD'])) {
          this.username = result[0]['USERNAME']
          this.id = result[0]['ID']
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }
}

module.exports = {
  User
}