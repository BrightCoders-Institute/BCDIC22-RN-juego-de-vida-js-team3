const gameOfLife = require('../../main.js')

test('Verifying the rows of the board = 4', () => {
    expect(gameOfLife.getRows()).toBe(4)
})

test('Verifynd the columns of the board = 8', () => {
    expect(gameOfLife.getColumns()).toBe(8)
})

let row = 2
let col = 2

const cells = (life, neighbors, LifeExpected) => { 
    test(`Test with cell ${life} with live neighbors = ${neighbors}, expected cell: ${LifeExpected}`,() => {
    gameOfLife.newcell.setLife(life)
    gameOfLife.newcell.setNeighbors(neighbors)
    gameOfLife.rulesCell(gameOfLife.newcell,row,col);
    let newArray = gameOfLife.getTest()
    let expectCell= newArray[row][col]      
    expect(expectCell.getLife()).toBe(LifeExpected);
});
};

cells(1,1,0) // Underpopulation - Live cell, with < 2 neighbors, expected = dead cell 
cells(1,4,0) // Overcrowding - Live cell, with 3 neighbors, expected = live cell
cells(1,3,1) // Live next generation - Live cell, with 3 neighbors, expected = live cell
cells(0,3,1) // Born - Dead cell, with 3 neighbors, expected = live cell
