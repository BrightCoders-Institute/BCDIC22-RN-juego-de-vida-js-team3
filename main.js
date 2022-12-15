const Cell = require('./src/classes/cell.js');

const rows = 4
const columns = 8
let resultArrayCell = ''
let resutNewArray = ''
let newArray
let arrayCells

const play = () => {
    const showGame = startGame()
    const numOfGens = 6

    for (let i = 0; i < numOfGens; i++) {
        console.log(`Generation No.${i +1}:`)
        iteration(arrayCells)
        const showRes = showResult(newArray)
        console.log(showRes)
        arrayCells = newArray
    }
}

const startGame = () => {
    resultArrayCell = ''
    createArrayCell()
    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < columns; y++) {
            const randomvar = Math.random()
            arrayCells[x][y] = checkRamdomVar(randomvar, arrayCells[x][y])
            resultArrayCell += arrayCells[x][y].cellToString()
        }
        resultArrayCell += '\n'
    }
    newArray = arrayCells
    return resultArrayCell
}

const createArrayCell = () => {
    arrayCells = new Array(rows)
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(columns)
    }
}

const checkRamdomVar = (randomvar, arrayCells) => {
    if (randomvar <= 0.5) {
        arrayCells = new Cell(0, 0)
    } else {
        arrayCells = new Cell(1, 0)
    }
    return arrayCells
}

const iteration = (ParamarrayCells) => {
    for (let x = 0; x < ParamarrayCells.length; x++) {
        for (let y = 0; y < ParamarrayCells[x].length; y++) {
            let neighbors = 0
            neighbors = countNeighbors(ParamarrayCells, neighbors, x, y)
            ParamarrayCells[x][y].setNeighbors(neighbors)
            rulesCell(ParamarrayCells[x][y], x, y)
        }
    }
}

const countNeighbors = (ParamarrayCells, neighbors, x, y) => {
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            try {
                neighbors = checkIfNeighbors(ParamarrayCells[x + i][y + j], ParamarrayCells[x][y], neighbors)
            } catch (e) { }
        }
    }
    return neighbors
}

const checkIfNeighbors = (ParamarrayCellsAround, ParamarrayCellsSimple, neighbors) => {
    if (ParamarrayCellsAround.getLife() == 1) {
        if (ParamarrayCellsSimple.getLife() == 1 && i == 0 && j == 0) {
        } else {
            neighbors++
        }
    }
    return neighbors
}

// Reglas del juego
// Cualquier celula viva menor a 2 vecinos vivos, muere por soledad
// Cualquier celula viva mayor a 3 vecinos vivos, muere por sobrepoblación
// Cualquier celula viva con dos o tres vecinos vivos, sobrevive la siguiente generación
// Cualquier celula muerta con exactamente 3 vecinos vivos, se convierte en una cellula viva

const rulesCell = (cell, rows, columns) => {
    if ((cell.getLife() === 1) && (cell.getNeighbors() < 2)) {
        newArray[rows][columns].setLife(0) // Soledad
    } else if ((cell.getLife() === 1) && (cell.getNeighbors() > 3)) {
        newArray[rows][columns].setLife(0) // Sobrepoblación
    } else if ((cell.getLife() === 0) && (cell.getNeighbors() === 3 || cell.getNeighbors() === 2)) {
        newArray[rows][columns].setLife(1) // Supervivencia
    } else if ((cell.getLife() === 1) && (cell.getNeighbors() === 3)) {
        newArray[rows][columns].setLife(1) // Reproducción
    } else {
        newArray[rows][columns] = cell
    }
}

const showResult = (array) => {
    resutNewArray = ''
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            resutNewArray += arrayCells[x][y].cellToString()
        }
        resutNewArray += '\n'
    }
    return resutNewArray
}

const newcell = new Cell(0, 4)

function getRows() {
    return rows;
}

const getColumns = () => {
    return columns;
}

function getTest() {
    return newArray;
}

// Start the simulation
play()


module.exports = {
    newcell,
    getRows,
    getTest,
    getColumns,
    rulesCell
}