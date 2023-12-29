"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var CellState;
(function (CellState) {
    CellState[CellState["FILLED"] = 0] = "FILLED";
    CellState[CellState["EMPTY"] = 1] = "EMPTY";
    CellState[CellState["BLOCKED"] = 2] = "BLOCKED";
})(CellState || (CellState = {}));
class Cell {
    constructor(row, col) {
        this.cellState = CellState.EMPTY;
        this.row = row;
        this.col = col;
    }
    setCellState(state) {
        this.cellState = state;
    }
}
exports.Cell = Cell;
