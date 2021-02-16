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
	var model_1 = __webpack_require__(3);
	var Event = model_1.timelineNamespace.Event;
	console.log('timelinegenerator behaviours loaded');
	entcore_1.model.momentDateFormat = {
	    "year": "YYYY",
	    "month": "MM/YYYY",
	    "day": "DD/MM/YYYY"
	};
	entcore_1.model.timelineJSDateFormat = {
	    "year": "YYYY",
	    "month": "YYYY,MM",
	    "day": "YYYY,MM,DD"
	};
	entcore_1.model.datePickerDateFormat = {
	    "year": "yyyy",
	    "month": "mm/yyyy",
	    "day": "dd/mm/yyyy"
	};
	entcore_1.model.inputPlaceholderDateFormat = {
	    "year": "annÃ©e",
	    "month": "mois/annÃ©e",
	    "day": "jour/mois/annÃ©e"
	};
	function initScript() {
	    console.log("going on initScript");
	    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
	}
	exports.initScript = initScript;
	var timelineGeneratorBehaviours = {
	    resources: {
	        contrib: {
	            right: 'net-atos-entng-timelinegenerator-controllers-EventController|createEvent'
	        },
	        manage: {
	            right: 'net-atos-entng-timelinegenerator-controllers-TimelineController|updateTimeline'
	        },
	        share: {
	            right: 'net-atos-entng-timelinegenerator-controllers-TimelineController|shareTimeline'
	        }
	    },
	    workflow: {
	        createFolder: 'net.atos.entng.timelinegenerator.controllers.FoldersController|add',
	        create: 'net.atos.entng.timelinegenerator.controllers.TimelineController|createTimeline',
	        view: 'net.atos.entng.timelinegenerator.controllers.TimelineController|view',
	        publish: 'net.atos.entng.timelinegenerator.controllers.TimelineController|publish'
	    },
	    viewRights: ['net-atos-entng-timelinegenerator-controllers-TimelineController|view']
	};
	entcore_1.Behaviours.register('timelinegenerator', {
	    behaviours: timelineGeneratorBehaviours,
	    rights: {
	        resource: {
	            contrib: {
	                right: 'net-atos-entng-timelinegenerator-controllers-EventController|createEvent'
	            },
	            manage: {
	                right: 'net-atos-entng-timelinegenerator-controllers-TimelineController|updateTimeline'
	            },
	            manager: {
	                right: 'net-atos-entng-timelinegenerator-controllers-TimelineController|updateTimeline'
	            },
	            share: {
	                right: 'net-atos-entng-timelinegenerator-controllers-TimelineController|shareTimeline'
	            }
	        }
	    },
	    resourceRights: function (resource) {
	        var rightsContainer = resource;
	        if (resource instanceof Event && resource.timeline) {
	            rightsContainer = resource.timeline;
	        }
	        if (!resource.myRights) {
	            resource.myRights = {};
	        }
	        for (var behaviour in timelineGeneratorBehaviours.resources) {
	            if (entcore_1.model.me.hasRight(rightsContainer, timelineGeneratorBehaviours.resources[behaviour]) ||
	                entcore_1.model.me.userId === resource.owner.userId ||
	                entcore_1.model.me.userId === rightsContainer.owner.userId) {
	                if (resource.myRights[behaviour] !== undefined) {
	                    resource.myRights[behaviour] = resource.myRights[behaviour] && timelineGeneratorBehaviours.resources[behaviour];
	                }
	                else {
	                    resource.myRights[behaviour] = timelineGeneratorBehaviours.resources[behaviour];
	                }
	            }
	        }
	        return resource;
	    },
	    /**
	     * Allows to load workflow rights according to rights defined by the
	     * administrator for the current user in the console.
	     */
	    workflow: function () {
	        var workflow = {};
	        var timelineGeneratorWorkflow = timelineGeneratorBehaviours.workflow;
	        for (var prop in timelineGeneratorWorkflow) {
	            if (entcore_1.model.me.hasWorkflow(timelineGeneratorWorkflow[prop])) {
	                workflow[prop] = true;
	            }
	        }
	        return workflow;
	    },
	    loadResources: function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            entcore_1.http().get('/timelinegenerator/timelines').done(function (timelines) {
	                this.resources = entcore_1._.map(timelines, function (timeline) {
	                    var timelineIcon = timeline.icon;
	                    if (!timelineIcon) {
	                        timelineIcon = "/img/illustrations/timeline-default.png";
	                    }
	                    return {
	                        title: timeline.headline,
	                        ownerName: timeline.owner.displayName,
	                        owner: timeline.owner.userId,
	                        icon: timelineIcon,
	                        path: '/timelinegenerator#/view/' + timeline._id,
	                        _id: timeline._id
	                    };
	                });
	                resolve(this.resources);
	            }.bind(_this));
	        });
	    },
	    sniplets: {
	        timelines: {
	            title: 'timelinegenerator.sniplet.title',
	            description: 'timelinegenerator.sniplet.desc',
	            controller: {
	                init: function () {
	                    var scope = this;
	                    entcore_1.http().get('/timelinegenerator/public/js/storyjs-embed.js').done(function () {
	                        entcore_1.http().get('/timelinegenerator/timeline/' + this.source._id).done(function (timeline) {
	                            entcore_1.http().get('/userbook/preference/language').done(function (response) {
	                                if (!response.preference)
	                                    scope.userLanguage = navigator.language || navigator.userLanguage;
	                                else
	                                    scope.userLanguage = response.preference.split(':')[1].split('\"', 2)[1];
	                            });
	                            scope.source = new model_1.timelineNamespace.Timeline(timeline);
	                            scope.source.events.sync(function () {
	                                // Hack to display more than one timeline in the same page
	                                // https://github.com/NUKnightLab/TimelineJS/issues/591
	                                var injectedScript = function () {
	                                    createStoryJS({
	                                        type: 'timeline',
	                                        width: '100%',
	                                        height: '600',
	                                        source: timeline,
	                                        embed_id: 'timeline',
	                                        lang: userLanguage,
	                                        css: '/timelinegenerator/public/css/timeline/timeline.css',
	                                        js: '/timelinegenerator/public/js/timeline-min.js'
	                                    });
	                                };
	                                // Hack to inject and instantiate mathJax lib to iframe
	                                var injectMathScript = function () {
	                                    if (window.MathJax && window.MathJax.Hub) {
	                                        setTimeout(function () {
	                                            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
	                                        }, 1500);
	                                    }
	                                };
	                                var innerDoc = $('#' + scope.source._id)[0].contentWindow.document;
	                                innerDoc.open();
	                                innerDoc.write("<html><head>" +
	                                    "<script src='/infra/public/mathjax/MathJax.js'></script>" +
	                                    "<script>window.MathJax.Hub.Config({messageStyle: 'none', tex2jax: { preview: 'none' }," +
	                                    " jax: [\"input/TeX\", \"output/CommonHTML\"]," +
	                                    " extensions: [\"tex2jax.js\", \"MathMenu.js\", \"MathZoom.js\"]," +
	                                    "TeX: {extensions: [\"AMSmath.js\", \"AMSsymbols.js\", \"noErrors.js\", \"noUndefined.js\"]}});</script>" +
	                                    "<title></title><base target='_parent'/></head><body><div id='timeline'></div>" +
	                                    "<script src='/infra/public/js/jquery-1.10.2.min.js'></script>" +
	                                    "<script src='/timelinegenerator/public/js/storyjs-embed.js'></script>" +
	                                    "<script>var timeline = " + JSON.stringify(scope.source.toTimelineJsJSON()) + ";</script>" +
	                                    "<script>var userLanguage = '" + scope.userLanguage + "';</script>" +
	                                    "<script>var injectedScript= " + injectedScript + ";injectedScript();</script>" +
	                                    "<script>var injectMathScript= " + injectMathScript + "; injectMathScript();</script>" +
	                                    "</body></html>");
	                                innerDoc.close();
	                            });
	                        }.bind(this));
	                    }.bind(this));
	                },
	                initSource: function () {
	                    entcore_1.Behaviours.applicationsBehaviours.timelinegenerator.loadResources().then(function (resources) {
	                        this.timelines = resources;
	                        this.$apply('timelines');
	                    }.bind(this));
	                },
	                setSource: function (source) {
	                    this.setSnipletSource({
	                        _id: source._id
	                    });
	                    this.snipletResource.synchronizeRights(); // propagate rights from sniplet to timeline
	                },
	                copyRights: function (snipletResource, source) {
	                    source.timelines.forEach(function (timeline) {
	                        var copyRights = entcore_1.Behaviours.copyRights;
	                        copyRights(snipletResource, timeline, timelineGeneratorBehaviours.viewRights, 'timeline');
	                    });
	                },
	                /* Function used by application "Pages", to copy rights from "Pages" to resources.
	                 * It returns an array containing all resources' ids which are concerned by the rights copy.
	                 * For sniplet "Timelinegenerator", copy rights from "Pages" to associated timeline */
	                getReferencedResources: function (source) {
	                    if (source._id) {
	                        return [source._id];
	                    }
	                },
	            }
	        }
	    },
	    timelineNamespace: model_1.timelineNamespace
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = entcore;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var entcore_1 = __webpack_require__(1);
	exports.timelineNamespace = {};
	exports.timelineNamespace.Event = function () { };
	exports.timelineNamespace.Timeline = function () {
	    var timeline = this;
	    Object.defineProperty(this, "myRights", { get: function () { return this.rights.myRights; } });
	    this.collection(entcore_1.Behaviours.applicationsBehaviours.timelinegenerator.timelineNamespace.Event, {
	        sync: function (callback) {
	            entcore_1.http().get('/timelinegenerator/timeline/' + timeline._id + '/events').done(function (events) {
	                entcore_1._.each(events, function (event) {
	                    event.timeline = timeline;
	                    if (event.endDate === "") {
	                        event.endDate = undefined;
	                    }
	                    if (!event.dateFormat) {
	                        event.dateFormat = 'day';
	                    }
	                });
	                this.load(events);
	                if (typeof callback === 'function') {
	                    callback();
	                }
	            }.bind(this));
	        },
	        removeSelection: function (callback) {
	            var that = this;
	            var counter = this.selection().length;
	            this.selection().forEach(function (item) {
	                entcore_1.http().delete('/timelinegenerator/timeline/' + timeline._id + '/event/' + item._id).done(function () {
	                    counter = counter - 1;
	                    if (counter === 0) {
	                        entcore_1.Collection.prototype.removeSelection.call(this);
	                        timeline.events.sync();
	                        if (typeof callback === 'function') {
	                            callback();
	                        }
	                    }
	                }.bind(that));
	            });
	        },
	        lockSelection: function () {
	            var counter = this.selection().length;
	            this.selection().forEach(function (item) {
	                item.locked = true;
	                entcore_1.http().putJson('/timelinegenerator/timeline/' + timeline._id + '/event/' + item._id, item).done(function () {
	                    counter = counter - 1;
	                    if (counter === 0) {
	                        timeline.events.sync();
	                    }
	                });
	            });
	            entcore_1.notify.info('timelinegenerator.event.locked');
	        },
	        unlockSelection: function () {
	            var counter = this.selection().length;
	            this.selection().forEach(function (item) {
	                item.locked = false;
	                entcore_1.http().putJson('/timelinegenerator/timeline/' + timeline._id + '/event/' + item._id, item).done(function () {
	                    counter = counter - 1;
	                    if (counter === 0) {
	                        timeline.events.sync();
	                    }
	                });
	            });
	            entcore_1.notify.info('timelinegenerator.event.unlocked');
	        },
	        behaviours: 'timelinegenerator'
	    });
	};
	exports.timelineNamespace.Timeline.prototype = {
	    saveModifications: function (callback) {
	        entcore_1.http().putJson('/timelinegenerator/timeline/' + this._id, this).done(function (e) {
	            entcore_1.notify.info('timelinegenerator.timeline.modification.saved');
	            if (typeof callback === 'function') {
	                callback();
	            }
	        });
	    },
	    save: function (callback) {
	        if (this._id) {
	            this.saveModifications(callback);
	        }
	        else {
	            this.createTimeline(callback);
	        }
	    },
	    createTimeline: function (cb) {
	        var timeline = this;
	        entcore_1.http().postJson('/timelinegenerator/timelines', this).done(function (e) {
	            timeline.updateData(e);
	            if (typeof cb === 'function') {
	                cb();
	            }
	        }.bind(this));
	    },
	    open: function (cb) {
	        this.events.one('sync', function () {
	            if (typeof cb === 'function') {
	                cb();
	            }
	        }.bind(this));
	        this.events.sync();
	    },
	    addEvent: function (event, cb) {
	        event.timeline = this;
	        event.owner = {
	            userId: entcore_1.model.me.userId,
	            displayName: entcore_1.model.me.username
	        };
	        this.events.push(event);
	        event.save(function () {
	            if (typeof cb === 'function') {
	                cb();
	            }
	        }.bind(this));
	    },
	    toJSON: function () {
	        return {
	            headline: this.headline,
	            text: this.text,
	            type: 'default',
	            icon: this.icon
	        };
	    },
	    toTimelineJsJSON: function () {
	        var timeline = this;
	        var timelineDescription = timeline.text ? timeline.text : " ";
	        var objectData = {
	            "timeline": {
	                "headline": timeline.headline,
	                "type": timeline.type,
	                "text": timelineDescription,
	                "asset": timeline.asset,
	                "date": timeline.date
	            }
	        };
	        if (timeline.icon) {
	            objectData.timeline.asset = {};
	            objectData.timeline.asset.media = window.location.protocol + "//" + window.location.host + timeline.icon;
	        }
	        objectData.timeline.date = [];
	        timeline.events.forEach(function (event) {
	            var eventDescription = event.text ? event.text : " ";
	            var eventData = {
	                "headline": event.headline,
	                "startDate": entcore_1.moment(event.startDate).format(entcore_1.model.timelineJSDateFormat[event.dateFormat]),
	                "text": eventDescription,
	                "asset": event.asset
	            };
	            if (event.img || event.video) {
	                eventData.asset = {};
	                eventData.asset.media = event.img ? window.location.protocol + "//" + window.location.host + event.img : event.video;
	            }
	            if (event.endDate) {
	                eventData["endDate"] = entcore_1.moment(event.endDate).format(entcore_1.model.timelineJSDateFormat[event.dateFormat]);
	            }
	            objectData.timeline.date.push(eventData);
	        });
	        console.log(objectData);
	        return objectData;
	    },
	};
	exports.timelineNamespace.Event.prototype = {
	    Event: function () { },
	    save: function (cb) {
	        if (this._id) {
	            this.saveModifications(cb);
	        }
	        else {
	            this.createEvent(cb);
	        }
	    },
	    saveModifications: function (cb) {
	        entcore_1.http().putJson('/timelinegenerator/timeline/' + this.timeline._id + '/event/' + this._id, this).done(function (e) {
	            if (typeof cb === 'function') {
	                cb();
	            }
	        });
	    },
	    createEvent: function (cb) {
	        var event = this;
	        entcore_1.http().postJson('/timelinegenerator/timeline/' + this.timeline._id + '/events', this).done(function (e) {
	            event.updateData(e);
	            if (typeof cb === 'function') {
	                cb();
	            }
	        }.bind(this));
	    },
	    open: function (cb) {
	        cb();
	    },
	    toJSON: function () {
	        var jsonEvent = {
	            headline: this.headline,
	            text: this.text,
	            locked: this.locked,
	            startDate: this.startDate,
	            endDate: this.endDate ? this.endDate : '',
	            img: this.img,
	            video: this.video,
	            dateFormat: this.dateFormat
	        };
	        return jsonEvent;
	    },
	    timeline: {}
	};
	entcore_1.model.makeModels(exports.timelineNamespace);


/***/ })
/******/ ]);
//# sourceMappingURL=behaviours.js.map