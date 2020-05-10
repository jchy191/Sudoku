const Solver = (() => {

    function findClashes(board, row, col, n) {
        let clashes = new Set();

        for (let i = 0; i < 9; i++) 
            if (board[i][col] == n) 
                clashes.add(`${i}${col}`);
        for (let j = 0; j < 9; j++)
            if (board[row][j] == n) 
                clashes.add(`${row}${j}`);

        let bigCol = Math.floor(col / 3);
        let bigRow = Math.floor(row / 3);

        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (board[bigRow * 3 + i][bigCol * 3 + j] == n) 
                    clashes.add(`${bigRow * 3 + i}${bigCol * 3 + j}`);
        
        clashes.delete(`${row}${col}`)

        return Array.from(clashes);
    }

    function isPossible(board, row, col, n) {
        if (findClashes(board, row, col, n).length == 0) return true;
        return false;
    }
    
    function generatesSolutions(board){

        let solutions = [];
        let newBoard = JSON.parse(JSON.stringify(board));

        solve();

        function solve() {
            for (let i = 0; i < 9; i++) 
                for (let j = 0; j < 9; j++) 
                    if (newBoard[i][j] === 0) {
                        for (let n = 1; n <= 9; n++) 
                            if (isPossible(newBoard, i, j, n)) {
                                newBoard[i][j] = n;
                                solve();
                                if (solutions.length <= 1)
                                    newBoard[i][j] = 0;
                            }
                        return;
                    }
                solutions.push(JSON.parse(JSON.stringify(newBoard)));
        }
        return solutions;
    }

    function isWellDefined(board) {
        return generatesSolutions(board).length == 1;
    }


    return {
        findClashes,
        isPossible,
        generatesSolutions,
        isWellDefined
    }


})();

module.exports = Solver;