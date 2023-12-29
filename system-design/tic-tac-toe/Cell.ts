enum CellState {
    FILLED,
    EMPTY,
    BLOCKED
}
export class Cell {
    row:number
    col:number
    cellState:CellState = CellState.EMPTY;

    constructor(row:number, col:number) {
        this.row = row;
        this.col = col;
    }

    setCellState(state:CellState){
        this.cellState = state;
    }
}