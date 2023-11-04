/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieces/piece.js */ \"./src/pieces/piece.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\nvar chessGame = {\n  board: _toConsumableArray(Array(8)).map(function (e) {\n    return Array(8).fill(null);\n  }),\n  whitesMove: true,\n  whiteState: {\n    shortCastle: true,\n    longCastle: true\n  },\n  blackState: {\n    shortCastle: true,\n    longCastle: true\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chessGame);\nfunction renderBoard() {\n  var boardDiv = document.querySelector('#board');\n  boardDiv.innerHTML = \"\";\n  var num = 0;\n  var darkSquare = false;\n  chessGame.board.forEach(function (row) {\n    var r = document.createElement('div');\n    r.classList.add('row');\n    row.forEach(function (square) {\n      var s = document.createElement('div');\n      s.classList.add(\"square\");\n      darkSquare = !darkSquare;\n      if (darkSquare) {\n        s.classList.add('darkSquare');\n      }\n      s.innerHTML = square ? square.display() : \"\";\n      r.appendChild(s);\n    });\n    num += 1;\n    darkSquare = !darkSquare;\n    boardDiv.appendChild(r);\n  });\n  var r = document.createElement('div');\n  for (var i = 0; i < 8; i++) {\n    var s = document.createElement('span');\n    s.innerHTML = \" \".concat(i);\n    r.appendChild(s);\n  }\n  //boardDiv.appendChild(r)\n}\n\nfunction processInputs() {\n  var input = document.querySelector('input');\n  input.addEventListener('keypress', function (e) {\n    if (e.key === \"Enter\") {\n      var values = input.value.split(\" \");\n      values = values.map(function (x) {\n        return Number(x);\n      });\n      chessGame.board[values[0]][values[1]].move(values[2], values[3]);\n      renderBoard();\n      console.log(chessGame);\n    }\n  });\n}\nfor (var i = 0; i < 8; i++) {\n  (0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"pawn\", true, 1, i);\n  (0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"pawn\", false, 6, i);\n}\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"rook\", true, 0, 0);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"rook\", true, 0, 7);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"rook\", false, 7, 7);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"rook\", false, 7, 0);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"rook\", false, 2, 1);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"knight\", true, 0, 1);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"knight\", true, 0, 6);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"knight\", false, 7, 6);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"knight\", false, 7, 1);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bishop\", true, 0, 2);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bishop\", true, 0, 5);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bishop\", false, 7, 5);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bishop\", false, 7, 2);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"queen\", true, 0, 4);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"king\", false, 7, 3);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"queen\", false, 7, 4);\n(0,_pieces_piece_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"king\", true, 0, 3);\n\n//createPiece(\"rook\", false, 1, 2)\n\nrenderBoard();\nprocessInputs();\nconsole.log(chessGame);\n\n//# sourceURL=webpack://my-webpack-project/./src/main.js?");

/***/ }),

/***/ "./src/pieces/bishop.js":
/*!******************************!*\
  !*** ./src/pieces/bishop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bishop)\n/* harmony export */ });\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece.js */ \"./src/pieces/piece.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Bishop(_ref) {\n  var isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    game = _ref.game;\n  var piece = (0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.Piece)({\n    name: \"bishop\",\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game,\n    standardMoves: function standardMoves() {\n      var directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];\n      var moves = [];\n      for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {\n        var direction = _directions[_i];\n        var _direction = _slicedToArray(direction, 2),\n          dx = _direction[0],\n          dy = _direction[1];\n        var x = xPos + dx;\n        var y = yPos + dy;\n        while (!(0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.outOfBounds)(x, y)) {\n          if (game.board[x][y] === null || piece.canCapture(game.board[x][y])) {\n            moves.push([x, y]);\n            if (piece.canCapture(game.board[x][y]) && game.board[x][y].name !== \"passant\") {\n              break;\n            }\n          } else {\n            break;\n          }\n          x += dx;\n          y += dy;\n        }\n      }\n      return moves;\n    }\n  });\n  return piece;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/bishop.js?");

/***/ }),

/***/ "./src/pieces/king.js":
/*!****************************!*\
  !*** ./src/pieces/king.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ King)\n/* harmony export */ });\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece.js */ \"./src/pieces/piece.js\");\n\nfunction King(_ref) {\n  var isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    game = _ref.game;\n  var piece = (0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.Piece)({\n    name: \"king\",\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game,\n    standardMoves: function standardMoves() {\n      var moves = [];\n      var canCastle = game.whiteState === undefined ? false : checkCastleLegality(isWhite, game);\n      var castleState = isWhite ? game.whiteState : game.blackState;\n      var kingRow = isWhite ? 0 : 7;\n      for (var i = -1; i <= 1; i++) {\n        var x = i + xPos;\n        for (var j = -1; j <= 1; j++) {\n          var y = j + yPos;\n          if ((0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.outOfBounds)(x, y)) {\n            continue;\n          }\n          if (game.board[x][y] === null || piece.canCapture(game.board[x][y])) {\n            moves.push([x, y, function () {\n              castleState.longCastle = false;\n              castleState.shortCastle = false;\n            }]);\n          }\n        }\n      }\n      if (canCastle) {\n        if (canCastle[\"short\"]) {\n          moves.push([kingRow, 1, function () {\n            castleState.longCastle = false;\n            castleState.shortCastle = false;\n            game.board[kingRow][0] = null;\n            createPiece(\"rook\", isWhite, kingRow, 2, game);\n          }]);\n        }\n        if (canCastle[\"long\"]) {\n          moves.push([kingRow, 5, function () {\n            castleState.longCastle = false;\n            castleState.shortCastle = false;\n            game.board[kingRow][7] = null;\n            createPiece(\"rook\", isWhite, kingRow, 4, game);\n          }]);\n        }\n      }\n      return moves;\n    }\n  });\n  piece.inCheck = function () {\n    for (var i = 0; i < 8; i++) {\n      for (var j = 0; j < 8; j++) {\n        if (game.board[i][j] && game.board[i][j].standardMoves().some(function (pos) {\n          return pos[0] === xPos && pos[1] === yPos;\n        })) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n  return piece;\n}\nfunction checkCastleLegality(isWhite, game) {\n  var castleState = isWhite ? game.whiteState : game.blackState;\n  var kingRow = isWhite ? 0 : 7;\n  if (castleState === undefined || !castleState.shortCastle && !castleState.longCastle) {\n    return false;\n  }\n  // Get all of the moves here instead of isLegal because these don't have to be legal captures\n  var moves = [];\n  var boardClone = cloneBoard(game.board);\n  for (var i = 0; i < 8; i++) {\n    for (var j = 0; j < 8; j++) {\n      if (game.board[i][j] && game.board[i][j].isWhite === !isWhite) {\n        boardClone[i][j].standardMoves().map(function (move) {\n          return moves.push(move);\n        });\n      }\n    }\n  }\n  var _short = true;\n  var _long = true;\n  if (castleState.shortCastle) {\n    if (moves.some(function (move) {\n      return move[0] === kingRow && move[1] === 2;\n    }) || moves.some(function (move) {\n      return move[0] === kingRow && move[1] === 1;\n    })) {\n      _short = false;\n    }\n  }\n  if (castleState.longCastle) {\n    if (moves.some(function (move) {\n      return move[0] === kingRow && move[1] === 4;\n    }) || moves.some(function (move) {\n      return move[0] === kingRow && move[1] === 5;\n    })) {\n      _long = false;\n    }\n  }\n  return {\n    \"short\": _short,\n    \"long\": _long\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/king.js?");

/***/ }),

/***/ "./src/pieces/knight.js":
/*!******************************!*\
  !*** ./src/pieces/knight.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Knight)\n/* harmony export */ });\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece.js */ \"./src/pieces/piece.js\");\n\nfunction Knight(_ref) {\n  var isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    game = _ref.game;\n  var piece = (0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.Piece)({\n    name: \"knight\",\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game,\n    standardMoves: function standardMoves() {\n      var moves = [];\n      var knightMoves = [[2, 1], [1, 2], [-2, 1], [-1, 2], [2, -1], [1, -2], [-2, -1], [-1, -2]];\n      knightMoves.forEach(function (move) {\n        var x = xPos + move[0];\n        var y = yPos + move[1];\n        if (!outOfBounds(x, y) && (game.board[x][y] === null || piece.canCapture(game.board[x][y]))) {\n          moves.push([x, y]);\n        }\n      });\n      return moves;\n    }\n  });\n  return piece;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/knight.js?");

/***/ }),

/***/ "./src/pieces/pawn.js":
/*!****************************!*\
  !*** ./src/pieces/pawn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pawn)\n/* harmony export */ });\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece.js */ \"./src/pieces/piece.js\");\n\nfunction Pawn(_ref) {\n  var isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    game = _ref.game;\n  var piece = (0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.Piece)({\n    name: \"pawn\",\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game,\n    standardMoves: function standardMoves() {\n      var direction = isWhite ? 1 : -1;\n      var starting = isWhite ? xPos === 1 : xPos === 6;\n      var moves = [];\n      var _loop = function _loop() {\n        var x = xPos + direction;\n        var y = yPos + i;\n        if ((0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.outOfBounds)(x, y)) {\n          return \"continue\";\n        }\n        if (i !== 0 && piece.canCapture(game.board[x][y])) {\n          if (game.board[x][y].name === \"passant\") {\n            moves.push([x, y, function () {\n              game.board[x - direction][y] = null;\n            }]);\n          }\n          moves.push([x, y]);\n        } else if (i === 0 && game.board[xPos + direction][y] == null) {\n          if (starting && game.board[xPos + direction * 2][y] == null) {\n            // add en passant object for this move\n            moves.push([xPos + direction * 2, y, function () {\n              createPiece(\"passant\", isWhite, xPos + direction, y, game);\n            }]);\n          }\n          moves.push([x, y]);\n        }\n      };\n      for (var i = -1; i <= 1; i++) {\n        var _ret = _loop();\n        if (_ret === \"continue\") continue;\n      }\n      return moves;\n    }\n  });\n  return piece;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/pawn.js?");

/***/ }),

/***/ "./src/pieces/piece.js":
/*!*****************************!*\
  !*** ./src/pieces/piece.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Piece: () => (/* binding */ Piece),\n/* harmony export */   \"default\": () => (/* binding */ createPiece),\n/* harmony export */   outOfBounds: () => (/* binding */ outOfBounds)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/main.js\");\n/* harmony import */ var _king_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./king.js */ \"./src/pieces/king.js\");\n/* harmony import */ var _queen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queen.js */ \"./src/pieces/queen.js\");\n/* harmony import */ var _rook_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rook.js */ \"./src/pieces/rook.js\");\n/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knight.js */ \"./src/pieces/knight.js\");\n/* harmony import */ var _bishop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bishop.js */ \"./src/pieces/bishop.js\");\n/* harmony import */ var _pawn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pawn.js */ \"./src/pieces/pawn.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n\n\nvar blackPieces = {\n  \"pawn\": \"♟\",\n  \"king\": \"♚\",\n  \"queen\": \"♛\",\n  \"bishop\": \"♝\",\n  \"knight\": \"♞\",\n  \"rook\": \"♜\"\n};\nvar whitePieces = {\n  \"pawn\": \"♙\",\n  \"king\": \"♔\",\n  \"queen\": \"♕\",\n  \"bishop\": \"♗\",\n  \"knight\": \"♘\",\n  \"rook\": \"♖\"\n};\nfunction Piece(_ref) {\n  var name = _ref.name,\n    isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    standardMoves = _ref.standardMoves,\n    game = _ref.game;\n  return {\n    name: name,\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    standardMoves: standardMoves,\n    game: game,\n    display: function display() {\n      return isWhite ? whitePieces[name] || \"\" : blackPieces[name] || \"\";\n    },\n    canCapture: function canCapture(capturedPiece) {\n      return capturedPiece ? isWhite !== capturedPiece.isWhite : false;\n    },\n    move: function move(toX, toY) {\n      var moves = filterLegal(xPos, yPos, isWhite, standardMoves(), game.board);\n      if (game.whitesMove === isWhite && moves.some(function (pos) {\n        return pos[0] === toX && pos[1] === toY;\n      })) {\n        var index = moves.findIndex(function (pos) {\n          return pos[0] === toX && pos[1] === toY;\n        });\n        // Remove any en passant remnants\n        for (var i = 0; i < 8; i++) {\n          if (game.board[2][i] && game.board[2][i].name === \"passant\") {\n            game.board[2][i] = null;\n            break;\n          }\n          if (game.board[5][i] && game.board[5][i].name === \"passant\") {\n            game.board[5][i] = null;\n            break;\n          }\n        }\n\n        // Move piece and change side's move\n        createPiece(name, isWhite, toX, toY, game);\n        game.board[xPos][yPos] = null;\n        game.whitesMove = !game.whitesMove;\n\n        // Any additional things you may want a piece to do\n        if (moves[index].length > 2) {\n          moves[index][2]();\n        }\n        return true;\n      }\n      return false;\n    }\n  };\n}\nfunction isLegal(fromX, fromY, toX, toY, isWhite, board) {\n  var boardClone = cloneBoard(board);\n  var piece = boardClone[fromX][fromY];\n  createPiece(piece.name, piece.isWhite, toX, toY, {\n    board: boardClone\n  });\n  boardClone[fromX][fromY] = null;\n  var kingSquare;\n  var moves = [];\n  for (var i = 0; i < 8; i++) {\n    for (var j = 0; j < 8; j++) {\n      if (boardClone[i][j]) {\n        var pieceMoves = boardClone[i][j].standardMoves();\n        var color = boardClone[i][j].isWhite;\n        if (boardClone[i][j].name == \"king\" && color == isWhite) {\n          kingSquare = [i, j];\n        }\n        if (color != isWhite) {\n          pieceMoves.map(function (move) {\n            return moves.push(move);\n          });\n        }\n      }\n    }\n  }\n  if (kingSquare && moves.some(function (move) {\n    return move[0] === kingSquare[0] && move[1] === kingSquare[1];\n  })) {\n    return false;\n  }\n  return true;\n}\nfunction filterLegal(xPos, yPos, isWhite, standardMoves, board) {\n  return standardMoves.filter(function (move) {\n    return isLegal(xPos, yPos, move[0], move[1], isWhite, board);\n  });\n}\nfunction cloneBoard(board) {\n  var newBoard = _toConsumableArray(Array(8)).map(function (e) {\n    return Array(8).fill(null);\n  });\n  for (var x = 0; x < 8; x++) {\n    for (var y = 0; y < 8; y++) {\n      if (board[x][y]) {\n        createPiece(board[x][y].name, board[x][y].isWhite, x, y, {\n          board: newBoard\n        });\n      }\n    }\n  }\n  return newBoard;\n}\nfunction outOfBounds(x, y) {\n  return x < 0 || y < 0 || x >= 8 || y >= 8;\n}\nfunction createPiece(piece, isWhite, xPos, yPos) {\n  var _Piece;\n  var game = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  var createdPiece = {};\n  var pieceInfo = {\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game\n  };\n  switch (piece) {\n    case \"pawn\":\n      createdPiece = (0,_pawn_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(pieceInfo);\n      break;\n    case \"king\":\n      createdPiece = (0,_king_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pieceInfo);\n      break;\n    case \"knight\":\n      createdPiece = (0,_knight_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(pieceInfo);\n      break;\n    case \"rook\":\n      createdPiece = (0,_rook_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pieceInfo);\n      break;\n    case \"bishop\":\n      createdPiece = (0,_bishop_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(pieceInfo);\n      break;\n    case \"queen\":\n      createdPiece = (0,_queen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pieceInfo);\n      break;\n    default:\n      createdPiece = {\n        standardMoves: function standardMoves() {\n          return [];\n        }\n      };\n      break;\n  }\n  var genericPiece = Piece((_Piece = {\n    name: piece,\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos\n  }, _defineProperty(_Piece, \"yPos\", yPos), _defineProperty(_Piece, \"standardMoves\", createdPiece.standardMoves), _defineProperty(_Piece, \"game\", game), _Piece));\n  game.board[xPos][yPos] = _objectSpread(_objectSpread({}, genericPiece), createdPiece);\n  return game.board[xPos][yPos];\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/piece.js?");

/***/ }),

/***/ "./src/pieces/queen.js":
/*!*****************************!*\
  !*** ./src/pieces/queen.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queen)\n/* harmony export */ });\n/* harmony import */ var _rook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rook.js */ \"./src/pieces/rook.js\");\n/* harmony import */ var _bishop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bishop.js */ \"./src/pieces/bishop.js\");\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece.js */ \"./src/pieces/piece.js\");\n\n\n\nfunction Queen(_ref) {\n  var isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    game = _ref.game;\n  var piece = (0,_piece_js__WEBPACK_IMPORTED_MODULE_2__.Piece)({\n    name: \"queen\",\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game,\n    standardMoves: function standardMoves() {\n      var bishop = (0,_bishop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        isWhite: isWhite,\n        xPos: xPos,\n        yPos: yPos,\n        game: game\n      });\n      var rook = (0,_rook_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        isWhite: isWhite,\n        xPos: xPos,\n        yPos: yPos,\n        game: game\n      });\n      return bishop.standardMoves().concat(rook.standardMoves());\n    }\n  });\n  return piece;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/queen.js?");

/***/ }),

/***/ "./src/pieces/rook.js":
/*!****************************!*\
  !*** ./src/pieces/rook.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rook)\n/* harmony export */ });\n/* harmony import */ var _piece_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece.js */ \"./src/pieces/piece.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Rook(_ref) {\n  var isWhite = _ref.isWhite,\n    xPos = _ref.xPos,\n    yPos = _ref.yPos,\n    game = _ref.game;\n  var piece = (0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.Piece)({\n    name: \"rook\",\n    isWhite: isWhite,\n    xPos: xPos,\n    yPos: yPos,\n    game: game,\n    standardMoves: function standardMoves() {\n      var directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n      var moves = [];\n      for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {\n        var direction = _directions[_i];\n        var _direction = _slicedToArray(direction, 2),\n          dx = _direction[0],\n          dy = _direction[1];\n        var x = xPos + dx;\n        var y = yPos + dy;\n        while (!(0,_piece_js__WEBPACK_IMPORTED_MODULE_0__.outOfBounds)(x, y)) {\n          if (game.board[x][y] === null || piece.canCapture(game.board[x][y])) {\n            moves.push([x, y, function () {\n              if (xPos === 0 && yPos === 0) {\n                game.whiteState.shortCastle = false;\n              }\n              if (xPos === 0 && yPos === 7) {\n                game.whiteState.longCastle = false;\n              }\n              if (xPos === 7 && yPos === 0) {\n                game.blackState.shortCastle = false;\n              }\n              if (xPos === 7 && yPos === 7) {\n                game.blackState.longCastle = false;\n              }\n            }]);\n            if (piece.canCapture(game.board[x][y]) && game.board[x][y].name !== \"passant\") {\n              break;\n            }\n          } else {\n            break;\n          }\n          x += dx;\n          y += dy;\n        }\n      }\n      return moves;\n    }\n  });\n  return piece;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/pieces/rook.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;