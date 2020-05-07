const Puzzle = (() => {

    function createPuzzle() {
        const _seed = [
        9, 5, 7, 6, 1, 3, 2, 8, 4,
        4, 8, 3, 2, 5, 7, 1, 9, 6,
        6, 1, 2, 8, 4, 9, 5, 3, 7,
        1, 7, 8, 3, 6, 4, 9, 5, 2,
        5, 2, 4, 9, 7, 1, 3, 6, 8,
        3, 6, 9, 5, 2, 8, 7, 4, 1,
        8, 4, 5, 7, 9, 2, 6, 1, 3,
        2, 9, 1, 4, 3, 6, 8, 7, 5,
        7, 3, 6, 1, 8, 5, 4, 2, 9
        ];
        
        let board = [];
        board = _randomiseColumns(_seed);
        board = _randomiseRows(board);
        board = _randomiseBigColumns(board);
        board = _randomiseBigRows(board);

        return board;
    }

    function _randomiseColumns(board) {
        let newBoard = [];

        let column1 = board.filter((v, i) => i % 9 == 0 );
        let column2 = board.filter((v, i) => i % 9 == 1 );
        let column3 = board.filter((v, i) => i % 9 == 2 );
        let column4 = board.filter((v, i) => i % 9 == 3 );
        let column5 = board.filter((v, i) => i % 9 == 4 );
        let column6 = board.filter((v, i) => i % 9 == 5 );
        let column7 = board.filter((v, i) => i % 9 == 6 );
        let column8 = board.filter((v, i) => i % 9 == 7 );
        let column9 = board.filter((v, i) => i % 9 == 8 );

        let [a, b, c] = _randomiser(column1, column2, column3);
        column1 = a;
        column2 = b;
        column3 = c;

        let [d, e, f] = _randomiser(column4, column5, column6);
        column4 = d;
        column5 = e;
        column6 = f;

        let [g, h, i] = _randomiser(column7, column8, column9);
        column7 = g;
        column8 = h;
        column9 = i;

        for (let n = 0; n < 81; n++) {
            switch (n % 9) {
                case 0: 
                    newBoard[n] = column1.shift();
                    break;
                case 1: 
                    newBoard[n] = column2.shift();
                    break;
                case 2: 
                    newBoard[n] = column3.shift();
                    break;
                case 3: 
                    newBoard[n] = column4.shift();
                    break;
                case 4: 
                    newBoard[n] = column5.shift();
                    break;                
                case 5: 
                    newBoard[n] = column6.shift();
                    break;
                case 6: 
                    newBoard[n] = column7.shift();
                    break;
                case 7: 
                    newBoard[n] = column8.shift();
                    break;
                case 8: 
                    newBoard[n] = column9.shift();
                    break;
            }
        }
        return newBoard;
    }

    function _randomiseRows(board) {
        let newBoard = [];

        let row1 = board.filter((v, i) => i >= 0 && i <= 8);
        let row2 = board.filter((v, i) => i >= 9 && i <= 17);
        let row3 = board.filter((v, i) => i >= 18 && i <= 26);
        let row4 = board.filter((v, i) => i >= 27 && i <= 35);
        let row5 = board.filter((v, i) => i >= 36 && i <= 44);
        let row6 = board.filter((v, i) => i >= 45 && i <= 53);
        let row7 = board.filter((v, i) => i >= 54 && i <= 62);
        let row8 = board.filter((v, i) => i >= 63 && i <= 71);
        let row9 = board.filter((v, i) => i >= 72 && i <= 80);

        let [rA, rB, rC] = _randomiser(row1, row2, row3);
        row1 = rA;
        row2 = rB;
        row3 = rC;

        let [rD, rE, rF] = _randomiser(row4, row5, row6);
        row4 = rD;
        row5 = rE;
        row6 = rF;

        let [rG, rH, rI] = _randomiser(row7, row8, row9);
        row7 = rG;
        row8 = rH;
        row9 = rI;

        for (let n = 0; n < 81; n++) {
            switch (true) {
                case n >= 0 && n <= 8: 
                    newBoard[n] = row1.shift();
                    break;
                case n >= 9 && n <= 17: 
                    newBoard[n] = row2.shift();
                    break;
                case n >= 18 && n <= 26: 
                    newBoard[n] = row3.shift();
                    break;
                case n >= 27 && n <= 35: 
                    newBoard[n] = row4.shift();
                    break;
                case n >= 36 && n <= 44: 
                    newBoard[n] = row5.shift();
                    break;                
                case n >= 45 && n <= 53: 
                    newBoard[n] = row6.shift();
                    break;
                case n >= 54 && n <= 62: 
                    newBoard[n] = row7.shift();
                    break;
                case n >= 63 && n <= 71: 
                    newBoard[n] = row8.shift();
                    break;
                case n >= 72 && n <= 80: 
                    newBoard[n] = row9.shift();
                    break;
            }
        }
        return newBoard;
    }

    function _randomiseBigColumns(board) {
        let newBoard = [];

        let column1 = board.filter((v, i) => i % 9 == 0 || i % 9 == 1 || i % 9 == 2);
        let column2 = board.filter((v, i) => i % 9 == 3 || i % 9 == 4 || i % 9 == 5);
        let column3 = board.filter((v, i) => i % 9 == 6 || i % 9 == 7 || i % 9 == 8);
       

        let [a, b, c] = _randomiser(column1, column2, column3);
        column1 = a;
        column2 = b;
        column3 = c;
        console.log({column1, column2, column3})

        for (let n = 0; n < 81; n++) {
            switch (n % 9) {
                case 0: 
                    newBoard[n] = column1.shift();
                    break;
                case 1: 
                    newBoard[n] = column1.shift();
                    break;
                case 2: 
                    newBoard[n] = column1.shift();
                    break;
                case 3: 
                    newBoard[n] = column2.shift();
                    break;
                case 4: 
                    newBoard[n] = column2.shift();
                    break;                
                case 5: 
                    newBoard[n] = column2.shift();
                    break;
                case 6: 
                    newBoard[n] = column3.shift();
                    break;
                case 7: 
                    newBoard[n] = column3.shift();
                    break;
                case 8: 
                    newBoard[n] = column3.shift();
                    break;
            }
        }
        console.log({newBoard})
        return newBoard;
    }

    function _randomiseBigRows(board) {
        let newBoard = [];

        let row1 = board.filter((v, i) => i >= 0 && i <= 26);
        let row2 = board.filter((v, i) => i >= 27 && i <= 53);
        let row3 = board.filter((v, i) => i >= 54 && i <= 80);

        let [rA, rB, rC] = _randomiser(row1, row2, row3);
        row1 = rA;
        row2 = rB;
        row3 = rC;

        for (let n = 0; n < 81; n++) {
            switch (true) {
                case n >= 0 && n <= 26: 
                    newBoard[n] = row1.shift();
                    break;
                case n >= 27 && n <= 53: 
                    newBoard[n] = row2.shift();
                    break;
                case n >= 54 && n <= 80: 
                    newBoard[n] = row3.shift();
                    break;
            }
        }
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

    return {createPuzzle}

})();

export default Puzzle;