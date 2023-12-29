"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Board");
const Player_1 = require("./Player");
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
const players = [];
const playerCount = promptR('How many player do you want ');
for (let i = 0; i < playerCount; i++) {
    let name = promptR(`Player ${i + 1} name `);
    let symbol = promptR(`Player ${i + 1} symbol `);
    const player = new Player_1.Player(name, Player_1.PlayerType.HUMAN);
    player.setSymbol(symbol);
    players.push(player);
}
let board = new Board_1.Board(boardSIze);
let game = new Game(board, players, GameState.IN_PROGRESS, []);
console.log(boardSIze, playerCount);
console.log(JSON.stringify(game));
