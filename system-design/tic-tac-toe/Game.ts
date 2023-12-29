import { Board } from "./Board";
import { Move } from "./Move";
import { Player, PlayerType } from "./Player";


var promptR = require('prompt-sync')();
enum GameState {
    IN_PROGRESS,
    SUCCESS,
    DRAW,
    PAUSE
}
class Game {
    private board:Board;
    private players:Array<Player>;
    private moves:Array<Move>;
    private gameState:GameState;
    private winner:Player|null = null ;
    private nextPlayerMoveIndex:Number;
    private winningStrategies:Array<WinningStrategy>;

    constructor(board:Board,players:Array<Player>,gameState:GameState,winningStrategies:Array<WinningStrategy>){
        this.board = board;
        this.gameState = gameState;
        this.players = players;
        this.winningStrategies = winningStrategies;
        this.nextPlayerMoveIndex = 1;
        this.moves = [];
    }

    

}



const boardSIze = promptR('Provide board size ')
const players:Player[] = []
const playerCount = promptR('How many player do you want ');
for(let i=0; i<playerCount; i++){
    let name = promptR(`Player ${i+1} name `);
    let symbol = promptR(`Player ${i+1} symbol `);
    const player = new Player(name,PlayerType.HUMAN);
    player.setSymbol(symbol);
    players.push(player);
}
let board = new Board(boardSIze)
let game = new Game(board,players,GameState.IN_PROGRESS,[]);

console.log(boardSIze,playerCount);
console.log(JSON.stringify(game));


