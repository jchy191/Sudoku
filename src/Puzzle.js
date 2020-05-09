const Puzzle = (() => {

    function createPuzzle() {
        const _seed = [
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
        
        let board = [];
        board = _randomiseColumns(_seed);
        board = _randomiseRows(board);
        board = _randomiseBigColumns(board);
        board = _randomiseBigRows(board);
        return board;
    }

    function createBlanks(solution) {
        let puzzle = [...solution];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (Math.random() < 0.5)
                puzzle[i][j] = 0
            }
        }
        return puzzle;
    }

    function _randomiseColumns(board) {
        let newBoard = [[],[],[],[],[],[],[],[],[]];

        let column1 = board.map(x => x.reduce((a, v, i) => (i == 0) ? v : a, 0));
        let column2 = board.map(x => x.reduce((a, v, i) => (i == 1) ? v : a, 0));
        let column3 = board.map(x => x.reduce((a, v, i) => (i == 2) ? v : a, 0));
        let column4 = board.map(x => x.reduce((a, v, i) => (i == 3) ? v : a, 0)); 
        let column5 = board.map(x => x.reduce((a, v, i) => (i == 4) ? v : a, 0)); 
        let column6 = board.map(x => x.reduce((a, v, i) => (i == 5) ? v : a, 0));
        let column7 = board.map(x => x.reduce((a, v, i) => (i == 6) ? v : a, 0));
        let column8 = board.map(x => x.reduce((a, v, i) => (i == 7) ? v : a, 0));
        let column9 = board.map(x => x.reduce((a, v, i) => (i == 8) ? v : a, 0));

        let [c1, c2, c3] = _randomiser(column1, column2, column3);
        let [c4, c5, c6] = _randomiser(column4, column5, column6);
        let [c7, c8, c9] = _randomiser(column7, column8, column9);

        for (let n = 0; n < 9; n++) {
            newBoard[n].push(c1.shift());
            newBoard[n].push(c2.shift());
            newBoard[n].push(c3.shift());
            newBoard[n].push(c4.shift());
            newBoard[n].push(c5.shift());
            newBoard[n].push(c6.shift());
            newBoard[n].push(c7.shift());
            newBoard[n].push(c8.shift());
            newBoard[n].push(c9.shift());
        }
        return newBoard;
    }

    function _randomiseRows(board) {
        let newBoard = [];

        let [rA, rB, rC] = _randomiser(board[0], board[1], board[2]);
        newBoard[0] = rA;
        newBoard[1] = rB;
        newBoard[2] = rC;

        let [rD, rE, rF] = _randomiser(board[3], board[4], board[5]);
        newBoard[3] = rD;
        newBoard[4] = rE;
        newBoard[5] = rF;

        let [rG, rH, rI] = _randomiser(board[6], board[7], board[8]);
        newBoard[6] = rG;
        newBoard[7] = rH;
        newBoard[8] = rI;

        return newBoard;
    }

    function _randomiseBigColumns(board) {
        let newBoard = [[],[],[],[],[],[],[],[],[]];

        let column1 = board.flatMap(x => x.filter((v, i) => i == 0 || i == 1 || i == 2));
        let column2 = board.flatMap(x => x.filter((v, i) => i == 3 || i == 4 || i == 5));
        let column3 = board.flatMap(x => x.filter((v, i) => i == 6 || i == 7 || i == 8));       

        let arrayOfNewBigColumns = _randomiser(column1, column2, column3);
     
//TODO: refactor this
        for (let n = 0; n < 3; n++) {
            newBoard[0] = newBoard[0].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[1] = newBoard[1].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[2] = newBoard[2].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[3] = newBoard[3].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[4] = newBoard[4].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[5] = newBoard[5].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[6] = newBoard[6].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[7] = newBoard[7].concat(arrayOfNewBigColumns[n].splice(0,3));
            newBoard[8] = newBoard[8].concat(arrayOfNewBigColumns[n].splice(0,3));
        }
    
        return newBoard;
    }

    function _randomiseBigRows(board) {
        let newBoard = [];

        let bigRow1 = board[0].concat(board[1], board[2]);
        let bigRow2 = board[3].concat(board[4], board[5]);
        let bigRow3 = board[6].concat(board[7], board[8]);

        let [r1, r2, r3] = _randomiser(bigRow1, bigRow2, bigRow3);

        newBoard[0] = r1.splice(0, 9);
        newBoard[1] = r1.splice(0, 9);
        newBoard[2] = r1.splice(0, 9);
        newBoard[3] = r2.splice(0, 9);
        newBoard[4] = r2.splice(0, 9);
        newBoard[5] = r2.splice(0, 9);
        newBoard[6] = r3.splice(0, 9);
        newBoard[7] = r3.splice(0, 9);
        newBoard[8] = r3.splice(0, 9);


        return newBoard;
    }

    function _randomiser(a, b, c) {
        let d = [];
        let e = [];
        let length = a.length;
        switch(Math.floor(Math.random() * 6)) {
            case 0: break;
            case 1: 
                for (let i = 0; i < length; i++) {
                    d[i] = a[i];
                    a[i] = b[i];
                    b[i] = d[i];
                }
                break;
            case 2:
                for (let i = 0; i < length; i++) {
                    d[i] = a[i];
                    a[i] = c[i];
                    c[i] = d[i];
                }
                break;
            case 3: 
                for (let i = 0; i < length; i++) {
                    d[i] = b[i];
                    b[i] = c[i];
                    c[i] = d[i];
                }
                break;
            case 4:
                for (let i = 0; i < length; i++) {
                    d[i] = a[i];
                    e[i] = b[i];

                    a[i] = c[i];
                    b[i] = d[i];
                    c[i] = e[i];
                }
                break;
            case 5:
                for (let i = 0; i < length; i++) {
                    d[i] = a[i];
                    e[i] = c[i];

                    a[i] = b[i];
                    b[i] = e[i];
                    c[i] = d[i];
                }
                break;
        }
        //console.log([a, b, c]);
        return [a, b, c];
    }

    // const checkWin = (board) => {
        
    // }

    return {
        createPuzzle,
        createBlanks
    }

})();

module.exports = Puzzle;