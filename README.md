# Sudoku

This is the main project that I would like to showcase. This is a simple game of Sudoku that I wrote recently, using Object-Oriented Programming principles to help organise my code. The source files can be found in the "src" folder, while the files required to run the game in a browser can be found in the "dist" folder. 

Alternatively, the project can be viewed in browser here: https://tinyurl.com/mysudokuproject

Do note that the puzzle for the "hard" difficulty may take a few seconds to be generated.

Unit testing is something that I am currently learning and I used a test-driven development approach to develop the Solver module. I have yet to learn enough about writing tests for functions that manipulates the DOM, which limited my ability to write tests. In the future, I hope to be able to fully adopt a test-driven development approach in writing my code as this would make it easier for me to implement new features while ensuring existing ones still function as expected.

One of the main difficulties was in creating the Sudoku puzzle for hard difficulty. I tried various algorithms to ensure that the puzzle generated would still be a well-defined puzzle (i.e. only has one solution). The algorithm I settled for in the end was to check if removing a number would allow the puzzle to still remain well-defined, before removing it. Other challenges included adding a loading screen for the "hard" difficulty, as well as implementing the ability to pause and continue solving the puzzle.

There are a few features that I hope to be able to add in the future. The main one would be the ability for the player to annotate and add notes while solving the puzzle. I am not too sure about how to implement this yet. Another feature would be to allow the player to select on the menu screen how many hints/undos they would like to have available in the game. This should not be too hard to implement. Finally, I would like to improve the algorithm for generating puzzles, so that harder puzzles with fewer given numbers can be generated in a reasonable amount of time. Currently, difficulty is only gauged from the number of given numbers. However, there are algorithms out there for calculating a "difficulty score" for the puzzle, which would result in more accurate division of puzzle difficulty.

After this project, I would like to learn more about asynchronous programming, as well as become more familiar with more git and webpack commands/features (e.g. git branching).

Overall, building this game has been quite fun and rewarding, and I have definitely learnt quite a fair amount from the entire process.
