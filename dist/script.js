/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/burger-menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const menuBuger = burgerSelector => {
  const burgerIcon = document.querySelector(burgerSelector),
    menu = document.querySelector('.menu__list');
  let intViewportHeight = window.innerHeight;
  window.addEventListener('resize', () => {
    intViewportHeight = window.innerHeight;
  });
  burgerIcon.addEventListener('click', () => {
    activeMenu();
  });
  function activeMenu() {
    burgerIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuBuger);

/***/ }),

/***/ "./src/js/modules/change-bg-menu.js":
/*!******************************************!*\
  !*** ./src/js/modules/change-bg-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeBgMenu = () => {
  const links = document.querySelectorAll('.menu-list__link'),
    wrapper = document.querySelector('.menu-list__wrapper');
  function removeActiveClass() {
    links.forEach(link => {
      link.classList.remove('_active');
    });
  }
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
    });
    link.addEventListener('mouseenter', () => {
      let bg = link.getAttribute('data-bg');
      removeActiveClass();
      link.classList.add('_active');
      wrapper.style.backgroundImage = `url(assets/img/menu/${bg}.jpg)`;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeBgMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ "./src/js/modules/burger-menu.js");
/* harmony import */ var _modules_change_bg_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/change-bg-menu */ "./src/js/modules/change-bg-menu.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('.menu__burger');
  (0,_modules_change_bg_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map