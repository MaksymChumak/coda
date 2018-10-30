class User {
  constructor (username, password, currentStreak=0, highestStreak=0) {
    this.username = username;
    this.userScore = password;
    this.currentStreak = currentStreak;
    this.highestStreak = highestStreak;
  };
};

module.exports = {
  User
};