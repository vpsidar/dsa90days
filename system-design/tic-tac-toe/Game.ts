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

const playerCount = promptR('How many player do you want ');
let board = new Board()
//let game = new Game()

console.log(boardSIze,playerCount);


