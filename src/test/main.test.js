const gameOfLife = require('../../main.js')
const { describe, expect, test } = require('@jest/globals')

describe('main', () => {
    test('Verifying the rows of the board = 4', () => {
        expect(gameOfLife.getRows()).toBe(4)
    })
    test('Verifying the columns of the board = 8', () => {
        expect(gameOfLife.getColumns()).toBe(8)
    })
    
    const row = 2
    const col = 2
    
    const cells = (life, neighbors, LifeExpected) => {
        test(`Test with cell ${life} with live neighbors = ${neighbors}, expected cell: ${LifeExpected}`, () => {
            gameOfLife.newcell.setLife(life)
            gameOfLife.newcell.setNeighbors(neighbors)
            gameOfLife.rulesCell(gameOfLife.newcell, row, col)
            const newArray = gameOfLife.getTest()
            const expectCell = newArray[row][col]
            expect(expectCell.getLife()).toBe(LifeExpected)
        })
    }
    
        cells(1, 1, 0)// Underpopulation - Live cell, with < 2 neighbors, expected = dead cell
        cells(1, 4, 0)// Overcrowding - Live cell, with 3 neighbors, expected = live cell
        cells(1, 3, 1)// Live next generation - Live cell, with 3 neighbors, expected = live cell
        cells(0, 3, 1)// Born - Dead cell, with 3 neighbors, expected = live cell
})
