import Solver from './Solver';

const test1 = [
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

const solution1 = [
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

const test2 = [
    [2, 9, 5, 7, 4, 3, 8, 6, 1],
    [4, 3, 1, 8, 6, 5, 9, 0, 0],
    [8, 7, 6, 1, 9, 2, 5, 4, 3],
    [3, 8, 7, 4, 5, 9, 2, 1, 6],
    [6, 1, 2, 3, 8, 7, 4, 9, 5],
    [5, 4, 9, 2, 1, 6, 7, 3, 8],
    [7, 6, 3, 5, 2, 4, 1, 8, 9],
    [9, 2, 8, 6, 7, 1, 3, 5, 4],
    [1, 5, 4, 9, 3, 8, 6, 0, 0]
    ];

const solution2a = [
    [2, 9, 5, 7, 4, 3, 8, 6, 1],
    [4, 3, 1, 8, 6, 5, 9, 7, 2],
    [8, 7, 6, 1, 9, 2, 5, 4, 3],
    [3, 8, 7, 4, 5, 9, 2, 1, 6],
    [6, 1, 2, 3, 8, 7, 4, 9, 5],
    [5, 4, 9, 2, 1, 6, 7, 3, 8],
    [7, 6, 3, 5, 2, 4, 1, 8, 9],
    [9, 2, 8, 6, 7, 1, 3, 5, 4],
    [1, 5, 4, 9, 3, 8, 6, 2, 7]
    ];

const solution2b = [
    [2, 9, 5, 7, 4, 3, 8, 6, 1],
    [4, 3, 1, 8, 6, 5, 9, 2, 7],
    [8, 7, 6, 1, 9, 2, 5, 4, 3],
    [3, 8, 7, 4, 5, 9, 2, 1, 6],
    [6, 1, 2, 3, 8, 7, 4, 9, 5],
    [5, 4, 9, 2, 1, 6, 7, 3, 8],
    [7, 6, 3, 5, 2, 4, 1, 8, 9],
    [9, 2, 8, 6, 7, 1, 3, 5, 4],
    [1, 5, 4, 9, 3, 8, 6, 7, 2]
    ];

test('findClashes method returns [] if there are no clashes', () => {
    expect(Solver.findClashes(test1, 8, 6, 4)).toStrictEqual([]);
})

test('findClashes method returns array of clashing cell id if number appears in same row or column', () => {
    expect(Solver.findClashes(test1, 8, 6, 2)).toStrictEqual(["87"]);
    expect(Solver.findClashes(test1, 8, 6, 8)).toStrictEqual(["76"]);
})

test('isPossible method returns true if number is a possible solution', () => {
    expect(Solver.isPossible(test1, 8, 6, 4)).toBeTruthy();
})

test('isPossible method returns false if number appears in same row or column', () => {
    expect(Solver.isPossible(test1, 8, 6, 2)).toBeFalsy();
    expect(Solver.isPossible(test1, 8, 6, 8)).toBeFalsy();
})

test('isPossible method returns false if number appears in same box', () => {
    expect(Solver.isPossible(test1, 8, 6, 3)).toBeFalsy();
    expect(Solver.isPossible(test1, 8, 1, 8)).toBeFalsy();
})

test('generatesSolutions method returns solution', () => {
    expect(Solver.generatesSolutions(test1)).toStrictEqual([solution1]);
})

test('generatesSolutions method returns both solutions when there are two solutions', () => {
    expect(Solver.generatesSolutions(test2)).toContainEqual(solution2a);
    expect(Solver.generatesSolutions(test2)).toContainEqual(solution2b);
    expect(Solver.generatesSolutions(test2).length).toBe(2);
})

test('isWellDefine method returns true if puzzle has one solution', () => {
    expect(Solver.isWellDefined(test1)).toBeTruthy();
})

test('isWellDefine method returns false if puzzle has more than one solution', () => {
    expect(Solver.isWellDefined(test2)).toBeFalsy();
})


