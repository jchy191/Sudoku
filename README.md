# Sudoku

This is the main project that I would like to showcase. This is a simple game of Sudoku that I wrote recently, using Object-Oriented Programming principles to help organise my code. The source files can be found in the "src" folder, while the files required to run the game in a browser can be found in the "dist" folder. 

Alternatively, the project can be viewed in browser here: https://rawcdn.githack.com/jchy191/Sudoku/685be7ff9c08031adc4ff1b5ef86023969f9a124/dist/index.html

One thing that I have been working on is improving the readability and organisation of my code. I refactored my code a few times in hopes of achieving this.

Unit testing is something that I am currently learning and I used a test-driven development approach to develop the Solver module. I have yet to learn enough about writing tests for functions that manipulates the DOM, which limited my ability to write tests. In the future, I hope to be able to fully adopt a test-driven development approach in writing my code.

One of the main difficulties was in creating the Sudoku puzzle for hard difficulty. I tried various algorithms to ensure that the puzzle generated would still be a well-defined puzzle (i.e. only has one solution). The algorithm I settled for in the end was to check if removing a number would allow the puzzle to still remain well-defined, before removing it. Other challenges included implementing a loading screen for the "hard" difficulty, as well as implementing the ability to pause and continue solving the puzzle.

Features I would like to add in the future include the ability for the player to annotate and add notes while solving the puzzle.

Overall, building this game has been quite fun and rewarding, and I have definitely learnt quite a fair amount from the entire process.
