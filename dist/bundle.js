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

/***/ "./src/components/checkGuess.js":
/*!**************************************!*\
  !*** ./src/components/checkGuess.js ***!
  \**************************************/
/*! exports provided: checkGuess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkGuess\", function() { return checkGuess; });\nfunction checkGuess(wordToGuess, userLetter) {\n  //handles check logic, and replaces letters in placeholder when a match is found\n  var placeholderP = document.getElementById('placeholderP');\n  var placeholderArray = Array.from(placeholderP.innerHTML);\n  placeholderArray = placeholderArray.map(function (el, i) {\n    //check if letter exists in the guess word, and if yes,replace it in the placeholder and display it\n    if (wordToGuess[i] == userLetter) {\n      return el = userLetter;\n    } else {\n      return el;\n    }\n  });\n  placeholderP.innerHTML = placeholderArray.join('');\n}\n\n//# sourceURL=webpack:///./src/components/checkGuess.js?");

/***/ }),

/***/ "./src/components/gameOver.js":
/*!************************************!*\
  !*** ./src/components/gameOver.js ***!
  \************************************/
/*! exports provided: gameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOver\", function() { return gameOver; });\n/* harmony import */ var _hideElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideElements.js */ \"./src/components/hideElements.js\");\n\nfunction gameOver(win) {\n  // shows win/game over message\n  var winMessage = document.getElementById('statusMessage');\n  var btnWrapper = document.querySelector('.button-wrapper');\n  Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_0__[\"hideElements\"])('hidden', btnWrapper);\n\n  if (win) {\n    winMessage.innerHTML = \"You Win\";\n    winMessage.style.color = \"green\";\n  } else {\n    winMessage.innerHTML = \"Game Over\";\n    winMessage.style.color = \"rgb(239, 83, 80)\";\n  }\n}\n\n//# sourceURL=webpack:///./src/components/gameOver.js?");

/***/ }),

/***/ "./src/components/hangerDraw.js":
/*!**************************************!*\
  !*** ./src/components/hangerDraw.js ***!
  \**************************************/
/*! exports provided: hangerDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hangerDraw\", function() { return hangerDraw; });\n/* harmony import */ var _unhideElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unhideElements.js */ \"./src/components/unhideElements.js\");\n\nfunction hangerDraw(num) {\n  //helper function triggers show hanger drawing\n  var show = document.getElementById(\"show\".concat(num));\n  Object(_unhideElements_js__WEBPACK_IMPORTED_MODULE_0__[\"unhideElements\"])('hidden', show);\n}\n\n//# sourceURL=webpack:///./src/components/hangerDraw.js?");

/***/ }),

/***/ "./src/components/hangmanComp.js":
/*!***************************************!*\
  !*** ./src/components/hangmanComp.js ***!
  \***************************************/
/*! exports provided: Hangman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hangman\", function() { return Hangman; });\n/* harmony import */ var _unhideElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unhideElements.js */ \"./src/components/unhideElements.js\");\n/* harmony import */ var _hideElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hideElements.js */ \"./src/components/hideElements.js\");\n/* harmony import */ var _checkGuess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkGuess.js */ \"./src/components/checkGuess.js\");\n/* harmony import */ var _gameOver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameOver.js */ \"./src/components/gameOver.js\");\n/* harmony import */ var _hangerDraw_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hangerDraw.js */ \"./src/components/hangerDraw.js\");\n/* harmony import */ var _hideLives_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hideLives.js */ \"./src/components/hideLives.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar wordsArray = [['C', 'A', 'T', 'S'], ['M', 'O', 'U', 'S', 'E'], ['J', 'A', 'V', 'A', 'S', 'C', 'R', 'I', 'P', 'T'], ['P', 'O', 'T', 'A', 'T', 'O'], ['U', 'N', 'D', 'E', 'F', 'I', 'N', 'E', 'D'], ['S', 'P', 'A', 'G', 'H', 'E', 'T'], ['W', 'A', 'Y']];\nvar categoryArray = [[\"The internet and Youtube would not be the same without them\"], [\"Touchpad ain't got nothing on me\"], [\"Love it or hate it, frontend devs need it\"], [\"This hangman game is...\"], [\"I'm declared, but don't have a value\"], [\"Somebody toucha my...\"], [\"You do not know de...\"]];\nvar Hangman =\n/*#__PURE__*/\nfunction () {\n  function Hangman() {\n    _classCallCheck(this, Hangman);\n\n    //game state and initial values\n    this.random = Math.floor(Math.random() * wordsArray.length);\n    this.wordToGuess = wordsArray[this.random];\n    this.category = categoryArray[this.random];\n    this.placeholderArray = Array(this.wordToGuess.length).fill('_');\n    this.guessed = [];\n    this.lives = 6;\n  }\n\n  _createClass(Hangman, [{\n    key: \"setupNewWord\",\n    value: function setupNewWord() {\n      //setsup new game input/buttons and creates initial placeholder and puts it on the board. it has as many letters as the word\n      var guessWrapper = document.getElementById('guessWrapper');\n      var placeholderP = document.createElement('p');\n      var category = document.getElementById('categoryName');\n      category.innerHTML = this.category;\n      placeholderP.setAttribute('id', 'placeholderP');\n      placeholderP.innerHTML = this.placeholderArray.join('');\n      guessWrapper.appendChild(placeholderP);\n      var userLetter = document.getElementById('userLetter');\n      userLetter.onkeypress = this.handleKeyPress.bind(this);\n      var guessButton = document.getElementById('guessButton');\n      guessButton.onclick = this.handleClick.bind(this);\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      //main game logic, triggers input check, win or loose, updates lives, shows/hides various elements on click\n      var userLetterInput = document.getElementById('userLetter');\n      var userLetter = userLetterInput.value.toUpperCase();\n      var placeholderP = document.getElementById('placeholderP');\n      var warningText = document.getElementById('warningText');\n      var alreadyGuessed = document.querySelector('#alreadyGuessed span');\n      var wrongLetters = document.querySelector('#wrongLetters span');\n      var leftLives = document.querySelector('#leftLives span');\n\n      if (!/[a-zA-Z]/.test(userLetter)) {\n        //check that the user types in letters\n        Object(_unhideElements_js__WEBPACK_IMPORTED_MODULE_0__[\"unhideElements\"])('hidden', warningText);\n        warningText.innerHTML = 'Please enter a letter from A-Z'; //and shows warning if not\n      } else {\n        Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_1__[\"hideElements\"])('hidden', warningText);\n\n        if (this.wordToGuess.indexOf(userLetter) > -1 && this.guessed.indexOf(userLetter) == -1) {\n          //check if letter is a match, and first guess\n          Object(_checkGuess_js__WEBPACK_IMPORTED_MODULE_2__[\"checkGuess\"])(this.wordToGuess, userLetter);\n          Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_1__[\"hideElements\"])('hidden', warningText);\n        } else if (this.wordToGuess.indexOf(userLetter) == -1 && this.guessed.indexOf(userLetter) == -1) {\n          //check if not match, and first wrong\n          Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_1__[\"hideElements\"])('hidden', warningText);\n          Object(_unhideElements_js__WEBPACK_IMPORTED_MODULE_0__[\"unhideElements\"])('hidden', wrongLetters.parentNode);\n          wrongLetters.innerHTML += userLetter;\n          this.lives--;\n          Object(_hangerDraw_js__WEBPACK_IMPORTED_MODULE_4__[\"hangerDraw\"])(this.lives);\n          Object(_hideLives_js__WEBPACK_IMPORTED_MODULE_5__[\"hideLives\"])(this.lives);\n        } else {\n          //if not first use of this letter\n          Object(_unhideElements_js__WEBPACK_IMPORTED_MODULE_0__[\"unhideElements\"])('hidden', warningText);\n          warningText.innerHTML = \"\";\n          warningText.innerHTML += 'Already typed ' + userLetter;\n        }\n\n        this.guessed.indexOf(userLetter) == -1 ? this.guessed.push(userLetter) : null; //for all guesses, if its the first time using the letter, save it\n\n        if (Array.from(placeholderP.innerHTML).indexOf('_') == -1) {\n          //trigger game win or loose\n          Object(_gameOver_js__WEBPACK_IMPORTED_MODULE_3__[\"gameOver\"])(true); //when no more '_' exist in placeholder, you win\n        } else if (this.lives == 0) {\n          //when lives are gone, you loose\n          Object(_gameOver_js__WEBPACK_IMPORTED_MODULE_3__[\"gameOver\"])();\n        }\n      }\n\n      userLetterInput.value = \"\";\n    }\n  }, {\n    key: \"handleKeyPress\",\n    value: function handleKeyPress(e) {\n      //if enter is pressed trigger click on button\n      var guessButton = document.getElementById(\"guessButton\");\n\n      if (e.keyCode === 13) {\n        guessButton.click();\n      }\n    }\n  }]);\n\n  return Hangman;\n}();\n\n//# sourceURL=webpack:///./src/components/hangmanComp.js?");

/***/ }),

/***/ "./src/components/hideElements.js":
/*!****************************************!*\
  !*** ./src/components/hideElements.js ***!
  \****************************************/
/*! exports provided: hideElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElements\", function() { return hideElements; });\nfunction hideElements(myclass) {\n  for (var _len = arguments.length, els = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    els[_key - 1] = arguments[_key];\n  }\n\n  //helper func that hides\n  for (var _i = 0; _i < els.length; _i++) {\n    var el = els[_i];\n    el.classList.add(myclass);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/hideElements.js?");

/***/ }),

/***/ "./src/components/hideLives.js":
/*!*************************************!*\
  !*** ./src/components/hideLives.js ***!
  \*************************************/
/*! exports provided: hideLives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideLives\", function() { return hideLives; });\n/* harmony import */ var _hideElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideElements.js */ \"./src/components/hideElements.js\");\n\nfunction hideLives(num) {\n  //helper function triggers hides lives\n  var life = document.getElementById(\"life\".concat(num));\n  Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_0__[\"hideElements\"])('hiddenLife', life);\n}\n\n//# sourceURL=webpack:///./src/components/hideLives.js?");

/***/ }),

/***/ "./src/components/startNewGame.js":
/*!****************************************!*\
  !*** ./src/components/startNewGame.js ***!
  \****************************************/
/*! exports provided: startNewGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startNewGame\", function() { return startNewGame; });\n/* harmony import */ var _hangmanComp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hangmanComp.js */ \"./src/components/hangmanComp.js\");\n/* harmony import */ var _unhideElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unhideElements.js */ \"./src/components/unhideElements.js\");\n/* harmony import */ var _hideElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hideElements.js */ \"./src/components/hideElements.js\");\n\n\n\nfunction startNewGame() {\n  var btnWrapper = document.querySelector('.button-wrapper');\n  var winMessage = document.getElementById('statusMessage');\n  var wrongLetters = document.querySelector('#wrongLetters span');\n  var warningText = document.querySelector('#warningText');\n  var hiddenHangman = Array.from(document.querySelectorAll('svg .bodyPart'));\n  var hiddenLives = Array.from(document.querySelectorAll('.lives'));\n\n  for (var _i = 0; _i < hiddenHangman.length; _i++) {\n    var bodyPart = hiddenHangman[_i];\n    Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_2__[\"hideElements\"])('hidden', bodyPart);\n  }\n\n  for (var _i2 = 0; _i2 < hiddenLives.length; _i2++) {\n    var life = hiddenLives[_i2];\n    Object(_unhideElements_js__WEBPACK_IMPORTED_MODULE_1__[\"unhideElements\"])('hiddenLife', life);\n  }\n\n  wrongLetters.innerHTML = '';\n  Object(_unhideElements_js__WEBPACK_IMPORTED_MODULE_1__[\"unhideElements\"])('hidden', btnWrapper);\n  Object(_hideElements_js__WEBPACK_IMPORTED_MODULE_2__[\"hideElements\"])('hidden', wrongLetters.parentNode, warningText);\n  winMessage.innerHTML = 'Vanilla JavaScript Hangman Game';\n  winMessage.style.color = \"black\";\n  var oldP = document.getElementById('placeholderP');\n\n  if (oldP.parentNode) {\n    oldP.parentNode.removeChild(oldP);\n  }\n\n  var startGame = new _hangmanComp_js__WEBPACK_IMPORTED_MODULE_0__[\"Hangman\"]();\n  startGame.setupNewWord();\n}\n\n//# sourceURL=webpack:///./src/components/startNewGame.js?");

/***/ }),

/***/ "./src/components/unhideElements.js":
/*!******************************************!*\
  !*** ./src/components/unhideElements.js ***!
  \******************************************/
/*! exports provided: unhideElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unhideElements\", function() { return unhideElements; });\nfunction unhideElements(myclass) {\n  for (var _len = arguments.length, els = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    els[_key - 1] = arguments[_key];\n  }\n\n  //helper func that unhides\n  for (var _i = 0; _i < els.length; _i++) {\n    var el = els[_i];\n    el.classList.remove(myclass);\n  }\n}\n\n//# sourceURL=webpack:///./src/components/unhideElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hangmanComp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hangmanComp.js */ \"./src/components/hangmanComp.js\");\n/* harmony import */ var _components_startNewGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/startNewGame.js */ \"./src/components/startNewGame.js\");\n\n\n\nwindow.onload = function () {\n  var startGame = new _components_hangmanComp_js__WEBPACK_IMPORTED_MODULE_0__[\"Hangman\"](); //initiates first game on windo load\n\n  startGame.setupNewWord();\n  var newGame = document.getElementById('newGame');\n  newGame.onclick = _components_startNewGame_js__WEBPACK_IMPORTED_MODULE_1__[\"startNewGame\"]; //set new game handler\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });