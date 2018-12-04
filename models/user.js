const db = require("../db/database");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

class User {
  constructor(username=undefined, token=undefined) {
    this.username = username;
    this.token = token;
    this.wins = 0;
    this.loses = 0;
    this.winstreak = 0;
  }

  encryptPassword(password) {
    return new Promise((resolve, reject) =>
      bcrypt.hash(password, 10, (err, hash) => {
        err ? reject(err) : resolve(hash)
      })
    )
  }

  register(username, password) {
    return new Promise((resolve, reject) => {
      this.encryptPassword(password).then((result) => {
        console.log("INSERT")
        db.executeQuery(
          `INSERT INTO public."USERS"("USERNAME", "PASSWORD")` +
           `VALUES ($1, $2);`,
          [username, result]).then((result) => { resolve(result) })
      })
    })
  }

  login (username, password) {
    return new Promise((resolve, reject) => {
      db.executeQuery(`SELECT * FROM public."USERS" WHERE "USERNAME" = '${username}';`).then((queryResult) => {
        let result = JSON.parse(queryResult)
        if (result.length > 0 && bcrypt.compareSync(password, result[0]['PASSWORD'])) {
          this.username = result[0]['USERNAME']
          this.token = result[0]['ID']
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  }

  regexUsername (username) {
    return /^[a-zA-Z\d]{3,29}$/.test(username)
  }

  regexPassword (pass) {
    let lowers = pass.match(/[a-z]/)
    let lengths = pass.length >= 6
    let valid

    if (
      lowers === null ||
      lengths === false
    ) valid = false

    if (
      lowers !== null &&
      lengths
    ) valid = true

    return valid
  }

  validateUsername (username) {
    return new Promise((resolve, reject) => {
      if (this.regexUsername(username)) {
        db.executeQuery('SELECT "USERNAME" FROM public."USERS";')
          .then((result) => {
            let userArray = JSON.parse(result)
            let found = userArray.some((el) => {
              return el.USERNAME === username
            })
            resolve(!found)
          })
      } else {
        reject(new Error('Bad Username'))
      }
    })
  }
}



module.exports = {
  User
}