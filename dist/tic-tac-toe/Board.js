"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Cell_1 = require("./Cell");
class Board {
    constructor(size) {
        this.size = 3;
        this.size = size;
        this.cells = [];
        this.createBoardCells(size);
    }
    createBoardCells(size) {
        for (let i = 0; i < size; i++) {
            this.cells[i] = [];
            for (let j = 0; j < size; j++) {
                const cell = new Cell_1.Cell(i, j);
                this.cells[i][j] = cell;
            }
        }
    }
}
exports.Board = Board;
