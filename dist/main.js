/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Display.js":
/*!************************!*\
  !*** ./src/Display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Display = (() => {\n\n    function createGrid(container) {\n        let c = 0;\n        for (let i = 0; i < 9; i++) {\n            for (let j = 0; j < 9; j++) {\n                let smallCell = document.createElement(\"div\");\n                container.appendChild(smallCell).className = \"small-grid-box\";\n                smallCell.style.gridArea = `${i + 1}/${j + 1}/${i + 2}/${j + 2}`;\n                smallCell.id = `${c}`;\n                c++;\n                smallCell.appendChild(document.createElement(\"p\"));\n            }\n        }\n\n        for (let i = 0; i < 3; i++) {\n            for (let j = 0; j < 3; j++) {\n                let mediumCell = document.createElement(\"div\");\n                container.appendChild(mediumCell).className = \"medium-grid-box\";\n                mediumCell.style.gridArea = `${i * 3 + 1}/${j * 3 + 1}/${(i + 1) * 3 + 1}/${(j + 1) * 3 + 1}`;\n            }\n        }\n    }\n\n    function renderNumbers(board) {\n        let cells = [...document.querySelectorAll(\".small-grid-box\")];\n        let n = 0;\n        for (let i = 0; i < 9; i++) {\n            for (let j = 0; j < 9; j++) {\n                cells[n].firstChild.innerText = board[i][j];\n                n++;\n            }\n        }\n    }\n    \n    return {\n        createGrid,\n        renderNumbers\n    }\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\n//# sourceURL=webpack:///./src/Display.js?");

/***/ }),

/***/ "./src/Puzzle.js":
/*!***********************!*\
  !*** ./src/Puzzle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Puzzle = (() => {\n\n    function createPuzzle() {\n        const _seed = [\n        [9, 5, 7, 6, 1, 3, 2, 8, 4],\n        [4, 8, 3, 2, 5, 7, 1, 9, 6],\n        [6, 1, 2, 8, 4, 9, 5, 3, 7],\n        [1, 7, 8, 3, 6, 4, 9, 5, 2],\n        [5, 2, 4, 9, 7, 1, 3, 6, 8],\n        [3, 6, 9, 5, 2, 8, 7, 4, 1],\n        [8, 4, 5, 7, 9, 2, 6, 1, 3],\n        [2, 9, 1, 4, 3, 6, 8, 7, 5],\n        [7, 3, 6, 1, 8, 5, 4, 2, 9]\n        ];\n        \n        let board = [];\n        board = _randomiseColumns(_seed);\n        board = _randomiseRows(board);\n        board = _randomiseBigColumns(board);\n        board = _randomiseBigRows(board);\n        return board;\n    }\n\n    function _randomiseColumns(board) {\n        let newBoard = [[],[],[],[],[],[],[],[],[]];\n\n        let column1 = board.map(x => x.reduce((a, v, i) => (i == 0) ? v : a, 0));\n        let column2 = board.map(x => x.reduce((a, v, i) => (i == 1) ? v : a, 0));\n        let column3 = board.map(x => x.reduce((a, v, i) => (i == 2) ? v : a, 0));\n        let column4 = board.map(x => x.reduce((a, v, i) => (i == 3) ? v : a, 0)); \n        let column5 = board.map(x => x.reduce((a, v, i) => (i == 4) ? v : a, 0)); \n        let column6 = board.map(x => x.reduce((a, v, i) => (i == 5) ? v : a, 0));\n        let column7 = board.map(x => x.reduce((a, v, i) => (i == 6) ? v : a, 0));\n        let column8 = board.map(x => x.reduce((a, v, i) => (i == 7) ? v : a, 0));\n        let column9 = board.map(x => x.reduce((a, v, i) => (i == 8) ? v : a, 0));\n\n        let [c1, c2, c3] = _randomiser(column1, column2, column3);\n        let [c4, c5, c6] = _randomiser(column4, column5, column6);\n        let [c7, c8, c9] = _randomiser(column7, column8, column9);\n\n        for (let n = 0; n < 9; n++) {\n            newBoard[n].push(c1.shift());\n            newBoard[n].push(c2.shift());\n            newBoard[n].push(c3.shift());\n            newBoard[n].push(c4.shift());\n            newBoard[n].push(c5.shift());\n            newBoard[n].push(c6.shift());\n            newBoard[n].push(c7.shift());\n            newBoard[n].push(c8.shift());\n            newBoard[n].push(c9.shift());\n        }\n        return newBoard;\n    }\n\n    function _randomiseRows(board) {\n        let newBoard = [];\n\n        let [rA, rB, rC] = _randomiser(board[0], board[1], board[2]);\n        newBoard[0] = rA;\n        newBoard[1] = rB;\n        newBoard[2] = rC;\n\n        let [rD, rE, rF] = _randomiser(board[3], board[4], board[5]);\n        newBoard[3] = rD;\n        newBoard[4] = rE;\n        newBoard[5] = rF;\n\n        let [rG, rH, rI] = _randomiser(board[6], board[7], board[8]);\n        newBoard[6] = rG;\n        newBoard[7] = rH;\n        newBoard[8] = rI;\n\n        return newBoard;\n    }\n\n    function _randomiseBigColumns(board) {\n        let newBoard = [[],[],[],[],[],[],[],[],[]];\n\n        let column1 = board.flatMap(x => x.filter((v, i) => i == 0 || i == 1 || i == 2));\n        let column2 = board.flatMap(x => x.filter((v, i) => i == 3 || i == 4 || i == 5));\n        let column3 = board.flatMap(x => x.filter((v, i) => i == 6 || i == 7 || i == 8));\n\n        console.log(column1, column2, column3)\n       \n\n        let arrayOfNewBigColumns = _randomiser(column1, column2, column3);\n     \n\n        for (let n = 0; n < 3; n++) {\n            newBoard[0] = newBoard[0].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[1] = newBoard[1].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[2] = newBoard[2].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[3] = newBoard[3].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[4] = newBoard[4].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[5] = newBoard[5].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[6] = newBoard[6].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[7] = newBoard[7].concat(arrayOfNewBigColumns[n].splice(0,3));\n            newBoard[8] = newBoard[8].concat(arrayOfNewBigColumns[n].splice(0,3));\n        }\n    \n        return newBoard;\n    }\n\n    function _randomiseBigRows(board) {\n        let newBoard = [];\n\n        let bigRow1 = board[0].concat(board[1], board[2]);\n        let bigRow2 = board[3].concat(board[4], board[5]);\n        let bigRow3 = board[6].concat(board[7], board[8]);\n\n        let [r1, r2, r3] = _randomiser(bigRow1, bigRow2, bigRow3);\n\n        newBoard[0] = r1.splice(0, 9);\n        newBoard[1] = r1.splice(0, 9);\n        newBoard[2] = r1.splice(0, 9);\n        newBoard[3] = r2.splice(0, 9);\n        newBoard[4] = r2.splice(0, 9);\n        newBoard[5] = r2.splice(0, 9);\n        newBoard[6] = r3.splice(0, 9);\n        newBoard[7] = r3.splice(0, 9);\n        newBoard[8] = r3.splice(0, 9);\n\n\n        return newBoard;\n    }\n\n    function _randomiser(a, b, c) {\n        let d = [];\n        let e = [];\n        let length = a.length;\n        switch(Math.floor(Math.random() * 6)) {\n            case 0: break;\n            case 1: \n                for (let i = 0; i < length; i++) {\n                    d[i] = a[i];\n                    a[i] = b[i];\n                    b[i] = d[i];\n                }\n                break;\n            case 2:\n                for (let i = 0; i < length; i++) {\n                    d[i] = a[i];\n                    a[i] = c[i];\n                    c[i] = d[i];\n                }\n                break;\n            case 3: \n                for (let i = 0; i < length; i++) {\n                    d[i] = b[i];\n                    b[i] = c[i];\n                    c[i] = d[i];\n                }\n                break;\n            case 4:\n                for (let i = 0; i < length; i++) {\n                    d[i] = a[i];\n                    e[i] = b[i];\n\n                    a[i] = c[i];\n                    b[i] = d[i];\n                    c[i] = e[i];\n                }\n                break;\n            case 5:\n                for (let i = 0; i < length; i++) {\n                    d[i] = a[i];\n                    e[i] = c[i];\n\n                    a[i] = b[i];\n                    b[i] = e[i];\n                    c[i] = d[i];\n                }\n                break;\n        }\n        //console.log([a, b, c]);\n        return [a, b, c];\n    }\n\n    // const checkWin = (board) => {\n        \n    // }\n\n    return {createPuzzle}\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Puzzle);\n\n//# sourceURL=webpack:///./src/Puzzle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display */ \"./src/Display.js\");\n/* harmony import */ var _Puzzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Puzzle */ \"./src/Puzzle.js\");\n\n\n//const grid = document.getElementById(\"grid\");\n\n\n//newgame\n\n\n\n\nconst newGame = (() => {\n\nconst currentBoard = _Puzzle__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createPuzzle();\n\nconst grid = document.getElementById(\"grid\");\n_Display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createGrid(grid);\n_Display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderNumbers(currentBoard);\n\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });