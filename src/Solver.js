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
        
    function solve(board) {
        // let newBoard = [...board];
        for (let i = 0; i < 9; i++) 
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === 0) 
                    for (let n = 1; n < 10; n++) 
                        if (isPossible(board, j, i, n)) {
                            board[i][j] = n;
                            solve(board);
                        }
                //return board;
            }
                
        return board;
    }



    return {
        isPossible,
        solve
    }


})();

module.exports = Solver;