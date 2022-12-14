module.exports = class Cell {
    constructor (life, neighbors) {
        this.life = life
        this.neighbors = neighbors
    }

    getLife () {
        return this.life
    }

    setLife (life) {
        this.life = life
    }

    getNeighbors () {
        return this.neighbors
    }

    setNeighbors (neighbors) {
        this.neighbors = neighbors
    }

    cellToString () {
        if (this.life === 0) {
            return '.'
        } else {
            return '*'
        }
    }
}
