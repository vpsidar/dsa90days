import { Cell } from "./Cell";

export class Board {
    private size:number = 3;
    public cells:Cell[][];
    constructor(size:number){
        this.size = size;
        this.cells = []
        this.createBoardCells(size)
    }
    private createBoardCells(size:number){
        for(let i=0; i<size; i++){
            this.cells[i] = []
            for(let j=0;j<size; j++){
                const cell = new Cell(i,j)
                this.cells[i][j] = cell
            }
        }
    }
}