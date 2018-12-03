import React, { Component } from "react";
import "./stylesheets/leaderboard.css";

export default class LeaderBoard extends Component {

    renderPlayer(player){
        return (
            <div
                key={player.id}
                className="playerScore">
                <div>Name:{player.name}</div>
                <div>Wins:{player.wins}</div>
                <div>Loses:{player.loses}</div>
            </div>
        )
    }

    render(){

      return(
          <header className = "leaderboard">
          <div id="bg"></div>
          <div className="leaderboard-container">
            <div className="row-header">
              <div class="row">
                <div class="col">
                  <p>User Name</p>
                </div>
                <div class="col">
                  <p>Winstreak</p>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col">
                <p>Kahoot.json</p>
              </div>
              <div class="col">
                <p>9999</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>HELLO</p>
              </div>
              <div class="col">
                <p>HELLO</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>HELLO</p>
              </div>
              <div class="col">
                <p>HELLO</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>HELLO</p>
              </div>
              <div class="col">
                <p>HELLO</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>HELLO</p>
              </div>
              <div class="col">
                <p>HELLO</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p>HELLO</p>
              </div>
              <div class="col">
                <p>HELLO</p>
              </div>
            </div>
          </div>
        </header>

        )
    }
}