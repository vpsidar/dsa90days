"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.PlayerType = void 0;
var BotDifficultyLevel;
(function (BotDifficultyLevel) {
    BotDifficultyLevel[BotDifficultyLevel["EASY"] = 0] = "EASY";
    BotDifficultyLevel[BotDifficultyLevel["MEDIUM"] = 1] = "MEDIUM";
    BotDifficultyLevel[BotDifficultyLevel["HARD"] = 2] = "HARD";
})(BotDifficultyLevel || (BotDifficultyLevel = {}));
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["HUMAN"] = 0] = "HUMAN";
    PlayerType[PlayerType["BOT"] = 1] = "BOT";
})(PlayerType || (exports.PlayerType = PlayerType = {}));
class Player {
    constructor(name, playerType) {
        this.symbol = '';
        this.name = name;
        this.playerType = playerType;
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }
}
exports.Player = Player;
class Bot extends Player {
    constructor(difficultyLevel) {
        super('BOT', PlayerType.BOT);
        this.botDifficultyLevel = difficultyLevel;
    }
}
