/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var entcore_1 = __webpack_require__(2);
	var entcore_2 = __webpack_require__(2);
	var scrapbookResources = {
	    read: {
	        right: "fr-wseduc-scrapbook-controllers-ScrapbookController|getScrapbook"
	    },
	    contrib: {
	        right: "fr-wseduc-scrapbook-controllers-ScrapbookController|updateScrapbook"
	    },
	    manager: {
	        right: "fr-wseduc-scrapbook-controllers-ScrapbookController|addRights"
	    }
	};
	entcore_1.Behaviours.register('scrapbook', {
	    rights: {
	        workflow: {
	            view: 'fr.wseduc.scrapbook.controllers.ScrapbookController|view',
	            create: 'fr.wseduc.scrapbook.controllers.ScrapbookController|createScrapbook',
	            print: 'fr.wseduc.scrapbook.controllers.ScrapbookController|print',
	            publish: 'fr.wseduc.scrapbook.controllers.ScrapbookController|publish',
	            createFolder: "fr.wseduc.scrapbook.controllers.FolderController|add"
	        },
	        resource: {
	            read: {
	                right: "fr-wseduc-scrapbook-controllers-ScrapbookController|getScrapbook"
	            },
	            contrib: {
	                right: "fr-wseduc-scrapbook-controllers-ScrapbookController|updateScrapbook"
	            },
	            manager: {
	                right: "fr-wseduc-scrapbook-controllers-ScrapbookController|addRights"
	            }
	        }
	    },
	    dependencies: {},
	    resource: function (resource) {
	        if (!resource.myRights) {
	            resource.myRights = {};
	        }
	        for (var behaviour in scrapbookResources) {
	            if (entcore_1.model.me.hasRight(resource, scrapbookResources[behaviour]) || entcore_1.model.me.userId === resource.owner.userId) {
	                if (resource.myRights[behaviour] !== undefined) {
	                    resource.myRights[behaviour] = resource.myRights[behaviour] && scrapbookResources[behaviour];
	                }
	                else {
	                    resource.myRights[behaviour] = scrapbookResources[behaviour];
	                }
	            }
	        }
	        if (entcore_1.model.me.userId === resource.owner) {
	            resource.myRights.share = scrapbookResources[behaviour];
	        }
	        return resource;
	    },
	    resourceRights: function () {
	        return ['read', 'contrib', 'manager'];
	    },
	    loadResources: function (callback) {
	        entcore_1.http().get('/scrapbook/list/all').done(function (scrapbooks) {
	            this.resources = entcore_2._.map(scrapbooks, function (scrapbook) {
	                scrapbook.icon = scrapbook.icon || '/img/illustrations/scrapbook.svg';
	                return {
	                    title: scrapbook.name,
	                    owner: scrapbook.owner,
	                    icon: scrapbook.icon,
	                    path: '/scrapbook#/view-scrapbook/' + scrapbook._id,
	                    _id: scrapbook._id
	                };
	            });
	            callback(this.resources);
	        }.bind(this));
	    }
	});


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	module.exports = entcore;

/***/ })
/******/ ]);
//# sourceMappingURL=behaviours.js.map