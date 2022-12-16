# El Juego de la vida
![BrightCoders Logo](img/logo.png)

# Tabla de contenidos
 - [Descripcion del proyecto](#Descripción-del-proyecto)
 - [Cómo instalar y usar el proyecto](#Como-instalar-y-usar-el-proyecto)
 - [Creditos](#Créditos)
 - [Insignias de evaluadores de codigo](#Insignias-de-evaluadores-de-código)

# Descripción del proyecto 
The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Coding Challenge is about calculating the next generation of Conway’s game of life, given any starting position.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with more than three live neighbours dies, as if by overcrowding.
3. Any live cell with two or three live neighbours lives on to the next generation.
4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

### Clues
The input starting position could be a text file that looks like this:
```
Generation 1:
4 8
........
....*...
...**...
........
```
And the output could look like this:
```
Generation 2:
4 8
........
...**...
...**...
........
```
# Como instalar y usar el proyecto
- Lo primero que se tiene que hacer es clonar el repositorio
``` 
git clone [linkDelRepositorio] 
```

- Lo siguiente será instalar dependencias y modulos que requiere el proyecto para ejecutarse correctamente, para ello es necesario ejecutar en una terminal dentro del repositorio antes clonado el siguiente comando:
```
npm install
```

- Para ejecutar el funcionamiento principal del programa y empezar el juego se ejecuta el siguiente comando en la terminal:
``` 
node main.js
```

- Para ejecutar las pruebas que se aplicaron al código utilizaremos el siguiente comando en la terminal:
``` 
npm run test
```

# Creditos
Integrantes del equipo del proyecto:
- [@QuackDuster](https://github.com/Quackduster)
- [@soykarencm](https://github.com/soykarencm)
- [@Zuack55](https://github.com/Zuack55)
- [@Leonardo-Aguirre-Ponce](https://github.com/Leonardo-Aguirre-Ponce)
- [@victordoom](https://github.com/victordoom)

# Insignias de evaluadores de código
| Analizador   | Calificación |
| ------------- | ------------- |
| Codacy   | [![Codacy Badge](https://app.codacy.com/project/badge/Grade/c676cb5965ac4632b16bda664ad49024)](https://www.codacy.com/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team3/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team3&amp;utm_campaign=Badge_Grade)  |
| Codecov | [![codecov](https://codecov.io/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team3/branch/master/graph/badge.svg?token=EN4JMBPM9Z)](https://codecov.io/gh/BrightCoders-Institute/BCDIC22-RN-juego-de-vida-js-team3)  |
