import React, { Component } from "react";
import "./Game.css";

class Manual extends Component {

  render() {
    return (
      <div className = "manualbody">
        <h1 >How to play Coda:</h1>
        <h3>Objectives</h3>
          <p>
            <span className="stress">The goal of this game is to guess the opponent's cards.</span> <br/>
            There are black cards and white cards. <br/>
            The numbers are ranging from 0 to 11 and there is a Joker for each color which is counted as 12. <br/>
            The Lowest number will go to your left and highest to your right. <br/>
            If same numbers, the black card will be left to the white. <br/>
          </p>
        <h3>Game Play</h3>
          <p>
            The players start the game with each receiving 3 cards from the Pool. <br/>
            <span className="stress">The Cards/Numbers</span> in the middle represent the current numbers of cards in the Pool. <br/>
            After the setup, each player takes turn and start guessing each other's card <br/>
            If you succeed to guess all computer cards, you win. <br/>
            If computer guesses all your cards, computer wins. <br/>
            Enjoy!
            <p>
              <span className="stress">To Guess Computer's Card:</span> <br/>
              1. Draw a card from the Pool <br/>
                  (by clicking either black or white card in the middle) <br/>
              2. click a computer's card you want to guess <br/>
              3. type the number in the input <br/>
              4. click <span className="stress">Guess</span>
            </p>
          </p>
      </div>
    );
  }
}


  export default Manual;