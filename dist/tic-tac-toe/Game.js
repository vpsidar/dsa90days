"use strict";
var promptR = require('prompt-sync')();
var GameState;
(function (GameState) {
    GameState[GameState["IN_PROGRESS"] = 0] = "IN_PROGRESS";
    GameState[GameState["SUCCESS"] = 1] = "SUCCESS";
    GameState[GameState["DRAW"] = 2] = "DRAW";
    GameState[GameState["PAUSE"] = 3] = "PAUSE";
})(GameState || (GameState = {}));
class Game {
    constructor(board, players, gameState, winningStrategies) {
        this.winner = null;
        this.board = board;
        this.gameState = gameState;
        this.players = players;
        this.winningStrategies = winningStrategies;
        this.nextPlayerMoveIndex = 1;
        this.moves = [];
    }
}
const boardSIze = promptR('Provide board size ');
const playerCount = promptR('How many player do you want ');
console.log(boardSIze, playerCount);
