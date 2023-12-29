enum BotDifficultyLevel {
    EASY,
    MEDIUM,
    HARD
}
export enum PlayerType {
    HUMAN,
    BOT
}
export class Player {
    private name:string;
    private symbol:string = '';
    private playerType:PlayerType;
    constructor(name:string,playerType:PlayerType){
        this.name = name;
        this.playerType = playerType;
    }
    setSymbol(symbol:string) {
        this.symbol = symbol;
    }
}

class Bot extends Player {
    private botDifficultyLevel:BotDifficultyLevel;
    constructor(difficultyLevel:BotDifficultyLevel) {
        super('BOT',PlayerType.BOT);
        this.botDifficultyLevel = difficultyLevel;
    }
}