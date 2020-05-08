const Solver = require('./Solver');

const testBoard = [
    [0, 5, 7, 6, 1, 3, 0, 8, 4],
    [4, 0, 3, 2, 5, 7, 1, 9, 6],
    [6, 1, 2, 8, 4, 9, 5, 3, 7],
    [1, 7, 8, 3, 0, 4, 9, 5, 2],
    [5, 2, 4, 9, 7, 1, 0, 6, 8],
    [0, 6, 9, 5, 2, 8, 7, 4, 1],
    [8, 0, 5, 7, 9, 2, 0, 1, 3],
    [2, 9, 1, 4, 3, 6, 8, 7, 5],
    [7, 0, 6, 1, 0, 5, 0, 2, 9]
    ];

const testBoard2 = [
    [9, 5, 7, 6, 1, 3, 2, 8, 4],
    [4, 8, 3, 2, 5, 7, 1, 9, 6],
    [6, 1, 2, 8, 4, 9, 5, 3, 7],
    [1, 7, 8, 0, 6, 4, 9, 5, 2],
    [5, 2, 4, 9, 7, 1, 3, 6, 8],
    [3, 6, 9, 5, 2, 8, 7, 4, 1],
    [8, 4, 5, 7, 9, 2, 6, 1, 3],
    [2, 9, 1, 4, 3, 6, 8, 7, 5],
    [7, 3, 6, 1, 8, 5, 0, 2, 9]
    ];

let solution = [
[9, 5, 7, 6, 1, 3, 2, 8, 4],
[4, 8, 3, 2, 5, 7, 1, 9, 6],
[6, 1, 2, 8, 4, 9, 5, 3, 7],
[1, 7, 8, 3, 6, 4, 9, 5, 2],
[5, 2, 4, 9, 7, 1, 3, 6, 8],
[3, 6, 9, 5, 2, 8, 7, 4, 1],
[8, 4, 5, 7, 9, 2, 6, 1, 3],
[2, 9, 1, 4, 3, 6, 8, 7, 5],
[7, 3, 6, 1, 8, 5, 4, 2, 9]
];

let a = [1,2];


test('isPossible method returns true if number is a possible solution', () => {
    expect(Solver.isPossible(testBoard, 6, 8, 4)).toBeTruthy();
})

test('isPossible method returns false if number appears in same row or column', () => {
    expect(Solver.isPossible(testBoard, 6, 8, 2)).toBeFalsy();
    expect(Solver.isPossible(testBoard, 6, 8, 8)).toBeFalsy();
})

test('isPossible method returns false if number appears in same box', () => {
    expect(Solver.isPossible(testBoard, 6, 8, 3)).toBeFalsy();
    expect(Solver.isPossible(testBoard, 1, 8, 8)).toBeFalsy();
})

test('solve method returns the correct solution', () => {
    expect(Solver.solve(testBoard)).toEqual(solution);
})


