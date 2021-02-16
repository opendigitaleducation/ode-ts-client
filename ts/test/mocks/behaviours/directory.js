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
	var entcore_1 = __webpack_require__(1);
	console.log('directory behaviours loaded');
	entcore_1.Behaviours.register('directory', {
	    rights: {
	        workflow: {
	            externalNotifications: "org.entcore.timeline.controllers.TimelineController|mixinConfig",
	            historyView: "org.entcore.timeline.controllers.TimelineController|historyView",
	            showMoodMotto: "org.entcore.directory.controllers.UserBookController|userBookMottoMood",
	            switchTheme: "org.entcore.directory.controllers.UserBookController|userBookSwitchTheme",
	            generateMergeKey: "org.entcore.directory.controllers.UserController|generateMergeKey",
	            mergeByKey: "org.entcore.directory.controllers.UserController|mergeByKey",
	            allowSharebookmarks: "org.entcore.directory.controllers.ShareBookmarkController|allowSharebookmarks",
	            allowLoginUpdate: "org.entcore.directory.controllers.UserController|allowLoginUpdate",
	            allowClassAdminAddUsers: "org.entcore.directory.controllers.DirectoryController|allowClassAdminAddUsers",
	            allowClassAdminResetPassword: "org.entcore.directory.controllers.DirectoryController|allowClassAdminResetPassword",
	            allowClassAdminBlockUsers: "org.entcore.directory.controllers.DirectoryController|allowClassAdminBlockUsers",
	            allowClassAdminDeleteUsers: "org.entcore.directory.controllers.DirectoryController|allowClassAdminDeleteUsers",
	            allowClassAdminUnlinkUsers: "org.entcore.directory.controllers.DirectoryController|allowClassAdminUnlinkUsers"
	        }
	    },
	    sniplets: {
	        facebook: {
	            title: 'sniplet.facebook.title',
	            description: 'sniplet.facebook.desc',
	            controller: {
	                initSource: function () {
	                    this.source = {
	                        groups: []
	                    };
	                    this.search = {
	                        text: '',
	                        groups: [],
	                        structures: [],
	                        structure: null
	                    };
	                    entcore_1.http().get('/userbook/structures').done(function (structures) {
	                        this.search.structures = structures;
	                        this.$apply('search');
	                    }.bind(this));
	                },
	                viewUserInfos: function (userId) {
	                    window.open('/userbook/annuaire#/' + userId, '_blank');
	                },
	                removeGroup: function (index, group) {
	                    this.source.groups.splice(index, 1);
	                    this.search.groups.push(group);
	                },
	                addGroup: function (group) {
	                    this.source.groups.push(group);
	                    var index = this.search.groups.indexOf(group);
	                    this.search.groups.splice(index, 1);
	                },
	                loadGroups: function () {
	                    var that = this;
	                    entcore_1.http().get('/userbook/structure/' + this.search.structure.id).done(function (structure) {
	                        this.search.groups = structure.profileGroups.concat(structure.manualGroups);
	                        entcore_1._.map(this.search.groups, function (group) { group.translatedName = that.groupTranslation(group.name); });
	                        this.$apply('search');
	                    }.bind(this));
	                },
	                init: function () {
	                    this.source.groups.forEach(function (group) {
	                        entcore_1.http().get('/userbook/visible/users/' + group.id).done(function (users) {
	                            group.users = users;
	                            this.$apply('source');
	                        }.bind(this));
	                    }.bind(this));
	                },
	                applySource: function () {
	                    this.setSnipletSource(this.source);
	                },
	                colorFromType: function (type) {
	                    return entcore_1.ui.profileColors.match(type);
	                },
	                groupTranslation: function (groupName) {
	                    var splittedName = groupName.split('-');
	                    return splittedName.length > 1 ?
	                        entcore_1.idiom.translate(groupName.substring(0, groupName.lastIndexOf('-'))) + '-' + entcore_1.idiom.translate(groupName.split('-')[splittedName.length - 1]) :
	                        groupName;
	                },
	                getType: function (type) {
	                    if (type instanceof Array)
	                        return type[0];
	                    return type;
	                }
	            }
	        }
	    }
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = entcore;

/***/ })
/******/ ]);
//# sourceMappingURL=behaviours.js.map