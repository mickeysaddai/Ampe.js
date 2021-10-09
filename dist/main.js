/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  // const main = document.getElementById('main')\n  console.log('Ampe!!!');\n  document.getElementById('start-button').addEventListener('click', function () {\n    const numberOfPlayers = prompt('Please enter your number of players');\n    console.log('You entered ', numberOfPlayers);\n    setUpGameBoard(numberOfPlayers);\n    document.getElementById('start-button').disabled = true;\n  });\n});\nconst canvas = document.getElementById('canvas'); //canvas setup\n\nconst ctx = canvas.getContext('2d'); //allow us to use built in canvas methods\n\ncanvas.width = 500;\ncanvas.height = 300;\nlet angle = 0; //make player goes up or down\n\nlet hue = 0;\nlet score = 0;\n\nfunction setUpGameBoard(players = 1) {\n  createPlayers(players, 75);\n  createPlayers(players, 185);\n}\n\nfunction createPlayer(xCoord = 100, yCoord = 75) {\n  //for a single player\n  // ctx.clearRect(0, 0, canvas.width, canvas.height)\n  ctx.strokeRect(0, 0, canvas.width, canvas.height); // ctx.fillRect(20, 200, 100, 100)\n\n  ctx.beginPath();\n  ctx.arc(xCoord, yCoord, 20, 0, 2 * Math.PI);\n  ctx.stroke(); // requestAnimationFrame(animate)\n}\n\nfunction createPlayers(numberOfPlayers, yCoord) {\n  //for multiple players\n  let startingXCoord = 100;\n  const startingYCoord = yCoord || 75;\n\n  for (let i = 0; i < numberOfPlayers; i++) {\n    createPlayer(startingXCoord, startingYCoord);\n    startingXCoord += 75;\n  }\n} // let player = {\n//     x: 300,\n//     y: 300,\n//     width: 20,\n//     height: 20\n//     // x_vel: 0,\n//     // y_vel: 0\n// }\n// ctx.strokeRect(100, 100, 100, -100);\n// ctx.fillStyle = 'rgb(200, 0, 0)';\n// ctx.fillRect(10, 10, 50, 50);\n// ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';\n// ctx.fillRect(30, 30, 50, 50);\n// function draw() {\n//     var canvas = document.getElementById('canvas');\n//     if (canvas.getContext) {\n//         var ctx = canvas.getContext('2d');\n//         ctx.fillRect(25, 25, 100, 100);\n//         ctx.clearRect(45, 45, 60, 60);\n//         ctx.strokeRect(50, 50, 50, 50);\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbXBlX2pzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIiwibnVtYmVyT2ZQbGF5ZXJzIiwicHJvbXB0Iiwic2V0VXBHYW1lQm9hcmQiLCJkaXNhYmxlZCIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImFuZ2xlIiwiaHVlIiwic2NvcmUiLCJwbGF5ZXJzIiwiY3JlYXRlUGxheWVycyIsImNyZWF0ZVBsYXllciIsInhDb29yZCIsInlDb29yZCIsInN0cm9rZVJlY3QiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2UiLCJzdGFydGluZ1hDb29yZCIsInN0YXJ0aW5nWUNvb3JkIiwiaSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07QUFDaEQ7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUVBSCxFQUFBQSxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NILGdCQUF4QyxDQUF5RCxPQUF6RCxFQUFrRSxZQUFVO0FBRXhFLFVBQU1JLGVBQWUsR0FBR0MsTUFBTSxDQUFDLHFDQUFELENBQTlCO0FBQ0FKLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJFLGVBQTVCO0FBQ0FFLElBQUFBLGNBQWMsQ0FBQ0YsZUFBRCxDQUFkO0FBQ0FMLElBQUFBLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixjQUF4QixFQUF3Q0ksUUFBeEMsR0FBbUQsSUFBbkQ7QUFDSCxHQU5EO0FBT0gsQ0FYRDtBQWVBLE1BQU1DLE1BQU0sR0FBR1QsUUFBUSxDQUFDSSxjQUFULENBQXdCLFFBQXhCLENBQWYsQyxDQUFrRDs7QUFDbEQsTUFBTU0sR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDLENBQXFDOztBQUNyQ0YsTUFBTSxDQUFDRyxLQUFQLEdBQWUsR0FBZjtBQUNBSCxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsR0FBaEI7QUFHQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWixDLENBQWU7O0FBQ2YsSUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFFQSxTQUFTVCxjQUFULENBQXdCVSxPQUFPLEdBQUcsQ0FBbEMsRUFBcUM7QUFFakNDLEVBQUFBLGFBQWEsQ0FBQ0QsT0FBRCxFQUFVLEVBQVYsQ0FBYjtBQUNBQyxFQUFBQSxhQUFhLENBQUNELE9BQUQsRUFBVSxHQUFWLENBQWI7QUFDSDs7QUFFRCxTQUFTRSxZQUFULENBQXNCQyxNQUFNLEdBQUcsR0FBL0IsRUFBb0NDLE1BQU0sR0FBRyxFQUE3QyxFQUFnRDtBQUFFO0FBQzlDO0FBQ0FYLEVBQUFBLEdBQUcsQ0FBQ1ksVUFBSixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJiLE1BQU0sQ0FBQ0csS0FBNUIsRUFBbUNILE1BQU0sQ0FBQ0ksTUFBMUMsRUFGNEMsQ0FHNUM7O0FBRUFILEVBQUFBLEdBQUcsQ0FBQ2EsU0FBSjtBQUNBYixFQUFBQSxHQUFHLENBQUNjLEdBQUosQ0FBUUosTUFBUixFQUFnQkMsTUFBaEIsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsRUFBK0IsSUFBSUksSUFBSSxDQUFDQyxFQUF4QztBQUNBaEIsRUFBQUEsR0FBRyxDQUFDaUIsTUFBSixHQVA0QyxDQVM1QztBQUNIOztBQUVELFNBQVNULGFBQVQsQ0FBdUJiLGVBQXZCLEVBQXdDZ0IsTUFBeEMsRUFBZ0Q7QUFBRTtBQUM5QyxNQUFJTyxjQUFjLEdBQUcsR0FBckI7QUFDQSxRQUFNQyxjQUFjLEdBQUdSLE1BQU0sSUFBSSxFQUFqQzs7QUFFQSxPQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd6QixlQUFwQixFQUFxQ3lCLENBQUMsRUFBdEMsRUFBMEM7QUFDdENYLElBQUFBLFlBQVksQ0FBQ1MsY0FBRCxFQUFpQkMsY0FBakIsQ0FBWjtBQUNBRCxJQUFBQSxjQUFjLElBQUksRUFBbEI7QUFDSDtBQUNKLEMsQ0FRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuICAgIGNvbnNvbGUubG9nKCdBbXBlISEhJylcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICBcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZQbGF5ZXJzID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgeW91ciBudW1iZXIgb2YgcGxheWVycycpXG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3UgZW50ZXJlZCAnLCBudW1iZXJPZlBsYXllcnMpXG4gICAgICAgIHNldFVwR2FtZUJvYXJkKG51bWJlck9mUGxheWVycylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KVxufSlcblxuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgLy9jYW52YXMgc2V0dXBcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAvL2FsbG93IHVzIHRvIHVzZSBidWlsdCBpbiBjYW52YXMgbWV0aG9kc1xuY2FudmFzLndpZHRoID0gNTAwO1xuY2FudmFzLmhlaWdodCA9IDMwMDtcblxuXG5sZXQgYW5nbGUgPSAwOyAvL21ha2UgcGxheWVyIGdvZXMgdXAgb3IgZG93blxubGV0IGh1ZSA9IDA7IFxubGV0IHNjb3JlID0gMDtcblxuZnVuY3Rpb24gc2V0VXBHYW1lQm9hcmQocGxheWVycyA9IDEpIHtcblxuICAgIGNyZWF0ZVBsYXllcnMocGxheWVycywgNzUpXG4gICAgY3JlYXRlUGxheWVycyhwbGF5ZXJzLCAxODUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXllcih4Q29vcmQgPSAxMDAsIHlDb29yZCA9IDc1KXsgLy9mb3IgYSBzaW5nbGUgcGxheWVyXG4gICAgLy8gY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gICAgY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIC8vIGN0eC5maWxsUmVjdCgyMCwgMjAwLCAxMDAsIDEwMClcbiAgICBcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh4Q29vcmQsIHlDb29yZCwgMjAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheWVycyhudW1iZXJPZlBsYXllcnMsIHlDb29yZCkgeyAvL2ZvciBtdWx0aXBsZSBwbGF5ZXJzXG4gICAgbGV0IHN0YXJ0aW5nWENvb3JkID0gMTAwXG4gICAgY29uc3Qgc3RhcnRpbmdZQ29vcmQgPSB5Q29vcmQgfHwgNzU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUGxheWVyczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVBsYXllcihzdGFydGluZ1hDb29yZCwgc3RhcnRpbmdZQ29vcmQpO1xuICAgICAgICBzdGFydGluZ1hDb29yZCArPSA3NTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbi8vIGxldCBwbGF5ZXIgPSB7XG4vLyAgICAgeDogMzAwLFxuLy8gICAgIHk6IDMwMCxcbi8vICAgICB3aWR0aDogMjAsXG4vLyAgICAgaGVpZ2h0OiAyMFxuXG4vLyAgICAgLy8geF92ZWw6IDAsXG4vLyAgICAgLy8geV92ZWw6IDBcblxuLy8gfVxuXG5cblxuXG5cblxuLy8gY3R4LnN0cm9rZVJlY3QoMTAwLCAxMDAsIDEwMCwgLTEwMCk7XG4vLyBjdHguZmlsbFN0eWxlID0gJ3JnYigyMDAsIDAsIDApJztcbi8vIGN0eC5maWxsUmVjdCgxMCwgMTAsIDUwLCA1MCk7XG5cbi8vIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyMDAsIDAuNSknO1xuLy8gY3R4LmZpbGxSZWN0KDMwLCAzMCwgNTAsIDUwKTtcblxuLy8gZnVuY3Rpb24gZHJhdygpIHtcbi8vICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuLy8gICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuLy8gICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbi8vICAgICAgICAgY3R4LmZpbGxSZWN0KDI1LCAyNSwgMTAwLCAxMDApO1xuLy8gICAgICAgICBjdHguY2xlYXJSZWN0KDQ1LCA0NSwgNjAsIDYwKTtcbi8vICAgICAgICAgY3R4LnN0cm9rZVJlY3QoNTAsIDUwLCA1MCwgNTApO1xuLy8gICAgIH1cbi8vIH0iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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