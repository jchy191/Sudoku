const Solver = (() => {

    function isPossible(board, col, row, n) {
        for (let i = 0; i < 9; i++) 
            if (board[i][col] == n) return false;
        for (let j = 0; j < 9; j++)
            if (board[row][j] == n) return false;
        
        let bigCol = Math.floor(col / 3)
        let bigRow = Math.floor(row / 3)
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (board[bigRow * 3 + i][bigCol * 3 + j] == n) return false

        return true;
    }
    

    let test2 = [
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

    function generatesSolutions(board){

        let count = 0;
        let solutions = [];
        let newBoard = [...board];

        solve();

        function solve() {
            for (let i = 0; i < 9; i++) 
                for (let j = 0; j < 9; j++) 
                    if (newBoard[i][j] === 0) {
                        for (let n = 1; n <= 9; n++) 
                            if (isPossible(newBoard, j, i, n)) {
                                newBoard[i][j] = n;
                                solve();
                                newBoard[i][j] = 0;

                            }
                        return;
                    }
            count++;
            //console.log(newBoard, count);
            solutions.push(newBoard);
            console.log({newBoard,count,solutions});
            console.log(solutions);
        }
        return solutions;
    }






    return {
        isPossible,
        generatesSolutions,
        test2
    }


})();

module.exports = Solver;