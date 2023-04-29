const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 54 },
    { firstName: "Steve", lastName: "Harvey", age: 66 },
    { firstName: "Joe", lastName: "Jonas", age: 29 }
  ],
  _games: [
    { opponent: "Gators", teamPoints: 4, opponentPoints: 6 },
    { opponent: "Hurricanes", teamPoints: 6, opponentPoints: 2 },
    { opponent: "Hawks", teamPoints: 10, opponentPoints: 16 }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      newAge: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

team.addGame("Titans", 100, 98);
console.log(team.games);
