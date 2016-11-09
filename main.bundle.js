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

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Unna);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Vollkorn:400,700);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Arvo:400,700);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Abril+Fatface);", ""]);
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,800);", ""]);

	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/*Week One*/\n/*Week Two*/\n/*Week Three*/\n/*Week Four*/\nbody {\n  box-sizing: border-box;\n  font-family: Unna, serif; }\n\na:visited {\n  color: inherit; }\n\n.week {\n  border: 3px solid black;\n  margin: 20px auto;\n  padding: 5px;\n  text-align: center;\n  width: 30px; }\n\n.weekOne {\n  height: 800px;\n  width: 100%; }\n  .weekOne .main-container {\n    display: block;\n    margin: auto;\n    position: relative;\n    height: 800px;\n    width: 95%; }\n  .weekOne .art-container {\n    display: block;\n    height: 100%;\n    margin: auto;\n    width: 90%; }\n    .weekOne .art-container .quote {\n      font-family: Lato, sans-serif;\n      font-weight: 300;\n      font-size: 18px;\n      margin-top: 250px;\n      line-height: 35px;\n      text-align: center; }\n  .weekOne .design-info {\n    background-color: #2EA1D9;\n    color: #ffffff;\n    font-family: Lato, sans-serif;\n    position: absolute;\n    bottom: -20px;\n    left: 5%;\n    line-height: 25px;\n    padding: 10px 0px;\n    text-align: center;\n    width: 90%; }\n    .weekOne .design-info .date {\n      font-size: 12px; }\n\n.fire {\n  color: #911F27;\n  font-size: 40px; }\n\n.water {\n  /* Safari */\n  -webkit-transform: rotate(41deg);\n  /* Firefox */\n  -moz-transform: rotate(41deg);\n  /* IE */\n  -ms-transform: rotate(41deg);\n  /* Opera */\n  -o-transform: rotate(41deg);\n  color: #2EA1D9;\n  font-size: 80px;\n  position: absolute;\n  right: 30px;\n  top: 53%; }\n  .water .char1 {\n    -webkit-transform: translateX(-1px) translateY(68px) rotate(-17deg);\n    -moz-transform: translateX(-1px) translateY(68px) rotate(-17deg);\n    -ms-transform: translateX(-1px) translateY(68px) rotate(-17deg);\n    -o-transform: translateX(-1px) translateY(68px) rotate(-17deg);\n    transform: translateX(-1px) translateY(68px) rotate(-17deg);\n    -webkit-transition-delay: 7s;\n    -moz-transition-delay: 7s;\n    -o-transition-delay: 7s;\n    transition-delay: 7s; }\n  .water .char2 {\n    -webkit-transform: translateX(-3px) translateY(39px) rotate(-13deg);\n    -moz-transform: translateX(-3px) translateY(39px) rotate(-13deg);\n    -ms-transform: translateX(-3px) translateY(39px) rotate(-13deg);\n    -o-transform: translateX(-3px) translateY(39px) rotate(-13deg);\n    transform: translateX(-3px) translateY(39px) rotate(-13deg);\n    -webkit-transition-delay: 6s;\n    -moz-transition-delay: 6s;\n    -o-transition-delay: 6s;\n    transition-delay: 6s; }\n  .water .char3 {\n    -webkit-transform: translateX(-5px) translateY(21px) rotate(-9deg);\n    -moz-transform: translateX(-5px) translateY(21px) rotate(-9deg);\n    -ms-transform: translateX(-5px) translateY(21px) rotate(-9deg);\n    -o-transform: translateX(-5px) translateY(21px) rotate(-9deg);\n    transform: translateX(-5px) translateY(21px) rotate(-9deg);\n    -webkit-transition-delay: 5s;\n    -moz-transition-delay: 5s;\n    -o-transition-delay: 5s;\n    transition-delay: 5s; }\n  .water .char4 {\n    -webkit-transform: translateX(-7px) translateY(15px) rotate(-7deg);\n    -moz-transform: translateX(-7px) translateY(15px) rotate(-7deg);\n    -ms-transform: translateX(-7px) translateY(15px) rotate(-7deg);\n    -o-transform: translateX(-7px) translateY(15px) rotate(-7deg);\n    transform: translateX(-7px) translateY(15px) rotate(-7deg);\n    -webkit-transition-delay: 4s;\n    -moz-transition-delay: 4s;\n    -o-transition-delay: 4s;\n    transition-delay: 4s; }\n  .water .char5 {\n    -webkit-transform: translateX(-9px) translateY(11px) rotate(-5deg);\n    -moz-transform: translateX(-9px) translateY(11px) rotate(-5deg);\n    -ms-transform: translateX(-9px) translateY(11px) rotate(-5deg);\n    -o-transform: translateX(-9px) translateY(11px) rotate(-5deg);\n    transform: translateX(-9px) translateY(11px) rotate(-5deg);\n    -webkit-transition-delay: 3s;\n    -moz-transition-delay: 3s;\n    -o-transition-delay: 3s;\n    transition-delay: 3s; }\n  .water .char6 {\n    color: #911F27;\n    -webkit-transform: translateX(-11px) translateY(7px) rotate(-3deg);\n    -moz-transform: translateX(-11px) translateY(7px) rotate(-3deg);\n    -ms-transform: translateX(-11px) translateY(7px) rotate(-3deg);\n    -o-transform: translateX(-11px) translateY(7px) rotate(-3deg);\n    transform: translateX(-11px) translateY(7px) rotate(-3deg);\n    -webkit-transition-delay: 2s;\n    -moz-transition-delay: 2s;\n    -o-transition-delay: 2s;\n    transition-delay: 2s; }\n\n@media only screen and (max-width: 990px) {\n  .water {\n    top: 60%; } }\n\n@media only screen and (max-width: 670px) {\n  .water {\n    /* Safari */\n    -webkit-transform: rotate(48deg);\n    /* Firefox */\n    -moz-transform: rotate(48deg);\n    /* IE */\n    -ms-transform: rotate(48deg);\n    /* Opera */\n    -o-transform: rotate(48deg); } }\n\n@media only screen and (max-width: 580px) {\n  .water {\n    /* Safari */\n    -webkit-transform: rotate(53deg);\n    /* Firefox */\n    -moz-transform: rotate(53deg);\n    /* IE */\n    -ms-transform: rotate(53deg);\n    /* Opera */\n    -o-transform: rotate(53deg);\n    top: 65%; } }\n\n/*Week One*/\n/*Week Two*/\n/*Week Three*/\n/*Week Four*/\nbody {\n  box-sizing: border-box; }\n\n.weekTwo .main-container {\n  background-color: #247291;\n  margin: auto;\n  position: relative;\n  height: 800px;\n  width: 100%; }\n\n.weekTwo .art-container {\n  display: block;\n  height: 100%;\n  margin: auto;\n  width: 90%; }\n  .weekTwo .art-container .week {\n    border: 3px solid black;\n    margin: 20px auto;\n    padding: 5px;\n    text-align: center;\n    width: 30px; }\n  .weekTwo .art-container .quote {\n    color: #A8896C;\n    font-family: Vollkorn, sans-serif;\n    font-size: 40px;\n    margin-top: 250px;\n    line-height: 35px;\n    text-align: center; }\n    .weekTwo .art-container .quote .bold {\n      font-weight: bold; }\n  .weekTwo .art-container .author {\n    font-size: 10px;\n    margin-top: 10px;\n    text-align: center; }\n\n.weekTwo .design-info {\n  background-color: #A8896C;\n  color: #ffffff;\n  font-family: Open Sans, sans-serif;\n  position: absolute;\n  line-height: 25px;\n  padding: 10px 0px;\n  text-align: center;\n  width: 100%; }\n  .weekTwo .design-info .date {\n    font-size: 12px; }\n\n/*Week One*/\n/*Week Two*/\n/*Week Three*/\n/*Week Four*/\nbody {\n  box-sizing: border-box; }\n\n.weekThree .main-container {\n  background-color: #F47C7C;\n  margin: auto;\n  position: relative;\n  height: 800px;\n  width: 100%; }\n\n.weekThree .art-container {\n  display: block;\n  height: 100%;\n  margin: auto;\n  margin-top: 68px;\n  width: 90%; }\n  .weekThree .art-container .week {\n    border: 3px solid black;\n    margin: 20px auto;\n    padding: 5px;\n    text-align: center;\n    width: 30px; }\n  .weekThree .art-container .quote {\n    color: #70A1D7;\n    font-family: Arvo, sans-serif;\n    font-size: 40px;\n    margin-top: 250px;\n    line-height: 35px;\n    text-align: center; }\n  .weekThree .art-container .author {\n    font-size: 10px;\n    margin-top: 10px;\n    text-align: center; }\n\n.weekThree .design-info {\n  background-color: #F47C7C;\n  color: #ffffff;\n  font-family: Noto Sans, sans-serif;\n  position: absolute;\n  line-height: 25px;\n  padding: 10px 0px;\n  text-align: center;\n  width: 100%; }\n  .weekThree .design-info .date {\n    font-size: 12px; }\n\n/*Week One*/\n/*Week Two*/\n/*Week Three*/\n/*Week Four*/\nbody {\n  box-sizing: border-box; }\n\n.weekFour .main-container {\n  background-color: #ffffff;\n  margin: auto;\n  position: relative;\n  height: 800px;\n  width: 100%; }\n\n.weekFour .art-container {\n  display: block;\n  height: 100%;\n  margin: auto;\n  margin-top: 68px;\n  width: 90%; }\n  .weekFour .art-container .week {\n    border: 3px solid black;\n    margin: 20px auto;\n    padding: 5px;\n    text-align: center;\n    width: 30px; }\n  .weekFour .art-container .quote {\n    color: #283739;\n    font-family: Open Sans, sans-serif;\n    font-size: 40px;\n    margin-top: 250px;\n    line-height: 35px;\n    text-align: center; }\n    .weekFour .art-container .quote .whooshing {\n      color: #2E94B9;\n      font-family: Abril, cursive; }\n  .weekFour .art-container .author {\n    color: #2E94B9;\n    font-size: 10px;\n    margin-top: 10px;\n    text-align: center; }\n\n.weekFour .design-info {\n  background-color: #F47C7C;\n  color: #ffffff;\n  font-family: Noto Sans, sans-serif;\n  position: absolute;\n  line-height: 25px;\n  padding: 10px 0px;\n  text-align: center;\n  width: 100%; }\n  .weekFour .design-info .date {\n    font-size: 12px; }\n\nfooter {\n  margin-top: 50px;\n  text-align: center; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);