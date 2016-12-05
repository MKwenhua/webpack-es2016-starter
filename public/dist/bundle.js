/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var generateList = __webpack_require__(1);
	var modifyDomSelector = __webpack_require__(2);

	function innitApp() {
	    modifyDomSelector();

	    var arrayOfSmartestAnimals = [{ name: 'Ravens', img: 'images/raven.jpg' }, { name: 'Dolphins', img: 'images/dolphin.png' }, { name: 'Parrot', img: 'images/parrot.png' }, { name: 'Orangutan', img: 'images/orangutan.jpg' }, { name: 'Elephants', img: 'images/elephant.png' }];

	    document.querySelector('#animalList').innerHTML = generateList(arrayOfSmartestAnimals);

	    var sections = document.getAll('.tabs-contents').reduce(function (obj, itm) {
	        if (itm.classList.length === 1) {
	            obj.selected = itm.dataset.sect;
	        }
	        obj[itm.dataset.sect] = itm;
	        return obj;
	    }, {});

	    sections.switchView = function (keyy) {
	        sections[sections.selected].classList.add('hide-elm');
	        sections.selected = keyy;
	        sections[keyy].classList.remove('hide-elm');
	    };
	    console.log('sections', sections);

	    var sectionTabs = document.getAll('.span-tab-thing');

	    console.log('sectionTabs', sectionTabs);

	    document.getElementById('tabBlock').onclick = function (e) {
	        if (e.target.tagName !== 'SPAN' || e.target.classList.contains('on')) return;

	        sectionTabs.forEach(function (itm) {
	            if (itm.dataset.sect === sections.selected) {
	                itm.classList.remove('on');
	            }
	        });
	        e.target.classList.add('on');

	        sections.switchView(e.target.dataset.sect);
	    };
	};
	innitApp();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var generateList = function generateList(array) {
		return array.map(function (itm, i) {
			var className = i % 2 < 1 ? "" : "odd-li";
			return "<li class=\"" + className + "\">\n\t             <img src=\"" + itm.img + "\" height=\"35\" >\n\t             <span class=\"list-span\">" + itm.name + "</span>\n\t         </li>";
		}).join('');
	};

	module.exports = generateList;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
		Document.prototype.getAll = function (selector) {
			var domElemList = document.querySelectorAll(selector);
			if (!domElemList.length) {
				console.log("could not find elements with selector: " + selector);
				return false;
			}
			var jsArray = [];
			for (var i = 0; i < domElemList.length; i++) {
				jsArray.push(domElemList[i]);
			}
			return jsArray;
		};
	};

/***/ }
/******/ ]);