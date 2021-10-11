/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const Game = require('./scripts/game.js');\nconst canvas = document.getElementById('canvas'); //canvas setup\n\nconst ctx = canvas.getContext('2d'); //allow us to use built in canvas methods\n\ncanvas.width = 500;\ncanvas.height = 300;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const main = document.getElementById('main')\n  console.log('Ampe!!!');\n  document.getElementById('start-button').addEventListener('click', function () {\n    console.log('clicked');\n    const numberOfPlayers = prompt('Please enter your number of players');\n    const game = new Game(ctx, numberOfPlayers);\n    game.drawGame(); // console.log('You entered ', numberOfPlayers)\n    // setUpGameBoard(numberOfPlayers)\n\n    document.getElementById('start-button').disabled = true;\n  });\n});\nlet angle = 0; //make player goes up or down\n\nlet hue = 0;\nlet score = 0;\n\nfunction setUpGameBoard(players = 1) {\n  createPlayers(players, 75);\n  createPlayers(players, 185);\n}\n\nfunction createPlayer(xCoord = 100, yCoord = 75) {\n  //for a single player\n  // ctx.clearRect(0, 0, canvas.width, canvas.height)\n  ctx.strokeRect(0, 0, canvas.width, canvas.height); // ctx.fillRect(20, 200, 100, 100)\n\n  ctx.beginPath();\n  ctx.arc(xCoord, yCoord, 20, 0, 2 * Math.PI);\n  ctx.stroke(); // requestAnimationFrame(animate)\n}\n\nfunction createPlayers(numberOfPlayers, yCoord) {\n  //for multiple players\n  let startingXCoord = 100;\n  const startingYCoord = yCoord || 75;\n\n  for (let i = 0; i < numberOfPlayers; i++) {\n    createPlayer(startingXCoord, startingYCoord);\n    startingXCoord += 75;\n  }\n} // let player = {\n//     x: 300,\n//     y: 300,\n//     width: 20,\n//     height: 20\n//     // x_vel: 0,\n//     // y_vel: 0\n// }\n// ctx.strokeRect(100, 100, 100, -100);\n// ctx.fillStyle = 'rgb(200, 0, 0)';\n// ctx.fillRect(10, 10, 50, 50);\n// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n// ctx.fillRect(30, 30, 50, 50);\n// function draw() {\n//     var canvas = document.getElementById('canvas');\n//     if (canvas.getContext) {\n//         var ctx = canvas.getContext('2d');\n//         ctx.fillRect(25, 25, 100, 100);\n//         ctx.clearRect(45, 45, 60, 60);\n//         ctx.strokeRect(50, 50, 50, 50);\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibnVtYmVyT2ZQbGF5ZXJzIiwicHJvbXB0IiwiZ2FtZSIsIkdhbWUiLCJkcmF3R2FtZSIsImRpc2FibGVkIiwiYW5nbGUiLCJodWUiLCJzY29yZSIsInNldFVwR2FtZUJvYXJkIiwicGxheWVycyIsImNyZWF0ZVBsYXllcnMiLCJjcmVhdGVQbGF5ZXIiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJzdHJva2VSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwic3RhcnRpbmdYQ29vcmQiLCJzdGFydGluZ1lDb29yZCIsImkiXSwibWFwcGluZ3MiOiJBQUFBO0FBR0EsTUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZixDLENBQWtEOztBQUNsRCxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaLEMsQ0FBcUM7O0FBQ3JDSixNQUFNLENBQUNLLEtBQVAsR0FBZSxHQUFmO0FBQ0FMLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixHQUFoQjtBQUVBTCxRQUFRLENBQUNNLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0FBQ2hEO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFFQVIsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDSyxnQkFBeEMsQ0FBeUQsT0FBekQsRUFBa0UsWUFBVTtBQUMxRUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNFLFVBQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUFDLHFDQUFELENBQTlCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU1YsR0FBVCxFQUFjTyxlQUFkLENBQWI7QUFDQUUsSUFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBSndFLENBS3hFO0FBQ0E7O0FBQ0FiLElBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q2EsUUFBeEMsR0FBbUQsSUFBbkQ7QUFDSCxHQVJEO0FBU0gsQ0FiRDtBQW1CQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWixDLENBQWU7O0FBQ2YsSUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFTQyxjQUFULENBQXdCQyxPQUFPLEdBQUcsQ0FBbEMsRUFBcUM7QUFFakNDLEVBQUFBLGFBQWEsQ0FBQ0QsT0FBRCxFQUFVLEVBQVYsQ0FBYjtBQUNBQyxFQUFBQSxhQUFhLENBQUNELE9BQUQsRUFBVSxHQUFWLENBQWI7QUFDSDs7QUFFRCxTQUFTRSxZQUFULENBQXNCQyxNQUFNLEdBQUcsR0FBL0IsRUFBb0NDLE1BQU0sR0FBRyxFQUE3QyxFQUFnRDtBQUFFO0FBQzlDO0FBQ0FyQixFQUFBQSxHQUFHLENBQUNzQixVQUFKLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQnpCLE1BQU0sQ0FBQ0ssS0FBNUIsRUFBbUNMLE1BQU0sQ0FBQ00sTUFBMUMsRUFGNEMsQ0FHNUM7O0FBRUFILEVBQUFBLEdBQUcsQ0FBQ3VCLFNBQUo7QUFDQXZCLEVBQUFBLEdBQUcsQ0FBQ3dCLEdBQUosQ0FBUUosTUFBUixFQUFnQkMsTUFBaEIsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsRUFBK0IsSUFBSUksSUFBSSxDQUFDQyxFQUF4QztBQUNBMUIsRUFBQUEsR0FBRyxDQUFDMkIsTUFBSixHQVA0QyxDQVM1QztBQUNIOztBQUVELFNBQVNULGFBQVQsQ0FBdUJYLGVBQXZCLEVBQXdDYyxNQUF4QyxFQUFnRDtBQUFFO0FBQzlDLE1BQUlPLGNBQWMsR0FBRyxHQUFyQjtBQUNBLFFBQU1DLGNBQWMsR0FBR1IsTUFBTSxJQUFJLEVBQWpDOztBQUVBLE9BQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3ZCLGVBQXBCLEVBQXFDdUIsQ0FBQyxFQUF0QyxFQUEwQztBQUN0Q1gsSUFBQUEsWUFBWSxDQUFDUyxjQUFELEVBQWlCQyxjQUFqQixDQUFaO0FBQ0FELElBQUFBLGNBQWMsSUFBSSxFQUFsQjtBQUNIO0FBQ0osQyxDQVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vc2NyaXB0cy9nYW1lLmpzJyk7XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyAvL2NhbnZhcyBzZXR1cFxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7IC8vYWxsb3cgdXMgdG8gdXNlIGJ1aWx0IGluIGNhbnZhcyBtZXRob2RzXG5jYW52YXMud2lkdGggPSA1MDA7XG5jYW52YXMuaGVpZ2h0ID0gMzAwO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgICBjb25zb2xlLmxvZygnQW1wZSEhIScpXG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKVxuICAgICAgICBjb25zdCBudW1iZXJPZlBsYXllcnMgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciB5b3VyIG51bWJlciBvZiBwbGF5ZXJzJylcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGN0eCwgbnVtYmVyT2ZQbGF5ZXJzKTtcbiAgICAgICAgZ2FtZS5kcmF3R2FtZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnWW91IGVudGVyZWQgJywgbnVtYmVyT2ZQbGF5ZXJzKVxuICAgICAgICAvLyBzZXRVcEdhbWVCb2FyZChudW1iZXJPZlBsYXllcnMpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSlcbn0pXG5cblxuXG5cblxubGV0IGFuZ2xlID0gMDsgLy9tYWtlIHBsYXllciBnb2VzIHVwIG9yIGRvd25cbmxldCBodWUgPSAwOyBcbmxldCBzY29yZSA9IDA7XG5cbmZ1bmN0aW9uIHNldFVwR2FtZUJvYXJkKHBsYXllcnMgPSAxKSB7XG5cbiAgICBjcmVhdGVQbGF5ZXJzKHBsYXllcnMsIDc1KVxuICAgIGNyZWF0ZVBsYXllcnMocGxheWVycywgMTg1KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIoeENvb3JkID0gMTAwLCB5Q29vcmQgPSA3NSl7IC8vZm9yIGEgc2luZ2xlIHBsYXllclxuICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIGN0eC5zdHJva2VSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAvLyBjdHguZmlsbFJlY3QoMjAsIDIwMCwgMTAwLCAxMDApXG4gICAgXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoeENvb3JkLCB5Q29vcmQsIDIwLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcnMobnVtYmVyT2ZQbGF5ZXJzLCB5Q29vcmQpIHsgLy9mb3IgbXVsdGlwbGUgcGxheWVyc1xuICAgIGxldCBzdGFydGluZ1hDb29yZCA9IDEwMFxuICAgIGNvbnN0IHN0YXJ0aW5nWUNvb3JkID0geUNvb3JkIHx8IDc1O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBsYXllcnM7IGkrKykge1xuICAgICAgICBjcmVhdGVQbGF5ZXIoc3RhcnRpbmdYQ29vcmQsIHN0YXJ0aW5nWUNvb3JkKTtcbiAgICAgICAgc3RhcnRpbmdYQ29vcmQgKz0gNzU7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBsZXQgcGxheWVyID0ge1xuLy8gICAgIHg6IDMwMCxcbi8vICAgICB5OiAzMDAsXG4vLyAgICAgd2lkdGg6IDIwLFxuLy8gICAgIGhlaWdodDogMjBcblxuLy8gICAgIC8vIHhfdmVsOiAwLFxuLy8gICAgIC8vIHlfdmVsOiAwXG5cbi8vIH1cblxuXG5cblxuXG5cbi8vIGN0eC5zdHJva2VSZWN0KDEwMCwgMTAwLCAxMDAsIC0xMDApO1xuLy8gY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjAwLCAwLCAwKSc7XG4vLyBjdHguZmlsbFJlY3QoMTAsIDEwLCA1MCwgNTApO1xuXG4vLyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMjAwLCAwLjUpJztcbi8vIGN0eC5maWxsUmVjdCgzMCwgMzAsIDUwLCA1MCk7XG5cbi8vIGZ1bmN0aW9uIGRyYXcoKSB7XG4vLyAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbi8vICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbi8vICAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyAgICAgICAgIGN0eC5maWxsUmVjdCgyNSwgMjUsIDEwMCwgMTAwKTtcbi8vICAgICAgICAgY3R4LmNsZWFyUmVjdCg0NSwgNDUsIDYwLCA2MCk7XG4vLyAgICAgICAgIGN0eC5zdHJva2VSZWN0KDUwLCA1MCwgNTAsIDUwKTtcbi8vICAgICB9XG4vLyB9Il0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;