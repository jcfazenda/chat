/*
@license

dhtmlxDiagram v.3.0.4 Evaluation

This software is covered by DHTMLX Evaluation License and purposed only for evaluation.
Contact sales@dhtmlx.com to get Commercial or Enterprise license.
Usage without proper license is prohibited.

(c) XB Software.

*/
if (window.dhx && (window.dhx_legacy = dhx, delete window.dhx), function (t, e)
	{
		"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.dhx = e() : t.dhx = e()
	}(window, function ()
	{
		return n = {}, o.m = i = [function (t, u, n)
		{
			"use strict";
			(function (t)
			{
				Object.defineProperty(u, "__esModule",
				{
					value: !0
				});
				var e = n(58);
				u.el = e.defineElement, u.sv = e.defineSvgElement, u.view = e.defineView, u.create = e.createView, u.inject = e.injectView, u.KEYED_LIST = e.KEYED_LIST;
				var l = ["animate", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "hatch", "hatchpath", "image", "line", "linearGradient", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan", "unknown", "use", "view"];

				function i(i)
				{
					function e(t)
					{
						var e = t.el.offsetHeight,
							t = t.el.offsetWidth;
						i(t, e)
					}
					var n = window.ResizeObserver;
					return n ? u.el("div.dhx-resize-observer",
					{
						_hooks:
						{
							didInsert: function (t)
							{
								new n(function ()
								{
									return e(t)
								}).observe(t.el)
							}
						}
					}) : u.el("iframe.dhx-resize-observer",
					{
						_hooks:
						{
							didInsert: function (t)
							{
								t.el.contentWindow.onresize = function ()
								{
									return e(t)
								}, e(t)
							}
						}
					})
				}
				u.disableHelp = function ()
				{
					e.DEVMODE.mutations = !1, e.DEVMODE.warnings = !1, e.DEVMODE.verbose = !1, e.DEVMODE.UNKEYED_INPUT = !1
				}, u.resizer = i, u.xmlToJson = function t(e)
				{
					var i = {};
					if (1 === e.nodeType)
					{
						if (0 < e.attributes.length)
						{
							i["@attributes"] = {};
							for (var n = 0; n < e.attributes.length; n++)
							{
								var o = e.attributes.item(n);
								i["@attributes"][o.nodeName] = o.nodeValue
							}
						}
					}
					else 3 === e.nodeType && (i = e.nodeValue);
					if (e.hasChildNodes())
						for (var r = 0; r < e.childNodes.length; r++)
						{
							var a, s = e.childNodes.item(r),
								c = s.nodeName;
							void 0 === i[c] ? i[c] = t(s) : (void 0 === i[c].push && (a = i[c], i[c] = [], i[c].push(a)), i[c].push(t(s)))
						}
					return i
				}, u.jsonToVDOM = function t(e)
				{
					var i, n, o, r = Object.keys(e)[0],
						a = e[r],
						s = a["#text"] ? [a["#text"]] : [];
					for (o in a)
						if (a.hasOwnProperty(o) && "@attributes" !== o && "#text" !== o)
							if (Array.isArray(a[o]))
								for (var c in a[o]) a[o].hasOwnProperty(c) && s.push(t(((i = {})[o] = a[o][c], i)));
							else s.push(t(((n = {})[o] = a[o], n)));
					return -1 !== l.indexOf(r) ? u.sv(r, a["@attributes"] ||
					{}, s) : u.el(r, a["@attributes"] ||
					{}, s)
				}, u.resizeHandler = function (t, e)
				{
					return u.create(
					{
						render: function ()
						{
							return i(e)
						}
					}).mount(t)
				}, u.awaitRedraw = function ()
				{
					return new t(function (t)
					{
						requestAnimationFrame(function ()
						{
							t()
						})
					})
				}
			}).call(this, n(7))
		}, function (t, e, i)
		{
			"use strict";
			var l = this && this.__assign || function ()
			{
				return (l = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};

			function n(t, e, i)
			{
				for (void 0 === e && (e = "dhx_id"), void 0 === i && (i = "target"), t instanceof Event && (t = t[i]); t;)
				{
					if (t.getAttribute && t.getAttribute(e)) return t;
					t = t.parentNode
				}
			}
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.toNode = function (t)
			{
				return "string" == typeof t ? document.getElementById(t) || document.querySelector(t) || document.body : t || document.body
			}, e.eventHandler = function (a, s, c)
			{
				var l = Object.keys(s);
				return function (t)
				{
					var e = a(t);
					if (e)
					{
						var i = t.target;
						t: for (; i;)
						{
							var n = i.getAttribute && i.getAttribute("class") || "";
							if (n.length)
								for (var o = n.split(" "), r = 0; r < l.length; r++)
									if (o.includes(l[r]))
									{
										if (!1 === s[l[r]](t, e)) return !1;
										break t
									} i = i.parentNode
						}
					}
					return c && c(t), !0
				}
			}, e.locateNode = n, e.locate = function (t, e)
			{
				return void 0 === e && (e = "dhx_id"), (t = n(t, e)) ? t.getAttribute(e) : ""
			}, e.locateNodeByClassName = function (t, e)
			{
				for (t instanceof Event && (t = t.target); t;)
				{
					if (e)
					{
						if (t.classList && t.classList.contains(e)) return t
					}
					else if (t.getAttribute && t.getAttribute("dhx_id")) return t;
					t = t.parentNode
				}
			}, e.getBox = function (t)
			{
				var e = t.getBoundingClientRect(),
					i = document.body,
					n = window.pageYOffset || i.scrollTop,
					t = window.pageXOffset || i.scrollLeft;
				return {
					top: e.top + n,
					left: e.left + t,
					right: i.offsetWidth - e.right,
					bottom: i.offsetHeight - e.bottom,
					width: e.right - e.left,
					height: e.bottom - e.top
				}
			};
			var o = -1;

			function r(t)
			{
				t = t.getBoundingClientRect();
				return {
					left: t.left + window.pageXOffset,
					right: t.right + window.pageXOffset,
					top: t.top + window.pageYOffset,
					bottom: t.bottom + window.pageYOffset
				}
			}

			function u()
			{
				return {
					rightBorder: window.pageXOffset + window.innerWidth,
					bottomBorder: window.pageYOffset + window.innerHeight
				}
			}

			function c(t, e)
			{
				var i, n, o, r = u(),
					a = r.rightBorder,
					s = r.bottomBorder - t.bottom - e.height,
					c = t.top - e.height;
				if ("bottom" === e.mode ? 0 <= s ? i = t.bottom : 0 <= c && (i = c) : 0 <= c ? i = c : 0 <= s && (i = t.bottom), s < 0 && c < 0)
				{
					if (e.auto) return d(t, l(l(
					{}, e),
					{
						mode: "right",
						auto: !1
					}));
					i = c < s ? t.bottom : c
				}
				return {
					left: e.centering ? (n = t, o = e.width, r = a, s = (o - (n.right - n.left)) / 2, c = n.left - s, s = n.right + s, 0 <= c && s <= r ? c : c < 0 ? 0 : r - o) : (a = a - t.left - e.width, e = t.right - e.width, 0 <= a || !(0 <= e) && a < e ? t.left : e),
					top: i
				}
			}

			function d(t, e)
			{
				var i, n, o = u(),
					r = o.rightBorder,
					a = o.bottomBorder,
					s = r - t.right - e.width,
					o = t.left - e.width;
				if ("right" === e.mode ? 0 <= s ? n = t.right : 0 <= o && (n = o) : 0 <= o ? n = o : 0 <= s && (n = t.right), o < 0 && s < 0)
				{
					if (e.auto) return c(t, l(l(
					{}, e),
					{
						mode: "bottom",
						auto: !1
					}));
					n = s < o ? o : t.right
				}
				return {
					left: n,
					top: e.centering ? (s = t, i = e.height, o = r, n = (i - (s.bottom - s.top)) / 2, r = s.top - n, n = s.bottom + n, 0 <= r && n <= o ? r : r < 0 ? 0 : o - i) : (i = t.bottom - e.height, !(0 <= (e = a - t.top - e.height)) && (0 < i || e < i) ? i : t.top)
				}
			}

			function a(t, e)
			{
				var i = ("bottom" === e.mode || "top" === e.mode ? c : d)(t, e),
					t = i.left,
					i = i.top;
				return {
					left: Math.round(t) + "px",
					top: Math.round(i) + "px",
					minWidth: Math.round(e.width) + "px",
					position: "absolute"
				}
			}
			e.getScrollbarWidth = function ()
			{
				if (-1 < o) return o;
				var t = document.createElement("div");
				return document.body.appendChild(t), t.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;", o = t.offsetWidth - t.clientWidth, document.body.removeChild(t), o
			}, e.isIE = function ()
			{
				var t = window.navigator.userAgent;
				return t.includes("MSIE ") || t.includes("Trident/")
			}, e.getRealPosition = r, e.calculatePosition = a, e.fitPosition = function (t, e)
			{
				return a(r(t), e)
			}, e.getStrSize = function (t, e)
			{
				e = l(
				{
					fontSize: "14px",
					fontFamily: "Arial",
					lineHeight: "14px",
					fontWeight: "normal",
					fontStyle: "normal"
				}, e);
				var i = document.createElement("span"),
					n = e.fontSize,
					o = e.fontFamily,
					r = e.lineHeight,
					a = e.fontWeight,
					e = e.fontStyle;
				return i.style.fontSize = n, i.style.fontFamily = o, i.style.lineHeight = r, i.style.fontWeight = a, i.style.fontStyle = e, i.style.display = "inline-flex", i.innerText = t, document.body.appendChild(i), e = i.offsetWidth, t = i.clientHeight, document.body.removeChild(i),
				{
					width: e,
					height: t
				}
			};
			var s = function (t)
			{
				return t.href && -1 === t.ownerNode.outerHTML.indexOf(window.location.origin) && (-1 !== t.ownerNode.outerHTML.indexOf("http") || -1 !== t.ownerNode.outerHTML.indexOf("https") || -1 !== t.ownerNode.outerHTML.indexOf('href="//'))
			};
			e.getPageInlineCss = function ()
			{
				for (var t = [], e = 0; e < document.styleSheets.length; e++)
				{
					var i = document.styleSheets[e];
					if (!s(i))
						for (var n = ("cssRules" in i && i.cssRules.length ? i.cssRules : i.rules), o = 0; o < n.length; o++)
						{
							var r = n[o];
							"cssText" in r ? t.push(r.cssText) : t.push(r.selectorText + " {\n" + r.style.cssText + "\n}\n")
						}
				}
				return t.join("\n")
			}, e.getPageLinksCss = function ()
			{
				for (var t = [], e = 0; e < document.styleSheets.length; e++)
				{
					var i = document.styleSheets[e];
					s(i) && t.push('<link href="' + i.href + '" rel="stylesheet"/>')
				}
				return t.join("\n")
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(1),
				o = (new Date).valueOf();
			e.uid = function ()
			{
				return "u" + o++
			}, e.extend = function t(e, i, n)
			{
				if (void 0 === n && (n = !0), i)
					for (var o in i)
					{
						var r = i[o],
							a = e[o];
						void 0 === r ? delete e[o] : !n || "object" != typeof a || a instanceof Date || a instanceof Array ? e[o] = r : t(a, r)
					}
				return e
			}, e.copy = function (t, e)
			{
				var i, n = {};
				for (i in t) e && i.startsWith("$") || (n[i] = t[i]);
				return n
			}, e.naturalSort = function (t)
			{
				return t.sort(function (t, e)
				{
					return "string" == typeof t ? t.localeCompare(e) : t - e
				})
			}, e.findIndex = function (t, e)
			{
				for (var i = t.length, n = 0; n < i; n++)
					if (e(t[n])) return n;
				return -1
			}, e.isEqualString = function (t, e)
			{
				if (t = t.toString(), e = e.toString(), t.length > e.length) return !1;
				for (var i = 0; i < t.length; i++)
					if (t[i].toLowerCase() !== e[i].toLowerCase()) return !1;
				return !0
			}, e.singleOuterClick = function (e)
			{
				var i = function (t)
				{
					e(t) && document.removeEventListener("click", i)
				};
				document.addEventListener("click", i)
			}, e.detectWidgetClick = function (e, i)
			{
				function t(t)
				{
					return i(n.locate(t, "dhx_widget_id") === e)
				}
				return document.addEventListener("click", t),
					function ()
					{
						return document.removeEventListener("click", t)
					}
			}, e.unwrapBox = function (t)
			{
				return Array.isArray(t) ? t[0] : t
			}, e.wrapBox = function (t)
			{
				return Array.isArray(t) ? t : [t]
			}, e.isDefined = function (t)
			{
				return null != t
			}, e.range = function (t, e)
			{
				if (e < t) return [];
				for (var i = []; t <= e;) i.push(t++);
				return i
			}, e.isNumeric = function (t)
			{
				return !isNaN(t - parseFloat(t))
			}, e.downloadFile = function (t, e, i)
			{
				void 0 === i && (i = "text/plain");
				var n, o, i = new Blob([t],
				{
					type: i
				});
				window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(i, e) : (n = document.createElement("a"), o = URL.createObjectURL(i), n.href = o, n.download = e, document.body.appendChild(n), n.click(), setTimeout(function ()
				{
					document.body.removeChild(n), window.URL.revokeObjectURL(o)
				}, 0))
			}, e.debounce = function (o, r, a)
			{
				var s;
				return function ()
				{
					for (var t = this, e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
					var n = a && !s;
					clearTimeout(s), s = setTimeout(function ()
					{
						s = null, a || o.apply(t, e)
					}, r), n && o.apply(this, e)
				}
			}, e.compare = function t(e, i)
			{
				for (var n in e)
				{
					if (e.hasOwnProperty(n) !== i.hasOwnProperty(n)) return !1;
					switch (typeof e[n])
					{
					case "object":
						if (!t(e[n], i[n])) return !1;
						break;
					case "function":
						if (void 0 === i[n] || "compare" !== n && e[n].toString() !== i[n].toString()) return !1;
						break;
					default:
						if (e[n] !== i[n]) return !1
					}
				}
				for (var n in i)
					if (void 0 === e[n]) return !1;
				return !0
			}, e.isType = function (t)
			{
				return ((Object.prototype.toString.call(t).match(/^\[object (\S+?)\]$/) || [])[1] || "undefined").toLowerCase()
			}, e.isEmptyObj = function (t)
			{
				for (var e in t) return !1;
				return !0
			}, e.sign = function (t)
			{
				return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.en = {
				applyAll: "Apply all",
				exportData: "Export Data",
				importData: "Import Data",
				resetChanges: "Reset Changes",
				autoLayout: "Auto Layout",
				arrange: "Arrange",
				position: "Position",
				size: "Size",
				color: "Color",
				title: "Title",
				text: "Text",
				image: "Image",
				fill: "Fill",
				textProps: "Text",
				stroke: "Stroke",
				gridStep: "Grid step",
				shapeSections: "Shapes",
				imageUpload: "Click to upload",
				emptyState: "Select a shape or a connector"
			}, e.default = e.en
		}, function (t, e, i)
		{
			"use strict";
			var n;
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (n = e.TreeFilterType || (e.TreeFilterType = {})).all = "all", n.level = "level", n.leafs = "leafs", (n = e.DataEvents || (e.DataEvents = {})).afterAdd = "afteradd", n.beforeAdd = "beforeadd", n.removeAll = "removeall", n.beforeRemove = "beforeremove", n.afterRemove = "afterremove", n.change = "change", n.load = "load", n.loadError = "loaderror", n.beforeLazyLoad = "beforelazyload", n.afterLazyLoad = "afterlazyload", (n = e.DragEvents || (e.DragEvents = {})).beforeDrag = "beforeDrag", n.dragStart = "dragStart", n.dragOut = "dragOut", n.dragIn = "dragIn", n.canDrop = "canDrop", n.cancelDrop = "cancelDrop", n.beforeDrop = "beforeDrop", n.afterDrop = "afterDrop", n.afterDrag = "afterDrag", (e = e.DataDriver || (e.DataDriver = {})).json = "json", e.csv = "csv", e.xml = "xml"
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(10),
				o = i(32);
			e.isEqualObj = function (t, e)
			{
				for (var i in t)
					if (t[i] !== e[i]) return !1;
				return !0
			}, e.naturalCompare = function (t, e)
			{
				if (isNaN(t) || isNaN(e))
				{
					var n = [],
						o = [];
					for (t.replace(/(\d+)|(\D+)/g, function (t, e, i)
						{
							n.push([e || 1 / 0, i || ""])
						}), e.replace(/(\d+)|(\D+)/g, function (t, e, i)
						{
							o.push([e || 1 / 0, i || ""])
						}); n.length && o.length;)
					{
						var i = n.shift(),
							r = o.shift(),
							r = i[0] - r[0] || i[1].localeCompare(r[1]);
						if (r) return r
					}
					return n.length - o.length
				}
				return t - e
			}, e.findByConf = function (t, e)
			{
				if ("function" == typeof e)
				{
					if (e.call(this, t)) return t
				}
				else if (e.by && e.match && t[e.by] === e.match) return t
			}, e.isDebug = function ()
			{
				var t = window.dhx;
				if (void 0 !== t) return void 0 !== t.debug && t.debug
			}, e.dhxWarning = function (t)
			{
				console.warn(t)
			}, e.dhxError = function (t)
			{
				throw new Error(t)
			}, e.toProxy = function (t)
			{
				var e = typeof t;
				return "string" == e ? new n.DataProxy(t) : "object" == e ? t : void 0
			}, e.toDataDriver = function (t)
			{
				if ("string" == typeof t)
				{
					var e = window.dhx,
						e = e && e.dataDrivers || o.dataDrivers;
					if (e[t]) return new e[t];
					console.warn("Incorrect data driver type:", t), console.warn("Available types:", JSON.stringify(Object.keys(e)))
				}
				else if ("object" == typeof t) return t
			}, e.copyWithoutInner = function (t, e)
			{
				var i, n = {};
				for (i in t) i.startsWith("$") || e && e[i] || (n[i] = t[i]);
				return n
			}, e.isTreeCollection = function (t)
			{
				return Boolean(t.getRoot)
			}, e.hasJsonOrArrayStructure = function (t)
			{
				if ("object" == typeof t) return !0;
				if ("string" != typeof t) return !1;
				try
				{
					var e = JSON.parse(t);
					return "[object Object]" === Object.prototype.toString.call(e) || Array.isArray(e)
				}
				catch (t)
				{
					return !1
				}
			}
		}, function (t, n, e)
		{
			"use strict";
			var o = this && this.__assign || function ()
			{
				return (o = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(n, "__esModule",
			{
				value: !0
			});
			var i = e(0),
				e = e(3);
			n.meta = {
				grid:
				{
					id: "gridStep",
					type: "inputsGroup",
					label: e.default.gridStep,
					validate: "number",
					options: [
					{
						id: "step",
						value: 0,
						icon: function ()
						{
							return i.el(".dxi.dxi-grid-step")
						},
						validate: "number"
					}]
				},
				arrange:
				{
					id: "arrange",
					type: "inputsGroup",
					label: e.default.arrange,
					validate: "number",
					options: [
					{
						id: "x",
						value: "1000",
						label: "x",
						validate: "number"
					},
					{
						id: "y",
						value: "999",
						label: "y",
						validate: "number"
					},
					{
						id: "width",
						value: "1000",
						label: "w",
						validate: "number"
					},
					{
						id: "height",
						value: "999",
						label: "h",
						validate: "number"
					},
					{
						id: "angle",
						value: "999",
						label: "y",
						validate: "number",
						icon: function ()
						{
							return i.el(".dxi.dxi-rotate-right.rotate_icon")
						}
					}]
				},
				position:
				{
					id: "position",
					type: "inputsGroup",
					label: e.default.position,
					validate: "number",
					options: [
					{
						id: "dx",
						value: "1000",
						label: "dx",
						validate: "number"
					},
					{
						id: "dy",
						value: "999",
						label: "dy",
						validate: "number"
					}]
				},
				size:
				{
					id: "size",
					type: "inputsGroup",
					label: e.default.size,
					options: [
					{
						id: "width",
						value: "1000",
						label: "w",
						validate: "number"
					},
					{
						id: "height",
						value: "999",
						label: "h",
						validate: "number"
					}]
				},
				color:
				{
					id: "headerColor",
					type: "color",
					label: e.default.color
				},
				title:
				{
					id: "title",
					type: "textarea",
					label: e.default.title
				},
				text:
				{
					id: "text",
					type: "textarea",
					label: e.default.text
				},
				img:
				{
					id: "img",
					type: "image",
					label: e.default.image
				},
				fill:
				{
					id: "fill",
					type: "color",
					label: e.default.fill
				},
				textProps:
				{
					id: "textProps",
					type: "textProps",
					label: e.default.textProps
				},
				strokeProps:
				{
					id: "strokeProps",
					type: "stroke",
					label: e.default.stroke
				}
			}, n.getMeta = function (t)
			{
				return t.map(function (t)
				{
					var e = t.type,
						i = t.label,
						t = t.property;
					return o(o(
					{}, n.meta[e]),
					{
						id: t || n.meta[e].id,
						label: i || n.meta[e].label
					})
				})
			}
		}, function (t, e, i)
		{
			(function (o, r)
			{
				! function ()
				{
					var e = 1,
						i = {},
						n = !1;

					function u(t)
					{
						o.setImmediate ? r(t) : o.importScripts ? setTimeout(t) : (i[++e] = t, o.postMessage(e, "*"))
					}

					function d(t)
					{
						"use strict";
						if ("function" != typeof t && null != t) throw TypeError();
						if ("object" != typeof this || this && this.then) throw TypeError();
						var e, i, n = this,
							r = 0,
							a = 0,
							o = [];
						(n.promise = n).resolve = function (t)
						{
							return e = n.fn, i = n.er, r || (a = t, r = 1, u(l)), n
						}, n.reject = function (t)
						{
							return e = n.fn, i = n.er, r || (a = t, r = 2, u(l)), n
						}, n._d = 1, n.then = function (t, e)
						{
							if (1 != this._d) throw TypeError();
							var i = new d;
							return i.fn = t, i.er = e, 3 == r ? i.resolve(a) : 4 == r ? i.reject(a) : o.push(i), i
						}, n.catch = function (t)
						{
							return n.then(null, t)
						};
						var s = function (t)
						{
							r = t || 4, o.map(function (t)
							{
								3 == r && t.resolve(a) || t.reject(a)
							})
						};
						try
						{
							"function" == typeof t && t(n.resolve, n.reject)
						}
						catch (t)
						{
							n.reject(t)
						}
						return n;

						function c(t, e, i, n)
						{
							if (2 == r) return n();
							if ("object" != typeof a && "function" != typeof a || "function" != typeof t) n();
							else try
							{
								var o = 0;
								t.call(a, function (t)
								{
									o++ || (a = t, e())
								}, function (t)
								{
									o++ || (a = t, i())
								})
							}
							catch (t)
							{
								a = t, i()
							}
						}

						function l()
						{
							var t;
							try
							{
								t = a && a.then
							}
							catch (t)
							{
								return a = t, r = 2, l()
							}
							c(t, function ()
							{
								r = 1, l()
							}, function ()
							{
								r = 2, l()
							}, function ()
							{
								try
								{
									1 == r && "function" == typeof e ? a = e(a) : 2 == r && "function" == typeof i && (a = i(a), r = 1)
								}
								catch (t)
								{
									return a = t, s()
								}
								a == n ? (a = TypeError(), s()) : c(t, function ()
								{
									s(3)
								}, s, function ()
								{
									s(1 == r && 3)
								})
							})
						}
					}(o = this).setImmediate || o.addEventListener("message", function (t)
					{
						if (t.source == o)
							if (n) u(i[t.data]);
							else
							{
								n = !0;
								try
								{
									i[t.data]()
								}
								catch (t)
								{}
								delete i[t.data], n = !1
							}
					}), d.resolve = function (e)
					{
						if (1 != this._d) throw TypeError();
						return e instanceof d ? e : new d(function (t)
						{
							t(e)
						})
					}, d.reject = function (i)
					{
						if (1 != this._d) throw TypeError();
						return new d(function (t, e)
						{
							e(i)
						})
					}, d.all = function (n)
					{
						if (1 != this._d) throw TypeError();
						if (!(n instanceof Array)) return d.reject(TypeError());
						var o = new d;
						return function i(t, e)
						{
							return e ? o.resolve(e) : t ? o.reject(t) : (0 == n.reduce(function (t, e)
							{
								return e && e.then ? t + 1 : t
							}, 0) && o.resolve(n), void n.map(function (t, e)
							{
								t && t.then && t.then(function (t)
								{
									return n[e] = t, i(), t
								}, i)
							}))
						}(), o
					}, d.race = function (n)
					{
						if (1 != this._d) throw TypeError();
						if (!(n instanceof Array)) return d.reject(TypeError());
						if (0 == n.length) return new d;
						var o = new d;
						return function i(t, e)
						{
							return e ? o.resolve(e) : t ? o.reject(t) : (0 == n.reduce(function (t, e)
							{
								return e && e.then ? t + 1 : t
							}, 0) && o.resolve(n), void n.map(function (t, e)
							{
								t && t.then && t.then(function (t)
								{
									i(null, t)
								}, i)
							}))
						}(), o
					}, d._d = 1, t.exports = d
				}()
			}).call(this, i(19), i(52).setImmediate)
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = (o.prototype.on = function (t, e, i)
			{
				t = t.toLowerCase();
				this.events[t] = this.events[t] || [], this.events[t].push(
				{
					callback: e,
					context: i || this.context
				})
			}, o.prototype.detach = function (t, e)
			{
				var t = t.toLowerCase(),
					i = this.events[t];
				if (e && i && i.length)
					for (var n = i.length - 1; 0 <= n; n--) i[n].context === e && i.splice(n, 1);
				else this.events[t] = []
			}, o.prototype.fire = function (t, e)
			{
				void 0 === e && (e = []);
				t = t.toLowerCase();
				return !this.events[t] || !this.events[t].map(function (t)
				{
					return t.callback.apply(t.context, e)
				}).includes(!1)
			}, o.prototype.clear = function ()
			{
				this.events = {}
			}, o);

			function o(t)
			{
				this.events = {}, this.context = t || this
			}
			e.EventSystem = n, e.EventsMixin = function (t)
			{
				var e = new n(t = t ||
				{});
				t.detachEvent = e.detach.bind(e), t.attachEvent = e.on.bind(e), t.callEvent = e.fire.bind(e)
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(2),
				o = i(1),
				i = (r.prototype.mount = function (t, e)
				{
					e && (this._view = e), t && this._view && this._view.mount && (this._container = o.toNode(t), this._container.tagName ? this._view.mount(this._container) : this._container.attach && this._container.attach(this))
				}, r.prototype.unmount = function ()
				{
					var t = this.getRootView();
					t && t.node && (t.unmount(), this._view = null)
				}, r.prototype.getRootView = function ()
				{
					return this._view
				}, r.prototype.getRootNode = function ()
				{
					return this._view && this._view.node && this._view.node.el
				}, r.prototype.paint = function ()
				{
					this._view && (this._view.node || this._container) && (this._doNotRepaint = !1, this._view.redraw())
				}, r);

			function r(t, e)
			{
				this.config = e ||
				{}, this._uid = this.config.rootId || n.uid()
			}
			e.View = i, e.toViewLike = function (e)
			{
				return {
					getRootView: function ()
					{
						return e
					},
					paint: function ()
					{
						return e.node && e.redraw()
					},
					mount: function (t)
					{
						return e.mount(t)
					}
				}
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(20),
				i = (o.prototype.updateUrl = function (t, e)
				{
					for (var i in void 0 === e && (e = {}), this._url = this.url = t || this._url, this.url += this.url.includes("?") ? "&" : "?", e) this.config[i] = e[i], this.url += i + "=" + encodeURIComponent(e[i]) + "&";
					this.url = this.url.slice(0, -1)
				}, o.prototype.load = function ()
				{
					return n.ajax.get(this.url, null,
					{
						responseType: "text"
					})
				}, o.prototype.save = function (t, e)
				{
					switch (e)
					{
					case "delete":
						return n.ajax.delete(this.url, t);
					case "update":
					case "insert":
					default:
						return n.ajax.post(this.url, t)
					}
				}, o);

			function o(t, e)
			{
				this.url = this._url = t, this.config = e
			}
			e.DataProxy = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(6),
				i = (o.prototype.isConnector = function ()
				{
					return !1
				}, o.prototype.canResize = function ()
				{
					return !0
				}, o.prototype.getCenter = function ()
				{
					var t = this.config;
					return {
						x: Math.abs(t.width / 2),
						y: Math.abs(t.height / 2)
					}
				}, o.prototype.getBox = function ()
				{
					var t = this.config,
						e = t.x + (t.dx || 0),
						i = e + t.width,
						n = t.y + (t.dy || 0);
					return {
						left: e,
						right: i,
						top: n,
						bottom: n + t.height
					}
				}, o.prototype.getMetaInfo = function ()
				{
					return [n.meta.text]
				}, o.prototype.move = function (t, e)
				{
					this.update(
					{
						x: t,
						y: e
					})
				}, o.prototype.resize = function (t, e)
				{
					this.update(
					{
						width: t,
						height: e
					})
				}, o.prototype.rotate = function (t)
				{
					this.update(
					{
						angle: t
					})
				}, o.prototype.update = function (t)
				{
					for (var e in t) this.config[e] = t[e], this.config.id && (this.id = this.config.id)
				}, o.prototype.render = function ()
				{
					return ""
				}, o.prototype.getPoint = function (t, e)
				{
					var i = this.config;
					if (i.angle)
					{
						var n = i.x + i.width / 2,
							o = i.y + i.height / 2,
							i = i.angle * (Math.PI / 180);
						return {
							x: (t - n) * Math.cos(i) - (e - o) * Math.sin(i) + n,
							y: (t - n) * Math.sin(i) + (e - o) * Math.cos(i) + o
						}
					}
					return {
						x: t,
						y: e
					}
				}, o.prototype.setCss = function (t)
				{
					this.config.css = t
				}, o.prototype.getCss = function ()
				{
					return (this.config.$selected ? "dhx_selected " : this.config.$blockSelected ? "dhx_blockselected " : "") + (this.config.css || "")
				}, o.prototype.setDefaults = function (t, e)
				{
					return t
				}, o.prototype.getCoords = function (t)
				{
					var e = t.x,
						i = t.y;
					return t.dx && (e = t.x + t.dx), t.dy && (i = t.y + t.dy),
					{
						x: e,
						y: i
					}
				}, o);

			function o(t, e)
			{
				this.config = this.setDefaults(t, e.defaults), this.id = t.id, t.width && (t.width = parseFloat(t.width)), t.height && (t.height = parseFloat(t.height)), t.x && (t.x = parseFloat(t.x)), t.y && (t.y = parseFloat(t.y)), t.strokeWidth && (t.strokeWidth = parseFloat(t.strokeWidth))
			}
			e.BaseShape = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(30);
			e.SelectionEvents = n.SelectionEvents;
			i = i(16);
			e.DataEvents = i.DataEvents, (e = e.DiagramEvents || (e.DiagramEvents = {})).scroll = "scroll", e.beforeCollapse = "beforecollapse", e.afterCollapse = "aftercollapse", e.beforeExpand = "beforeexpand", e.afterExpand = "afterexpand", e.shapeMouseDown = "shapemousedown", e.shapeClick = "shapeclick", e.shapedDblClick = "shapedblclick", e.shapeIconClick = "shapeiconclick", e.beforeRender = "beforerender", e.shapeHover = "shapeHover", e.emptyAreaClick = "emptyAreaClick", e.emptyAreaMouseDown = "emptyAreaMouseDown", e.lineClick = "lineClick"
		}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(40));
			var o = e(42);
			i.ShapesCollection = o.ShapesCollection;
			o = e(3);
			i.locale = o.default, n(e(12));
			o = e(35);
			i.shapes = o.shapes, n(e(24)), n(e(41))
		}, function (t, e, i)
		{
			"use strict";
			var n = this && this.__assign || function ()
			{
				return (n = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(44),
				r = i(2),
				a = i(0),
				s = i(25),
				i = (c.prototype.setValue = function (t, e)
				{
					var i = this._config.value;
					t !== i && (this._config.value = t, this._config.invalid = !o.validate(t, this._config.validate), e || this._evs.fire(s.PropertyEvents.change, [this._config.id, t, i]))
				}, c.prototype.getValue = function ()
				{
					return this._config.value
				}, c.prototype.clear = function ()
				{
					this.setValue("", !0)
				}, c.prototype.toVDOM = function ()
				{
					return a.el(".dhx_text_item",
					{
						_key: this._uid
					}, [a.el(".dhx_value", [a.el("input",
					{
						_ref: this._uid,
						type: "text",
						value: this._config.value,
						class: this._config.invaild ? "dhx_invalid" : "",
						onchange: this._handlers.change,
						oninput: this._handlers.change
					})])])
				}, c.prototype._changed = function (t)
				{
					this.setValue(t.target.value)
				}, c);

			function c(t, e)
			{
				var i = this;
				this._config = n(
				{}, t), this._evs = e, this._uid = r.uid(), this._handlers = {
					change: function (t)
					{
						return i._changed(t)
					}
				}
			}
			e.Text = i
		}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(50)), n(e(51)), n(e(55)), n(e(39)), n(e(18))
		}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(4)), n(e(31)), n(e(66)), n(e(67)), n(e(10)), n(e(69)), n(e(5)), n(e(34)), n(e(33)), n(e(70)), n(e(32)), n(e(20))
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r = i(0);
			e.getCircleTpl = function (t)
			{
				if (!t.$count && !1 !== t.open || !t.$kids) return "";
				var e = "vertical" === t.dir,
					i = !1 === t.open,
					n = t.width / 2,
					o = t.height / 2,
					o = {
						x: e ? 0 : n,
						y: e ? o : t.height
					};
				return r.el("div",
				{
					dhx_diagram: "hide",
					class: i ? "dhx_expand_icon" : "dhx_hide_icon",
					style:
					{
						position: "absolute",
						top: o.y,
						left: o.x
					}
				}, [r.el("div.dhx_icon-container",
				{
					style:
					{
						background: t.$expandColor
					}
				}, [r.el("i.dxi",
				{
					class: i ? " dxi-plus" : " dxi-minus"
				})])])
			}, e.getHeaderTpl = function (t)
			{
				var e = t.width,
					t = t.headerColor || "#20b6e2";
				return r.el("div",
				{
					class: "dhx_item_header",
					style:
					{
						height: 4,
						width: e,
						top: 0,
						left: 0,
						position: "absolute",
						background: t
					}
				})
			}, e.getTextTemplate = function (t, e)
			{
				var i = t.width,
					n = t.height;
				return "string" == typeof t.text || "string" == typeof t.title ? r.el("div.shape_content-container",
				{
					style:
					{
						width: i,
						height: n,
						top: 0,
						left: 0,
						overflow: "hidden",
						transform: "translate(0 0)",
						position: "absolute"
					}
				}, [r.el("div",
				{
					class: "shape_content",
					style:
					{
						width: t.width,
						height: t.height,
						wordBreak: "break-word",
						whiteSpace: "pre-wrap",
						overflow: "hidden"
					}
				}, e)]) : null
			}, e.getShapeCss = function (t)
			{
				return {
					width: t.width,
					height: t.height,
					display: "flex",
					"flex-direction": "column",
					"justify-content":
					{
						bottom: "flex-end",
						top: "flex-start",
						center: "center"
					} [t.textVerticalAlign],
					"text-align": t.textAlign,
					"line-height": t.lineHeight,
					"font-size": t.fontSize,
					"font-style": t.fontStyle,
					"font-weight": t.fontWeight,
					color: t.fontColor,
					"word-break": "break-word",
					"white-space": "pre-wrap"
				}
			}
		}, function (t, e, i)
		{
			"use strict";
			var n;
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (n = e.RealPosition || (e.RealPosition = {})).left = "left", n.right = "right", n.top = "top", n.bottom = "bottom", n.center = "center", (n = e.Position || (e.Position = {})).right = "right", n.bottom = "bottom", n.center = "center", (e = e.MessageContainerPosition || (e.MessageContainerPosition = {})).topLeft = "top-left", e.topRight = "top-right", e.bottomLeft = "bottom-left", e.bottomRight = "bottom-right"
		}, function (t, e)
		{
			"use strict";
			var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t)
				{
					return typeof t
				} : function (t)
				{
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				n = function ()
				{
					return this
				}();
			try
			{
				n = n || new Function("return this")()
			}
			catch (t)
			{
				"object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
			}
			t.exports = n
		}, function (t, e, i)
		{
			"use strict";
			(function (l)
			{
				Object.defineProperty(e, "__esModule",
				{
					value: !0
				});
				var u = i(4),
					d = i(5);

				function h(t)
				{
					return t ? t.includes("json") ? "json" : t.includes("xml") ? "xml" : "text" : "text"
				}

				function n(o, r, a, t, s)
				{
					var n, c = t ||
					{};
					return s && (c.Accept = "application/" + s), "GET" !== a && (c["Content-Type"] = c["Content-Type"] || "application/json"), "GET" === a && ((t = r && "object" == typeof r ? (n = r, Object.keys(n).reduce(function (t, e)
					{
						var i = "object" == typeof n[e] ? JSON.stringify(n[e]) : n[e];
						return t.push(e + "=" + encodeURIComponent(i)), t
					}, []).join("&")) : r && "string" == typeof r ? r : "") && (o += o.includes("?") ? "&" : "?", o += t), r = null), window.fetch ? window.fetch(o,
					{
						method: a,
						body: r ? JSON.stringify(r) : null,
						headers: c
					}).then(function (e)
					{
						if (!e.ok) return e.text().then(function (t)
						{
							return l.reject(
							{
								status: e.status,
								statusText: e.statusText,
								message: t
							})
						});
						var t = s || h(e.headers.get("Content-Type"));
						if ("raw" === t) return {
							headers: Object.fromEntries(e.headers.entries()),
							url: e.url,
							body: e.body
						};
						if (204 !== e.status) switch (t)
						{
						case "json":
							return e.json();
						case "xml":
							var i = d.toDataDriver(u.DataDriver.xml);
							return i ? e.text().then(function (t)
							{
								return i.toJsonObject(t)
							}) : e.text();
						default:
							return e.text()
						}
					}) : new l(function (t, e)
					{
						var i, n = new XMLHttpRequest;
						for (i in n.onload = function ()
							{
								200 <= n.status && n.status < 300 ? ("raw" === s && t(
								{
									url: n.responseURL,
									headers: n.getAllResponseHeaders().trim().split(/[\r\n]+/).reduce(function (t, e)
									{
										e = e.split(": ");
										return t[e[0]] = e[1], t
									},
									{}),
									body: n.response
								}), 204 === n.status ? t() : t(function (t, e)
								{
									switch (e)
									{
									case "json":
										return JSON.parse(t);
									case "text":
										return t;
									case "xml":
										var i = d.toDataDriver(u.DataDriver.xml);
										return i ? i.toJsonObject(t) :
										{
											parseError: "Incorrect data driver type: 'xml'"
										};
									default:
										return t
									}
								}(n.responseText, s || h(n.getResponseHeader("Content-Type"))))) : e(
								{
									status: n.status,
									statusText: n.statusText
								})
							}, n.onerror = function ()
							{
								e(
								{
									status: n.status,
									statusText: n.statusText,
									message: n.responseText
								})
							}, n.open(a, o), c) n.setRequestHeader(i, c[i]);
						switch (a)
						{
						case "POST":
						case "DELETE":
						case "PUT":
							n.send(void 0 !== r ? JSON.stringify(r) : "");
							break;
						case "GET":
						default:
							n.send()
						}
					})
				}
				e.ajax = {
					get: function (t, e, i)
					{
						return n(t, e, "GET", i && i.headers, void 0 !== i ? i.responseType : void 0)
					},
					post: function (t, e, i)
					{
						return n(t, e, "POST", i && i.headers, void 0 !== i ? i.responseType : void 0)
					},
					put: function (t, e, i)
					{
						return n(t, e, "PUT", i && i.headers, void 0 !== i ? i.responseType : void 0)
					},
					delete: function (t, e, i)
					{
						return n(t, e, "DELETE", i && i.headers, void 0 !== i ? i.responseType : void 0)
					}
				}
			}).call(this, i(7))
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = (o.prototype.copy = function ()
			{
				var e = this,
					i = new o;
				return i.nodes = this.nodes.map(function (t)
				{
					return {
						id: t.id,
						w: t.w,
						h: t.h,
						x: t.x,
						y: t.y,
						kids: [],
						links: [],
						isn: t.isn,
						iss: t.iss
					}
				}), i.hash = {}, i.nodes.forEach(function (t)
				{
					i.hash[t.id] = t
				}), i.nodes.forEach(function (t)
				{
					t.kids = e.hash[t.id].kids.map(function (t)
					{
						return i.hash[t.id]
					}), t.links = e.hash[t.id].links.map(function (t)
					{
						return i.hash[t.id]
					})
				}), i._tbounds = [].concat(this._tbounds), i._ybounds = [].concat(this._ybounds), i._bounds = this._bounds ? this._bounds.map(function (t)
				{
					return [].concat(t)
				}) : [], i.routes = this.routes, i._root = this._root ? i.hash[this._root.id] : null, i
			}, o.prototype.collectSubNodes = function (t, e)
			{
				for (var i = 0; i < t.kids.length; i++)
				{
					var n = t.kids[i];
					e.push(n), n.kids && this.collectSubNodes(n, e)
				}
			}, o.prototype.getLevelBounds = function ()
			{
				return this._bounds
			}, o.prototype.getBounds = function (t, e, i)
			{
				t = i ? this._tbounds : this._bounds[t];
				return [t[0] ? t[0] - e / 4 : 0, t[1] ? t[1] + e / 4 : 0]
			}, o.prototype.addEdge = function (t, e)
			{
				t = this.hash[t], e = this.hash[e];
				t.links.push(e), e.links.push(t)
			}, o.prototype.importNodes = function (t)
			{
				var e = this;
				t.forEach(function (t)
				{
					e.hash[t.id] = t, e.nodes.push(t)
				})
			}, o.prototype.split = function (e)
			{
				var i = this,
					n = [];
				if (this.nodes = this.nodes.filter(function (t)
					{
						return !e(t) || (delete i.hash[t.id], n.push(t), !1)
					}), !n.length) return null;
				var t = new o;
				return t.importNodes(n), t
			}, o.prototype.addNode = function (t)
			{
				t.kids = [], t.links = [], this._root || (this._root = t), this.hash[t.id] = t, this.nodes.push(t)
			}, o.prototype.getNode = function (t)
			{
				return this.hash[t]
			}, o.prototype.getRoot = function ()
			{
				return this._root
			}, o.prototype.getLevels = function ()
			{
				return this._deep
			}, o.prototype.clean = function ()
			{
				this.nodes.forEach(function (e)
				{
					var i;
					1 < e.links.length && (i = [], e.links = e.links.filter(function (t)
					{
						return !i.includes(t) && e !== t && (i.push(t), !0)
					}))
				})
			}, o.prototype.getNodes = function ()
			{
				return this.nodes
			}, o.prototype.getBox = function ()
			{
				return [this._tbounds, this._ybounds]
			}, o.prototype.setGlobalBox = function ()
			{
				var o, r, a, s;
				this.nodes.length && (a = o = 1 / 0, s = r = -1 / 0, this.nodes.forEach(function (t)
				{
					var e = t.x - t.w / 2,
						i = t.x + t.w / 2,
						n = t.y - t.h / 2,
						t = t.y + t.h / 2;
					e < a && (a = e), n < o && (o = n), s < i && (s = i), r < t && (r = t)
				}), this._tbounds = [a, s], this._ybounds = [o, r])
			}, o.prototype.translate = function (e)
			{
				if (this.nodes.forEach(function (t)
					{
						t.x += e.x, t.y += e.y
					}), this._tbounds[0] += e.x, this._tbounds[1] += e.x, this._bounds)
					for (var t = 0; t < this._bounds.length; t++) this._bounds[t][0] += e.x, this._bounds[t][1] += e.x;
				this._ybounds && (this._ybounds[0] += e.y, this._ybounds[1] += e.y)
			}, o.prototype.rotate = function (t)
			{
				var n = t.x,
					o = t.y;
				this.nodes.forEach(function (t)
				{
					var e = t.x * o - t.y * n,
						i = t.x * n + t.y * o;
					t.x = e, t.y = i
				});
				var e = this._tbounds,
					i = e[0],
					r = e[1],
					t = this._ybounds,
					e = t[0],
					t = t[1];
				this._tbounds = [i * o - e * n, r * o - t * n].sort(), this._ybounds = [i * n + e * o, r * n + t * o].sort()
			}, o.prototype.setBox = function ()
			{
				var t = this._deep[this._deep.length - 1],
					e = -1 / 0;
				t.forEach(function (t)
				{
					t = t.y + t.h / 2;
					e < t && (e = t)
				}), this._ybounds = [this._root.y - this._root.h / 2, e]
			}, o.prototype.mirror = function ()
			{
				this.nodes.forEach(function (t)
				{
					t.x = -t.x
				});
				for (var t = 0; t < this._bounds.length; t++)
				{
					var e = this._bounds[t],
						i = e[0],
						e = e[1];
					this._bounds[t] = [-e, -i]
				}
				var n = this._tbounds,
					o = n[0],
					n = n[1];
				this._tbounds = [-n, -o]
			}, o.prototype.nonLeaves = function (t)
			{
				return t.kids.filter(function (t)
				{
					return 0 < t.kids.length
				})
			}, o.prototype.toTree = function (t)
			{
				return t && this.hash[t.id] || (t = this._detectRoot()), this.nodes.forEach(function (t)
				{
					return t.kids = []
				}), this.setKids(t), t
			}, o.prototype.root = function (t, e)
			{
				this._deep = [
					[t]
				];
				e = Math.round((e && e.rotate ? t.h : t.w) / 2);
				this._tbounds = [-e, e], this._bounds = [
					[-e, e]
				], this._leaves = [], this._root = t, this._setLevels(t, 1), this._width = 1;
				for (var i = 0; i < this._deep.length; i++)
				{
					var n = this._deep[i].length;
					n > this._width && (this._width = n)
				}
			}, o.prototype.setKids = function (e)
			{
				var i = this;
				e.links.forEach(function (t)
				{
					t.kids.length || (e.kids.push(t), i.setKids(t))
				})
			}, o.prototype._detectRoot = function ()
			{
				for (var i = {}, t = this.nodes, n = []; n.forEach(function (t)
					{
						return i[t] = 1
					}), n = [], t = t.filter(function (t)
					{
						var e = 1 < t.links.map(function (t)
						{
							return i[t.id] ? 0 : 1
						}).reduce(function (t, e)
						{
							return t + e
						}, 0);
						return e || n.push(t.id), e
					}), 2 < t.length && n.length;);
				return t[0] || this.nodes[0]
			}, o.prototype._setLevels = function (t, e)
			{
				for (var i = t.kids, n = 0; n < i.length; n++)
				{
					var o = i[n],
						r = this._deep[e];
					r ? r.push(o) : (this._deep[e] = [o], this._bounds[e] = [0, 0]), o.kids.length ? this._setLevels(o, e + 1) : this._leaves.push(o)
				}
			}, o.prototype.getIString = function ()
			{
				for (var t = [], e = 0; e < this._leaves.length; e++) this._leaves[e].isn = 0, this._leaves[e].iss = "";
				for (e = this._deep.length - 2; 0 <= e; e--)
				{
					for (var i = this._deep[e].filter(function (t)
						{
							return 0 < t.kids.length
						}), n = 0; n < i.length; n++)
						for (var o = i[n], r = 0; r < o.kids.length; r++) o.iss = o.kids.map(function (t)
						{
							return t.isn
						}).sort().join(",");
					i.sort(function (t, e)
					{
						return t.iss > e.iss ? 1 : -1
					}), t.push(i.map(function (t)
					{
						return t.iss
					}).join("|"));
					for (var a = i[0].iss, s = 1, n = 0; n < i.length; n++) a !== i[n].iss && (a = i[n].iss, s++), i[n].isn = s
				}
				return t.join(";")
			}, o);

			function o(t, e, i)
			{
				this._tbounds = [0, 0], t ? (this.nodes = [e], t.collectSubNodes(e, this.nodes), this.hash = t.hash, this.root(e, i)) : (this.nodes = [], this.hash = {})
			}
			e.default = n
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (e = e.DiagramEditorEvents || (e.DiagramEditorEvents = {})).resetButton = "resetbutton", e.applyButton = "applybutton", e.undoButton = "undoButton", e.redoButton = "redoButton", e.shapeMove = "shapemove", e.shapeResize = "shaperesize", e.zoomIn = "zoomin", e.zoomOut = "zoomout", e.visibility = "visibility", e.shapesUp = "shapesup", e.exportData = "exportData", e.importData = "importData", e.blockSelectionFinished = "blockSelectionFinished", e.blockSelectionAreaChanged = "blockSelectionAreaChanged", e.autoLayout = "autoLayout", e.changeGridStep = "changeGridStep"
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r = i(0),
				a = {
					rotate: i(118),
					elbow: i(119),
					straight: i(120),
					curved: i(121),
					"align-bottom": i(122),
					"align-center": i(123),
					"align-left": i(124),
					"align-right": i(125),
					"align-middle": i(126),
					"align-top": i(127),
					"align-horizontal-center": i(128),
					"align-horizontal-left": i(129),
					"align-horizontal-right": i(130),
					"align-vertical-bottom": i(131),
					"align-vertical-top": i(132),
					"align-vertical-middle": i(133),
					"text-shape": i(134),
					"image-shape": i(135),
					"filled-arrow": i(136),
					"filled-arrow-rewerse": i(137),
					line: i(138),
					duplicate: i(139),
					connect: i(140),
					"change-shape": i(141),
					plus: i(142),
					minus: i(143),
					"remove-point": i(144),
					"empty-icon": i(145)
				};
			e.getIcon = function (t, e, i, n)
			{
				void 0 === i && (i = 20), void 0 === n && (n = 20);
				var o = a[t].replace("data:image/svg+xml;base64,", "");
				return r.el("i",
				{
					".innerHTML": window.atob(o),
					class: e || "",
					_key: t,
					style:
					{
						width: i,
						height: n,
						pointerEvents: "none",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}
				})
			}, e.addIcon = function ()
			{
				return r.sv("svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24"
				}, [r.sv("path",
				{
					d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
				})])
			}, e.removeIcon = function ()
			{
				return r.sv("svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					width: "24",
					height: "24",
					viewBox: "0 0 24 24"
				}, [r.sv("path",
				{
					d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
				})])
			}, e.verticalIcon = function ()
			{
				return r.sv("svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					width: "10",
					height: "18",
					viewBox: "0 0 10 18"
				}, [r.sv("path",
				{
					d: "M2.5,5 C1.11928813,5 0,3.88071187 0,2.5 C0,1.11928813 1.11928813,0 2.5,0 C3.88071187,0 5,1.11928813 5,2.5 C5,3.88071187 3.88071187,5 2.5,5 Z M10,11 L5,11 L5,9 L3,9 L3,11 L3,15 L5,15 L5,13 L10,13 L10,18 L5,18 L5,16 L2,16 L2,15 L2,11 L2,9 L2,8 L2,5 L2.5,5 L3,5 L3,8 L5,8 L5,6 L10,6 L10,11 Z"
				})])
			}, e.horizontalIcon = function ()
			{
				return r.sv("svg",
				{
					xmlns: "http://www.w3.org/2000/svg",
					width: "20",
					height: "15",
					viewBox: "0 0 20 15",
					transform: "translate(.5,.5)"
				}, [r.sv("path",
				{
					d: "M10,4.94999094 L10,7 L17,7 L17,7.5 L17,10 L16,10 L16,8 L10,8 L10,10 L9,10 L9,8 L3,8 L3,10 L2,10 L2,7 L2.5,7 L9,7 L9,4.94999094 C7.85887984,4.71835578 7,3.70947896 7,2.5 C7,1.11928813 8.11928813,0 9.5,0 C10.8807119,0 12,1.11928813 12,2.5 C12,3.70947896 11.1411202,4.71835578 10,4.94999094 Z M-2.90878432e-13,10 L5,10 L5,15 L-2.90878432e-13,15 L-2.90878432e-13,10 Z M14,10 L19,10 L19,15 L14,15 L14,10 Z M7,10 L12,10 L12,15 L7,15 L7,10 Z"
				})])
			}
		}, function (t, h, e)
		{
			"use strict";
			var n, i = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(h, "__esModule",
			{
				value: !0
			});
			var o, p = e(0),
				r = e(6),
				a = e(17),
				s = e(11),
				c = e(3),
				i = (o = s.BaseShape, i(l, o), l.prototype.getMetaInfo = function ()
				{
					return r.getMeta([
					{
						type: "grid",
						label: c.default.gridStep
					},
					{
						type: "arrange",
						label: c.default.arrange
					},
					{
						type: "fill",
						label: c.default.fill
					},
					{
						type: "text",
						label: c.default.text
					},
					{
						type: "strokeProps",
						label: c.default.stroke
					},
					{
						type: "textProps",
						label: c.default.textProps
					}])
				}, l.prototype.render = function ()
				{
					this.config.strokeType && ("dash" === this.config.strokeType && (this.config.strokeDash = "5,5"), "none" === this.config.strokeType && (this.config.stroke = "none"));
					var t = this.config,
						e = t.id,
						i = t.angle,
						n = t.width,
						o = t.height,
						r = t.strokeWidth,
						t = this.getCoords(this.config),
						r = r / 2;
					return p.el("div",
					{
						_key: e,
						class: "dhx_diagram_flow_item " + this.getCss(),
						dhx_id: e,
						style:
						{
							transform: "rotate(" + (i || 0) + "deg)",
							zIndex: this.config.$selected ? 1 : 0,
							position: "absolute",
							height: o,
							width: n,
							top: t.y,
							left: t.x
						}
					}, [p.sv("svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						height: o,
						width: n,
						viewBox: -r + " " + -r + " " + (n + r) + " " + (o + r),
						reserveAspectRatio: "none"
					}, [this._getShapeContour()]), a.getTextTemplate(this.config, this.getContent()), a.getCircleTpl(this.config)])
				}, l.prototype.setDefaults = function (t, e)
				{
					var i = t.width,
						n = t.height,
						o = t.stroke,
						r = t.extraLinesStroke,
						a = t.fill,
						s = t.strokeWidth,
						c = t.fontColor,
						l = t.strokeDash,
						u = t.textAlign,
						d = t.lineHeight,
						h = t.fontStyle,
						p = t.textVerticalAlign,
						g = t.type,
						f = t.fontSize,
						_ = t.text,
						y = t.preview,
						v = t.x,
						m = t.y,
						I = "roll" === g ? "#DEDEDE" : r || "#FFF";
					t.extraLinesStroke = e.extraLinesStroke || I;
					var x = ["circle", "or", "junction"].includes(g),
						C = e.width ? parseFloat(e.width) : x ? 90 : 140,
						r = e.height ? parseFloat(e.height) : 90,
						I = e.lineHeight ? parseFloat(e.lineHeight) : 14,
						g = e.fontSize ? parseFloat(e.fontSize) : 14,
						x = e.strokeWidth ? parseFloat(e.strokeWidth) : 1;
					return t.strokeWidth = s || x, t.width = i || C, t.height = n || r, t.fontSize = f || g, t.lineHeight = d || I, t.strokeDash = l || e.strokeDash || "", t.fill = a || e.fill || "#DEDEDE", t.stroke = o || e.stroke || "#DEDEDE", t.text = "string" == typeof _ ? _ : e.text || "", t.textAlign = u || e.textAlign || "center", t.textVerticalAlign = p || e.textVerticalAlign || "center", t.fontStyle = h || e.fontStyle || "normal", t.fontColor = c || e.fontColor || "#4C4C4C", t.preview = y || e.preview, t.x = v || 0, t.y = m || 0, t
				}, l.prototype.getContent = function ()
				{
					return [p.el("div",
					{
						class: "shape_content",
						style: a.getShapeCss(this.config)
					}, this.config.text)]
				}, l.prototype._getShapeContour = function ()
				{
					var t, e, i = this.config,
						n = i.width,
						o = i.height,
						r = i.stroke,
						a = i.fill,
						s = i.strokeWidth,
						c = i.strokeDash,
						l = i.extraLinesStroke,
						u = i.type,
						d = h.flowShapes[u],
						i = Math.round(n / 12),
						u = n - s / 2,
						n = o - s / 2,
						o = d.path(u, n, i),
						i = d.additionalPath(u, n, i);
					return [(e = o, p.sv("path",
					{
						d: e,
						class: "dhx_diagram_flow_shape dhx_item_shape ",
						stroke: r,
						fill: a,
						"stroke-width": s,
						"stroke-dasharray": c
					})), (t = i, p.sv("path",
					{
						d: t,
						fill: "none",
						stroke: l,
						class: "dhx_diagram_extra_lines"
					}))]
				}, l);

			function l(t, e)
			{
				e = o.call(this, t, e) || this;
				return e.config = t, e.id = e.config.id, e
			}
			h.DiagramFlowShape = i, h.flowShapes = {
				circle:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
					},
					additionalPath: function () {}
				},
				rectangle:
				{
					path: function (t, e)
					{
						return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
					},
					additionalPath: function () {}
				},
				triangle:
				{
					path: function (t, e)
					{
						return "M " + t / 2 + " 0 L" + t + " " + e + " L 0 " + e + " z"
					},
					additionalPath: function () {}
				},
				start:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM " + e / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + e / 2 + "," + e + "\n\t\t\tH " + (t - e / 2) + " A " + e / 2 + "," + e / 2 + " 0 1 0 " + (t - e / 2) + ",0 H " + e / 2 + " Z"
					},
					additionalPath: function () {}
				},
				end:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM " + e / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + e / 2 + "," + e + "\n\t\t\tH " + (t - e / 2) + " A " + e / 2 + "," + e / 2 + " 0 1 0 " + (t - e / 2) + ",0 H " + e / 2 + " Z"
					},
					additionalPath: function () {}
				},
				process:
				{
					path: function (t, e)
					{
						return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
					},
					additionalPath: function () {}
				},
				output:
				{
					path: function (t, e, i)
					{
						return "M " + 2 * i + ",0 " + t + ",0 " + (t - 2 * i) + "," + e + " 0," + e + " Z"
					},
					additionalPath: function () {}
				},
				decision:
				{
					path: function (t, e)
					{
						return "M 0 " + e / 2 + " L " + t / 2 + " 0 L " + t + " " + e / 2 + " L " + t / 2 + " " + e + " Z"
					},
					additionalPath: function () {}
				},
				display:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM 0 " + e / 2 + " L " + t / 4 + " 0 H " + 3 * t / 4 + "\n\t\t\tA " + t / 4 + "," + e / 2 + " 0 1 1 " + 3 * t / 4 + "," + e + "\n\t\t\tH " + t / 4 + " Z"
					},
					additionalPath: function () {}
				},
				document:
				{
					path: function (t, e)
					{
						return "M0 " + (e -= 8) + " C\n\t\t\t" + t / 6 + " " + 10 * e / 9 + ",\n\t\t\t" + t / 3 + " " + 10 * e / 9 + ",\n\t\t\t" + t / 2 + " " + e + " S\n\t\t\t" + 5 * t / 6 + " " + 8 * e / 9 + ",\n\t\t\t" + t + " " + e + "\n\t\t\tV 0 H 0 Z"
					},
					additionalPath: function () {}
				},
				data:
				{
					path: function (t, e, i)
					{
						return "M " + i + " 0 Q\n\t\t\t" + -i + " " + e / 2 + ",\n\t\t\t" + i + " " + e + " H " + t + " Q\n\t\t\t" + (t - 2 * i) + " " + e / 2 + ",\n\t\t\t" + t + " 0 Z"
					},
					additionalPath: function () {}
				},
				database:
				{
					path: function (t, e, i)
					{
						return "M 0 " + i + " A " + t / 2 + "," + i + " 0 1 0 " + t + "," + i + "\n\t\t\tA " + t / 2 + "," + i + " 0 1 0 0," + i + "\n\t\t\tV " + e + " H " + t + " V " + i
					},
					additionalPath: function (t, e, i)
					{
						return "M 0 " + i + " A " + t / 2 + "," + i + " 0 1 0 " + t + "," + i
					}
				},
				internal:
				{
					path: function (t, e)
					{
						return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
					},
					additionalPath: function (t, e, i)
					{
						return "M " + i + " 0 V " + e + " M 0 " + i + " H " + t
					}
				},
				offline:
				{
					path: function (t, e)
					{
						return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z"
					},
					additionalPath: function (t, e, i)
					{
						var n = e / Math.sqrt(Math.pow(t / 2, 2) + Math.pow(e, 2)),
							n = Math.sqrt(Math.pow(i / n, 2) - Math.pow(i, 2));
						return "M " + (t / 2 - n) + " " + (e - i) + " h " + 2 * n
					}
				},
				delay:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM 0 0 H " + 3 * t / 4 + "\n\t\t\tA " + t / 4 + "," + e / 2 + " 0 1 1 " + 3 * t / 4 + "," + e + "\n\t\t\tH 0 Z"
					},
					additionalPath: function () {}
				},
				page:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM 0,0\n\t\t\t" + t + ",0\n\t\t\t" + t + "," + e / 2 + "\n\t\t\t" + t / 2 + "," + e + "\n\t\t\t0," + e / 2 + " Z"
					},
					additionalPath: function () {}
				},
				input:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM 0," + e / 3 + "\n\t\t\t" + t + ",0\n\t\t\t" + t + "," + e + "\n\t\t\t0," + e + " Z"
					},
					additionalPath: function () {}
				},
				operation:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM 0,0\n\t\t\t" + t + ",0\n\t\t\t" + 3 * t / 4 + "," + e + "\n\t\t\t" + t / 4 + "," + e + " Z"
					},
					additionalPath: function () {}
				},
				punchcard:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM 0," + e / 4 + "\n\t\t\t" + t / 4 + ",0\n\t\t\t" + t + ",0\n\t\t\t" + t + "," + e + "\n\t\t\t0," + e + " Z"
					},
					additionalPath: function () {}
				},
				subroutine:
				{
					path: function (t, e)
					{
						return "M 0,0 L 0," + e + " L " + t + "," + e + " L " + t + ",0 Z"
					},
					additionalPath: function (t, e, i)
					{
						return "M " + i + " 0 V " + e + " M " + (t - i) + " 0 V " + e
					}
				},
				comment:
				{
					path: function (t, e)
					{
						return "M " + t + " 0 H 0 V " + e + " H" + t + " V" + (e - 4) + " H4 V4 H" + t
					},
					additionalPath: function () {}
				},
				storage:
				{
					path: function (t, e)
					{
						return "M 0,0 " + t + ",0 " + t / 2 + "," + e + " Z"
					},
					additionalPath: function () {}
				},
				extract:
				{
					path: function (t, e)
					{
						return "M 0," + e + " " + t + "," + e + " " + t / 2 + ",0 Z"
					},
					additionalPath: function () {}
				},
				collate:
				{
					path: function (t, e)
					{
						return "M " + t / 2 + " " + e / 2 + " L 0 0 H " + t + " L 0 " + e + " H " + t + " Z"
					},
					additionalPath: function () {}
				},
				or:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
					},
					additionalPath: function (t, e)
					{
						return "\n\t\t\tM" + (t - e) / 2 + " " + e / 2 + " " + (t - (t - e) / 2) + " " + e / 2 + "\n\t\t\tM" + t / 2 + " 0 " + t / 2 + " " + e
					}
				},
				junction:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
					},
					additionalPath: function (t, e)
					{
						return "\n\t\t\tM " + (t / 2 - e * Math.SQRT2 / 4) + " " + (e / 2 - e * Math.SQRT2 / 4) + " L " + (t / 2 + e * Math.SQRT2 / 4) + " " + (e / 2 + e * Math.SQRT2 / 4) + "\n\t\t\tM " + (t / 2 - e * Math.SQRT2 / 4) + " " + (e / 2 + e * Math.SQRT2 / 4) + " L " + (t / 2 + e * Math.SQRT2 / 4) + " " + (e / 2 - e * Math.SQRT2 / 4)
					}
				},
				keyring:
				{
					path: function (t, e, i)
					{
						return "\n\t\t\tM " + i + " 0 A " + i + "," + e / 2 + " 0 1 0 " + i + "," + e + "\n\t\t\tH " + (t - i) + " A " + i + "," + e / 2 + " 0 1 0 " + (t - i) + ",0 H " + i + " Z"
					},
					additionalPath: function () {}
				},
				tape:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM0 " + (e - 12) + " C\n\t\t\t" + t / 6 + " " + 10 * (e - 8) / 9 + ",\n\t\t\t" + t / 3 + " " + 10 * (e - 8) / 9 + ",\n\t\t\t" + t / 2 + " " + (e - 8) + " S\n\t\t\t" + 5 * t / 6 + " " + 8 * (e - 8) / 9 + ",\n\t\t\t" + t + " " + e + "\n\t\t\tV 12 C\n\t\t\t" + 5 * t / 6 + " " + -e / 9 + ",\n\t\t\t" + 2 * t / 3 + " " + e / 9 / 2 + ",\n\t\t\t" + t / 2 + " 8 S\n\t\t\t" + t / 6 + " " + e / 9 + ",\n\t\t\t0 0 Z"
					},
					additionalPath: function () {}
				},
				preparation:
				{
					path: function (t, e)
					{
						return "M0 " + e / 2 + "L20 0H" + (t - 20) + "L " + t + " " + e / 2 + "L" + (t - 20) + " " + e + "H20L0 " + e / 2 + "Z"
					},
					additionalPath: function () {}
				},
				endpoint:
				{
					path: function (t, e)
					{
						return "M0 " + e / 2 + "  L" + t / 2 + " 0 L " + t / 2 + " " + e + " z"
					},
					additionalPath: function () {}
				},
				roll:
				{
					path: function (t, e)
					{
						return "\n\t\t\tM " + t / 2 + " 0 A " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + "," + e + "\n\t\t\tA " + e / 2 + "," + e / 2 + " 0 1 0 " + t / 2 + ",0 Z"
					},
					additionalPath: function (t, e)
					{
						return "M " + t / 2 + " " + e + " H " + t
					}
				}
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (e = e.PropertyEvents || (e.PropertyEvents = {})).change = "change", e.beforeFileUpload = "onBeforeFileUpload", e.afterFileUpload = "afterFileUpload"
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			e.default = {
				apply: "apply",
				reject: "reject"
			}
		}, function (t, e, i)
		{
			"use strict";

			function n(t)
			{
				var e = document.activeElement;
				e.classList.contains("dhx_alert__confirm-reject") || e.classList.contains("dhx_alert__confirm-aply") || t.preventDefault()
			}
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.blockScreen = function (t)
			{
				var e = document.createElement("div");
				return e.className = "dhx_alert__overlay " + (t || ""), document.body.appendChild(e), document.addEventListener("keydown", n),
					function ()
					{
						document.body.removeChild(e), document.removeEventListener("keydown", n)
					}
			}
		}, function (t, e, i) {}, function (t, e, i)
		{
			"use strict";
			var p = this && this.__assign || function ()
			{
				return (p = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};

			function g(t, e, i)
			{
				switch (i)
				{
				case "top":
					return t.$shape.getPoint(t.x + t.width / 2, t.y - e);
				case "bottom":
					return t.$shape.getPoint(t.x + t.width / 2, t.y + t.height + e);
				case "left":
					return t.$shape.getPoint(t.x - e, t.y + t.height / 2);
				case "right":
					return t.$shape.getPoint(t.x + t.width + e, t.y + t.height / 2);
				case "center":
					return t.$shape.getPoint(t.x + t.width / 2, t.y + t.height / 2)
				}
			}

			function f(t, e, i, n, o, r)
			{
				if (void 0 === r && (r = 10), !o)
				{
					var a = i.y === n.y ? +r : 0,
						s = i.x === n.x ? +r : 0;
					return [t,
					{
						x1: i.x,
						y1: i.y,
						x: i.x + a,
						y: i.y + s
					},
					{
						x: n.x - a,
						y: n.y - s
					},
					{
						x1: n.x,
						y1: n.y,
						x: e.x,
						y: e.y
					}]
				}
				var c = n.x < o.x ? -1 : 1,
					l = n.y < o.y ? -1 : 1,
					u = i.x > o.x ? 1 : -1,
					d = i.y > o.y ? 1 : -1,
					h = p(
					{}, o),
					a = p(
					{}, n),
					s = {
						x1: o.x,
						y1: o.y,
						x: o.x,
						y: o.y + r * l
					};
				return i.x === o.x && (h.y += r * d, a.x -= r * c, s = {
					x1: o.x,
					y1: o.y,
					x: o.x + r * c,
					y: o.y
				}), i.y === o.y && (h.x += r * u, a.y -= r * l, s = {
					x1: o.x,
					y1: o.y,
					x: o.x,
					y: o.y + r * l
				}), [t, i, h, s, a,
				{
					x1: n.x,
					y1: n.y,
					x: e.x,
					y: e.y
				}]
			}
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var _ = ["top", "bottom", "right", "left", "center"];

			function r(t, e, s, i, n, o, r)
			{
				var a, c;
				void 0 === o && (o = ""), void 0 === r && (r = "");
				var l, u, d = n && i < n ? n : i || 0;
				if ("center" === o && "center" === r) return [
				{
					x: e.x + e.width / 2,
					y: e.y + e.height / 2
				},
				{
					x: s.x + s.width / 2,
					y: s.y + s.height / 2
				}];
				o && (a = g(e, 0, o), l = g(e, i, o)), r && (c = g(s, 0, r), u = g(s, d, r)), o && r || (l = (h = _.map(function (r)
				{
					var a = g(e, i, r);
					return _.map(function (t)
					{
						var e, i, n, o = g(s, d, t),
							e = (e = a, n = (i = o).x - e.x, e = i.y - e.y, Math.sqrt(n * n + e * e));
						return [a, o, e, r, t]
					}).sort(function (t, e)
					{
						return t[2] - e[2]
					})[0]
				}).sort(function (t, e)
				{
					return t[2] - e[2]
				})[0])[0], u = h[1], o = h[3], r = h[4], t.fromSide = o, t.toSide = r, a = g(e, 0, o), c = g(s, 0, r));
				n = "bottom" === o && "top" === r || "top" === o && "bottom" === r ? Math.abs(c.y - a.y) : 0;
				0 < (n = n || ("left" === o && "right" === r || "right" === o && "left" === r ? Math.abs(c.x - a.x) : 0)) && n <= d + i && (u = g(s, d = n - i, r));
				var h = [];
				return l.x === u.x || l.y === u.y ? a.x === l.x && l.x === c.x || a.y === l.y && l.y === c.y ? h = [a, c] : (h = [a, l, u, c], t.cornersRadius && "straight" !== t.connectType && (h = f(a, c, l, u, null, t.cornersRadius))) : (o = l.x < a.x && l.x < u.x, n = l.y > a.y && l.y > u.y, r = a.x === l.x || o ?
				{
					x: l.x,
					y: u.y
				} :
				{
					x: u.x,
					y: l.y
				}, r = n ?
				{
					x: u.x,
					y: l.y
				} : r, h = "curved" === t.connectType ? (o = c, [a,
				{
					x1: (n = r).x,
					y1: n.y,
					x: o.x,
					y: o.y
				}]) : t.cornersRadius && "straight" !== t.connectType ? f(a, c, l, u, r, t.cornersRadius) : [a, l, r, u, c]), h
			}
			e.nearestLinkPath = function (t, e, i, n)
			{
				if (e && i)
				{
					var o = r(t, e, i, n.lineGap, t.customGap, t.fromSide, t.toSide);
					if ("straight" === t.connectType) return t.points = [o[0], o[o.length - 1]];
					t.points ? (t.points.length === o.length ? t.points = t.points.map(function (t, e)
					{
						return t && o[e] && !t.$custom ? o[e] : t
					}) : (n = t.points.filter(function (t)
					{
						return t.$custom
					}), t.points = n.length ? t.points : o), t.$move || (t.points[0] = o[0], t.points[t.points.length - 1] = o[o.length - 1])) : t.points = o
				}
			}, e.directLinkPath = function (t, e, i, n)
			{
				var o, r, a, s, c, l, u, d, h;
				t && (o = e.x + (e.dx || 0), r = e.y + (e.dy || 0), a = i.x + (i.dx || 0), s = i.y + (i.dy || 0), "vertical" === e.dir ? (c = o, l = Math.round(r + e.height / 2), u = a, d = Math.round(s + i.height / 2), h = .5 - Math.round(n.margin.itemX / 2), t.points = [
				{
					x: c,
					y: l
				},
				{
					x: c + h,
					y: l
				},
				{
					x: c + h,
					y: d
				},
				{
					x: u,
					y: d
				}]) : (c = Math.round(o + e.width / 2), l = r + e.height, u = Math.round(a + i.width / 2), d = s, h = Math.round(n.margin.itemY / 2) + .5, t.points = [
				{
					x: c,
					y: l
				},
				{
					x: c,
					y: l + h
				},
				{
					x: u,
					y: l + h
				},
				{
					x: u,
					y: d
				}]))
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (e = e.SelectionEvents || (e.SelectionEvents = {})).beforeUnSelect = "beforeunselect", e.afterUnSelect = "afterunselect", e.beforeSelect = "beforeselect", e.afterSelect = "afterselect"
		}, function (t, e, i)
		{
			"use strict";
			var s = this && this.__assign || function ()
			{
				return (s = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(8),
				r = i(62),
				a = i(65),
				n = i(10),
				c = i(5),
				l = i(4),
				g = i(2),
				i = (u.prototype._reset = function ()
				{
					this._order = [], this._pull = {}, this._changes = {
						order: []
					}, this._initOrder = null, this._meta = new WeakMap, this._loaded = !1
				}, u.prototype.add = function (t, i)
				{
					var n = this;
					if (this.events.fire(l.DataEvents.beforeAdd, [t]))
					{
						t = Array.isArray(t) ? t.map(function (t, e)
						{
							return 0 !== e && (i += 1), n._add(t, i)
						}) : this._add(t, i);
						return this._applySmart(), t
					}
				}, u.prototype.remove = function (t)
				{
					var e = this;
					t && (t instanceof Array ? t.map(function (t)
					{
						e._remove(t)
					}) : this._remove(t))
				}, u.prototype.removeAll = function ()
				{
					this._reset(), this.events.fire(l.DataEvents.removeAll), this.events.fire(l.DataEvents.change)
				}, u.prototype.exists = function (t)
				{
					return !!this._pull[t]
				}, u.prototype.getNearId = function (t)
				{
					if (!this._pull[t]) return this._order[0].id || ""
				}, u.prototype.getItem = function (t)
				{
					return this._pull[t]
				}, u.prototype.update = function (t, e, i)
				{
					var n = this.getItem(t);
					n ? c.isEqualObj(e, n) || (e.id && t !== e.id ? (c.dhxWarning("this method doesn't allow change id"), c.isDebug()) : (e.parent && n.parent && e.parent !== n.parent && this.move(t, -1, this, e.parent), g.extend(this._pull[t], e, !1), this.config.update && this.config.update(this._pull[t]), i || this._onChange("update", t, this._pull[t])), this._applySmart()) : c.dhxWarning("item not found")
				}, u.prototype.getIndex = function (e)
				{
					if (!e) return -1;
					var t = g.findIndex(this._order, function (t)
					{
						return t && t.id.toString() === e.toString()
					});
					return this._pull[e] && 0 <= t ? t : void 0
				}, u.prototype.getId = function (t)
				{
					if (this._order[t]) return this._order[t].id
				}, u.prototype.getLength = function ()
				{
					return this._order.length
				}, u.prototype.isDataLoaded = function (t, e)
				{
					return void 0 === t && (t = 0), void 0 === e && (e = this._order.length), g.isNumeric(t) && g.isNumeric(e) ? 0 === this._order.slice(t, e).filter(function (t)
					{
						return t && t.$empty
					}).length : (this._loaded || (this._loaded = !this.find(function (t)
					{
						return t.$empty
					})), !!this._loaded)
				}, u.prototype.filter = function (t, e)
				{
					var i;
					this.isDataLoaded() ? (e && e.add || (this._order = this._initOrder || this._order, this._initOrder = null), !t || "function" == typeof t || void 0 !== (i = t).by && void 0 !== i.match && (t = i.compare ? function (t)
					{
						return i.compare(t[i.by], i.match, t)
					} : function (t)
					{
						return t[i.by] == i.match
					}), this._filter = e && e.smartFilter ? t : null, this._applyFilters(t), this.events.fire(l.DataEvents.change)) : c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype.find = function (t)
				{
					for (var e in this._pull)
					{
						var i = c.findByConf(this._pull[e], t);
						if (i) return i
					}
					return null
				}, u.prototype.findAll = function (t)
				{
					var e, i = [];
					for (e in this._pull)
					{
						var n = c.findByConf(this._pull[e], t);
						n && i.push(n)
					}
					return i
				}, u.prototype.sort = function (t, e)
				{
					this.isDataLoaded() ? (e && e.smartSorting && (this._sorter = t), t && this._applySorters(t), this.events.fire(l.DataEvents.change)) : c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype.copy = function (t, i, n, o)
				{
					var r = this;
					return t instanceof Array ? t.map(function (t, e)
					{
						return r._copy(t, i, n, o, e)
					}) : this._copy(t, i, n, o)
				}, u.prototype.move = function (t, i, n, o)
				{
					var r = this;
					return t instanceof Array ? t.map(function (t, e)
					{
						return r._move(t, i, n, o, e)
					}) : this._move(t, i, n, o)
				}, u.prototype.forEach = function (t)
				{
					for (var e = 0; e < this._order.length; e++) t.call(this, this._order[e], e, this._order)
				}, u.prototype.load = function (t, e)
				{
					return "string" == typeof t && (this.dataProxy = t = new n.DataProxy(t)), this.dataProxy = t, this._loader.load(t, e)
				}, u.prototype.parse = function (t, e)
				{
					return this._reset(), this._loader.parse(t, e)
				}, u.prototype.$parse = function (t)
				{
					var e = this.config.approximate;
					e && (t = this._approximate(t, e.value, e.maxNum)), this._parse_data(t), this._applySmart(), this.events.fire(l.DataEvents.change, ["load"]), this.events.fire(l.DataEvents.load)
				}, u.prototype.save = function (t)
				{
					"string" == typeof t && (t = new n.DataProxy(t)), this._loader.save(t)
				}, u.prototype.changeId = function (t, e, i)
				{
					var n;
					void 0 === e && (e = g.uid()), i || this.isDataLoaded() ? (n = this.getItem(t)) ? (n.id = e, g.extend(this._pull[t], n), this._pull[e] = this._pull[t], i || this._onChange("update", e, this._pull[e]), delete this._pull[t]) : c.dhxWarning("item not found") : c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype.isSaved = function ()
				{
					return !this._changes.order.length
				}, u.prototype.map = function (t)
				{
					for (var e = [], i = 0; i < this._order.length; i++) e.push(t.call(this, this._order[i], i, this._order));
					return e
				}, u.prototype.mapRange = function (t, e, i)
				{
					t < 0 && (t = 0), e > this._order.length - 1 && (e = this._order.length - 1);
					for (var n = this._order.slice(t, e), o = [], r = t; r <= e; r++) o.push(i.call(this, this._order[r], r, n));
					return o
				}, u.prototype.reduce = function (t, e)
				{
					for (var i = 0; i < this._order.length; i++) e = t.call(this, e, this._order[i], i);
					return e
				}, u.prototype.serialize = function (t)
				{
					void 0 === t && (t = l.DataDriver.json);
					var e = this.map(function (t)
						{
							var e = s(
							{}, t);
							return Object.keys(e).forEach(function (t)
							{
								t.startsWith("$") && delete e[t]
							}), e
						}),
						t = c.toDataDriver(t);
					if (t) return t.serialize(e)
				}, u.prototype.getInitialData = function ()
				{
					return this._initOrder
				}, u.prototype.setMeta = function (t, e, i)
				{
					var n;
					t && ((n = this._meta.get(t)) || (n = {}, this._meta.set(t, n)), n[e] = i)
				}, u.prototype.getMeta = function (t, e)
				{
					t = this._meta.get(t);
					return t ? t[e] : null
				}, u.prototype.getMetaMap = function (t)
				{
					return this._meta.get(t)
				}, u.prototype.setRange = function (t, e)
				{
					this._range = e ? [t, e] : null
				}, u.prototype.getRawData = function (t, e, i, n)
				{
					if (i = i || this._order, 1 === n) return i;
					var o;
					if (this._range && (t = this._range[0] + t, e = -1 === e || t + (o = e - t) > this._range[1] ? this._range[1] : t + o), !e || 0 === t && (-1 === e || e === i.length)) return i;
					if (t >= i.length) return [];
					(-1 === e || e > i.length) && (e = i.length);
					i = i.slice(t, e);
					return 0 !== i.filter(function (t)
					{
						return t.$empty
					}).length && this.events.fire("dataRequest", [t, e]), i
				}, u.prototype._add = function (t, e)
				{
					if (this.isDataLoaded())
					{
						e = this._addCore(t, e);
						return this._onChange("add", t.id, t), this.events.fire(l.DataEvents.afterAdd, [t]), e
					}
					c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype._remove = function (t)
				{
					if (this.isDataLoaded())
					{
						var e = this._pull[t];
						if (e)
						{
							if (!this.events.fire(l.DataEvents.beforeRemove, [e])) return;
							this._removeCore(e.id), this._onChange("remove", t, e)
						}
						this.events.fire(l.DataEvents.afterRemove, [e])
					}
					else c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype._copy = function (t, e, i, n, o)
				{
					if (this.isDataLoaded())
					{
						if (!this.exists(t)) return null;
						var r = g.uid();
						return (o && (e = -1 === e ? -1 : e + o), i) ? i instanceof u || !n ? i.exists(t) ? (i.add(s(s(
						{}, c.copyWithoutInner(this.getItem(t))),
						{
							id: r
						}), e), r) : (i.add(c.copyWithoutInner(this.getItem(t)), e), t) : void i.add(c.copyWithoutInner(this.getItem(t)), e) : (this.add(s(s(
						{}, c.copyWithoutInner(this.getItem(t))),
						{
							id: r
						}), e), r)
					}
					c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype._move = function (t, e, i, n, o)
				{
					if (this.isDataLoaded())
					{
						if (o && (e = -1 === e ? -1 : e + o), i && i !== this && this.exists(t))
						{
							var r = g.copy(this.getItem(t), !0);
							return i.exists(t) && (r.id = g.uid()), n && (r.parent = n), i.add(r, e), this.remove(t), r.id
						}
						if (this.getIndex(t) === e) return null;
						r = this._order.splice(this.getIndex(t), 1)[0];
						return -1 === e && (e = this._order.length), this._order.splice(e, 0, r), this.events.fire(l.DataEvents.change, [t, "update", this.getItem(t)]), t
					}
					c.dhxWarning("the method doesn't work with lazyLoad")
				}, u.prototype._addCore = function (t, e)
				{
					return this.config.init && (t = this.config.init(t)), t.id = t.id ? t.id.toString() : g.uid(), this._pull[t.id] && c.dhxError("Item already exist"), this._initOrder && this._initOrder.length && this._addToOrder(this._initOrder, t, e), this._addToOrder(this._order, t, e), t.id
				}, u.prototype._removeCore = function (e)
				{
					0 <= this.getIndex(e) && (this._order = this._order.filter(function (t)
					{
						return t.id !== e
					}), delete this._pull[e]), this._initOrder && this._initOrder.length && (this._initOrder = this._initOrder.filter(function (t)
					{
						return t.id !== e
					}), delete this._pull[e])
				}, u.prototype._parse_data = function (t)
				{
					var e = this._order.length;
					this.config.prep && (t = this.config.prep(t));
					for (var i = 0, n = t; i < n.length; i++)
					{
						var o = n[i];
						this.config.init && (o = this.config.init(o)), o.id = o.id || 0 === o.id ? o.id : g.uid(), this._pull[o.id] = o, this._order[e++] = o
					}
				}, u.prototype._approximate = function (t, e, i)
				{
					for (var n = t.length, o = e.length, r = Math.floor(n / i), a = Array(Math.ceil(n / r)), s = 0, c = 0; c < n; c += r)
					{
						for (var l = g.copy(t[c]), u = Math.min(n, c + r), d = 0; d < o; d++)
						{
							for (var h = 0, p = c; p < u; p++) h += t[p][e[d]];
							l[e[d]] = h / (u - c)
						}
						a[s++] = l
					}
					return a
				}, u.prototype._onChange = function (t, e, i)
				{
					for (var n = 0, o = this._changes.order; n < o.length; n++)
						if ((a = o[n]).id === e && !a.saving)
						{
							a.error && (a.error = !1);
							var r = this._changes.order.indexOf(a),
								a = s(s(
								{}, a),
								{
									obj: i,
									status: t
								});
							return this._changes.order.splice(r, 1, a), this._loader.updateChanges(this._changes), void this.events.fire(l.DataEvents.change, [e, t, i])
						} this._changes.order.push(
					{
						id: e,
						status: t,
						obj: s(
						{}, i),
						saving: !1
					}), this._loader.updateChanges(this._changes), this.events.fire(l.DataEvents.change, [e, t, i])
				}, u.prototype._addToOrder = function (t, e, i)
				{
					0 <= i && t[i] ? (this._pull[e.id] = e, t.splice(i, 0, e)) : (this._pull[e.id] = e, t.push(e))
				}, u.prototype._applySmart = function ()
				{
					this._filter && this._applyFilters(), this._sorter && this._applySorters()
				}, u.prototype._applySorters = function (t)
				{
					this._sort.sort(this._order, t, this._sorter), this._initOrder && this._initOrder.length && this._sort.sort(this._initOrder, t, this._sorter)
				}, u.prototype._applyFilters = function (e)
				{
					var t, i = this._filter;
					e === i && (e = null), (e || i) && (t = this._order.filter(function (t)
					{
						return (!e || e(t)) && (!i || i(t))
					}), this._initOrder || (this._initOrder = this._order), this._order = t)
				}, u);

			function u(t, e)
			{
				var n = this;
				this._changes = {
					order: []
				}, this.config = t ||
				{}, this._sort = new a.Sort, this._loader = new r.Loader(this, this._changes), this.events = e || new o.EventSystem(this), this.events.on("dataRequest", function (t, e)
				{
					var i = n.dataProxy;
					i && i.updateUrl && (i.updateUrl(null,
					{
						from: t,
						limit: i.config.limit || e - t
					}), n.load(i))
				}), this.events.on(l.DataEvents.loadError, function (t)
				{
					"string" != typeof t ? c.dhxError(t) : c.dhxWarning(t)
				}), this._reset()
			}
			e.DataCollection = i
		}, function (t, e, i)
		{
			"use strict";
			var n = this && this.__assign || function ()
			{
				return (n = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(33),
				r = i(34),
				i = i(63);
			e.dataDrivers = {
				json: o.JsonDriver,
				csv: r.CsvDriver
			}, e.dataDriversPro = n(n(
			{}, e.dataDrivers),
			{
				xml: i.XMLDriver
			})
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = (o.prototype.toJsonArray = function (t)
			{
				return this.getRows(t)
			}, o.prototype.serialize = function (t)
			{
				return t
			}, o.prototype.getFields = function (t)
			{
				return t
			}, o.prototype.getRows = function (t)
			{
				return "string" == typeof t ? JSON.parse(t) : t
			}, o);

			function o()
			{}
			e.JsonDriver = n
		}, function (t, e, i)
		{
			"use strict";
			var n = this && this.__assign || function ()
			{
				return (n = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = (r.prototype.getFields = function (t, e)
			{
				for (var i = t.trim().split(this.config.columnDelimiter), n = {}, o = 0; o < i.length; o++) n[e ? e[o] : o + 1] = isNaN(Number(i[o])) ? i[o] : parseFloat(i[o]);
				return n
			}, r.prototype.getRows = function (t)
			{
				return t.trim().split(this.config.rowDelimiter)
			}, r.prototype.toJsonArray = function (t)
			{
				var e = this,
					i = this.getRows(t),
					n = this.config.names;
				return this.config.skipHeader && (t = i.splice(0, this.config.skipHeader), this.config.nameByHeader && (n = t[0].trim().split(this.config.columnDelimiter))), i.map(function (t)
				{
					return e.getFields(t, n)
				})
			}, r.prototype.serialize = function (t, e)
			{
				var i = t[0] ? Object.keys(t[0]).filter(function (t)
					{
						return !t.startsWith("$")
					}).join(this.config.columnDelimiter) : "",
					t = this._serialize(t);
				return e ? t : i + t
			}, r.prototype._serialize = function (t)
			{
				var o = this;
				return t.reduce(function (t, n)
				{
					var e = Object.keys(n).reduce(function (t, e, i)
					{
						return e.startsWith("$") || "items" === e ? t : "" + t + n[e] + (i === n.length - 1 ? "" : o.config.columnDelimiter)
					}, "");
					return n.items ? t + (t ? "\n" : "") + e + o._serialize(n.items) : "" + t + (t ? o.config.rowDelimiter : "") + e
				}, "")
			}, r);

			function r(t)
			{
				this.config = n(n(
				{},
				{
					skipHeader: 0,
					nameByHeader: !1,
					rowDelimiter: "\n",
					columnDelimiter: ","
				}), t), this.config.nameByHeader && (this.config.skipHeader = 1)
			}
			e.CsvDriver = o
		}, function (t, n, e)
		{
			"use strict";
			Object.defineProperty(n, "__esModule",
			{
				value: !0
			});
			var i, o = e(71),
				r = e(36),
				a = e(72),
				s = e(24),
				c = e(73),
				l = e(41);
			for (i in n.shapes = {
					line: o.Line,
					dash: o.Line,
					card: r.OrgChartCard,
					"img-card": a.OrgChartImgCard,
					text: c.DiagramTextShape
				}, s.flowShapes) n.shapes[i] = s.DiagramFlowShape;
			n.shapesFactory = function (t, e)
			{
				var i = n.shapes[t.type];
				return new(!i && (i = n.shapes.card, e.shapes[t.type]) ? l.DiagramCustomShape : i)(t, e)
			}
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				s = i(6),
				c = i(3),
				l = i(11),
				u = i(17),
				o = (r = l.BaseShape, o(d, r), d.prototype.render = function ()
				{
					var t = this.config,
						e = t.id,
						i = t.angle,
						n = t.width,
						o = t.height,
						r = t.headerColor,
						t = this.config.$selected ? r : "#E4E4E4",
						r = this.getCoords(this.config);
					return a.el("div",
					{
						_key: e,
						dhx_id: e,
						class: "dhx_diagram_org_item " + this.getCss(),
						style:
						{
							transform: "rotate(" + (i || 0) + "deg)",
							position: "absolute",
							top: r.y,
							left: r.x,
							zIndex: 0
						}
					}, [a.el("div",
					{
						class: "dhx_item_shape",
						id: e,
						style:
						{
							height: o,
							width: n,
							border: "1px solid " + t,
							borderRadius: "1px"
						}
					}), u.getHeaderTpl(this.config), u.getTextTemplate(this.config, this.getContent()), u.getCircleTpl(this.config)])
				}, d.prototype.getMetaInfo = function ()
				{
					return s.getMeta([
					{
						type: "grid",
						label: c.default.gridStep
					},
					{
						type: "color",
						label: c.default.color
					},
					{
						type: "position",
						label: c.default.position
					},
					{
						type: "size",
						label: c.default.size
					},
					{
						type: "text",
						label: c.default.text
					}])
				}, d.prototype.getCss = function ()
				{
					return "dhx_diagram_item " + r.prototype.getCss.call(this)
				}, d.prototype.setDefaults = function (t, e)
				{
					var i = t.width,
						n = t.height,
						o = t.text,
						r = t.headerColor,
						a = e.width ? parseFloat(e.width) : 140,
						s = e.height ? parseFloat(e.height) : 90;
					return t.width = i || a, t.height = n || s, t.text = "string" == typeof o ? o : e.text || "", t.headerColor = r || e.headerColor || "", t
				}, d.prototype.getContent = function ()
				{
					return this.config.text
				}, d);

			function d(t, e)
			{
				e = r.call(this, t, e) || this;
				return e.config = t, e.id = e.config.id, e
			}
			e.OrgChartCard = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o;
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (o = e.LineMode || (e.LineMode = {}))[o.Direct = 1] = "Direct", o[o.Edges = 2] = "Edges", (o = n = e.Direction || (e.Direction = {}))[o.Top = 1] = "Top", o[o.Bottom = 2] = "Bottom", o[o.Right = 3] = "Right", o[o.Left = 4] = "Left", e.DirVectors = ((e = {})[n.Bottom] = {
				x: 0,
				y: 1
			}, e[n.Top] = {
				x: 0,
				y: -1
			}, e[n.Right] = {
				x: 1,
				y: 0
			}, e[n.Left] = {
				x: -1,
				y: 0
			}, e)
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.sign = function (t)
			{
				return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
			}
		}, function (t, e, i)
		{
			"use strict";
			var n = this && this.__assign || function ()
			{
				return (n = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(1),
				l = i(18),
				u = 750,
				d = 200;

			function s(t, e, i, n)
			{
				var o, r, a;
				switch (e)
				{
				case l.Position.center:
					return (r = t.left + window.pageXOffset + (t.width - i) / 2) + 8 < window.pageXOffset && (r = t.left + window.pageXOffset),
					{
						left: r,
						top: a = t.top + window.pageYOffset + (t.height - n) / 2,
						pos: o = l.RealPosition.center
					};
				case l.Position.right:
					return o = l.RealPosition.right, (r = t.right + window.pageXOffset) + i + 8 > window.innerWidth + window.pageXOffset && (r = window.pageXOffset + t.left - i, o = l.RealPosition.left),
					{
						left: r,
						top: a = window.pageYOffset + t.top + (t.height - n) / 2,
						pos: o
					};
				case l.Position.bottom:
				default:
					return (r = window.pageXOffset + t.left + (t.width - i) / 2) + i > window.innerWidth + window.pageXOffset ? r = window.innerWidth + window.pageXOffset - i : r < 0 && (r = 0), o = l.RealPosition.bottom, (a = window.pageYOffset + t.bottom) + n + 8 > window.innerHeight + window.pageYOffset && (a = window.pageYOffset + t.top - n, o = l.RealPosition.top),
					{
						left: r,
						top: a,
						pos: o
					}
				}
			}
			e.findPosition = s;
			var h = document.createElement("div"),
				c = document.createElement("span");
			c.className = "dhx_tooltip__text", h.appendChild(c), h.style.position = "absolute";
			var p, g = null,
				f = !1,
				_ = null,
				y = null;

			function v(t, e, i, n, o)
			{
				void 0 === o && (o = !1);
				t = t.getBoundingClientRect();
				c.textContent = e, document.body.appendChild(h), h.className = "dhx_widget dhx_tooltip" + (o ? " dhx_tooltip--forced" : "");
				var e = h.getBoundingClientRect(),
					e = s(t, i, e.width, e.height),
					r = e.left,
					a = e.top,
					e = e.pos;
				switch (e)
				{
				case l.RealPosition.bottom:
				case l.RealPosition.top:
				case l.RealPosition.left:
				case l.RealPosition.right:
				case l.RealPosition.center:
					h.style.left = r + "px", h.style.top = a + "px"
				}
				h.className += " dhx_tooltip--" + e + " " + (n || ""), f = !0, o || setTimeout(function ()
				{
					h.className += " dhx_tooltip--animate"
				})
			}

			function r(e, t, i)
			{
				var n = i.force,
					o = i.showDelay,
					r = i.hideDelay,
					a = i.position,
					s = i.css;
				n || (y = setTimeout(function ()
				{
					v(e, t, a || l.Position.bottom, s)
				}, o || u));
				var c = function ()
				{
					var t;
					f && (t = r, g && (_ = setTimeout(function ()
					{
						document.body.removeChild(h), f = !1, _ = null
					}, t || d))), clearTimeout(y), e.removeEventListener("mouseleave", c), e.removeEventListener("blur", c), document.removeEventListener("mousedown", c), p = g = null
				};
				n && v(e, t, a, s, n), e.addEventListener("mouseleave", c), e.addEventListener("blur", c), document.addEventListener("mousedown", c), p = c
			}

			function a(t, e)
			{
				var i = o.toNode(e.node);
				i !== g && (p && (p(), p = null), g = i, _ ? (clearTimeout(_), _ = null, r(i, t, n(n(
				{}, e),
				{
					force: !0
				}))) : r(i, t, e))
			}

			function m(t)
			{
				t = o.locateNode(t, "dhx_tooltip_text");
				t && a(t.getAttribute("dhx_tooltip_text"),
				{
					position: t.getAttribute("dhx_tooltip_position") || l.Position.bottom,
					node: t
				})
			}
			e.tooltip = a, e.enableTooltip = function ()
			{
				document.addEventListener("mousemove", m)
			}, e.disableTooltip = function ()
			{
				document.removeEventListener("mousemove", m)
			}
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				u = this && this.__assign || function ()
				{
					return (u = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				},
				r = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(8),
				c = i(2),
				d = i(0),
				l = i(1),
				h = i(9),
				p = i(59),
				g = i(29),
				f = i(60),
				_ = i(61),
				y = i(35),
				v = i(24),
				m = i(42),
				I = i(74),
				x = i(12),
				C = i(21),
				b = i(37),
				w = i(75),
				A = i(79),
				M = i(80),
				o = (a = h.View, o(D, a), D.prototype.addShape = function (t, e)
				{
					if (r(["line", "dash", "card", "img-card", "text"], Object.keys(this.flowShapes)).includes(t)) throw new Error("Cannot reassign existing type");
					if ("function" != typeof e.template) throw new Error("The template property must be set as a function");
					e.defaults && (this.config.defaults[t] = u(
					{}, e.defaults)), e.properties && (this.config.properties[t] = r(e.properties)), this.flowShapes[t] = e.template
				}, D.prototype.locate = function (t)
				{
					t = l.locate(t, "dhx_id"), t = this.data.getItem(t);
					return t ? t.$shape : null
				}, D.prototype.collapseItem = function (t)
				{
					this.events.fire(x.DiagramEvents.beforeCollapse, [t]) && (this.data.update(t,
					{
						open: !1
					}), this.events.fire(x.DiagramEvents.afterCollapse, [t]), (t = this.data.getItem(t)) && t.parent && this.collapseItem(t.parent))
				}, D.prototype.expandItem = function (t)
				{
					this.events.fire(x.DiagramEvents.beforeExpand, [t]) && (this.data.update(t,
					{
						open: !0
					}), this.events.fire(x.DiagramEvents.afterExpand, [t]), (t = this.data.getItem(t)) && t.parent && this.expandItem(t.parent))
				}, D.prototype.getScrollState = function ()
				{
					var t = this.getRootView().node.el;
					return {
						x: t.scrollLeft,
						y: t.scrollTop
					}
				}, D.prototype.scrollTo = function (t, e)
				{
					var i = this.getRootView().node.el;
					i.scrollLeft = t, i.scrollTop = e
				}, D.prototype.showItem = function (t)
				{
					var n = this,
						o = this.data.getItem(t);
					o && (o.parent && this.expandItem(o.parent), d.awaitRedraw().then(function ()
					{
						var t = n.getRootView().node.el,
							e = o.$shape.getBox(),
							i = t.offsetWidth / 2,
							t = t.offsetHeight / 2;
						n.scrollTo(e.right + 10 - i, e.bottom + 10 - t)
					}))
				}, D.prototype.autoPlace = function (t)
				{
					var n = this,
						e = this.config,
						i = e.autoplacement,
						e = e.type,
						o = t && t.mode || i.mode || "direct",
						r = t && t.root || this.selection.getId();
					if ("org" === e) throw new Error("This method does not work with this type of diagram");
					var a = new C.default;
					this.data.map(function (t)
					{
						"line" !== t.type && "dash" !== t.type && a.addNode(
						{
							id: t.id.toString(),
							w: t.width,
							h: t.height,
							x: t.x,
							y: t.y
						})
					}), this.data.map(function (t)
					{
						("line" === t.type || "dash" === t.type) && t.from && t.to ? (n.data.update(t.id,
						{
							fromSide: "direct" === o ? "center" : void 0,
							toSide: "direct" === o ? "center" : void 0
						}), a.addEdge(t.from.toString(), t.to.toString())) : "line" !== t.type && "dash" !== t.type || n.data.remove(t.id)
					}), a.clean();
					var s = new w.default,
						e = A.compose(M.decompose(a).map(function (t)
						{
							return (t = s.layout(t,
							{
								mode: o,
								root: r,
								dir: i && i.direction || b.Direction.Bottom,
								wide: i && i.wide,
								itemPadding: i && i.itemPadding || 0,
								levelPadding: i && i.levelPadding || 0,
								full: !0,
								preserveLocation: !1
							})).setGlobalBox(), t
						}),
						{
							padding: "number" == typeof i.graphPadding ? t && t.graphPadding || i.graphPadding : 200
						}),
						t = e.getBox();
					e.translate(
					{
						x: -t[0][0],
						y: -t[1][0]
					}), e.getNodes().forEach(function (t)
					{
						var e = Math.floor(t.x - t.w / 2),
							i = Math.floor(t.y - t.h / 2);
						n.data.update(t.id,
						{
							x: e,
							y: i
						})
					})
				}, D.prototype.destructor = function ()
				{
					this.events.clear(), this.unmount()
				}, D.prototype._render = function (t)
				{
					if (this._doNotRepaint && t.node) return t.node;
					this._doNotRepaint = !0;
					var e = this._getContent(),
						i = e.size,
						n = e.svgContent,
						o = e.htmlContent;
					this.events.fire(x.DiagramEvents.beforeRender, [i]);
					var r = i.x - i.left + 2 * this.config.margin.x,
						a = i.y - i.top + 2 * this.config.margin.y,
						s = "org" === this.config.type ? "dhx_org_chart" : "dhx_free_diagram";
					i.left -= this.config.margin.x, i.top -= this.config.margin.y;
					var c = i.top + this.config.margin.y < 0 ? Math.abs(i.top) : this.config.margin.y,
						t = i.left + this.config.margin.x < 0 ? Math.abs(i.left) : this.config.margin.x,
						e = null;
					!this.toolbar || (l = this.selection.getId()) && (e = this.toolbar.render(this.data.getItem(l), u(u(
					{}, i),
					{
						scale: this.config.scale
					})));
					var l = [];
					return this.config.$svg && (l = this.config.$svg(i)), d.el(".dhx_diagram.dhx_widget", u(u(
					{}, this._htmlevents),
					{
						dhx_widget_id: this._uid
					}), [d.el("div.dhx_diagram__container",
					{
						class: s,
						style:
						{
							height: a * this.config.scale,
							width: r * this.config.scale
						}
					}, [d.el(".dhx_wrapper",
					{
						style:
						{
							transform: "scale(" + this.config.scale + ")",
							position: "absolute",
							top: 0,
							left: 0,
							transformOrigin: "top",
							zIndex: "org" === this.config.type && this._active ? 1 : 0
						}
					}, [d.el("div.dhx_diagram__scale-container", [d.sv("svg",
					{
						xmlns: "http://www.w3.org/2000/svg",
						width: r,
						height: a,
						viewBox: i.left + " " + i.top + " " + r + " " + a
					}, [d.sv("defs", [d.sv("filter",
					{
						x: 0,
						y: 0,
						width: 1,
						height: 1,
						id: "dhx_text_background"
					}, [d.sv("feFlood",
					{
						"flood-color": "white"
					}), d.sv("feComposite",
					{
						in: "SourceGraphic"
					})])]), d.sv("g",
					{
						"shape-rendering": 1 === this.config.scale && "org" === this.config.type ? "crispedges" : "auto"
					}, n)]), d.el(".dhx_shape-container",
					{
						style:
						{
							position: "absolute",
							top: c,
							left: t
						}
					}, o)])]), l, e])])
				}, D.prototype._init_events = function ()
				{
					var o = this;
					this._htmlevents = {
						onscroll: function ()
						{
							o.events.fire(x.DiagramEvents.scroll, [o.getScrollState()])
						},
						onmousedown: l.eventHandler(function (t)
						{
							return o.locate(t)
						},
						{
							dhx_diagram_item: function (t, e)
							{
								o._active = !0, o.events.fire(x.DiagramEvents.shapeMouseDown, [e.id, t])
							},
							dhx_diagram_flow_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeMouseDown, [e.id, t])
							},
							dhx_diagram_connector: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeMouseDown, [e.id, t, o._getPoint(t.clientX, t.clientY)])
							},
							dhx_diagram: function (t)
							{
								var e = t.target,
									i = e.getAttribute && (e.getAttribute("class") || "").match(/dhx_diagram\b/),
									n = "svg" === e.tagName;
								l.locateNodeByClassName(e, "dhx_popup_toolbar") || !i && !n || o.events.fire(x.DiagramEvents.emptyAreaMouseDown, [t])
							}
						}),
						onmouseout: l.eventHandler(function (t)
						{
							return o.locate(t)
						},
						{
							dhx_selected: function ()
							{
								o._active = !1, o.paint()
							}
						}),
						onmouseover: l.eventHandler(function (t)
						{
							return o.locate(t)
						},
						{
							dhx_selected: function ()
							{
								o._active = !0, o.paint()
							},
							dhx_diagram_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeHover, [e.id, t])
							},
							dhx_diagram_flow_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeHover, [e.id, t])
							},
							dhx_diagram_connector: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeHover, [e.id, t])
							}
						}),
						onclick: l.eventHandler(function (t)
						{
							return o.locate(t)
						},
						{
							dhx_expand_icon: function (t, e)
							{
								return o.expandItem(e.id)
							},
							dhx_hide_icon: function (t, e)
							{
								return o.collapseItem(e.id)
							},
							dhx_diagram_connector: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeClick, [e.id, t])
							},
							dhx_diagram_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeClick, [e.id, t]), !o.config.select || t.shiftKey || t.altKey || o.selection.add(e.id || e.config.id)
							},
							dhx_diagram_flow_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapeClick, [e.id, t])
							},
							dhx_diagram_line: function (t, e)
							{
								o.events.fire(x.DiagramEvents.lineClick, [e.id, t])
							},
							dhx_diagram: function (t)
							{
								var e = t.target,
									i = e.getAttribute && (e.getAttribute("class") || "").match(/dhx_diagram\b/),
									e = "svg" === e.tagName;
								(i || e) && o.events.fire(x.DiagramEvents.emptyAreaClick, [t])
							}
						}),
						ondblclick: l.eventHandler(function (t)
						{
							return o.locate(t)
						},
						{
							dhx_diagram_connector: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapedDblClick, [e.id, t])
							},
							dhx_diagram_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapedDblClick, [e.id, t])
							},
							dhx_diagram_flow_item: function (t, e)
							{
								o.events.fire(x.DiagramEvents.shapedDblClick, [e.id, t])
							}
						})
					}
				}, D.prototype._set_defaults = function ()
				{
					this.config = c.extend(
					{
						defaultShapeType: "card",
						defaultLinkType: "line",
						lineGap: 10,
						scale: 1,
						margin:
						{
							x: 40,
							y: 40,
							itemX: 40,
							itemY: 40
						},
						gridStep: 10,
						defaults:
						{},
						properties:
						{},
						autoplacement:
						{
							mode: "direct",
							graphPadding: 200
						}
					}, this.config)
				}, D.prototype._init_struct = function ()
				{
					var i = this;
					this.events = new s.EventSystem(this), this.flowShapes = u(
					{}, v.flowShapes), this.data = new m.ShapesCollection(
					{
						init: function (t)
						{
							var e = "from" in t ? i.config.defaultLinkType : i.config.defaultShapeType;
							return t.type = t.type || e, "org" !== i.config.type && t.from && (t.stroke = t.stroke || "#2196F3"), t.$shape = y.shapesFactory(t,
							{
								defaults: i.config.defaults[t.type] ||
								{},
								properties: i.config.properties[t.type] ||
								{},
								shapes: i.flowShapes
							}), t
						},
						update: function (t)
						{
							t.$shape.config = t
						},
						type: this.config.type
					}, this.events), this.selection = new _.Selection(
					{}, this.data, this.events), this.export = new p.Exporter("diagram", this.version, this), this.data.events.on(x.DataEvents.change, function ()
					{
						return i.paint()
					}), this.events.on(x.SelectionEvents.afterSelect, function ()
					{
						return i.paint()
					})
				}, D.prototype._getContent = function ()
				{
					var e = this,
						i = !1;
					"org" === this.config.type && (f.placeOrgonogram(this.data, this.config), i = !0);
					var n = {
							x: 0,
							y: 0,
							left: 0,
							top: 0,
							scale: this.config.scale
						},
						o = [],
						r = [];
					return this.data.mapVisible(function (t)
					{
						t && (t.$shape.isConnector() ? (i || g.nearestLinkPath(t, e.data.getItem(t.from), e.data.getItem(t.to), e.config), o.push(t.$shape.render())) : r.push(t.$shape.render()), (t = t.$shape.getBox()).right > n.x && (n.x = t.right), t.left < n.left && (n.left = t.left), t.bottom > n.y && (n.y = t.bottom), t.top < n.top && (n.top = t.top))
					}),
					{
						size: n,
						svgContent: o,
						htmlContent: r
					}
				}, D.prototype._getPoint = function (t, e)
				{
					var i = this.getRootView().node.el.getBoundingClientRect();
					return {
						x: t - i.left - this.config.margin.x,
						y: e - i.top - this.config.margin.y
					}
				}, D);

			function D(t, e)
			{
				var i = a.call(this, t, e) || this;
				i.version = "3.0.4", i._set_defaults(), i._init_events(), i._init_struct(), i.config.toolbar && (i.toolbar = new I.Toolbar(i.events, i.config.toolbar));
				e = d.create(
				{
					render: function (t)
					{
						return i._render(t)
					}
				}, i);
				return i.mount(t, e), i
			}
			e.Diagram = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				s = i(2),
				p = i(6),
				c = i(17),
				l = i(11),
				g = i(3),
				o = (r = l.BaseShape, o(u, r), u.prototype.getMetaInfo = function ()
				{
					return this._getMetaInfoStructure(this.config)
				}, u.prototype.render = function ()
				{
					var t = this.config,
						e = t.id,
						i = t.angle,
						n = t.width,
						o = t.height,
						t = this.getCoords(this.config);
					return a.el("div",
					{
						_key: e,
						class: "dhx_diagram_flow_item " + this.getCss(),
						dhx_id: e,
						style:
						{
							transform: "rotate(" + (i || 0) + "deg)",
							zIndex: this.config.$selected ? 1 : 0,
							position: "absolute",
							height: o,
							width: n,
							top: t.y,
							left: t.x
						}
					}, [this._getCustomContent(), c.getCircleTpl(this.config)])
				}, u.prototype.setDefaults = function (e, i)
				{
					Object.keys(i).forEach(function (t)
					{
						e[t] = e[t] || i[t]
					});
					var t = i.width ? parseFloat(i.width) : 140,
						n = i.height ? parseFloat(i.height) : 90;
					return e.width = e.width || t, e.height = e.height || n, e.x = e.x || 0, e.y = e.y || 0, e
				}, u.prototype._getMetaInfoStructure = function (t)
				{
					return s.isEmptyObj(this._properties) ? this._getBaseMetaInfoStructure(t) : p.getMeta(this._properties)
				}, u.prototype._getBaseMetaInfoStructure = function (t)
				{
					var e = t.text,
						i = t.title,
						n = t.img,
						o = t.fill,
						r = t.stroke,
						a = t.strokeWidth,
						s = t.textAlign,
						c = t.lineHeight,
						l = t.fontStyle,
						u = t.textVerticalAlign,
						d = t.fontSize,
						h = [],
						h = t.$expandColor ? p.getMeta([
						{
							type: "grid",
							label: g.default.gridStep
						},
						{
							type: "position",
							label: g.default.position
						},
						{
							type: "size",
							label: g.default.size
						}]) : p.getMeta([
						{
							type: "grid",
							label: g.default.gridStep
						},
						{
							type: "arrange",
							label: g.default.arrange
						}]);
					return o && h.push(p.getMeta([
					{
						type: "fill",
						label: g.default.fill
					}])[0]), i && h.push(p.getMeta([
					{
						type: "title",
						label: g.default.title
					}])[0]), e && h.push(p.getMeta([
					{
						type: "text",
						label: g.default.text
					}])[0]), r && a && h.push(p.getMeta([
					{
						type: "strokeProps",
						label: g.default.stroke
					}])[0]), s && c && l && u && d && h.push(p.getMeta([
					{
						type: "textProps",
						label: g.default.textProps
					}])[0]), n && h.push(p.getMeta([
					{
						type: "img",
						label: g.default.image
					}])[0]), h
				}, u.prototype._getCustomContent = function ()
				{
					var t = this.config,
						e = t.type,
						i = t.width,
						t = t.height,
						e = this.shapes[e];
					if ("function" == typeof e) return [a.el("div",
					{
						class: "dhx_diagram_flow_shape dhx_item_shape ",
						style:
						{
							width: i,
							height: t
						}
					}, this._getShapeFromFunction(e))]
				}, u.prototype._getShapeFromFunction = function (t)
				{
					t = (new DOMParser).parseFromString(t(this.config), "text/xml");
					return [a.jsonToVDOM(a.xmlToJson(t))]
				}, u);

			function u(t, e)
			{
				var i = r.call(this, t, e) || this;
				return i.config = t, i.id = i.config.id, i.shapes = e.shapes, i._properties = e.properties, i
			}
			e.DiagramCustomShape = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(16),
				s = i(12),
				o = (r = a.DataCollection, o(c, r), c.prototype.getNearId = function (t)
				{
					t = this._pull[t];
					if (!t) return this._order.length ? this._order[0].id : "";
					for (var e = t; this._orgMode && e.$parent;)
						if (!1 === (e = this._pull[this._pull[e.$parent].from]).open) return e.id;
					return t.id
				}, c.prototype.mapVisible = function (n)
				{
					var o = this,
						r = [];
					if (this._orgMode)
						for (var t = this.getRoots(), e = 0; e < t.length; e++) this._eachBranch(this.getItem(t[e]), n, r);
					else this.map(function (t)
					{
						if (!t.hidden)
						{
							if (t.$shape.isConnector())
							{
								var e = o.getItem(t.from) ||
									{},
									i = o.getItem(t.to) ||
									{};
								if (e.hidden || i.hidden) return
							}
							r.push(n(t))
						}
					});
					return r
				}, c.prototype.getRoots = function ()
				{
					return this._roots
				}, c.prototype._removeNested = function (t)
				{
					var e = t.$kids;
					if (e)
						for (var i = 0; i < e.length; i++) this._orgMode && (this._removeNested(this.getItem(e[i][1])), this._removeCore(e[i][1])), this._removeCore(e[i][0])
				}, c.prototype._eachBranch = function (t, e, i)
				{
					if (!t.hidden && (i.push(e(t)), !1 !== t.open))
					{
						var n = t.$kids;
						if (n)
							for (var o = 0; o < n.length; o++)
							{
								var r = this.getItem(n[o][1]);
								r.hidden || (i.push(e(this.getItem(n[o][0]))), this._eachBranch(r, e, i))
							}
					}
				}, c.prototype._parse_data = function (t)
				{
					for (var e = [], i = !1, n = 0; n < t.length; n++)
					{
						var o = t[n];
						o.parent && !i && e.push(
						{
							from: o.parent,
							to: o.id
						}), o.from && (i = !0)
					}
					e.length && !i && (t = t.concat(e)), r.prototype._parse_data.call(this, t)
				}, c.prototype._mark_chains = function ()
				{
					var e = this;
					this._roots = [];
					var i = {},
						n = {};
					this.map(function (t)
					{
						var e;
						t.$shape.isConnector() && (n[(e = t).to] = e.id, (i[e.from] = i[e.from] || []).push([t.id, e.to]))
					}), this.map(function (t)
					{
						t.$shape.isConnector() || (t.$parent = n[t.id], t.$kids = i[t.id], t.$parent || e._roots.push(t.id))
					})
				}, c);

			function c(t, e)
			{
				var n = r.call(this, t, e) || this;
				return n._roots = [], n._orgMode = "org" === t.type, n.events.on(s.DataEvents.change, function (t, e, i)
				{
					"remove" === e && (n._removeNested(i), n._removeCore(i.$parent)), "add" === e && i.parent && n._addCore(
					{
						from: i.parent,
						to: i.id
					}, -1), n._mark_chains()
				}), n
			}
			e.ShapesCollection = o
		}, function (t, e, i)
		{
			"use strict";
			var n;
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (n = e.LayoutEvents || (e.LayoutEvents = {})).beforeShow = "beforeShow", n.afterShow = "afterShow", n.beforeHide = "beforeHide", n.afterHide = "afterHide", n.beforeResizeStart = "beforeResizeStart", n.resize = "resize", n.afterResizeEnd = "afterResizeEnd", n.beforeAdd = "beforeAdd", n.afterAdd = "afterAdd", n.beforeRemove = "beforeRemove", n.afterRemove = "afterRemove", n.beforeCollapse = "beforeCollapse", n.afterCollapse = "afterCollapse", n.beforeExpand = "beforeExpand", n.afterExpand = "afterExpand", (e = e.resizeMode || (e.resizeMode = {}))[e.unknown = 0] = "unknown", e[e.percents = 1] = "percents", e[e.pixels = 2] = "pixels", e[e.mixedpx1 = 3] = "mixedpx1", e[e.mixedpx2 = 4] = "mixedpx2", e[e.mixedperc1 = 5] = "mixedperc1", e[e.mixedperc2 = 6] = "mixedperc2"
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = {
				email: /^[a-z\_\-\.]+@[a-z\_\-]+\.[a-z]{2,}$/i,
				number: /^\-?[0-9]{1,6}$/,
				color: /^\#[0-9A-Fa-f]{6}$/,
				date: /^[0-9]{4}\-[0-9]{1,2}\-[0-9]{1,2}$/
			};
			e.validate = function (t, e)
			{
				var i = !0;
				return e && "string" == typeof t && "" !== t && (i = "function" == typeof (e = n[e] || e) ? e.call(this, t) : !!t.match(e)), i
			}
		}, function (t, e)
		{
			Object.values = Object.values || function (e)
			{
				var t = Object.prototype.toString.call(e);
				if (null == e) throw new TypeError("Cannot convert undefined or null to object");
				if (~["[object String]", "[object Object]", "[object Array]", "[object Function]"].indexOf(t))
				{
					if (Object.keys) return Object.keys(e).map(function (t)
					{
						return e[t]
					});
					var i, n = [];
					for (i in e) e.hasOwnProperty(i) && n.push(e[i]);
					return n
				}
				return []
			}
		}, function (t, e)
		{
			Array.prototype.includes || Object.defineProperty(Array.prototype, "includes",
			{
				value: function (t, e)
				{
					if (null == this) throw new TypeError('"this" is null or not defined');
					var i = Object(this),
						n = i.length >>> 0;
					if (0 == n) return !1;
					var o, r, e = 0 | e,
						a = Math.max(0 <= e ? e : n - Math.abs(e), 0);
					for (; a < n;)
					{
						if ((o = i[a]) === (r = t) || "number" == typeof o && "number" == typeof r && isNaN(o) && isNaN(r)) return !0;
						a++
					}
					return !1
				},
				configurable: !0,
				writable: !0
			}), Array.prototype.find || Object.defineProperty(Array.prototype, "find",
			{
				value: function (t)
				{
					if (null == this) throw new TypeError('"this" is null or not defined');
					var e = Object(this),
						i = e.length >>> 0;
					if ("function" != typeof t) throw new TypeError("predicate must be a function");
					for (var n = arguments[1], o = 0; o < i;)
					{
						var r = e[o];
						if (t.call(n, r, o, e)) return r;
						o++
					}
				},
				configurable: !0,
				writable: !0
			}), Array.prototype.findIndex || (Array.prototype.findIndex = function (t)
			{
				if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
				if ("function" != typeof t) throw new TypeError("predicate must be a function");
				for (var e, i = Object(this), n = i.length >>> 0, o = arguments[1], r = 0; r < n; r++)
					if (e = i[r], t.call(o, e, r, i)) return r;
				return -1
			})
		}, function (t, e)
		{
			String.prototype.includes || (String.prototype.includes = function (t, e)
			{
				"use strict";
				return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
			}), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith",
			{
				enumerable: !1,
				configurable: !0,
				writable: !0,
				value: function (t, e)
				{
					return e = e || 0, this.indexOf(t, e) === e
				}
			}), String.prototype.padStart || (String.prototype.padStart = function (t, e)
			{
				return t >>= 0, e = String(e || " "), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), e.slice(0, t) + String(this))
			})
		}, function (t, e)
		{
			var i;
			Element && !Element.prototype.matches && ((i = Element.prototype).matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector), "classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList",
			{
				get: function ()
				{
					var i = this;
					return {
						contains: function (t)
						{
							return -1 !== i.className.baseVal.split(" ").indexOf(t)
						},
						add: function (t)
						{
							return i.setAttribute("class", i.getAttribute("class") + " " + t)
						},
						remove: function (t)
						{
							var e = i.getAttribute("class").replace(new RegExp("(\\s|^)".concat(t, "(\\s|$)"), "g"), "$2");
							i.classList.contains(t) && i.setAttribute("class", e)
						},
						toggle: function (t)
						{
							this.contains(t) ? this.remove(t) : this.add(t)
						}
					}
				},
				configurable: !0
			});
			var n = Function.bind.call(Function.call, Array.prototype.reduce),
				o = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable),
				r = Function.bind.call(Function.call, Array.prototype.concat);
			Object.entries || (Object.entries = function (i)
			{
				return n(Object.keys(i), function (t, e)
				{
					return r(t, "string" == typeof e && o(i, e) ? [
						[e, i[e]]
					] : [])
				}, [])
			})
		}, function (t, e, i)
		{
			"use strict";
			i.r(e);
			var n, o = i(15),
				e = i(28),
				r = ["dhx_638523928_message", "undefined", "Please contact us at <a style='color: white;' href='mailto:contact@dhtmlx.com?subject=DHTMLX Licensing - Trial End' target='_blank'>contact@dhtmlx.com</a> or visit ", " target='_blank'>dhtmlx.com</a> in order to obtain a proper license.", "Your evaluation period for DHTMLX has expired.", "now", "1617691547000", "join", "<a style='color: white;' href='https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=popup&utm_campaign=second_month#suite'"];
			n = r,
				function (t)
				{
					for (; --t;) n.push(n.shift())
				}(150);

			function a(t, e)
			{
				return r[t -= 374]
			}
			setTimeout(function ()
			{
				var t, e, i = a,
					n = [i(382), i(380), i(377) + i(381)][i(376)]("<br>");
				typeof i(375) !== i(379) && setInterval(function ()
				{
					var t, e = i;
					t = i, 2592e6 < Date[t(374)]() - t(375) && Object(o.message)(
					{
						text: n,
						icon: "dxi-close",
						css: e(378)
					})
				}, (t = 6e4, e = 12e4, Math.floor(Math.random() * (e - t + 1)) + t))
			}, 1)
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r = i(1),
				a = i(18),
				s = new WeakMap,
				c = new Map;

			function l(t, e)
			{
				var i = document.createElement("div");
				return i.setAttribute("data-position", e), i.className = "dhx_message-container dhx_message-container--" + e + (t === document.body ? " dhx_message-container--in-body" : ""), i
			}

			function u(t, e)
			{
				e && clearTimeout(s.get(t));
				var i = t.parentNode,
					n = i.getAttribute("data-position"),
					o = i.parentNode,
					e = c.get(o);
				e && (!(e = e[n]) || -1 !== (e = (n = e.stack).indexOf(t)) && (i.removeChild(t), n.splice(e, 1), 0 === n.length && o.removeChild(i)))
			}
			e.message = function (t)
			{
				"string" == typeof t && (t = {
					text: t
				}), t.position = t.position || a.MessageContainerPosition.topRight;
				var e = document.createElement("div");
				e.className = "dhx_widget dhx_message " + (t.css || ""), t.html ? e.innerHTML = t.html : e.innerHTML = '<span class="dhx_message__text">' + t.text + "</span>\n\t\t" + (t.icon ? '<span class="dhx_message__icon dxi ' + t.icon + '"></span>' : "");
				var i = t.node ? r.toNode(t.node) : document.body;
				"static" === getComputedStyle(i).position && (i.style.position = "relative"), (o = c.get(i)) ? o[t.position] || (o[t.position] = {
					stack: [],
					container: l(i, t.position)
				}) : c.set(i, ((n = {})[t.position] = {
					stack: [],
					container: l(i, t.position)
				}, n));
				var n = (o = c.get(i)[t.position]).stack,
					o = o.container;
				0 === n.length && i.appendChild(o), n.push(e), o.appendChild(e), t.expire && (t = setTimeout(function ()
				{
					return u(e)
				}, t.expire), s.set(e, t)), e.onclick = function ()
				{
					return u(e, !0)
				}
			}
		}, function (t, i, n)
		{
			"use strict";
			(function (t)
			{
				Object.defineProperty(i, "__esModule",
				{
					value: !0
				});
				var e = n(26),
					r = n(27);
				i.alert = function (i)
				{
					var n = i.buttons && i.buttons[0] ? i.buttons[0] : e.default.apply,
						o = r.blockScreen(i.blockerCss);
					return new t(function (t)
					{
						var e = document.createElement("div");
						e.className = "dhx_widget dhx_alert " + (i.css || ""), e.innerHTML = "\n\t\t\t" + (i.header ? '<div class="dhx_alert__header"> ' + i.header + " </div>" : "") + "\n\t\t\t" + (i.text ? '<div class="dhx_alert__content">' + i.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (i.buttonsAlignment ? "dhx_alert__footer--" + i.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__apply-button dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + n + "</button>\n\t\t\t</div>", document.body.appendChild(e), e.querySelector(".dhx_alert__apply-button").focus(), e.querySelector("button").addEventListener("click", function ()
						{
							o(), document.body.removeChild(e), t(!0)
						})
					})
				}
			}).call(this, n(7))
		}, function (t, o, r)
		{
			(function (t)
			{
				var e = void 0 !== t && t || "undefined" != typeof self && self || window,
					i = Function.prototype.apply;

				function n(t, e)
				{
					this._id = t, this._clearFn = e
				}
				o.setTimeout = function ()
				{
					return new n(i.call(setTimeout, e, arguments), clearTimeout)
				}, o.setInterval = function ()
				{
					return new n(i.call(setInterval, e, arguments), clearInterval)
				}, o.clearTimeout = o.clearInterval = function (t)
				{
					t && t.close()
				}, n.prototype.unref = n.prototype.ref = function () {}, n.prototype.close = function ()
				{
					this._clearFn.call(e, this._id)
				}, o.enroll = function (t, e)
				{
					clearTimeout(t._idleTimeoutId), t._idleTimeout = e
				}, o.unenroll = function (t)
				{
					clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
				}, o._unrefActive = o.active = function (t)
				{
					clearTimeout(t._idleTimeoutId);
					var e = t._idleTimeout;
					0 <= e && (t._idleTimeoutId = setTimeout(function ()
					{
						t._onTimeout && t._onTimeout()
					}, e))
				}, r(53), o.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, o.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
			}).call(this, r(19))
		}, function (t, e, i)
		{
			(function (t, g)
			{
				! function (i, n)
				{
					"use strict";
					var o, r, a, s, c, l, e, u, t;

					function d(t)
					{
						delete r[t]
					}

					function h(t)
					{
						if (a) setTimeout(h, 0, t);
						else
						{
							var e = r[t];
							if (e)
							{
								a = !0;
								try
								{
									! function (t)
									{
										var e = t.callback,
											i = t.args;
										switch (i.length)
										{
										case 0:
											e();
											break;
										case 1:
											e(i[0]);
											break;
										case 2:
											e(i[0], i[1]);
											break;
										case 3:
											e(i[0], i[1], i[2]);
											break;
										default:
											e.apply(n, i)
										}
									}(e)
								}
								finally
								{
									d(t), a = !1
								}
							}
						}
					}

					function p(t)
					{
						t.source === i && "string" == typeof t.data && 0 === t.data.indexOf(u) && h(+t.data.slice(u.length))
					}
					i.setImmediate || (o = 1, a = !(r = {}), s = i.document, t = (t = Object.getPrototypeOf && Object.getPrototypeOf(i)) && t.setTimeout ? t : i, c = "[object process]" ===
					{}.toString.call(i.process) ? function (t)
					{
						g.nextTick(function ()
						{
							h(t)
						})
					} : function ()
					{
						if (i.postMessage && !i.importScripts)
						{
							var t = !0,
								e = i.onmessage;
							return i.onmessage = function ()
							{
								t = !1
							}, i.postMessage("", "*"), i.onmessage = e, t
						}
					}() ? (u = "setImmediate$" + Math.random() + "$", i.addEventListener ? i.addEventListener("message", p, !1) : i.attachEvent("onmessage", p), function (t)
					{
						i.postMessage(u + t, "*")
					}) : i.MessageChannel ? ((e = new MessageChannel).port1.onmessage = function (t)
					{
						h(t.data)
					}, function (t)
					{
						e.port2.postMessage(t)
					}) : s && "onreadystatechange" in s.createElement("script") ? (l = s.documentElement, function (t)
					{
						var e = s.createElement("script");
						e.onreadystatechange = function ()
						{
							h(t), e.onreadystatechange = null, l.removeChild(e), e = null
						}, l.appendChild(e)
					}) : function (t)
					{
						setTimeout(h, 0, t)
					}, t.setImmediate = function (t)
					{
						"function" != typeof t && (t = new Function("" + t));
						for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
						return t = {
							callback: t,
							args: e
						}, r[o] = t, c(o), o++
					}, t.clearImmediate = d)
				}("undefined" == typeof self ? void 0 === t ? this : t : self)
			}).call(this, i(19), i(54))
		}, function (t, e)
		{
			var i, n, t = t.exports = {};

			function o()
			{
				throw new Error("setTimeout has not been defined")
			}

			function r()
			{
				throw new Error("clearTimeout has not been defined")
			}

			function a(e)
			{
				if (i === setTimeout) return setTimeout(e, 0);
				if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
				try
				{
					return i(e, 0)
				}
				catch (t)
				{
					try
					{
						return i.call(null, e, 0)
					}
					catch (t)
					{
						return i.call(this, e, 0)
					}
				}
			}! function ()
			{
				try
				{
					i = "function" == typeof setTimeout ? setTimeout : o
				}
				catch (t)
				{
					i = o
				}
				try
				{
					n = "function" == typeof clearTimeout ? clearTimeout : r
				}
				catch (t)
				{
					n = r
				}
			}();
			var s, c = [],
				l = !1,
				u = -1;

			function d()
			{
				l && s && (l = !1, s.length ? c = s.concat(c) : u = -1, c.length && h())
			}

			function h()
			{
				if (!l)
				{
					var t = a(d);
					l = !0;
					for (var e = c.length; e;)
					{
						for (s = c, c = []; ++u < e;) s && s[u].run();
						u = -1, e = c.length
					}
					s = null, l = !1,
						function (e)
						{
							if (n === clearTimeout) return clearTimeout(e);
							if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
							try
							{
								n(e)
							}
							catch (t)
							{
								try
								{
									return n.call(null, e)
								}
								catch (t)
								{
									return n.call(this, e)
								}
							}
						}(t)
				}
			}

			function p(t, e)
			{
				this.fun = t, this.array = e
			}

			function g()
			{}
			t.nextTick = function (t)
			{
				var e = new Array(arguments.length - 1);
				if (1 < arguments.length)
					for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
				c.push(new p(t, e)), 1 !== c.length || l || a(h)
			}, p.prototype.run = function ()
			{
				this.fun.apply(null, this.array)
			}, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = g, t.addListener = g, t.once = g, t.off = g, t.removeListener = g, t.removeAllListeners = g, t.emit = g, t.prependListener = g, t.prependOnceListener = g, t.listeners = function (t)
			{
				return []
			}, t.binding = function (t)
			{
				throw new Error("process.binding is not supported")
			}, t.cwd = function ()
			{
				return "/"
			}, t.chdir = function (t)
			{
				throw new Error("process.chdir is not supported")
			}, t.umask = function ()
			{
				return 0
			}
		}, function (t, o, r)
		{
			"use strict";
			(function (e)
			{
				Object.defineProperty(o, "__esModule",
				{
					value: !0
				});
				var i = r(26),
					n = r(27);
				o.confirm = function (t)
				{
					t.buttonsAlignment = t.buttonsAlignment || "right";
					var a = t.buttons && t.buttons[1] ? t.buttons[1] : i.default.apply,
						s = t.buttons && t.buttons[0] ? t.buttons[0] : i.default.reject,
						c = n.blockScreen(t.blockerCss);
					return new e(function (e)
					{
						function i(t)
						{
							c(), n.removeEventListener("click", o), n.removeEventListener("keydown", r), document.body.removeChild(n), e(t)
						}
						var n = document.createElement("div"),
							o = function (t)
							{
								"BUTTON" === t.target.tagName && i(t.target.classList.contains("dhx_alert__confirm-aply"))
							},
							r = function (t)
							{
								"Escape" !== t.key && "Esc" !== t.key || (n.querySelector(".dhx_alert__confirm-aply").focus(), i(t.target.classList.contains("dhx_alert__confirm-reject")))
							};
						n.className = "dhx_widget dhx_alert dhx_alert--confirm" + (t.css ? " " + t.css : ""), n.innerHTML = "\n\t\t" + (t.header ? '<div class="dhx_alert__header"> ' + t.header + " </div>" : "") + "\n\t\t" + (t.text ? '<div class="dhx_alert__content">' + t.text + "</div>" : "") + '\n\t\t\t<div class="dhx_alert__footer ' + (t.buttonsAlignment ? "dhx_alert__footer--" + t.buttonsAlignment : "") + '">\n\t\t\t\t<button class="dhx_alert__confirm-reject dhx_button dhx_button--view_link dhx_button--color_primary dhx_button--size_medium">' + s + '</button>\n\t\t\t\t<button class="dhx_alert__confirm-aply dhx_button dhx_button--view_flat dhx_button--color_primary dhx_button--size_medium">' + a + "</button>\n\t\t\t</div>", document.body.appendChild(n), n.querySelector(".dhx_alert__confirm-aply").focus(), n.addEventListener("click", o), n.addEventListener("keydown", r)
					})
				}
			}).call(this, r(7))
		}, function (t, e, i)
		{
			"use strict";
			i.r(e);
			var n, a = i(15),
				e = i(28),
				o = ["contact@dhtmlx.com</a> or visit <a style='color: #0288d1;text-decoration: unset;' href='https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=", "1617691547000", "https://dhtmlx.com/docs/products/licenses.shtml?expand=1&utm_source=trial&utm_medium=popup&utm_campaign=second_month#suite", "random", "popup&utm_campaign=second_month#suite' target='_blank'>dhtmlx.com</a> in order to obtain a proper license.", "<svg class='dhx_alert__header--icon' xmlns='http://www.w3.org/2000/sv' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 24 24'><path d='M11,15H13V17H", "now", "right", "floor", "open", "_blank", "Please contact us at <a style='color: #0288d1;text-decoration: unset;' href='mailto:contact@dhtmlx.com?subject=DHTMLX Licensing - Trial End' target='_blank'>", "dhx_547239261_alert", "16.42 16.42,20 12,20Z'></path></svg><div class='dhx_alert__header--text'>Your evaluation period for DHTMLX has expired</div>"];
			n = o,
				function (t)
				{
					for (; --t;) n.push(n.shift())
				}(148);

			function s(t, e)
			{
				return o[t -= 257]
			}
			setTimeout(function ()
			{
				var t, e, i, n = s,
					o = n(269) + "11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20," + n(263),
					r = n(261) + n(264) + n(268);
				void 0 !== n(265) && setInterval(function ()
				{
					var t, e = n;
					t = n, 5184e6 < Date[t(270)]() - t(265) && Object(a.alert)(
					{
						header: o,
						text: r,
						buttonsAlignment: e(257),
						buttons: ["check licensing"],
						css: e(262)
					}).then(function ()
					{
						var t = e;
						window[t(259)](t(266), t(260))
					})
				}, (t = 6e4, e = 12e4, i = n, Math[i(258)](Math[i(267)]() * (e - t + 1)) + t))
			}, 1)
		}, function (t, e)
		{
			var i, n = ["1617691547000", "random", "undefined", "floor", "now"];
			i = n,
				function (t)
				{
					for (; --t;) i.push(i.shift())
				}(179);

			function o(t, e)
			{
				return n[t -= 168]
			}
			setTimeout(function ()
			{
				var t, e, i, n = o;
				typeof n(170) !== n(172) && setInterval(function ()
				{
					var t;
					t = n, 7776e6 < Date[t(169)]() - t(170) && alert("Your evaluation period for DHTMLX has expired.\nPlease contact us at contact@dhtmlx.com or visit dhtmlx.com in order to obtain a proper license.")
				}, (t = 6e4, e = 12e4, i = n, Math[i(168)](Math[i(171)]() * (e - t + 1)) + t))
			}, 1)
		}, function (t, e, i)
		{
			/**
			 * Copyright (c) 2017, Leon Sorokin
			 * All rights reserved. (MIT Licensed)
			 *
			 * domvm.js (DOM ViewModel)
			 * A thin, fast, dependency-free vdom view layer
			 * @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
			 */
			t.exports = function ()
			{
				"use strict";
				var D = 1,
					c = 2,
					S = 3,
					j = 4,
					E = 5,
					t = typeof window !== "undefined",
					e, r = (t ? window :
					{}).requestAnimationFrame,
					l = {};

				function i()
				{}
				var g = Array.isArray;

				function u(t)
				{
					return t != null
				}

				function a(t)
				{
					return t != null && t.constructor === Object
				}

				function o(t, e, i, n)
				{
					t.splice.apply(t, [i, n].concat(e))
				}

				function s(t)
				{
					var e = typeof t;
					return e === "string" || e === "number"
				}

				function d(t)
				{
					return typeof t === "function"
				}

				function h(t)
				{
					return typeof t === "object" && d(t.then)
				}

				function p(t)
				{
					var e = arguments;
					for (var i = 1; i < e.length; i++)
						for (var n in e[i]) t[n] = e[i][n];
					return t
				}

				function f(t, e, i)
				{
					var n;
					while (n = e.shift())
						if (e.length === 0) t[n] = i;
						else t[n] = t = t[n] ||
						{}
				}

				function _(t, e)
				{
					var i = [];
					for (var n = e; n < t.length; n++) i.push(t[n]);
					return i
				}

				function y(t, e)
				{
					for (var i in t)
						if (t[i] !== e[i]) return false;
					return true
				}

				function v(t, e)
				{
					var i = t.length;
					if (e.length !== i) return false;
					for (var n = 0; n < i; n++)
						if (t[n] !== e[n]) return false;
					return true
				}

				function m(t)
				{
					if (!r) return t;
					var e, i, n;

					function o()
					{
						e = 0;
						t.apply(i, n)
					}
					return function ()
					{
						i = this;
						n = arguments;
						if (!e) e = r(o)
					}
				}

				function I(t, e, i)
				{
					return function ()
					{
						return t.apply(i, e)
					}
				}

				function x(t)
				{
					var e = t.slice();
					var i = [];
					i.push(0);
					var n;
					var o;
					for (var r = 0, a = t.length; r < a; ++r)
					{
						var s = i[i.length - 1];
						if (t[s] < t[r])
						{
							e[r] = s;
							i.push(r);
							continue
						}
						n = 0;
						o = i.length - 1;
						while (n < o)
						{
							var c = (n + o) / 2 | 0;
							if (t[i[c]] < t[r]) n = c + 1;
							else o = c
						}
						if (t[r] < t[i[n]])
						{
							if (n > 0) e[r] = i[n - 1];
							i[n] = r
						}
					}
					n = i.length;
					o = i[n - 1];
					while (n-- > 0)
					{
						i[n] = o;
						o = e[o]
					}
					return i
				}

				function C(t, e)
				{
					var i = 0;
					var n = e.length - 1;
					var o;
					var r = n <= 2147483647 ? true : false;
					if (r)
						while (i <= n)
						{
							o = i + n >> 1;
							if (e[o] === t) return o;
							else if (e[o] < t) i = o + 1;
							else n = o - 1
						}
					else
						while (i <= n)
						{
							o = Math.floor((i + n) / 2);
							if (e[o] === t) return o;
							else if (e[o] < t) i = o + 1;
							else n = o - 1
						}
					return i == e.length ? null : i
				}

				function b(t)
				{
					return t[0] === "o" && t[1] === "n"
				}

				function w(t)
				{
					return t[0] === "_"
				}

				function A(t)
				{
					return t === "style"
				}

				function M(t)
				{
					t && t.el && t.el.offsetHeight
				}

				function k(t)
				{
					return t.node != null && t.node.el != null
				}

				function L(t, e)
				{
					switch (e)
					{
					case "value":
					case "checked":
					case "selected":
						return true
					}
					return false
				}

				function P(t)
				{
					t = t || l;
					while (t.vm == null && t.parent) t = t.parent;
					return t.vm
				}

				function T()
				{}
				var n = T.prototype = {
					constructor: T,
					type: null,
					vm: null,
					key: null,
					ref: null,
					data: null,
					hooks: null,
					ns: null,
					el: null,
					tag: null,
					attrs: null,
					body: null,
					flags: 0,
					_class: null,
					_diff: null,
					_dead: false,
					_lis: false,
					idx: null,
					parent: null
				};

				function N(t)
				{
					var e = new T;
					e.type = c;
					e.body = t;
					return e
				}
				var Z = {},
					O = /\[(\w+)(?:=(\w+))?\]/g;

				function z(t)
				{
					{
						var e = Z[t];
						if (e == null)
						{
							var i, n, o, r;
							Z[t] = e = {
								tag: (i = t.match(/^[-\w]+/)) ? i[0] : "div",
								id: (n = t.match(/#([-\w]+)/)) ? n[1] : null,
								class: (o = t.match(/\.([-\w.]+)/)) ? o[1].replace(/\./g, " ") : null,
								attrs: null
							};
							while (r = O.exec(t))
							{
								if (e.attrs == null) e.attrs = {};
								e.attrs[r[1]] = r[2] || ""
							}
						}
						return e
					}
				}
				var R = 1,
					B = 2,
					G = 4,
					W = 8;

				function H(t, e, i, n)
				{
					var o = new T;
					o.type = D;
					if (u(n)) o.flags = n;
					o.attrs = e;
					var r = z(t);
					o.tag = r.tag;
					if (r.id || r.class || r.attrs)
					{
						var a = o.attrs ||
						{};
						if (r.id && !u(a.id)) a.id = r.id;
						if (r.class)
						{
							o._class = r.class;
							a.class = r.class + (u(a.class) ? " " + a.class : "")
						}
						if (r.attrs)
							for (var s in r.attrs)
								if (!u(a[s])) a[s] = r.attrs[s];
						o.attrs = a
					}
					var c = o.attrs;
					if (u(c))
					{
						if (u(c._key)) o.key = c._key;
						if (u(c._ref)) o.ref = c._ref;
						if (u(c._hooks)) o.hooks = c._hooks;
						if (u(c._data)) o.data = c._data;
						if (u(c._flags)) o.flags = c._flags;
						if (!u(o.key))
							if (u(o.ref)) o.key = o.ref;
							else if (u(c.id)) o.key = c.id;
						else if (u(c.name)) o.key = c.name + (c.type === "radio" || c.type === "checkbox" ? c.value : "")
					}
					if (i != null) o.body = i;
					return o
				}

				function V(t, e, i)
				{
					var n = ["refs"].concat(e.split("."));
					f(t, n, i)
				}

				function Y(t)
				{
					while (t = t.parent) t.flags |= R
				}

				function U(t, e, i, n)
				{
					if (t.type === E || t.type === j) return;
					t.parent = e;
					t.idx = i;
					t.vm = n;
					if (t.ref != null) V(P(t), t.ref, t);
					var o = t.hooks,
						r = n && n.hooks;
					if (o && (o.willRemove || o.didRemove) || r && (r.willUnmount || r.didUnmount)) Y(t);
					if (g(t.body)) X(t);
					else;
				}

				function X(t)
				{
					var e = t.body;
					for (var i = 0; i < e.length; i++)
					{
						var n = e[i];
						if (n === false || n == null) e.splice(i--, 1);
						else if (g(n)) o(e, n, i--, 1);
						else
						{
							if (n.type == null) e[i] = n = N("" + n);
							if (n.type === c)
								if (n.body == null || n.body === "") e.splice(i--, 1);
								else if (i > 0 && e[i - 1].type === c)
							{
								e[i - 1].body += n.body;
								e.splice(i--, 1)
							}
							else U(n, t, i, null);
							else U(n, t, i, null)
						}
					}
				}
				var F = {
					animationIterationCount: true,
					boxFlex: true,
					boxFlexGroup: true,
					boxOrdinalGroup: true,
					columnCount: true,
					flex: true,
					flexGrow: true,
					flexPositive: true,
					flexShrink: true,
					flexNegative: true,
					flexOrder: true,
					gridRow: true,
					gridColumn: true,
					order: true,
					lineClamp: true,
					borderImageOutset: true,
					borderImageSlice: true,
					borderImageWidth: true,
					fontWeight: true,
					lineHeight: true,
					opacity: true,
					orphans: true,
					tabSize: true,
					widows: true,
					zIndex: true,
					zoom: true,
					fillOpacity: true,
					floodOpacity: true,
					stopOpacity: true,
					strokeDasharray: true,
					strokeDashoffset: true,
					strokeMiterlimit: true,
					strokeOpacity: true,
					strokeWidth: true
				};

				function Q(t, e)
				{
					return !isNaN(e) && !F[t] ? e + "px" : e
				}

				function K(t, e)
				{
					var i = (t.attrs || l).style;
					var n = e ? (e.attrs || l).style : null;
					if (i == null || s(i)) t.el.style.cssText = i;
					else
					{
						for (var o in i)
						{
							var r = i[o];
							if (n == null || r != null && r !== n[o]) t.el.style[o] = Q(o, r)
						}
						if (n)
							for (var a in n)
								if (i[a] == null) t.el.style[a] = ""
					}
				}
				var J = [];

				function $(t, e, i, n, o)
				{
					if (t != null)
					{
						var r = i.hooks[e];
						if (r)
							if (e[0] === "d" && e[1] === "i" && e[2] === "d") o ? M(i.parent) && r(i, n) : J.push([r, i, n]);
							else return r(i, n)
					}
				}

				function q(t)
				{
					if (J.length)
					{
						M(t.node);
						var e;
						while (e = J.shift()) e[0](e[1], e[2])
					}
				}
				var tt = t ? document : null;

				function et(t)
				{
					while (t._node == null) t = t.parentNode;
					return t._node
				}

				function it(t, e)
				{
					if (e != null) return tt.createElementNS(e, t);
					return tt.createElement(t)
				}

				function nt(t)
				{
					return tt.createTextNode(t)
				}

				function ot(t)
				{
					return tt.createComment(t)
				}

				function rt(t)
				{
					return t.nextSibling
				}

				function at(t)
				{
					return t.previousSibling
				}

				function st(t)
				{
					var e = t.vm;
					var i = e != null && $(e.hooks, "willUnmount", e, e.data);
					var n = $(t.hooks, "willRemove", t);
					if ((t.flags & R) === R && g(t.body))
						for (var o = 0; o < t.body.length; o++) st(t.body[o]);
					return i || n
				}

				function ct(t, e, i)
				{
					var n = e._node,
						o = n.vm;
					if (g(n.body))
						if ((n.flags & R) === R)
							for (var r = 0; r < n.body.length; r++) ct(e, n.body[r].el);
						else ut(n);
					delete e._node;
					t.removeChild(e);
					$(n.hooks, "didRemove", n, null, i);
					if (o != null)
					{
						$(o.hooks, "didUnmount", o, o.data, i);
						o.node = null
					}
				}

				function lt(t, e)
				{
					var i = e._node;
					if (i._dead) return;
					var n = st(i);
					if (n != null && h(n))
					{
						i._dead = true;
						n.then(I(ct, [t, e, true]))
					}
					else ct(t, e)
				}

				function ut(t)
				{
					var e = t.body;
					for (var i = 0; i < e.length; i++)
					{
						var n = e[i];
						delete n.el._node;
						if (n.vm != null) n.vm.node = null;
						if (g(n.body)) ut(n)
					}
				}

				function dt(t)
				{
					var e = t.el;
					if ((t.flags & R) === 0)
					{
						g(t.body) && ut(t);
						e.textContent = null
					}
					else
					{
						var i = e.firstChild;
						do {
							var n = rt(i);
							lt(e, i)
						} while (i = n)
					}
				}

				function ht(t, e, i)
				{
					var n = e._node,
						o = e.parentNode != null;
					var r = e === i || !o ? n.vm : null;
					if (r != null) $(r.hooks, "willMount", r, r.data);
					$(n.hooks, o ? "willReinsert" : "willInsert", n);
					t.insertBefore(e, i);
					$(n.hooks, o ? "didReinsert" : "didInsert", n);
					if (r != null) $(r.hooks, "didMount", r, r.data)
				}

				function pt(t, e, i)
				{
					ht(t, e, i ? rt(i) : null)
				}
				var gt = {};

				function ft(t)
				{
					p(gt, t)
				}

				function _t(t)
				{
					var e = this,
						i = e,
						n = _(arguments, 1).concat(i, i.data);
					do {
						var o = e.onemit,
							o = o ? o[t] : null;
						if (o)
						{
							o.apply(e, n);
							break
						}
					} while (e = e.parent());
					if (gt[t]) gt[t].apply(e, n)
				}
				var yt = i;

				function vt(t)
				{
					yt = t.onevent || yt;
					if (t.onemit) ft(t.onemit)
				}

				function mt(t, e, i)
				{
					t[e] = i
				}

				function It(t, e, i, n, o)
				{
					var r = t.apply(o, e.concat([i, n, o, o.data]));
					o.onevent(i, n, o, o.data, e);
					yt.call(null, i, n, o, o.data, e);
					if (r === false)
					{
						i.preventDefault();
						i.stopPropagation()
					}
				}

				function xt(t)
				{
					var e = et(t.target);
					var i = P(e);
					var n = t.currentTarget._node.attrs["on" + t.type],
						o, r;
					if (g(n))
					{
						o = n[0];
						r = n.slice(1);
						It(o, r, t, e, i)
					}
					else
						for (var a in n)
							if (t.target.matches(a))
							{
								var s = n[a];
								if (g(s))
								{
									o = s[0];
									r = s.slice(1)
								}
								else
								{
									o = s;
									r = []
								}
								It(o, r, t, e, i)
							}
				}

				function Ct(t, e, i, n)
				{
					if (i === n) return;
					var o = t.el;
					if (i == null || d(i)) mt(o, e, i);
					else if (n == null) mt(o, e, xt)
				}

				function bt(t, e, i)
				{
					if (e[0] === ".")
					{
						e = e.substr(1);
						i = true
					}
					if (i) t.el[e] = "";
					else t.el.removeAttribute(e)
				}

				function wt(t, e, i, n, o)
				{
					var r = t.el;
					if (i == null) !o && bt(t, e, false);
					else if (t.ns != null) r.setAttribute(e, i);
					else if (e === "class") r.className = i;
					else if (e === "id" || typeof i === "boolean" || n) r[e] = i;
					else if (e[0] === ".") r[e.substr(1)] = i;
					else r.setAttribute(e, i)
				}

				function At(t, e, i)
				{
					var n = t.attrs || l;
					var o = e.attrs || l;
					if (n === o);
					else
					{
						for (var r in n)
						{
							var a = n[r];
							var s = L(t.tag, r);
							var c = s ? t.el[r] : o[r];
							if (a === c);
							else if (A(r)) K(t, e);
							else if (w(r));
							else if (b(r)) Ct(t, r, a, c);
							else wt(t, r, a, s, i)
						}
						for (var r in o) !(r in n) && !w(r) && bt(t, r, L(t.tag, r) || b(r))
					}
				}

				function Mt(t, e, i, n)
				{
					if (t.type === j)
					{
						e = t.data;
						i = t.key;
						n = t.opts;
						t = t.view
					}
					return new Ut(t, e, i, n)
				}

				function Dt(t)
				{
					for (var e = 0; e < t.body.length; e++)
					{
						var i = t.body[e];
						var n = i.type;
						if (n <= S) ht(t.el, St(i));
						else if (n === j)
						{
							var o = Mt(i.view, i.data, i.key, i.opts)._redraw(t, e, false);
							n = o.node.type;
							ht(t.el, St(o.node))
						}
						else if (n === E)
						{
							var o = i.vm;
							o._redraw(t, e);
							n = o.node.type;
							ht(t.el, o.node.el)
						}
					}
				}

				function St(t, e)
				{
					if (t.el == null)
						if (t.type === D)
						{
							t.el = e || it(t.tag, t.ns);
							if (t.attrs != null) At(t, l, true);
							if ((t.flags & W) === W) t.body.body(t);
							if (g(t.body)) Dt(t);
							else if (t.body != null && t.body !== "") t.el.textContent = t.body
						}
					else if (t.type === c) t.el = e || nt(t.body);
					else if (t.type === S) t.el = e || ot(t.body);
					t.el._node = t;
					return t.el
				}

				function jt(t, e)
				{
					return e[t.idx + 1]
				}

				function Et(t, e)
				{
					return e[t.idx - 1]
				}

				function kt(t)
				{
					return t.parent
				}
				window.lisMove = Nt;
				var Lt = 1,
					Pt = 2;

				function Tt(c, l, u, d, h, p, g, f)
				{
					return function (t, e, i, n, o, r)
					{
						var a, s;
						if (n[d] != null)
						{
							if ((a = n[d]._node) == null)
							{
								n[d] = c(n[d]);
								return
							}
							if (kt(a) !== t)
							{
								s = c(n[d]);
								a.vm != null ? a.vm.unmount(true) : lt(e, n[d]);
								n[d] = s;
								return
							}
						}
						if (n[h] == o) return Pt;
						else if (n[h].el == null)
						{
							u(e, St(n[h]), n[d]);
							n[h] = l(n[h], i)
						}
						else if (n[h].el === n[d])
						{
							n[h] = l(n[h], i);
							n[d] = c(n[d])
						}
						else if (!r && a === n[g])
						{
							s = n[d];
							n[d] = c(s);
							f(e, s, n[p]);
							n[p] = s
						}
						else
						{
							if (r && n[d] != null) return Nt(c, l, u, d, h, e, i, a, n);
							return Lt
						}
					}
				}

				function Nt(t, e, i, n, o, r, a, s, c)
				{
					if (s._lis)
					{
						i(r, c[o].el, c[n]);
						c[o] = e(c[o], a)
					}
					else
					{
						var l = C(s.idx, c.tombs);
						s._lis = true;
						var u = t(c[n]);
						i(r, c[n], l != null ? a[c.tombs[l]].el : l);
						if (l == null) c.tombs.push(s.idx);
						else c.tombs.splice(l, 0, s.idx);
						c[n] = u
					}
				}
				var Zt = Tt(rt, jt, ht, "lftSib", "lftNode", "rgtSib", "rgtNode", pt),
					Ot = Tt(at, Et, pt, "rgtSib", "rgtNode", "lftSib", "lftNode", ht);

				function zt(t, e)
				{
					var i = e.body,
						n = t.el,
						o = t.body,
						r = {
							lftNode: o[0],
							rgtNode: o[o.length - 1],
							lftSib: (i[0] || l).el,
							rgtSib: (i[i.length - 1] || l).el
						};
					t: while (1)
					{
						while (1)
						{
							var a = Zt(t, n, o, r, null, false);
							if (a === Lt) break;
							if (a === Pt) break t
						}
						while (1)
						{
							var s = Ot(t, n, o, r, r.lftNode, false);
							if (s === Lt) break;
							if (s === Pt) break t
						}
						Rt(t, n, o, r);
						break
					}
				}

				function Rt(t, e, i, n)
				{
					var o = Array.prototype.slice.call(e.childNodes);
					var r = [];
					for (var a = 0; a < o.length; a++)
					{
						var s = o[a]._node;
						if (s.parent === t) r.push(s.idx)
					}
					var c = x(r).map(function (t)
					{
						return r[t]
					});
					for (var l = 0; l < c.length; l++) i[c[l]]._lis = true;
					n.tombs = c;
					while (1)
					{
						var u = Zt(t, e, i, n, null, true);
						if (u === Pt) break
					}
				}

				function Bt(t)
				{
					return t.el._node.parent !== t.parent
				}

				function Gt(t, e, i)
				{
					return e[i]
				}

				function Wt(t, e, i)
				{
					for (; i < e.length; i++)
					{
						var n = e[i];
						if (n.vm != null)
						{
							if (t.type === j && n.vm.view === t.view && n.vm.key === t.key || t.type === E && n.vm === t.vm) return n
						}
						else if (!Bt(n) && t.tag === n.tag && t.type === n.type && t.key === n.key && (t.flags & ~R) === (n.flags & ~R)) return n
					}
					return null
				}

				function Ht(t, e, i)
				{
					return e[e._keys[t.key]]
				}

				function Vt(t, e)
				{
					$(e.hooks, "willRecycle", e, t);
					var i = t.el = e.el;
					var n = e.body;
					var o = t.body;
					i._node = t;
					if (t.type === c && o !== n)
					{
						i.nodeValue = o;
						return
					}
					if (t.attrs != null || e.attrs != null) At(t, e, false);
					var r = g(n);
					var a = g(o);
					var s = (t.flags & W) === W;
					if (r)
					{
						if (a || s) Yt(t, e);
						else if (o !== n)
							if (o != null) i.textContent = o;
							else dt(e)
					}
					else if (a)
					{
						dt(e);
						Dt(t)
					}
					else if (o !== n)
						if (i.firstChild) i.firstChild.nodeValue = o;
						else i.textContent = o;
					$(e.hooks, "didRecycle", e, t)
				}

				function Yt(t, e)
				{
					var i = t.body,
						n = i.length,
						o = e.body,
						r = o.length,
						a = (t.flags & W) === W,
						s = (t.flags & B) === B,
						c = (t.flags & G) === G,
						l = !s && t.type === D,
						u = true,
						d = c ? Ht : s || a ? Gt : Wt;
					if (c)
					{
						var h = {};
						for (var p = 0; p < o.length; p++) h[o[p].key] = p;
						o._keys = h
					}
					if (l && n === 0)
					{
						dt(e);
						if (a) t.body = [];
						return
					}
					var g, f, _, y = 0,
						v = false,
						m = 0;
					if (a)
					{
						var I = {
							key: null
						};
						var x = Array(n)
					}
					for (var p = 0; p < n; p++)
					{
						if (a)
						{
							var C = false;
							var b = null;
							if (u)
							{
								if (c) I.key = i.key(p);
								g = d(I, o, m)
							}
							if (g != null)
							{
								_ = g.idx;
								b = i.diff(p, g);
								if (b === true)
								{
									f = g;
									f.parent = t;
									f.idx = p;
									f._lis = false
								}
								else C = true
							}
							else C = true;
							if (C)
							{
								f = i.tpl(p);
								U(f, t, p);
								f._diff = b != null ? b : i.diff(p);
								if (g != null) Vt(f, g)
							}
							else;
							x[p] = f
						}
						else
						{
							var f = i[p];
							var w = f.type;
							if (w <= S)
							{
								if (g = u && d(f, o, m))
								{
									Vt(f, g);
									_ = g.idx
								}
							}
							else if (w === j)
							{
								if (g = u && d(f, o, m))
								{
									_ = g.idx;
									var A = g.vm._update(f.data, t, p)
								}
								else var A = Mt(f.view, f.data, f.key, f.opts)._redraw(t, p, false);
								w = A.node.type
							}
							else if (w === E)
							{
								var M = k(f.vm);
								var A = f.vm._update(f.data, t, p, M);
								w = A.node.type
							}
						}
						if (!c && g != null)
						{
							if (_ === m)
							{
								m++;
								if (m === r && n > r)
								{
									g = null;
									u = false
								}
							}
							else v = true;
							if (r > 100 && v && ++y % 10 === 0)
								while (m < r && Bt(o[m])) m++
						}
					}
					if (a) t.body = x;
					l && zt(t, e)
				}

				function Ut(t, e, i, n)
				{
					var o = this;
					o.view = t;
					o.data = e;
					o.key = i;
					if (n)
					{
						o.opts = n;
						o.config(n)
					}
					var r = a(t) ? t : t.call(o, o, e, i, n);
					if (d(r)) o.render = r;
					else
					{
						o.render = r.render;
						o.config(r)
					}
					o._redrawAsync = m(function (t)
					{
						return o.redraw(true)
					});
					o._updateAsync = m(function (t)
					{
						return o.update(t, true)
					});
					o.init && o.init.call(o, o, o.data, o.key, n)
				}
				var Xt = Ut.prototype = {
					constructor: Ut,
					_diff: null,
					init: null,
					view: null,
					key: null,
					data: null,
					state: null,
					api: null,
					opts: null,
					node: null,
					hooks: null,
					onevent: i,
					refs: null,
					render: null,
					mount: Ft,
					unmount: Qt,
					config: function (t)
					{
						var e = this;
						if (t.init) e.init = t.init;
						if (t.diff) e.diff = t.diff;
						if (t.onevent) e.onevent = t.onevent;
						if (t.hooks) e.hooks = p(e.hooks ||
						{}, t.hooks);
						if (t.onemit) e.onemit = p(e.onemit ||
						{}, t.onemit)
					},
					parent: function ()
					{
						return P(this.node.parent)
					},
					root: function ()
					{
						var t = this.node;
						while (t.parent) t = t.parent;
						return t.vm
					},
					redraw: function (t)
					{
						var e = this;
						t ? e._redraw(null, null, k(e)) : e._redrawAsync();
						return e
					},
					update: function (t, e)
					{
						var i = this;
						e ? i._update(t, null, null, k(i)) : i._updateAsync(t);
						return i
					},
					_update: $t,
					_redraw: Jt,
					_redrawAsync: null,
					_updateAsync: null
				};

				function Ft(t, e)
				{
					var i = this;
					if (e)
					{
						dt(
						{
							el: t,
							flags: 0
						});
						i._redraw(null, null, false);
						if (t.nodeName.toLowerCase() !== i.node.tag)
						{
							St(i.node);
							ht(t.parentNode, i.node.el, t);
							t.parentNode.removeChild(t)
						}
						else ht(t.parentNode, St(i.node, t), t)
					}
					else
					{
						i._redraw(null, null);
						if (t) ht(t, i.node.el)
					}
					if (t) q(i);
					return i
				}

				function Qt(t)
				{
					var e = this;
					var i = e.node;
					var n = i.el.parentNode;
					lt(n, i.el);
					if (!t) q(e)
				}

				function Kt(t, e, i, n)
				{
					if (i != null)
					{
						i.body[n] = e;
						e.idx = n;
						e.parent = i;
						e._lis = false
					}
					return t
				}

				function Jt(t, e, i)
				{
					var n = t == null;
					var o = this;
					var r = o.node && o.node.el && o.node.el.parentNode;
					var a = o.node,
						s, c;
					if (o.diff != null)
					{
						s = o._diff;
						o._diff = c = o.diff(o, o.data);
						if (a != null)
						{
							var l = g(s) ? v : y;
							var u = s === c || l(s, c);
							if (u) return Kt(o, a, t, e)
						}
					}
					r && $(o.hooks, "willRedraw", o, o.data);
					var d = o.render.call(o, o, o.data, s, c);
					if (d === a) return Kt(o, a, t, e);
					o.refs = null;
					if (o.key != null && d.key !== o.key) d.key = o.key;
					o.node = d;
					if (t)
					{
						U(d, t, e, o);
						t.body[e] = d
					}
					else if (a && a.parent)
					{
						U(d, a.parent, a.idx, o);
						a.parent.body[a.idx] = d
					}
					else U(d, null, null, o);
					if (i !== false)
						if (a)
							if (a.tag !== d.tag || a.key !== d.key)
							{
								a.vm = d.vm = null;
								var h = a.el.parentNode;
								var p = rt(a.el);
								lt(h, a.el);
								ht(h, St(d), p);
								a.el = d.el;
								d.vm = o
							}
					else Vt(d, a);
					else St(d);
					r && $(o.hooks, "didRedraw", o, o.data);
					if (n && r) q(o);
					return o
				}

				function $t(t, e, i, n)
				{
					var o = this;
					if (t != null)
						if (o.data !== t)
						{
							$(o.hooks, "willUpdate", o, t);
							o.data = t
						} return o._redraw(e, i, n)
				}

				function qt(t, e, i, n)
				{
					var o, r;
					if (i == null)
						if (a(e)) o = e;
						else r = e;
					else
					{
						o = e;
						r = i
					}
					return H(t, o, r, n)
				}
				var te = "http://www.w3.org/2000/svg";

				function ee(t, e, i, n)
				{
					var o = qt(t, e, i, n);
					o.ns = te;
					return o
				}

				function ie(t)
				{
					var e = new T;
					e.type = S;
					e.body = t;
					return e
				}

				function ne(t, e, i, n)
				{
					this.view = t;
					this.data = e;
					this.key = i;
					this.opts = n
				}

				function oe(t, e, i, n)
				{
					return new ne(t, e, i, n)
				}

				function re(t)
				{
					this.vm = t
				}

				function ae(t)
				{
					return new re(t)
				}

				function se(t)
				{
					var e = new T;
					e.type = D;
					e.el = e.key = t;
					return e
				}

				function ce(r, a)
				{
					var o = r.length;
					var s = {
						items: r,
						length: o,
						key: function (t)
						{
							return a.key(r[t], t)
						},
						diff: function (t, e)
						{
							var i = a.diff(r[t], t);
							if (e == null) return i;
							var n = e._diff;
							var o = i === n || g(n) ? v(i, n) : y(i, n);
							return o || i
						},
						tpl: function (t)
						{
							return a.tpl(r[t], t)
						},
						map: function (t)
						{
							a.tpl = t;
							return s
						},
						body: function (t)
						{
							var e = Array(o);
							for (var i = 0; i < o; i++)
							{
								var n = s.tpl(i);
								n._diff = s.diff(i);
								e[i] = n;
								U(n, t, i)
							}
							t.body = e
						}
					};
					return s
				}
				ne.prototype = {
					constructor: ne,
					type: j,
					view: null,
					data: null,
					key: null,
					opts: null
				}, re.prototype = {
					constructor: re,
					type: E,
					vm: null
				};
				var le = {
					config: vt,
					ViewModel: Ut,
					VNode: T,
					createView: Mt,
					defineElement: qt,
					defineSvgElement: ee,
					defineText: N,
					defineComment: ie,
					defineView: oe,
					injectView: ae,
					injectElement: se,
					lazyList: ce,
					FIXED_BODY: B,
					DEEP_REMOVE: R,
					KEYED_LIST: G,
					LAZY_LIST: W
				};

				function ue(t, e)
				{
					! function (t, e, i)
					{
						{
							var n, o;
							null != e.type ? null == t.vm && (U(e, t.parent, t.idx, null), Vt(t.parent.body[t.idx] = e, t), i && M(e), q(P(e))) : ((n = Object.create(t)).attrs = p(
							{}, t.attrs), o = p(t.attrs, e), null != t._class && (e = o.class, o.class = null != e && "" !== e ? t._class + " " + e : t._class), At(t, n), i && M(t))
						}
					}(this, t, e)
				}

				function de(t, e, i)
				{
					if (null != e.type) null == t.vm && (U(e, t.parent, t.idx, null), Vt(t.parent.body[t.idx] = e, t), i && M(e), q(P(e)));
					else
					{
						var n = Object.create(t);
						(n = Object.create(t)).attrs = p(
						{}, t.attrs);
						var o = p(t.attrs, e),
							a;
						null != t._class && (e = o.class, o.class = null != e && "" !== e ? t._class + " " + e : t._class), At(t, n), i && M(t)
					}
				}

				function he(t, e)
				{
					var i = t.body;
					if (g(i))
						for (var n = 0; n < i.length; n++)
						{
							var o = i[n];
							if (o.vm != null) e.push(o.vm);
							else he(o, e)
						}
					return e
				}

				function pe(t)
				{
					var e = arguments;
					var i = e.length;
					var n, o;
					if (i > 1)
					{
						var r = 1;
						if (a(e[1]))
						{
							o = e[1];
							r = 2
						}
						if (i === r + 1 && (s(e[r]) || g(e[r]) || o && (o._flags & W) === W)) n = e[r];
						else n = _(e, r)
					}
					return H(t, o, n)
				}

				function ge()
				{
					var t = pe.apply(null, arguments);
					return t.ns = te, t
				}
				return n.patch = function (t, e)
				{
					! function (t, e, i)
					{
						{
							var n, o;
							null != e.type ? null == t.vm && (U(e, t.parent, t.idx, null), Vt(t.parent.body[t.idx] = e, t), i && M(e), q(P(e))) : ((n = Object.create(t)).attrs = p(
							{}, t.attrs), o = p(t.attrs, e), null != t._class && (e = o.class, o.class = null != e && "" !== e ? t._class + " " + e : t._class), At(t, n), i && M(t))
						}
					}(this, t, e)
				}, Xt.emit = function (t)
				{
					var e = this,
						i = e,
						n = _(arguments, 1).concat(i, i.data);
					do {
						var o = e.onemit,
							o = o ? o[t] : null;
						if (o)
						{
							o.apply(e, n);
							break
						}
					} while (e = e.parent());
					gt[t] && gt[t].apply(e, n)
				}, Xt.onemit = null, Xt.body = function ()
				{
					return function t(e, i)
					{
						var n = e.body;
						if (g(n))
							for (var o = 0; o < n.length; o++)
							{
								var r = n[o];
								null != r.vm ? i.push(r.vm) : t(r, i)
							}
						return i
					}(this.node, [])
				}, le.defineElementSpread = pe, le.defineSvgElementSpread = function ()
				{
					var t = pe.apply(null, arguments);
					return t.ns = te, t
				}, le
			}()
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r = i(1),
				i = (n.prototype.pdf = function (t)
				{
					this._rawExport(t, "pdf", this._view)
				}, n.prototype.png = function (t)
				{
					this._rawExport(t, "png", this._view)
				}, n.prototype._rawExport = function (t, e, i)
				{
					var n = this;
					(t = t ||
					{}).url = t.url || "https://export.dhtmlx.ru/" + this._name + "/" + e, t.url += "/" + this._version;
					var i = ("\n\t\t\t\t" + r.getPageLinksCss() + "\n\t\t\t\t<style>" + r.getPageInlineCss() + "</style>\n\t\t\t\t" + i.getRootView().node.el.parentNode.innerHTML + "\n\t\t\t").replace(/(src|href)=("(.+?\.(jpeg|jpg|png|apng|gif|svg|bmp|ico))")/gm, function (t)
						{
							if (t.includes("://")) return t;
							var e = t.replace(/(src|href)="/, "").replace('"', "");
							return /(src|href)="/.exec(t)[0] + n._normalizeLink(e) + '"'
						}),
						o = document.createElement("form");
					o.setAttribute("method", "POST"), o.setAttribute("action", t.url), o.innerHTML = '<input type="hidden" name="raw"><input type="hidden" name="config">', o.childNodes[0].value = i, o.childNodes[1].value = JSON.stringify(t), document.body.appendChild(o), o.submit(), setTimeout(function ()
					{
						o.parentNode.removeChild(o)
					}, 100)
				}, n.prototype._normalizeLink = function (t)
				{
					var e = window.location.pathname.split("/");
					return "" === e[0] && (e.shift(), e.pop()), window.location.origin + "/" + e.join("/") + ("/" !== t[0] ? "/" + t : t)
				}, n);

			function n(t, e, i)
			{
				this._name = t, this._version = e, this._view = i
			}
			e.Exporter = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var g = i(29),
				f = ["#FF9800", "#607D8B", "#00C7B5", "#03A9F4", "#9575CD", "#F06292"];
			e.placeOrgonogram = function (t, e)
			{
				var i = t.getRoots();
				1 === i.length && (i = t.getItem(i[0]), function t(e, i, n, o, r)
				{
					var a = i.$kids;
					var s = "vertical" === i.dir;
					var c = s ? n.margin.itemX / 2 : 0;
					var l = 0;
					if (!1 !== i.open && a)
					{
						for (var u = 0, d = 0; d < a.length; d++)
						{
							var h = e.getItem(a[d][1]);
							h.hidden || (h = t(e, h, n, o + c, c), s ? l = Math.max(l, h) : l += h, u++)
						}
						u && !s && (l += (u - 1) * n.margin.itemX), i.$count = u
					}
					l = Math.max(i.width, l);
					{
						var p, g;
						s ? i.x = o : (p = n.gridStep || 1, g = (l - i.width) / 2 + o, i.x = Math.ceil(g / p) * p)
					}
					i.y = 0;
					i.$width = l;
					return l + r
				}(t, i, e, 0, 0), function t(e, i, n, o, r, a)
				{
					var s = i.$kids;
					var c = "vertical" === i.dir;
					var l = 0;
					i.x += n;
					i.y += o;
					r.gridStep && (i.y = Math.ceil(i.y / r.gridStep) * r.gridStep);
					o += i.height + r.margin.itemY;
					if (!1 !== i.open && s)
						for (var u, d = void 0, h = 0; h < s.length; h++)(d = e.getItem(s[h][1])).hidden || (u = t(e, d, n, o, r, a + 1), c ? (o += u + r.margin.itemY, l += u + r.margin.itemY) : (l = Math.max(l, u + r.margin.itemY), n += d.$width + r.margin.itemX), g.directLinkPath(e.getItem(s[h][0]), i, d, r));
					{
						var p;
						s && (p = e.getItem(s[0][1]).headerColor, i.$expandColor = p || f[(a + 1) % f.length])
					}
					i.headerColor = i.headerColor || f[a % f.length];
					return i.height + l
				}(t, i, 0, 0, e, 0))
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(8),
				r = i(12),
				i = (n.prototype.getId = function ()
				{
					return this._selected
				}, n.prototype.getItem = function ()
				{
					return this._selected ? this._data.getItem(this._selected) : null
				}, n.prototype.remove = function (t)
				{
					return !(t = t || this._selected) || !!this.events.fire(r.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t,
					{
						$selected: !1
					}, !0), this._selected = null, this.events.fire(r.SelectionEvents.afterUnSelect, [t]), !0)
				}, n.prototype.add = function (t)
				{
					this._selected !== t && (this.remove(), this.events.fire(r.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t,
					{
						$selected: !0
					}, !0), this.events.fire(r.SelectionEvents.afterSelect, [t])))
				}, n);

			function n(t, e, i)
			{
				var n = this;
				this.events = i || new o.EventSystem, this._data = e, this._data.events.on(r.DataEvents.removeAll, function ()
				{
					n._selected = null
				}), this._data.events.on(r.DataEvents.change, function ()
				{
					var t, e;
					!n._selected || (t = n._data.getNearId(n._selected)) !== n._selected && ((e = n._data.getItem(n._selected)) && (e.$selected = !1), n._selected = null, t && n.add(t))
				})
			}
			e.Selection = i
		}, function (t, i, n)
		{
			"use strict";
			(function (a)
			{
				var c = this && this.__assign || function ()
				{
					return (c = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
				Object.defineProperty(i, "__esModule",
				{
					value: !0
				});
				var l = n(5),
					u = n(4),
					t = (e.prototype.load = function (t, e)
					{
						var i = this;
						if (!t.config || this._parent.events.fire(u.DataEvents.beforeLazyLoad, [])) return this._parent.loadData = t.load().then(function (t)
						{
							return t ? i.parse(t, e) : []
						}).catch(function (t)
						{
							i._parent.events.fire(u.DataEvents.loadError, [t])
						})
					}, e.prototype.parse = function (t, e)
					{
						var n = this;
						if (void 0 === e && (e = "json"), "json" !== e || l.hasJsonOrArrayStructure(t) || this._parent.events.fire(u.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]), !((t = (e = l.toDataDriver(e)).toJsonArray(t)) instanceof Array))
						{
							var i = t.total_count - 1,
								o = t.from;
							if (t = t.data, 0 !== this._parent.getLength()) return t.forEach(function (t, e)
							{
								var i = o + e,
									e = n._parent.getId(i);
								e ? (i = n._parent.getItem(e)) && i.$empty && (n._parent.changeId(e, t.id, !0), n._parent.update(t.id, c(c(
								{}, t),
								{
									$empty: void 0
								}), !0)) : l.dhxWarning("item not found")
							}), this._parent.events.fire(u.DataEvents.afterLazyLoad, [o, t.length]), this._parent.events.fire(u.DataEvents.change), t;
							for (var r = [], a = 0, s = 0; a <= i; a++) o <= a && a <= o + t.length - 1 ? (r.push(t[s]), s++) : r.push(
							{
								$empty: !0
							});
							t = r
						}
						return this._parent.getInitialData() && this._parent.removeAll(), this._parent.$parse(t), t
					}, e.prototype.save = function (o)
					{
						for (var r = this, e = this, t = 0, i = this._changes.order; t < i.length; t++) ! function (i)
						{
							var n, t;
							i.saving || i.pending ? l.dhxWarning("item is saving") : (n = e._findPrevState(i.id)) && n.saving ? (t = new a(function (t, e)
							{
								n.promise.then(function ()
								{
									i.pending = !1, t(r._setPromise(i, o))
								}).catch(function (t)
								{
									r._removeFromOrder(n), r._setPromise(i, o), l.dhxWarning(t), e(t)
								})
							}), e._addToChain(t), i.pending = !0) : e._setPromise(i, o)
						}(i[t]);
						this._changes.order.length && this._parent.saveData.then(function ()
						{
							r._saving = !1
						})
					}, e.prototype.updateChanges = function (t)
					{
						this._changes = t
					}, e.prototype._setPromise = function (e, t)
					{
						var i = this;
						return e.promise = t.save(e.obj, e.status), e.promise.then(function ()
						{
							i._removeFromOrder(e)
						}).catch(function (t)
						{
							e.saving = !1, e.error = !0, l.dhxError(t)
						}), e.saving = !0, this._saving = !0, this._addToChain(e.promise), e.promise
					}, e.prototype._addToChain = function (t)
					{
						this._parent.saveData && this._saving ? this._parent.saveData = this._parent.saveData.then(function ()
						{
							return t
						}) : this._parent.saveData = t
					}, e.prototype._findPrevState = function (t)
					{
						for (var e = 0, i = this._changes.order; e < i.length; e++)
						{
							var n = i[e];
							if (n.id === t) return n
						}
						return null
					}, e.prototype._removeFromOrder = function (e)
					{
						this._changes.order = this._changes.order.filter(function (t)
						{
							return !l.isEqualObj(t, e)
						})
					}, e);

				function e(t, e)
				{
					this._parent = t, this._changes = e
				}
				i.Loader = t
			}).call(this, n(7))
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(64);
			o.prototype.toJsonArray = function (t)
			{
				return this.getRows(t)
			}, o.prototype.toJsonObject = function (t)
			{
				var e;
				return "string" == typeof t && (e = this._fromString(t)),
					function t(e, i)
					{
						i = i ||
						{};
						var n = e.attributes;
						if (n && n.length)
							for (var o = 0; o < n.length; o++) i[n[o].name] = n[o].value;
						for (var r, a = e.childNodes, o = 0; o < a.length; o++) 1 === a[o].nodeType && (i[r = a[o].tagName] ? ("function" != typeof i[r].push && (i[r] = [i[r]]), i[r].push(t(a[o],
						{}))) : i[r] = t(a[o],
						{}));
						return i
					}(e)
			}, o.prototype.serialize = function (t)
			{
				return n.jsonToXML(t)
			}, o.prototype.getFields = function (t)
			{
				return t
			}, o.prototype.getRows = function (t)
			{
				if ("string" == typeof t && (t = this._fromString(t)), t)
				{
					t = t.childNodes && t.childNodes[0] && t.childNodes[0].childNodes;
					return t && t.length ? this._getRows(t) : null
				}
				return []
			}, o.prototype._getRows = function (t)
			{
				for (var e = [], i = 0; i < t.length; i++) "item" === t[i].tagName && e.push(this._nodeToJS(t[i]));
				return e
			}, o.prototype._fromString = function (t)
			{
				try
				{
					return (new DOMParser).parseFromString(t, "text/xml")
				}
				catch (t)
				{
					return null
				}
			}, o.prototype._nodeToJS = function (t)
			{
				var e = {};
				if (this._haveAttrs(t))
					for (var i = t.attributes, n = 0; n < i.length; n++)
					{
						var o = i[n],
							r = o.name,
							o = o.value;
						e[r] = this._toType(o)
					}
				if (3 === t.nodeType) return e.value = e.value || this._toType(t.textContent), e;
				var a = t.childNodes;
				if (a)
					for (n = 0; n < a.length; n++)
					{
						var s = a[n],
							c = s.tagName;
						c && ("items" === c && s.childNodes ? e[c] = this._getRows(s.childNodes) : this._haveAttrs(s) ? e[c] = this._nodeToJS(s) : e[c] = this._toType(s.textContent))
					}
				return e
			}, o.prototype._toType = function (t)
			{
				return "false" === t || "true" === t ? "true" === t : isNaN(t) ? t : Number(t)
			}, o.prototype._haveAttrs = function (t)
			{
				return t.attributes && t.attributes.length
			}, i = o;

			function o()
			{}
			e.XMLDriver = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r = 4;

			function a(t)
			{
				return " ".repeat(t)
			}
			e.jsonToXML = function (t, e)
			{
				void 0 === e && (e = "root");
				for (var i = '<?xml version="1.0" encoding="iso-8859-1"?>\n<' + e + ">", n = 0; n < t.length; n++) i += "\n" + function e(t, i)
				{
					void 0 === i && (i = r);
					var n, o = a(i) + "<item>\n";
					for (n in t) Array.isArray(t[n]) ? (o += a(i + r) + "<" + n + ">\n", o += t[n].map(function (t)
					{
						return e(t, i + 2 * r)
					}).join("\n") + "\n", o += a(i + r) + "</" + n + ">\n") : o += a(i + r) + ("<" + n + ">" + t[n]) + "</" + n + ">\n";
					return o += a(i) + "</item>"
				}(t[n]);
				return i + "\n</" + e + ">"
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(5),
				i = (n.prototype.sort = function (t, e, i)
				{
					this._createSorter(e), i === e && (e = null), (i || e) && this._sort(t, i, e)
				}, n.prototype._createSorter = function (i)
				{
					var n = this;
					i && !i.rule && (i.rule = function (t, e)
					{
						t = n._checkVal(i.as, t[i.by]), e = n._checkVal(i.as, e[i.by]);
						return o.naturalCompare(t.toString(), e.toString())
					})
				}, n.prototype._checkVal = function (t, e)
				{
					return t ? t.call(this, e) : e
				}, n.prototype._sort = function (t, n, o)
				{
					var r = this,
						a = {
							asc: 1,
							desc: -1
						};
					return t.sort(function (t, e)
					{
						var i = 0;
						return n && (i = n.rule.call(r, t, e) * (a[n.dir] || a.asc)), 0 === i && o && (i = o.rule.call(r, t, e) * (a[o.dir] || a.asc)), i
					})
				}, n);

			function n()
			{}
			e.Sort = i
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var u = i(2),
				a = i(31),
				s = i(10),
				d = i(5),
				p = i(4);

			function c(t, e, i, n)
			{
				void 0 !== n && -1 !== n && t[i] && t[i][n] ? t[i].splice(n, 0, e) : (t[i] || (t[i] = []), t[i].push(e))
			}
			var l, o = (l = a.DataCollection, o(h, l), h.prototype.add = function (t, i, n)
			{
				var o = this;
				return void 0 === i && (i = -1), void 0 === n && (n = this._root), "object" != typeof t && (t = {
					value: t
				}), Array.isArray(t) ? t.map(function (t, e)
				{
					return o._add(t, i, n, e)
				}) : this._add(t, i, n)
			}, h.prototype.getRoot = function ()
			{
				return this._root
			}, h.prototype.getParent = function (t, e)
			{
				if (void 0 === e && (e = !1), !this._pull[t]) return null;
				t = this._pull[t].parent;
				return e ? this._pull[t] : t
			}, h.prototype.getItems = function (t)
			{
				return this._childs && this._childs[t] ? this._childs[t] : []
			}, h.prototype.getLength = function (t)
			{
				return void 0 === t && (t = this._root), this._childs[t] ? this._childs[t].length : null
			}, h.prototype.removeAll = function (t)
			{
				if (t)
				{
					if (this._childs[t])
						for (var e = 0, i = r(this._childs[t]); e < i.length; e++)
						{
							var n = i[e];
							this.remove(n.id)
						}
				}
				else
				{
					l.prototype.removeAll.call(this);
					var o = this._root;
					this._initChilds = null, this._childs = ((t = {})[o] = [], t)
				}
			}, h.prototype.getIndex = function (e)
			{
				var t = this.getParent(e);
				return t && this._childs[t] ? u.findIndex(this._childs[t], function (t)
				{
					return t.id === e
				}) : -1
			}, h.prototype.sort = function (t)
			{
				var e = this;
				if (t)
				{
					for (var i in this._childs) this._sort.sort(this._childs[i], t);
					if (this._initChilds && Object.keys(this._initChilds).length)
						for (var i in this._initChilds) this._sort.sort(this._initChilds[i], t)
				}
				else if (this._childs = {}, this._parse_data(Object.keys(this._pull).map(function (t)
					{
						return e._pull[t]
					})), this._filters)
					for (var i in this._filters)
					{
						var n = this._filters[i];
						this.filter(n.rule, n.config)
					}
				this.events.fire(p.DataEvents.change)
			}, h.prototype.filter = function (t, e)
			{
				var n, o = this;
				void 0 === e && (e = {}), t ? (this._initChilds || (this._initChilds = this._childs), e.type = e.type || p.TreeFilterType.all, this._filters = {}, this._filters._ = {
					rule: t,
					config: e
				}, n = {}, this._recursiveFilter(t, e, this._root, 0, n), Object.keys(n).forEach(function (t)
				{
					for (var e = o.getParent(t), i = o.getItem(t); e;) n[e] || (n[e] = []), i && !n[e].find(function (t)
					{
						return t.id === i.id
					}) && n[e].push(i), i = o.getItem(e), e = o.getParent(e)
				}), this._childs = n, this.events.fire(p.DataEvents.change)) : this.restoreOrder()
			}, h.prototype.restoreOrder = function ()
			{
				this._initChilds && (this._childs = this._initChilds, this._initChilds = null), this.events.fire(p.DataEvents.change)
			}, h.prototype.copy = function (t, i, n, o)
			{
				var r = this;
				return void 0 === n && (n = this), void 0 === o && (o = this._root), t instanceof Array ? t.map(function (t, e)
				{
					return r._copy(t, i, n, o, e)
				}) : this._copy(t, i, n, o)
			}, h.prototype.move = function (t, i, n, o)
			{
				var r = this;
				return void 0 === n && (n = this), void 0 === o && (o = this._root), t instanceof Array ? t.map(function (t, e)
				{
					return r._move(t, i, n, o, e)
				}) : this._move(t, i, n, o)
			}, h.prototype.forEach = function (t, e, i)
			{
				if (void 0 === e && (e = this._root), void 0 === i && (i = 1 / 0), this.haveItems(e) && !(i < 1))
					for (var n = this._childs[e], o = 0; o < n.length; o++) t.call(this, n[o], o, n), this.haveItems(n[o].id) && this.forEach(t, n[o].id, --i)
			}, h.prototype.eachChild = function (t, e, i, n)
			{
				if (void 0 === i && (i = !0), void 0 === n && (n = function ()
					{
						return !0
					}), this.haveItems(t))
					for (var o = 0; o < this._childs[t].length; o++) e.call(this, this._childs[t][o], o), i && n(this._childs[t][o]) && this.eachChild(this._childs[t][o].id, e, i, n)
			}, h.prototype.getNearId = function (t)
			{
				return t
			}, h.prototype.loadItems = function (e, i)
			{
				var n = this;
				void 0 === i && (i = "json");
				var t = this.config.autoload + "?id=" + e;
				new s.DataProxy(t).load().then(function (t)
				{
					t = (i = d.toDataDriver(i)).toJsonArray(t), n._parse_data(t, e), n.events.fire(p.DataEvents.change)
				})
			}, h.prototype.refreshItems = function (t, e)
			{
				void 0 === e && (e = "json"), this.removeAll(t), this.loadItems(t, e)
			}, h.prototype.eachParent = function (t, e, i)
			{
				void 0 === i && (i = !1);
				t = this.getItem(t);
				t && (i && e.call(this, t), t.parent !== this._root && (i = this.getItem(t.parent), e.call(this, i), this.eachParent(t.parent, e)))
			}, h.prototype.haveItems = function (t)
			{
				return t in this._childs
			}, h.prototype.canCopy = function (e, t)
			{
				if (e === t) return !1;
				var i = !0;
				return this.eachParent(t, function (t)
				{
					return t.id === e ? i = !1 : null
				}), i
			}, h.prototype.serialize = function (t, e)
			{
				void 0 === t && (t = p.DataDriver.json);
				e = this._serialize(this._root, e), t = d.toDataDriver(t);
				if (t) return t.serialize(e)
			}, h.prototype.getId = function (t, e)
			{
				if (void 0 === e && (e = this._root), this._childs[e] && this._childs[e][t]) return this._childs[e][t].id
			}, h.prototype.map = function (t, e, i)
			{
				void 0 === e && (e = this._root), void 0 === i && (i = !0);
				var n = [];
				if (!this.haveItems(e)) return n;
				for (var o, r = 0; r < this._childs[e].length; r++) n.push(t.call(this, this._childs[e][r], r, this._childs)), i && (o = this.map(t, this._childs[e][r].id, i), n = n.concat(o));
				return n
			}, h.prototype.getRawData = function (t, e, i, n, o)
			{
				o = (o = o || this._root) === this._root ? l.prototype.getRawData.call(this, t, e, this._childs[o]) : this._childs[o];
				return 2 === n ? this.flatten(o) : o
			}, h.prototype.flatten = function (t)
			{
				var i = this,
					n = [];
				return t.forEach(function (t)
				{
					n.push(t);
					var e = i._childs[t.id];
					e && t.$opened && (n = n.concat(i.flatten(e)))
				}), n
			}, h.prototype._add = function (t, e, i, n)
			{
				void 0 === e && (e = -1), void 0 === i && (i = this._root), t.parent = t.parent ? t.parent.toString() : i, 0 < n && -1 !== e && (e += 1);
				e = l.prototype._add.call(this, t, e);
				if (Array.isArray(t.items))
					for (var o = 0, r = t.items; o < r.length; o++)
					{
						var a = r[o];
						this.add(a, -1, t.id)
					}
				return e
			}, h.prototype._copy = function (t, e, i, n, o)
			{
				if (void 0 === i && (i = this), void 0 === n && (n = this._root), !this.exists(t)) return null;
				var r = this._childs[t];
				if (o && (e = -1 === e ? -1 : e + o), i === this && !this.canCopy(t, n)) return null;
				o = d.copyWithoutInner(this.getItem(t),
				{
					items: !0
				});
				if (i.exists(t) && (o.id = u.uid()), d.isTreeCollection(i))
				{
					if (this.exists(t) && (o.parent = n, i !== this && n === this._root && (o.parent = i.getRoot()), i.add(o, e), t = o.id), r)
						for (var a = 0, s = r; a < s.length; a++)
						{
							var c = s[a].id,
								l = this.getIndex(c);
							"string" == typeof t && this.copy(c, l, i, t)
						}
					return t
				}
				i.add(o, e)
			}, h.prototype._move = function (t, e, i, n, o)
			{
				if (void 0 === i && (i = this), void 0 === n && (n = this._root), !this.exists(t)) return null;
				if (o && (e = -1 === e ? -1 : e + o), i !== this)
				{
					if (!d.isTreeCollection(i)) return i.add(d.copyWithoutInner(this.getItem(t)), e), void this.remove(t);
					var r = this.copy(t, e, i, n);
					return this.remove(t), r
				}
				if (!this.canCopy(t, n)) return null;
				i = this.getParent(t), r = this.getIndex(t), r = this._childs[i].splice(r, 1)[0];
				return r.parent = n, this._childs[i].length || delete this._childs[i], this.haveItems(n) || (this._childs[n] = []), -1 === e ? e = this._childs[n].push(r) : this._childs[n].splice(e, 0, r), this.events.fire(p.DataEvents.change, [t, "update", this.getItem(t)]), t
			}, h.prototype._reset = function (t)
			{
				if (t)
					for (var e = 0, i = r(this._childs[t]); e < i.length; e++)
					{
						var n = i[e];
						this.remove(n.id)
					}
				else
				{
					l.prototype._reset.call(this);
					var o = this._root;
					this._initChilds = null, this._childs = ((t = {})[o] = [], t)
				}
			}, h.prototype._removeCore = function (e)
			{
				var t;
				this._pull[e] && (t = this.getParent(e), this._childs[t] = this._childs[t].filter(function (t)
				{
					return t.id !== e
				}), t === this._root || this._childs[t].length || delete this._childs[t], this._initChilds && this._initChilds[t] && (this._initChilds[t] = this._initChilds[t].filter(function (t)
				{
					return t.id !== e
				}), t === this._root || this._initChilds[t].length || delete this._initChilds[t]), this._fastDeleteChilds(this._childs, e), this._initChilds && this._fastDeleteChilds(this._initChilds, e))
			}, h.prototype._addToOrder = function (t, e, i)
			{
				var n = this._childs,
					o = this._initChilds,
					r = e.parent;
				c(n, this._pull[e.id] = e, r, i), o && c(o, e, r, i)
			}, h.prototype._parse_data = function (t, e)
			{
				void 0 === e && (e = this._root);
				for (var i = 0, n = t; i < n.length; i++)
				{
					var o = n[i];
					this.config.init && (o = this.config.init(o)), "object" != typeof o && (o = {
						value: o
					}), o.id = o.id ? o.id.toString() : u.uid(), o.parent = void 0 === o.parent || o.parent && o.$items ? e : o.parent.toString(), this._pull[o.id] = o, this._childs[o.parent] || (this._childs[o.parent] = []), this._childs[o.parent].push(o), o.items && o.items instanceof Object && this._parse_data(o.items, o.id)
				}
			}, h.prototype._fastDeleteChilds = function (t, e)
			{
				if (this._pull[e] && delete this._pull[e], t[e])
				{
					for (var i = 0; i < t[e].length; i++) this._fastDeleteChilds(t, t[e][i].id);
					delete t[e]
				}
			}, h.prototype._recursiveFilter = function (e, i, t, n, o)
			{
				var r = this,
					a = this._childs[t];
				if (a)
				{
					var s, c, l = function (t)
					{
						switch (i.type)
						{
						case p.TreeFilterType.all:
							return !0;
						case p.TreeFilterType.level:
							return n === i.level;
						case p.TreeFilterType.leafs:
							return !r.haveItems(t.id)
						}
					};
					"function" == typeof e ? (s = function (t)
					{
						return l(t) && e(t)
					}, (c = a.filter(s)).length && (o[t] = c)) : e.by && e.match && (s = function (t)
					{
						return l(t) && t[e.by] && -1 !== t[e.by].toString().toLowerCase().indexOf(e.match.toString().toLowerCase())
					}, (c = a.filter(s)).length && (o[t] = c));
					for (var u = 0, d = a; u < d.length; u++)
					{
						var h = d[u];
						this._recursiveFilter(e, i, h.id, n + 1, o)
					}
				}
			}, h.prototype._serialize = function (t, n)
			{
				var o = this;
				return void 0 === t && (t = this._root), this.map(function (t)
				{
					var e, i = {};
					for (e in t) "parent" !== e && "items" !== e && (i[e] = t[e]);
					return n && (i = n(i)), o.haveItems(t.id) && (i.items = o._serialize(t.id, n)), i
				}, t, !1)
			}, h);

			function h(t, e)
			{
				var i = l.call(this, t, e) || this;
				i._childs = {};
				e = i._root = t && t.rootId || "_ROOT_" + u.uid();
				return i._childs = ((t = {})[e] = [], t), i._initChilds = null, i
			}
			e.TreeCollection = o
		}, function (t, e, i)
		{
			"use strict";
			var h = this && this.__assign || function ()
			{
				return (h = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var p = i(1),
				g = i(68),
				f = i(4),
				_ = i(5);
			var n = (o.prototype.setItem = function (t, e)
			{
				g.collectionStore.setItem(t, e)
			}, o.prototype.onMouseDown = function (t, e, i)
			{
				var n, o, r, a;
				1 !== t.which && !t.targetTouches || (t.targetTouches ? (document.addEventListener("touchmove", this._onMouseMove, !1), document.addEventListener("touchend", this._onMouseUp, !1)) : (document.addEventListener("mousemove", this._onMouseMove), document.addEventListener("mouseup", this._onMouseUp)), o = (n = p.locateNode(t, "dhx_id")) && n.getAttribute("dhx_id"), r = p.locate(t, "dhx_widget_id"), e && e.includes(o) && 1 < e.length ? (this._transferData.source = e, this._itemsForGhost = i) : (this._transferData.source = [o], this._itemsForGhost = null), o && r && (e = (a = p.getBox(n)).left, i = a.top, a = (t.targetTouches ? t.targetTouches[0] : t).pageX, t = (t.targetTouches ? t.targetTouches[0] : t).pageY, this._transferData.initXOffset = a - e, this._transferData.initYOffset = t - i, this._transferData.x = a, this._transferData.y = t, this._transferData.componentId = r, this._transferData.start = o, this._transferData.item = n))
			}, o.prototype.isDrag = function ()
			{
				return this._isDrag
			}, o.prototype._moveGhost = function (t, e)
			{
				this._transferData.ghost && (this._transferData.ghost.style.left = t - this._transferData.initXOffset + "px", this._transferData.ghost.style.top = e - this._transferData.initYOffset + "px")
			}, o.prototype._removeGhost = function ()
			{
				document.body.removeChild(this._transferData.ghost)
			}, o.prototype._onDrop = function (t)
			{
				var e, i, n, o, r;
				this._canMove && (r = (o = this._transferData).start, i = o.source, e = o.target, n = o.dropComponentId, i = {
					start: r,
					source: i,
					target: e,
					dropPosition: o.dropPosition
				}, n = (o = g.collectionStore.getItem(n)) && o.config, o && "source" !== n.dragMode && o.events.fire(f.DragEvents.beforeDrop, [i, t]) && (o = {
					id: e,
					component: o
				}, r = {
					id: r,
					component: this._transferData.component
				}, this._move(r, o), o.component.events.fire(f.DragEvents.afterDrop, [i, t]))), this._endDrop(t)
			}, o.prototype._onDragStart = function (t, e, i)
			{
				var n = g.collectionStore.getItem(e),
					o = n.config,
					r = this._transferData,
					e = {
						start: r.start,
						source: r.source,
						target: r.target
					};
				if ("target" === o.dragMode) return null;
				r = function (t, e, i)
				{
					void 0 === i && (i = !1);
					var n = t.getBoundingClientRect(),
						o = document.createElement("div"),
						r = t.cloneNode(!0);
					return r.style.width = n.width + "px", r.style.height = n.height + "px", r.style.maxHeight = n.height + "px", r.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, r.style.opacity = "0.8", r.style.fontSize = window.getComputedStyle(t.parentElement).fontSize, i && e && e.length || o.appendChild(r), e && e.length && e.forEach(function (t, e)
					{
						t = t.cloneNode(!0);
						t.style.width = n.width + "px", t.style.height = n.height + "px", t.style.maxHeight = n.height + "px", t.style.top = 12 * (e + 1) - n.height - n.height * e + "px", t.style.left = 12 * (e + 1) + "px", t.style.opacity = "0.6", t.style.zIndex = "" + (-e - 1), o.appendChild(t)
					}), o.className = "dhx_drag-ghost", o
				}(this._transferData.item, this._itemsForGhost, "column" === o.dragItem);
				return n.events.fire(f.DragEvents.beforeDrag, [e, i, r]) && t ? (n.events.fire(f.DragEvents.dragStart, [e, i]), this._isDrag = !0, this._toggleTextSelection(!0), this._transferData.component = n, this._transferData.dragConfig = o, r) : null
			}, o.prototype._onDrag = function (t)
			{
				var e = (t.targetTouches ? t.targetTouches[0] : t).clientX,
					i = (t.targetTouches ? t.targetTouches[0] : t).clientY,
					n = document.elementFromPoint(e, i),
					o = p.locate(n, "dhx_widget_id");
				if (o)
				{
					var r = this._transferData,
						a = r.dropComponentId,
						s = r.start,
						c = r.source,
						l = r.target,
						u = r.componentId,
						d = r.dropPosition,
						e = g.collectionStore.getItem(o),
						i = p.locate(n, "dhx_id");
					if (!i) return this._cancelCanDrop(t), this._transferData.dropComponentId = o, this._transferData.target = null, void this._canDrop(t);
					if ("complex" === e.config.dropBehaviour)
					{
						r = (n = (r = t).clientY, (r = p.locateNode(r)) ? (r = r.childNodes[0].getBoundingClientRect(), (n - r.top) / r.height) : null);
						this._transferData.dropPosition = r <= .25 ? "top" : .75 <= r ? "bottom" : "in"
					}
					else if (l === i && a === o) return;
					a = {
						id: s,
						component: this._transferData.component
					};
					"source" !== e.config.dragMode && (a.component.events.fire(f.DragEvents.dragOut, [
					{
						start: s,
						source: c,
						target: l
					}, t]), o !== u || !_.isTreeCollection(a.component.data) || _.isTreeCollection(a.component.data) && a.component.data.canCopy(a.id, i) ? (this._cancelCanDrop(t), this._transferData.target = i, this._transferData.dropComponentId = o, a.component.events.fire(f.DragEvents.dragIn, [
					{
						start: s,
						source: c,
						target: l,
						dropPosition: d
					}, t]) && this._canDrop(t)) : this._cancelCanDrop(t))
				}
				else this._canMove && this._cancelCanDrop(t)
			}, o.prototype._move = function (e, i)
			{
				var n = e.component.data,
					o = i.component.data,
					r = 0,
					a = i.id,
					t = _.isTreeCollection(o) ? i.component.config.dropBehaviour : void 0,
					s = e.component.config.columns ? e.component.config : void 0;
				if (s && ("complex" === s.dragItem || "column" === s.dragItem) && s.columns.map(function (t)
					{
						return t.id
					}).filter(function (t)
					{
						return t === e.id || t === i.id
					}).length && e.component === i.component && e.id !== i.id)
				{
					var c = e.component,
						l = c.config.columns.map(function (t)
						{
							return h(
							{}, t)
						}),
						u = l.findIndex(function (t)
						{
							return t.id === e.id
						}),
						s = l.findIndex(function (t)
						{
							return t.id === i.id
						});
					return l.splice(s, 0, l.splice(u, 1)[0]), c.setColumns(l), void c.paint()
				}
				switch (t)
				{
				case "child":
					break;
				case "sibling":
					a = o.getParent(a), r = o.getIndex(i.id) + 1;
					break;
				case "complex":
					var d = this._transferData.dropPosition;
					"top" === d ? (a = o.getParent(a), r = o.getIndex(i.id)) : "bottom" === d && (a = o.getParent(a), r = o.getIndex(i.id) + 1);
					break;
				default:
					r = i.id ? e.component === i.component && o.getIndex(e.id) < o.getIndex(i.id) ? o.getIndex(i.id) - 1 : o.getIndex(i.id) : -1
				}
				this._transferData.dragConfig.dragCopy ? this._transferData.source instanceof Array && 1 < this._transferData.source.length ? this._transferData.source.map(function (t)
				{
					n.copy(t, r, o, a), -1 < r && r++
				}) : n.copy(e.id, r, o, a) : this._transferData.source instanceof Array && 1 < this._transferData.source.length ? this._transferData.source.map(function (t)
				{
					n.move(t, r, o, a), -1 < r && r++
				}) : n.move(e.id, r, o, a)
			}, o.prototype._endDrop = function (t)
			{
				var e;
				this._toggleTextSelection(!1), this._transferData.component && (e = {
					start: (e = this._transferData).start,
					source: e.source,
					target: e.target
				}, this._transferData.component.events.fire(f.DragEvents.afterDrag, [e, t])), this._cancelCanDrop(t), this._canMove = !0, this._transferData = {}, this._transferData.target = null, this._transferData.dropComponentId = null
			}, o.prototype._cancelCanDrop = function (t)
			{
				this._canMove = !1, this._isDrag = !1;
				var e = this._transferData,
					i = e.start,
					n = e.source,
					o = e.target,
					e = e.dropComponentId,
					n = {
						start: i,
						source: n,
						target: o
					},
					e = g.collectionStore.getItem(e);
				e && o && e.events.fire(f.DragEvents.cancelDrop, [n, t]), this._transferData.dropComponentId = null, this._transferData.target = null
			}, o.prototype._canDrop = function (t)
			{
				this._canMove = !0;
				var e = this._transferData,
					i = {
						start: e.start,
						source: e.source,
						target: e.target,
						dropPosition: e.dropPosition
					},
					e = g.collectionStore.getItem(this._transferData.dropComponentId);
				e && this._transferData.target && e.events.fire(f.DragEvents.canDrop, [i, t])
			}, o.prototype._toggleTextSelection = function (t)
			{
				t ? document.body.classList.add("dhx_no-select") : document.body.classList.remove("dhx_no-select")
			}, o);

			function o()
			{
				var s = this;
				this._transferData = {}, this._canMove = !0, this._isDrag = !1, this._onMouseMove = function (t)
				{
					if (s._transferData.start)
					{
						var e = (t.targetTouches ? t.targetTouches[0] : t).pageX,
							i = (t.targetTouches ? t.targetTouches[0] : t).pageY,
							n = s._transferData,
							o = n.x,
							r = n.y,
							a = n.start,
							n = n.componentId;
						if (!s._transferData.ghost)
						{
							if (Math.abs(o - e) < 3 && Math.abs(r - i) < 3) return;
							n = s._onDragStart(a, n, t);
							if (!n) return void s._endDrop(t);
							s._transferData.ghost = n, document.body.appendChild(s._transferData.ghost)
						}
						s._moveGhost(e, i), s._onDrag(t)
					}
				}, this._onMouseUp = function (t)
				{
					s._transferData.x && (s._transferData.ghost ? (s._removeGhost(), s._onDrop(t)) : s._endDrop(t), t.targetTouches ? (document.removeEventListener("touchmove", s._onMouseMove), document.removeEventListener("touchend", s._onMouseUp)) : (document.removeEventListener("mousemove", s._onMouseMove), document.removeEventListener("mouseup", s._onMouseUp)))
				}
			}
			i = window.dhxHelpers = window.dhxHelpers ||
			{};
			i.dragManager = i.dragManager || new n, e.dragManager = i.dragManager
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = (o.prototype.setItem = function (t, e)
			{
				this._store[t] = e
			}, o.prototype.getItem = function (t)
			{
				return this._store[t] || null
			}, o);

			function o()
			{
				this._store = {}
			}
			var r = window.dhxHelpers = window.dhxHelpers ||
			{};
			r.collectionStore = r.collectionStore || new n, e.collectionStore = r.collectionStore
		}, function (t, c, l)
		{
			"use strict";
			(function (t)
			{
				var n, e = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				});
				Object.defineProperty(c, "__esModule",
				{
					value: !0
				});
				var o, i = l(10),
					r = l(2),
					a = l(20),
					e = (o = i.DataProxy, e(s, o), s.prototype.load = function ()
					{
						var e = this;
						return new t(function (t)
						{
							e._timeout ? (clearTimeout(e._timeout), e._timeout = setTimeout(function ()
							{
								a.ajax.get(e.url,
								{
									responseType: "text"
								}).then(t), e._cooling = !0
							}, e.config.delay), e._cooling && (t(null), e._cooling = !1)) : (a.ajax.get(e.url,
							{
								responseType: "text"
							}).then(t), e._cooling = !0, e._timeout = setTimeout(function () {}))
						})
					}, s);

				function s(t, e)
				{
					var i = o.call(this, t) || this;
					return i.config = r.extend(
					{
						from: 0,
						limit: 50,
						delay: 50,
						prepare: 0
					}, e), i.updateUrl(t,
					{
						from: i.config.from,
						limit: i.config.limit
					}), i
				}
				c.LazyDataProxy = e
			}).call(this, l(7))
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(8),
				n = i(30),
				r = i(4),
				i = (a.prototype.getId = function ()
				{
					return this._selected
				}, a.prototype.getItem = function ()
				{
					return this._selected ? this._data.getItem(this._selected) : null
				}, a.prototype.remove = function (t)
				{
					return !(t = t || this._selected) || !!this.events.fire(n.SelectionEvents.beforeUnSelect, [t]) && (this._data.update(t,
					{
						$selected: !1
					}, !0), this._selected = null, this.events.fire(n.SelectionEvents.afterUnSelect, [t]), !0)
				}, a.prototype.add = function (t)
				{
					this._selected !== t && !this.config.disabled && this._data.exists(t) && (this.remove(), this._addSingle(t))
				}, a.prototype.enable = function ()
				{
					this.config.disabled = !1
				}, a.prototype.disable = function ()
				{
					this.remove(), this.config.disabled = !0
				}, a.prototype._addSingle = function (t)
				{
					this.events.fire(n.SelectionEvents.beforeSelect, [t]) && (this._selected = t, this._data.update(t,
					{
						$selected: !0
					}, !0), this.events.fire(n.SelectionEvents.afterSelect, [t]))
				}, a);

			function a(t, e, i)
			{
				var n = this;
				this.events = i || new o.EventSystem(this), this._data = e, this.config = t, this._data.events.on(r.DataEvents.removeAll, function ()
				{
					n._selected = null
				}), this._data.events.on(r.DataEvents.change, function ()
				{
					var t;
					!n._selected || (t = n._data.getNearId(n._selected)) !== n._selected && (n._selected = null, t && n.add(t))
				})
			}
			e.Selection = i
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				},
				a = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var s, d = i(0),
				c = i(6),
				l = i(11),
				u = i(3),
				o = (s = l.BaseShape, o(h, s), h.prototype.isConnector = function ()
				{
					return !0
				}, h.prototype.getMetaInfo = function ()
				{
					var t = c.getMeta([
					{
						type: "grid",
						label: u.default.gridStep
					}]);
					return t.push(
					{
						id: "strokeProps",
						type: "stroke",
						label: "Stroke",
						connector: !0
					}), t
				}, h.prototype.setDefaults = function (t)
				{
					return t.connectType = t.connectType || "elbow", t.stroke = t.stroke || "#CCC", t.strokeWidth = t.strokeWidth || 2, t.cornersRadius = t.cornersRadius || 0, t
				}, h.prototype.render = function ()
				{
					var t = this.config.$selected;
					this.id = this.config.id;
					var e = this._getPoints(),
						i = this._getArrowLine() || [];
					return d.sv("g",
					{
						dhx_id: this.config.id || "",
						_key: this.config.id,
						class: "dhx_diagram_connector " + this.getCss()
					}, a([d.sv("path",
					{
						d: e,
						fill: "none",
						class: "dhx_diagram_line " + (t ? "dhx_diagram_line--selected" : ""),
						"stroke-dasharray": this._getType(),
						"stroke-linejoin": "round",
						stroke: this.config.stroke,
						"stroke-width": this.config.strokeWidth
					})], i))
				}, h.prototype.getBox = function ()
				{
					var t = r(
						{}, this.config),
						e = t.points.reduce(function (t, e)
						{
							return t.x = Math.max(t.x, e.x), t.y = Math.max(t.y, e.y), t
						},
						{
							x: 0,
							y: 0
						}),
						i = e.x - t.x,
						n = e.y - t.y,
						e = t.x,
						i = e + i,
						t = t.y;
					return {
						left: e,
						right: i,
						top: t,
						bottom: t + n
					}
				}, h.prototype._getType = function ()
				{
					if (this.config.strokeType && (this.config.type = this.config.strokeType), this.config.type) switch (this.config.type)
					{
					case "line":
						return "";
					case "dash":
						return "5, 5";
					default:
						return ""
					}
				}, h.prototype._getPoints = function ()
				{
					return this._getStringPoints()
				}, h.prototype._getStringPoints = function ()
				{
					return this.config.width = Math.abs(this.config.points[this.config.points.length - 1].x - this.config.points[0].x), this.config.height = Math.abs(this.config.points[this.config.points.length - 1].y - this.config.points[0].y), this.config.x = this.config.points[0].x, this.config.y = this.config.points[0].y, "M " + this.config.x + "," + this.config.y + this.config.points.map(function (t)
					{
						return t.x1 && t.y1 ? "Q" + t.x1 + "," + t.y1 + " " + t.x + "," + t.y : "L " + t.x + "," + t.y
					}).join(" ")
				}, h.prototype._getArrowLine = function ()
				{
					var t = this.config.points,
						e = this.config.backArrow,
						i = this.config.forwardArrow;
					if (e || i) return [e ? "straight" === this.config.connectType ? this._angleArrow(t[1], t[0]) : this._arrow(t[1], t[0]) : null, i ? "straight" === this.config.connectType ? this._angleArrow(t[t.length - 2], t[t.length - 1]) : this._arrow(t[t.length - 2], t[t.length - 1]) : null]
				}, h.prototype._angleArrow = function (t, e)
				{
					var i = t.x - e.x,
						n = t.y - e.y,
						o = 1 / Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2)),
						r = i * o,
						a = n * o,
						s = e.x,
						c = e.y,
						l = e.x - 5,
						u = e.y - 5,
						i = e.x + 5,
						n = e.y - 5,
						o = Math.atan((e.x - t.x) / (e.y - t.y)) * (-180 / 3.14);
					return t.y > e.y && (o += 180), d.sv("path",
					{
						d: "M" + l + "," + u + " L" + s + "," + c + " L" + i + "," + n + " Z",
						class: "dhx_diagram_arrow",
						"shape-rendering": "auto",
						stroke: this.config.stroke,
						fill: this.config.stroke,
						transform: "translate(" + r + " " + a + ") rotate(" + o + "," + s + "," + c + ")"
					})
				}, h.prototype._arrow = function (t, e)
				{
					var i = t.x !== e.x,
						n = (i ? t.x < e.x : t.y < e.y) ? 1 : -1,
						o = e.x - (i ? n : 0),
						r = e.y - (i ? 0 : n),
						a = e.x - (i ? 7 * n : 5 * n),
						s = e.y - (i ? 5 : 7 * n),
						t = e.x + (i ? -7 * n : 5 * n),
						n = e.y - (i ? -5 : 7 * n);
					return d.sv("path",
					{
						d: "M" + a + "," + s + " L" + o + "," + r + " L" + t + "," + n + " Z",
						class: "dhx_diagram_arrow",
						"shape-rendering": "auto",
						stroke: this.config.stroke,
						fill: this.config.stroke
					})
				}, h);

			function h(t, e)
			{
				return s.call(this, t, e) || this
			}
			e.Line = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				s = i(3),
				c = i(6),
				i = i(36),
				o = (r = i.OrgChartCard, o(l, r), l.prototype.getMetaInfo = function ()
				{
					return c.getMeta([
					{
						type: "grid",
						label: s.default.gridStep
					},
					{
						type: "color",
						label: s.default.color
					},
					{
						type: "position",
						label: s.default.position
					},
					{
						type: "size",
						label: s.default.size
					},
					{
						type: "title",
						label: s.default.title
					},
					{
						type: "text",
						label: s.default.text
					},
					{
						type: "img",
						label: s.default.image
					}])
				}, l.prototype.setDefaults = function (t, e)
				{
					var i = t.width,
						n = t.height,
						o = t.text,
						r = t.title,
						a = t.headerColor,
						s = e.width ? parseFloat(e.width) : 210,
						c = e.height ? parseFloat(e.height) : 90;
					return t.width = i || s, t.height = n || c, t.title = "string" == typeof r ? r : e.title || "", t.text = "string" == typeof o ? o : e.text || "", t.headerColor = a || e.headerColor || "", t
				}, l.prototype.getCss = function ()
				{
					return "dhx_diagram_image " + r.prototype.getCss.call(this)
				}, l.prototype.getContent = function ()
				{
					var t = this.config,
						e = t.img,
						i = t.headerColor,
						n = t.title,
						o = t.text,
						r = t.width,
						t = e ? "" + e : null;
					return [a.el("img.dhx_orgcard__img",
					{
						style:
						{
							backgroundColor: e ? null : i
						},
						src: t
					}), a.el("div.dhx_orgcard__title", n), a.el("div.dhx_orgcard__text",
					{
						class: n ? "" : "dhx_content_text-alone",
						style:
						{
							maxWidth: r - 80,
							marginLeft: 80
						}
					}, o)]
				}, l);

			function l()
			{
				return null !== r && r.apply(this, arguments) || this
			}
			e.OrgChartImgCard = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(0),
				c = i(6),
				l = i(11),
				y = i(1),
				u = i(17),
				d = i(3),
				o = (a = l.BaseShape, o(h, a), h.prototype.render = function ()
				{
					var t = this.getCoords(this.config),
						e = this.config,
						i = e.id,
						n = e.angle,
						o = e.text,
						e = {
							fontSize: e.fontSize + "px",
							fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
							lineHeight: e.lineHeight + "px",
							fontWeight: e.fontWeight,
							fontStyle: e.fontStyle
						};
					return this._oldText && this.config.text !== this._oldText && (e = y.getStrSize(o, e), this.config.width = e.width + 4, this.config.height = e.height + 2), this._oldText = this.config.text, s.el("div",
					{
						_key: i,
						class: "dhx_diagram_flow_item " + this.getCss(),
						dhx_id: i,
						zIndex: 2,
						style: r(
						{
							position: "absolute",
							top: t.y,
							left: t.x,
							transform: "rotate(" + (n || 0) + "deg)"
						}, u.getShapeCss(this.config))
					}, [this.getContent()])
				}, h.prototype.getMetaInfo = function ()
				{
					var t = c.getMeta([
					{
						type: "grid",
						label: d.default.gridStep
					},
					{
						type: "arrange",
						label: d.default.arrange
					},
					{
						type: "text",
						label: d.default.text
					}]);
					return t.push(
					{
						id: "textProps",
						type: "textProps",
						label: d.default.textProps,
						alignments: !1
					}), t
				}, h.prototype.setDefaults = function (t, e)
				{
					var i = t.width,
						n = t.height,
						o = t.fontColor,
						r = t.fontSize,
						a = t.fontStyle,
						s = t.textAlign,
						c = t.lineHeight,
						l = t.textVerticalAlign,
						u = t.text,
						d = t.fontWeight,
						h = t.x,
						p = t.y,
						g = e.lineHeight ? parseFloat(e.lineHeight) : 14,
						f = e.fontSize ? parseFloat(e.fontSize) : 14,
						_ = {
							fontSize: (r || f) + "px",
							fontFamily: "Roboto, Arial, Tahoma, Verdana, sans-serif",
							lineHeight: (c || g) + "px",
							fontWeight: d,
							fontStyle: a
						},
						d = y.getStrSize(u, _),
						_ = e.width ? parseFloat(e.width) : d.width + 4,
						d = e.height ? parseFloat(e.height) : d.height + 2;
					return t.width = i || _, t.height = n || d, t.lineHeight = c || g, t.fontSize = r || f, t.text = u || e.text || "", t.fontColor = o || e.fontColor || "rgba(0,0,0,0.70)", t.textAlign = s || e.textAlign || "center", t.fontStyle = a || e.fontStyle || "normal", t.textVerticalAlign = l || e.textVerticalAlign || "center", t.x = h || 0, t.y = p || 0, t
				}, h.prototype.getContent = function ()
				{
					return s.el("span.dhx_item_shape", this.config.text)
				}, h);

			function h(t, e)
			{
				e = a.call(this, t, e) || this;
				return e.config = t, e.id = e.config.id, e
			}
			e.DiagramTextShape = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				s = i(1),
				c = i(12),
				i = i(9),
				o = (r = i.View, o(l, r), l.prototype.render = function (t, e)
				{
					var i = this.config,
						n = this._getIcons(t, i.icons),
						o = i.iconWidth * n.length + i.gap,
						i = this._getCoords(t, o / e.scale, i.height / e.scale);
					return a.el("div",
					{
						class: "dhx_popup_toolbar",
						style:
						{
							display: this._hidden ? "none" : "block",
							maxHeight: this.config.height,
							width: o,
							top: (i.y - e.top) * e.scale,
							left: (i.x - e.left) * e.scale
						},
						onclick: this._handlers.onclick
					}, [a.el("div",
					{
						class: "dhx_item_toolbar"
					}, n)])
				}, l.prototype.hide = function ()
				{
					this._hidden = !0, this.paint()
				}, l.prototype.show = function ()
				{
					this._hidden = !1, this.paint()
				}, l.prototype._getIcons = function (t, e)
				{
					for (var i = [], n = 0; n < e.length; n++)
					{
						var o, r = e[n];
						r.check && !r.check(t) || (o = r.css ? r.css(t) : "", o = {
							_key: r.id,
							class: "dhx_icon " + o,
							dhx_id: r.id
						}, "string" == typeof (r = "function" == typeof r.content ? r.content(t) : r.content) ? (o[".innerHTML"] = r, i.push(a.el("div", o))) : i.push(a.el("div", o, [r])))
					}
					return i
				}, l.prototype._getCoords = function (t, e, i)
				{
					if (t.$shape.isConnector()) return this._pressCoords ?
					{
						x: this._pressCoords.x - 50,
						y: this._pressCoords.y - 50
					} :
					{
						x: t.points[0].x,
						y: t.points[0].y
					};
					t = t.$shape.getBox();
					return {
						x: t.right / 2 + t.left / 2 - e / 2,
						y: t.top - i - 8
					}
				}, l);

			function l(t, e)
			{
				var n = r.call(this, null,
				{
					height: 50,
					iconWidth: 30,
					gap: 16,
					icons: e
				}) || this;
				return n.events = t, n._handlers = {
					onclick: s.eventHandler(function (t)
					{
						return s.locate(t)
					},
					{
						dhx_icon: function (t, e)
						{
							n.events.fire(c.DiagramEvents.shapeIconClick, [e, t])
						}
					})
				}, n.events.on(c.DiagramEvents.shapeMouseDown, function (t, e, i)
				{
					n._pressCoords = i
				}), n.events.on(c.DiagramEvents.emptyAreaClick, function ()
				{
					n._pressCoords = null
				}), n
			}
			e.Toolbar = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var c = i(76),
				l = i(77),
				u = i(78),
				s = i(38),
				i = (n.prototype.layout = function (t, e)
				{
					if (t.routes = new l.default, !e.full)
					{
						var i = d(t, e);
						return e.preserveLocation || h(i.n, i.size), p(i.mx, i.n, i.n, i.size), i.n, t.setGlobalBox(), t
					}
					var n = u.split(t);
					if (1 == n.length && null !== n[0].root) return (new c.default).layout(n[0].g, e);
					(t = n[0].g).routes = new l.default;
					var o, r, a, s, i = d(t, e);
					return e.preserveLocation || h(i.n, i.size), p(i.mx, i.n, i.n, i.size), i.n, e.full && (function (d, t, e, h)
					{
						e.length, e.forEach(function (t)
						{
							return t.iss = ""
						});
						var i = [].concat(e).filter(function (t)
						{
							return 3 <= t.links.length
						}).sort(function (t, e)
						{
							return t.links.length > e.links.length ? -1 : t.links.length == e.links.length ? 0 : 1
						});
						i.map(function (o)
						{
							var r = [];
							return o.links.forEach(function (t)
							{
								var e = Math.atan2(t.x - o.x, t.y - o.y) + Math.PI,
									i = 2 * Math.ceil(e / (2 * g)) * g,
									n = 2 * Math.floor(e / (2 * g)) * g;
								r.push([t, i, Math.abs(e - i)]), r.push([t, n, Math.abs(e - n)])
							}), r.sort(function (t, e)
							{
								return t[2] > e[2] ? 1 : -1
							}), [o, r]
						}).forEach(function (t)
						{
							var e = t[0],
								i = t[1],
								n = e.x,
								o = e.y;
							e.x = Math.round(e.x / h) * h, e.y = Math.round(e.y / h) * h;
							for (var r = 0; r < i.length; r++)
							{
								var a, s, c, l = i[r],
									u = l[0];
								d.getRoute(e.id, u.id) || (a = (c = _(e, u, l[1], h, n, o))[0], s = c[1], l = c[2], c = c[3], d.hasRoute(e.id, l, c) || d.isAligned(u.id) || (u.x += a, u.y += s, d.addRoute(e.id, u.id, l, c)))
							}
						}), p(t, e, e.filter(function (t)
						{
							return !d.isAligned(t.id)
						}), h), i.forEach(function (e)
						{
							d.isAligned(e.id) || (e.x = Math.round(e.x / h) * h, e.y = Math.round(e.y / h) * h), e.links.forEach(function (t)
							{
								2 == t.links.length && f(e, t, d, h)
							})
						}), 0 === i.length && (i = e[0], (e = e[0].links[0]).x = Math.round(e.x / h) * h, e.y = Math.round(e.y / h) * h, f(i, e, d, h))
					}(t.routes, i.mx, i.n, i.size), o = t, r = i.mx, n = n.slice(1).sort(I), a = i.size, s = o.getNodes().length, n.forEach(function (t)
					{
						var e = t.g,
							i = t.root;
						(new c.default).layout(e,
						{
							root: e.getNodes()[0].id
						});
						var l, u, d, h, p, g, n = (l = r, u = o, d = e, h = i, p = a, g = s, y.map(function (t)
						{
							if (!t[2] && !t[3] && u.routes.hasRoute(h, t[0], t[1])) return null;
							var e = d.copy(),
								i = u.copy(),
								n = e.getRoot(),
								o = i.hash[h];
							e.rotate(
							{
								x: -t[0],
								y: t[1]
							});
							var r, a = e.getBox(),
								s = a[0][1] - a[0][0],
								c = a[1][1] - a[1][0];
							! function (t, e, i, n, o, r, a, s)
							{
								var c, l, u, d, h = e.x + (s[2] || s[0]) * a,
									p = e.y + (s[3] || s[1]) * a;
								if (m(t, h - a / 2, h + a / 2, p - a / 2, p + a / 2)) return v(t, h - a / 2 * s[0], p - a / 2 * s[1], i, n, s, a);
								if ((s[0] ? i : n) / a - 1 <= 0) return;
								var e = .45 * a;
								e = s[0] ? (l = h + a / 2 * s[0], u = l + i * s[0], (d = p - n / 2 - e - r) + n + 2 * e) : (u = (l = h - i / 2 - e - o) + i + 2 * e, d = p + a / 2 * s[1], d + n * s[1]);
								e < d && (d = (c = [e, d])[0], e = c[1]);
								u < l && (l = (c = [u, l])[0], u = c[1]);
								m(t, l, u, d, e) && v(t, h, p, i, n, s, a)
							}(i, o, s, c, n.x - a[0][0] - s / 2, n.y - a[1][0] - c / 2, p, t), r = i, s = e, a = n, c = p, e = t, o = (n = o).x + c * (e[0] || e[2]) - a.x, a = n.y + c * (e[1] || e[3]) - a.y, s.translate(
							{
								x: o,
								y: a
							}), r.importNodes(s.getNodes());
							s = function (t, e)
							{
								for (var i, n = e.length, o = 0, r = 0; r < n; r++)
								{
									i = 0;
									for (var a, s, c, l, u, d = e[r], h = t[d.isn], p = 0; p < n; p++) d.isn != p && (u = e[p], a = h[u.isn], s = .5 / (a * a), c = d.x - u.x, l = d.y - u.y, (u = Math.sqrt(Math.pow(c, 2) + Math.pow(l, 2))) && (i += s * (c - a * c / u), i += s * (l - a * l / u)));
									o += Math.sqrt(Math.pow(i, 2) + Math.pow(0, 2))
								}
								return o
							}(l, i.getNodes().slice(0, g));
							return {
								g: i,
								s: s,
								dir: t
							}
						}).reduce(function (t, e)
						{
							return !t || e && e.s < t.s ? e : t
						}));
						if (n)
						{
							o = n.g;
							t = e.getRoot().id;
							return n.dir[2] || n.dir[3] || o.routes.addRoute(i, e.getRoot().id, n.dir[0], n.dir[1]), o.hash[i].links.push(o.hash[t]), void o.hash[t].links.push(o.hash[i])
						}
						console.log("Can't position sub tree")
					}), t = o), t.setGlobalBox(), t
				}, n);

			function n()
			{}

			function d(t, e)
			{
				var i = t.getNodes(),
					n = 0;
				return i.forEach(function (t, e)
				{
					t.isn = e, n += t.w + t.h
				}), n = Math.round(n / (2 * i.length)), e.itemPadding ? n += e.itemPadding : n *= 2,
				{
					n: i,
					mx: function (t)
					{
						for (var e = [], i = t.getNodes(), n = 0; n < i.length; n++)
						{
							var o = e[n] = [];
							o[i[n].isn] = 0,
								function (t, e, i, n)
								{
									var o = [t],
										r = [];
									for (; o.length;)
									{
										for (var a = 0; a < o.length; a++)
											for (var s = o[a], c = 0; c < s.links.length; c++)
											{
												var l = s.links[c],
													u = l.isn;
												u == i || e[u] || (e[u] = n, r.push(l))
											}
										n++, o = r, r = []
									}
								}(i[n], o, n, 1)
						}
						return e
					}(t),
					size: n
				}
			}

			function h(t, e)
			{
				var i = 2 * Math.PI / t.length,
					n = 0,
					o = 5 * e;
				t.forEach(function (t, e)
				{
					t.x = Math.round(Math.cos(n) * o), t.y = Math.round(Math.sin(n) * o), n += i
				})
			}

			function p(t, e, i, n)
			{
				for (var o = 0; o++ < 100;)
				{
					var r = function (t, e, i, n)
						{
							for (var o, r, a = 0, s = 0, c = 0, l = 0, u = e.length, d = i.length, h = 0; h < d; h++)
							{
								r = o = 0;
								for (var p = i[h], g = t[p.isn], f = 0; f < u; f++) p.isn != f && (m = .5 / ((v = g[(y = e[f]).isn]) * v), I = p.x - y.x, x = p.y - y.y, (w = Math.sqrt(Math.pow(I, 2) + Math.pow(x, 2))) && (o += m * (I - n * v * I / w), r += m * (x - n * v * x / w)));
								var _ = Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
								s < _ && (a = p.isn, s = _, c = o, l = r)
							}
							for (var y, v, m, I, x, C, b, w, A, M = 0, D = 0, S = 0, j = e[a], E = t[a], f = 0; f < u; f++) a != f && (m = .5 / ((v = E[(y = e[f]).isn]) * v), C = (I = j.x - y.x) * I, b = (x = j.y - y.y) * x, (w = Math.sqrt(Math.pow(C + b, 3))) && (M += m * (1 - n * v * b / w), D += m * n * v * x * I / w, S += m * (1 - n * v * C / w)));
							return [a, s, A = (-c / M + D * l / (S * M)) / (1 + D * D / (S * M)), (-l - D * A) / S]
						}(t, e, i, n),
						a = r[0],
						s = r[1],
						c = r[2],
						r = r[3];
					if (s < 10) break;
					e[a].x += c, e[a].y += r
				}
			}
			e.default = i;
			var g = Math.PI / 4;

			function f(t, e, i, n)
			{
				for (;;)
				{
					var o = e.links[0];
					if (o == t && (o = e.links[1]), t = e, 2 < (e = o).links.length) break;
					for (var r = Math.atan2(e.x - t.x, e.y - t.y) + Math.PI, a = 2 * Math.ceil(r / (2 * g)) * g, o = 2 * Math.floor(r / (2 * g)) * g, s = Math.abs(r - a) < Math.abs(r - o) ? [a, o] : [o, a], c = 0; c < s.length; c++)
					{
						var l = _(t, e, s[c], n, t.x, t.y),
							u = l[0],
							d = l[1],
							h = l[2],
							l = l[3];
						if (!i.hasRoute(t.id, h, l))
						{
							if (i.isAligned(e.id)) return;
							e.x += u, e.y += d, i.addRoute(t.id, e.id, h, l);
							break
						}
					}
				}
			}

			function _(t, e, i, n, o, r)
			{
				return i <= g || 7 * g < i ? [t.x - e.x, a(t.y, e.y, r, n), 0, -1] : i <= 3 * g && g < i ? [a(t.x, e.x, o, n), t.y - e.y, -1, 0] : i <= 5 * g && 3 * g < i ? [t.x - e.x, a(t.y, e.y, r, n), 0, 1] : [a(t.x, e.x, o, n), t.y - e.y, 1, 0]
			}

			function a(t, e, i, n)
			{
				var o = s.sign(i - e);
				return t - e - (Math.round((i - e) / n) || o) * n
			}
			var y = [
				[0, 1, 0, 0],
				[1, 0, 0, 0],
				[-1, 0, 0, 0],
				[0, -1, 0, 0]
			].concat([
				[0, 1, -1, 1],
				[-1, 0, -1, 1],
				[0, 1, 1, 1],
				[1, 0, 1, 1],
				[1, 0, 1, -1],
				[0, -1, 1, -1],
				[-1, 0, -1, -1],
				[0, -1, -1, -1]
			]);

			function v(t, e, i, n, o, r, a)
			{
				t.getNodes().forEach(function (t)
				{
					r[1] ? s.sign(t.y - i) == r[1] && (t.y += (o + a / 2) * r[1]) : r[0] && s.sign(t.x - e) == r[0] && (t.x += (n + a / 2) * r[0])
				})
			}

			function m(t, e, i, n, o)
			{
				for (var r = t.getNodes(), a = 0; a < r.length; a++)
				{
					var s = r[a];
					if (s.x >= e && s.x <= i && s.y >= n && s.y <= o) return 1
				}
			}

			function I(t, e)
			{
				t = t.g.getNodes().length, e = e.g.getNodes().length;
				return e < t ? -1 : t === e ? 0 : 1
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(37),
				u = i(21),
				i = (o.prototype.layout = function (t, e)
				{
					t.root(t.toTree(t.hash[e.root]));
					var i = t.getNodes();
					e.levelPadding = e.levelPadding || this._getStep(i), e.itemPadding = e.itemPadding || this._getStep(i), e.dir = e.dir || n.Direction.Bottom, e.rotate = e.dir === n.Direction.Right || e.dir === n.Direction.Left;
					i = n.DirVectors[e.dir];
					this._layout(t, e), t.setBox(), e.dir !== n.Direction.Bottom && t.rotate(i);
					i = t.getBox();
					return t.translate(
					{
						x: -1 * i[0][0],
						y: -1 * i[1][0]
					}), t.setBox(), t
				}, o.prototype._layout = function (e, i)
				{
					var n = this,
						t = e.getRoot();
					if (t.x = t.y = 0, 1 == e.getLevels().length) return e._symmetry = !0, "0";
					var o = t.kids.map(function (t)
						{
							return new u.default(e, t, i)
						}),
						a = {};
					o.forEach(function (t)
					{
						var e = n._layout(t, i);
						a[e] ? a[e].push(t) : a[e] = [t]
					});
					for (var r = Object.keys(a).sort(function (t, e)
						{
							var i = a[t][0],
								n = a[e][0],
								o = i._width,
								r = n._width;
							if (r < o) return -1;
							if (o < r) return 1;
							i = i.getLevels().length, n = n.getLevels().length;
							return !(n < i) && (i < n || t < e) ? 1 : -1
						}), s = 0, c = 0, l = 0; l < r.length; l++) a[r[l]].length % 2 == 1 && (s++, c = l);
					t = !1, o = !1;
					return 1 == s ? (a[r[c]][0]._symmetry && (o = !0), t = !0, 0 !== c && (r.unshift(r[c]), r.splice(c + 1, 1))) : 0 === s && (o = !0), e._symmetry = o, this._layout_place(e, a, r, t, i), e.getIString()
				}, o.prototype._layout_place = function (_, t, e, y, v)
				{
					for (var m = {
							x: 0,
							y: v.levelPadding
						}, I = !0, i = 0; i < e.length; i++) t[e[i]].forEach(function (t)
					{
						if (y)
						{
							y = !1, t.translate(m);
							for (var e = 0, i = 0, n = t.getLevelBounds(), o = 0; o < n.length; o++)
							{
								var r = n[o],
									a = r[0],
									r = r[1];
								_._bounds[o + 1] = [a, r], a < e && (e = a), i < r && (i = r)
							}
							_._tbounds = [e, i]
						}
						else
						{
							var s = I ? 1 : 0,
								c = I ? 0 : 1;
							I && t.mirror();
							for (var l = void 0, u = void 0, u = l = 999999 * (I ? -1 : 1), d = v.itemPadding, h = 0; h < t._bounds.length; h++)
							{
								var p = _.getBounds(h + 1, d, v.wide)[s] - t.getBounds(h, d, v.wide)[c];
								(I && u < p || !I && p < u) && (u = p)
							}
							t.translate(
							{
								x: u,
								y: m.y
							});
							for (var g = 0; g < _._bounds.length; g++)
							{
								var f = void 0,
									f = 0 == g || g > t._bounds.length ? _._bounds[g][s] : _._bounds[g][s] = t._bounds[g - 1][s];
								(I && l < f || !I && f < l) && (l = f)
							}
							_._tbounds[s] = l, I = !I
						}
					})
				}, o.prototype._getStep = function (t)
				{
					var e, i;
					return 0 === this._step && (e = t.length, i = 0, t.forEach(function (t)
					{
						return i += t.w + t.h
					}), this._step = i / e), this._step
				}, o);

			function o()
			{
				this._step = 0
			}
			e.default = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(38),
				o = [1, 2, 4, 8, 0, 16, 32, 64, 128],
				i = (r.prototype.getRoute = function (t, e)
				{
					t = this._map[t];
					return t && t.map[e] || null
				}, r.prototype.addRoute = function (t, e, i, n)
				{
					this.addPath(t, e, i, n), this.addPath(e, t, -i, -n)
				}, r.prototype.hasRoute = function (t, e, i)
				{
					t = this._map[t];
					return !!t && 0 < (t.dir & this._code(e, i))
				}, r.prototype.isAligned = function (t)
				{
					return !!this._map[t]
				}, r.prototype.isAxisAligned = function (t, e, i)
				{
					var n, o = this._map[t];
					if (!o) return null;
					for (n in o.map)
					{
						var r = o.map[n];
						if (e && r.dy || i && r.dx) return !1
					}
					return !0
				}, r.prototype.addPath = function (t, e, i, n, o)
				{
					var r = this._map[t];
					(r = r || (this._map[t] = {
						map:
						{},
						dir: 0
					})).map[e] = {
						dx: i,
						dy: n,
						points: o
					}, r.dir = r.dir | this._code(i, n)
				}, r.prototype._code = function (t, e)
				{
					return o[n.sign(t) + 1 + 3 * (n.sign(e) + 1)]
				}, r);

			function r()
			{
				this._map = {}
			}
			e.default = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(21);

			function s(t, e)
			{
				var i = new n.default;
				return i.importNodes(t),
				{
					g: i,
					root: e
				}
			}
			e.split = function (i)
			{
				var t = i.getNodes();
				if (t.length < 3) return [
				{
					g: i
				}];
				for (var e = t[0], n = [], o = t.length + 1; o != t.length;) o = t.length, t = t.filter(function (e)
				{
					if (1 != e.links.length) return !0;
					var t = i.hash[e.links[0].id];
					return t && (t.links = t.links.filter(function (t)
					{
						return t.id != e.id
					})), n.push(e), !1
				});
				if (t.length < 2) return n.filter(function (t)
				{
					return 0 < t.links.length
				}).forEach(function (t)
				{
					t.links[0].links.push(t)
				}), i.root(i.toTree(e)), [
				{
					g: i
				}];
				var r = {};
				return n.forEach(function (t)
				{
					return r[t.id] = t
				}), e = n.filter(function (t)
				{
					return !r[t.links[0].id]
				}).map(function (t)
				{
					return [t]
				}), n.forEach(function (t)
				{
					var e = r[t.links[0].id];
					e && e.links.push(t)
				}), e = e.map(function (t)
				{
					for (var e, i = 0; e = t[i++];)
					{
						var n = e.links.length;
						if (1 < n)
							for (var o = 1; o < n; o++)
							{
								var r = e.links[o];
								t.push(r)
							}
					}
					var a = t[0].links.splice(0, 1)[0].id;
					return s(t, a)
				}), [s(t, null)].concat(e)
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.compose = function (t, n)
			{
				if (t.length < 2) return t[0] || null;
				var o = t[0].getBox(),
					r = n.padding,
					e = t.reduce(function (t, e)
					{
						var i = e.getBox();
						return e.translate(
						{
							x: o[0][1] - i[0][0] + r,
							y: o[1][0] - i[1][0]
						}), t.importNodes(e.getNodes()), r += n.padding + i[0][1] - i[0][0], t
					});
				return t.length && e.setGlobalBox(), e
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.decompose = function (i)
			{
				for (var n = [], t = function ()
					{
						var e = {},
							t = i.getNodes();
						if (!t.length) return {
							value: n
						};
						! function e(t, i)
						{
							i[t.id] = 1;
							t.links.forEach(function (t)
							{
								i[t.id] || e(t, i)
							})
						}(t[0], e);
						t = i.split(function (t)
						{
							return !e[t.id]
						});
						if (n.push(i), !t) return {
							value: n
						};
						i = t
					};;)
				{
					var e = t();
					if ("object" == typeof e) return e.value
				}
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(16),
				i = (o.prototype.push = function (t)
				{
					this._position !== this._state.length - 1 && (this._state = this._state.slice(0, this._position + 1));
					var e = this._state.length - 1,
						i = new Date,
						t = {
							time: i,
							state: t
						};
					500 < i.valueOf() - this._state[e].time.valueOf() ? (this._state.push(t), this._position++) : this._state[e] = t
				}, o.prototype.reset = function ()
				{
					this._inProgress || (this._state = [
					{
						time: new Date,
						state: this._data.serialize()
					}], this._position = 0)
				}, o.prototype.undo = function (t)
				{
					this.isUndo() && (t ? (this._position = 0, this._state = this._state.slice(0, 1)) : this._position--, this._apply(this._state[this._position]))
				}, o.prototype.redo = function ()
				{
					this.isRedo() && (this._position++, this._apply(this._state[this._position]))
				}, o.prototype.isUndo = function ()
				{
					return 0 < this._position
				}, o.prototype.isRedo = function ()
				{
					return this._position + 1 <= this._state.length - 1
				}, o.prototype._apply = function (t)
				{
					this._inProgress = !0, this._data.parse(t.state), this._inProgress = !1
				}, o);

			function o(t)
			{
				var e = this;
				this._data = t, this.reset(), this._data.events.on(n.DataEvents.change, function ()
				{
					e._inProgress || e.push(e._data.serialize())
				})
			}
			e.UndoManager = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(110),
				o = i(1);
			e.addHotKey = function (t, e)
			{
				n.keyManager.addHotKey(function (t)
				{
					if (o.isIE()) switch (t)
					{
					case "delete":
						return "del";
					case "arrowLeft":
						return "left";
					case "arrowRight":
						return "right";
					case "arrowUp":
						return "up";
					case "arrowDown":
						return "down"
					}
					return t
				}(t), e)
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(1),
				o = null;
			e.getFocus = function ()
			{
				return o
			}, document.addEventListener("click", function (t)
			{
				o = n.locate(t, "dhx_widget_id")
			})
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a = i(0);
			e.getIconGroup = function (t, e, i, n, o)
			{
				return a.el(".icons_group",
				{
					onclick: [t, e]
				}, i.map(function (t)
				{
					return a.el("div",
					{
						class: (t.css || "") + (" " + (t.id === n ? "dhx_selected" : "")),
						dhx_id: o && n === t.id ? "" : t.id
					}, [t.el || null])
				}))
			}, e.getSelect = function (i, n, t, o)
			{
				var r = t[0],
					t = t.map(function (t)
					{
						var e;
						if (!t.disabled) return t.id === o && (r = t, e = "dhx_selected_option"), a.el(".dhx_select_option",
						{
							onmousedown: [i, n, t.id],
							tabIndex: 1,
							class: e
						}, [t.el ? t.el() : a.el("div",
						{
							class: t.class || ""
						}, t.text || ""), t.id === o && a.el(".dxi.dxi-check")])
					});
				return [a.el(".dhx_custom_select",
				{
					tabIndex: 1
				}, [a.el(".dhx_select_label", [r.el ? r.el() : a.el("div",
				{
					class: r.class || ""
				}, r.text || "")]), a.el(".dhx_select_content", t)])]
			}
		}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(147)), n(e(95)), n(e(94)), n(e(86));
			e = e(87);
			i.locale = e.default
		}, function (t, e, i)
		{
			"use strict";

			function n(t)
			{
				t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, n)
				{
					return e + e + i + i + n + n
				});
				t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
				return t ?
				{
					r: parseInt(t[1], 16),
					g: parseInt(t[2], 16),
					b: parseInt(t[3], 16)
				} : null
			}

			function o(t)
			{
				var e, i, n, o = t.r / 255,
					r = t.g / 255,
					a = t.b / 255,
					s = Math.max(o, r, a),
					c = s - Math.min(o, r, a),
					l = function (t)
					{
						return (s - t) / 6 / c + .5
					};
				return 0 == c ? e = i = 0 : (i = c / s, n = l(o), t = l(r), l = l(a), o === s ? e = l - t : r === s ? e = 1 / 3 + n - l : a === s && (e = 2 / 3 + t - n), e < 0 ? e += 1 : 1 < e && --e),
				{
					h: Math.floor(360 * e),
					s: i,
					v: s
				}
			}
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.HSVtoRGB = function (t)
			{
				var e, i = {
						r: 0,
						g: 0,
						b: 0
					},
					n = t.h / 60,
					o = t.s,
					r = t.v,
					t = Math.floor(n) % 6,
					n = n - Math.floor(n),
					a = 255 * r * (1 - o),
					s = 255 * r * (1 - o * n),
					c = 255 * r * (1 - o * (1 - n));
				switch (r *= 255, t)
				{
				case 0:
					i.r = r, i.g = c, i.b = a;
					break;
				case 1:
					i.r = s, i.g = r, i.b = a;
					break;
				case 2:
					i.r = a, i.g = r, i.b = c;
					break;
				case 3:
					i.r = a, i.g = s, i.b = r;
					break;
				case 4:
					i.r = c, i.g = a, i.b = r;
					break;
				case 5:
					i.r = r, i.g = a, i.b = s
				}
				for (e in i) i[e] = Math.round(i[e]);
				return i
			}, e.RGBToHex = function (i)
			{
				return Object.keys(i).reduce(function (t, e)
				{
					e = i[e].toString(16).toUpperCase();
					return t + (e = 1 === e.length ? "0" + e : e)
				}, "#")
			}, e.HexToRGB = n, e.RGBToHSV = o, e.HexToHSV = function (t)
			{
				return o(n(t))
			}, e.isHex = function (t)
			{
				return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			e.default = {
				cancel: "Cancel",
				select: "Select",
				rightClickToDelete: "Right click to delete",
				customColors: "Custom colors",
				addNewColor: "Add new color"
			}
		}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(150)), n(e(96))
		}, function (t, e, i)
		{
			"use strict";
			var s = this && this.__spreadArrays || function ()
			{
				for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
				for (var n = Array(t), o = 0, e = 0; e < i; e++)
					for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
				return n
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(91),
				c = i(22),
				o = i(0),
				l = i(13),
				u = i(160),
				d = i(161);

			function r(t, e)
			{
				n.drag.start(t, e.data.resizer, e.data.p)
			}

			function h(t, e)
			{
				var i = e.x - t.x,
					t = e.y - t.y;
				return Math.sqrt(i * i + t * t)
			}
			e.getLength = h;
			a.prototype.render = function (t, e)
			{
				if (!t)
				{
					var i = [this.connect.getPoints(t, e)];
					return o.el(".dhx_controls",
					{
						style:
						{
							zIndex: 0
						},
						onmousedown:
						{
							".dhx_connect_grip": r,
							".dhx_connect_point": r
						}
					}, i)
				}
				if (!1 !== t.$shape.canResize())
				{
					e = "org" === this._diagram.config.type ? [this._resize.getPoints(t, e)] : [this.connect.getPoints(t, e), this.connect.getItemId() !== t.id && this._resize.getPoints(t, e)];
					return o.el(".dhx_controls",
					{
						style:
						{
							zIndex: 0
						},
						onmousedown:
						{
							".dhx_resize_grip": r,
							".dhx_connect_grip": r,
							".dhx_connect_point": r,
							".dhx_shape_rotate": r
						},
						onclick:
						{
							".dhx_resize_grip": this._gripClick
						}
					}, e)
				}
			}, a.prototype.setNearShape = function (t)
			{
				this.connect.setNearShape(t)
			}, a.prototype.toggleNearShape = function (t)
			{
				this.connect.toggleNearShape(t)
			}, a.prototype.getPoint = function (t, e)
			{
				var i = this._diagram.getRootView().node.el,
					n = i.getBoundingClientRect(),
					o = this._diagram.config.margin,
					r = this._diagramSize ||
					{
						left: -o.x,
						top: -o.y
					},
					a = this._diagram.config.scale,
					s = i.scrollLeft,
					i = i.scrollTop;
				return {
					x: (t - n.left + s) / a - o.x + (r.left + o.x),
					y: (e - n.top + i) / a - o.y + (r.top + o.y)
				}
			}, a.prototype.onMove = function (t, e, i)
			{
				var n = this._diagram.selection.getItem();
				i.rotate && this._rotate(t, n), i.$break && (i.$break = !1, r = {
					x: i.dx,
					y: i.dy,
					$custom: !0
				}, n.points.splice(i.i, 0, r));
				var o = {
						x: n.x
					},
					r = this._diagram.config.gridStep;
				e.x = Math.round(e.x / r) * r, e.y = Math.round(e.y / r) * r, n.$shape.isConnector() ? this.connect.moveConnector(t, n, e, i) : (1 === i.dx ? (o.x += e.x, o.width = n.width - e.x) : o.width = n.width - e.x * i.dx, 30 <= o.width || (o.width = n.width), o.height = n.height - e.y * i.dy, 30 <= o.height ? "org" === this._diagram.config.type ? o.dy = (n.dy || 0) + e.y * (1 === i.dy ? 1 : 0) : o.y = (n.y || 0) + e.y * (1 === i.dy ? 1 : 0) : o.height = n.height, this._diagram.data.update(n.id, o))
			}, a.prototype.onUp = function ()
			{
				this.connect.onUp(), this._diagram.paint(), this._events.fire(c.DiagramEditorEvents.shapeResize, [])
			}, a.prototype._rotate = function (t, e)
			{
				var i = this.getPoint(t.screenX, t.screenY),
					n = i.x,
					o = i.y,
					t = e.x + e.width / 2,
					i = e.y + e.height / 2,
					t = Math.atan2(o - i, n - t);
				t < 0 && (t += 2 * Math.PI);
				t = Math.round(t * (180 / Math.PI));
				this._diagram.data.update(e.id,
				{
					angle: t
				})
			}, a.prototype._gripClick = function (t, e)
			{
				var i = e.data.resizer._diagram.selection.getItem(),
					e = e.data.p;
				i.$shape.isConnector() && !e.$break && (i.$selectedPoint = e.i)
			}, i = a;

			function a(t, r, e)
			{
				var a = this;
				this._events = t, this._diagram = r, this.connect = new u.Connect(this, this._diagram), this._blockSelection = e, this._resize = new d.Resize(this, this._diagram), this._diagram.events.on(l.DiagramEvents.shapeMouseDown, function (t, e)
				{
					var i = a._diagram.config.gridStep;
					a.connect.removeNearShape();
					var o = a._diagram.data.getItem(t);
					e.shiftKey || e.altKey || a._diagram.selection.add(t), o.$connectMode && a.connect.setNearShape(o), o.$shape.isConnector() && o.$selectedPoint && (o.$selectedPoint = ""), o.$blockSelected || e.shiftKey || e.altKey || a._blockSelection.clearSelection(), n.drag.start(e,
					{
						onMove: function (t, n, e)
						{
							n.x = Math.round(n.x / i) * i, n.y = Math.round(n.y / i) * i, (o.$blockSelected ? a._blockSelection.getSelected().map(function (t)
							{
								return r.data.getItem(t)
							}) : [o]).forEach(function (t)
							{
								return r.data.update(t.id, (e = t, i = n, void 0 === (t = "org" === r.config.type ? "org" : "default") && (t = "default"), "org" === t ?
								{
									dx: (e.dx || 0) + i.x,
									dy: (e.dy || 0) + i.y
								} :
								{
									x: (e.x || 0) + i.x,
									y: (e.y || 0) + i.y
								}));
								var e, i
							}), o.$shape.isConnector() || r.data.findAll(function (t)
							{
								return t.$shape.isConnector() && (t.from === o.id || t.to === o.id)
							}).forEach(function (t)
							{
								t.customGap = void 0
							}), r.toolbar.hide()
						},
						onUp: function ()
						{
							r.toolbar.show(), r.paint(), a._events.fire(c.DiagramEditorEvents.shapeMove, [])
						}
					}, null), a._diagram.events.on(l.DiagramEvents.beforeRender, function (t)
					{
						return a._diagramSize = t
					})
				}), this._diagram.events.on(l.DiagramEvents.shapedDblClick, function (t, e)
				{
					var n, o, i = a._diagram.data.getItem(t);
					i.$shape.isConnector() && ((n = a.getPoint(e.clientX, e.clientY)).$custom = !0, o = 1 / 0, e = i.points.reduce(function (t, e, i)
					{
						e = h(e, n);
						return e < o && (o = e, t = i), t
					}, 1), (i = s(i.points)).splice(e, 0, n), a._diagram.data.update(t,
					{
						points: i
					}), a._diagram.paint())
				}), this._diagram.events.on(l.SelectionEvents.afterUnSelect, function (t)
				{
					t = a._diagram.data.getItem(t);
					t && t.$shape.isConnector() && t.$selectedPoint && (t.$selectedPoint = null)
				})
			}
			e.Controls = i
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				},
				a = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var s, c = i(2),
				l = i(0),
				u = i(8),
				d = i(9),
				h = i(13),
				p = i(22),
				g = i(81),
				f = i(109),
				_ = i(91),
				y = i(82),
				v = i(83),
				o = (s = d.View, o(m, s), m.prototype.paint = function ()
				{
					this._layout.paint(), this.diagram.paint()
				}, m.prototype.import = function (t)
				{
					this.diagram.data.parse(t.data.serialize())
				}, m.prototype.parse = function (t)
				{
					this.diagram.data.parse(t)
				}, m.prototype.serialize = function ()
				{
					return this.diagram.data.map(function (t)
					{
						var e = r(
						{}, t);
						return Object.keys(e).forEach(function (t)
						{
							!t.startsWith("$") && "preview" !== t || delete e[t]
						}), e
					})
				}, m.prototype.getRootView = function ()
				{
					return this._layout.getRootView()
				}, m.prototype._setHandlers = function ()
				{
					var n = this;
					this._initHotkeys(), this.diagram.events.on(h.DataEvents.change, function ()
					{
						return n.paint()
					}), this.diagram.events.on(h.DiagramEvents.emptyAreaMouseDown, function (t)
					{
						var e, i;
						n.diagram.selection.remove(), n._resizer.connect.removeNearShape(), n._sidebar.empty(), n.paint(), 0 === t.button && (e = n.diagram.getRootView().node.el, i = n._blockSelection.getCurrentCoordinates(t, e), n._selectionBox = new f.SelectionBox(i), _.drag.start(t,
						{
							onMove: function (t)
							{
								n._selectionBox.end = n._blockSelection.getCurrentCoordinates(t, e), n.paint(), n.events.fire(p.DiagramEditorEvents.blockSelectionAreaChanged, [
								{
									start: n._selectionBox.start,
									end: n._selectionBox.end
								}])
							},
							onUp: function ()
							{
								n._selectionBox.isValid() ? n.events.fire(p.DiagramEditorEvents.blockSelectionFinished, [
								{
									start: n._selectionBox.start,
									end: n._selectionBox.end
								}, t.shiftKey ? "add" : t.altKey ? "remove" : "create"]) : n._blockSelection.clearSelection(), n._selectionBox = null, n.paint()
							}
						}, null))
					}), this.diagram.events.on(h.DiagramEvents.shapeClick, function (t, e)
					{
						n._itemsHandlerClick(t, e)
					}), this.diagram.events.on(h.DiagramEvents.lineClick, function (t, e)
					{
						n._itemsHandlerClick(t, e)
					}), this.events.on(p.DiagramEditorEvents.blockSelectionFinished, function (t, e)
					{
						n._blockSelection.updateSelection(t, e)
					}), this.events.on(p.DiagramEditorEvents.importData, this._importFile), l.awaitRedraw().then(function ()
					{
						n.getRootView().node.el.addEventListener("wheel", function (t)
						{
							(t.ctrlKey || t.metaKey) && (0 < (t.deltaY || t.detail || t.wheelDelta) ? n.events.fire(p.DiagramEditorEvents.zoomOut) : n.events.fire(p.DiagramEditorEvents.zoomIn), t.preventDefault ? t.preventDefault() : t.returnValue = !1)
						})
					})
				}, m.prototype._checkEditMode = function ()
				{
					this._layout.getCell("left") && (this._layout.getCell("left").config.hidden = !this.config.editMode), this._layout.getCell("right").config.hidden = !this.config.editMode;
					var t = this._layout.getCell("center");
					this.config.editMode && t.attach(this.diagram), this.config.editMode && (t.config.css = t.config.css.replace(" dhx_preview_mode", "")), this.config.editMode || -1 !== t.config.css.indexOf(" dhx_preview_mode") || (t.config.css += " dhx_preview_mode")
				}, m.prototype._removeShape = function (e)
				{
					var i = this;
					this.diagram.selection.remove(e), this.diagram.data.remove(e), this.diagram.data.forEach(function (t)
					{
						t.from !== e && t.to !== e || i.diagram.data.remove(t.id)
					}), this._sidebar.empty(), this._resizer.onUp()
				}, m.prototype._initHotkeys = function ()
				{
					var t = this,
						e = this.diagram._uid;
					y.addHotKey("delete", function ()
					{
						t._sidebar.isItemsSelected() || v.getFocus() !== e || t._removeSelected()
					}), y.addHotKey("backspace", function ()
					{
						t._sidebar.isItemsSelected() || v.getFocus() !== e || t._removeSelected()
					}), y.addHotKey("ctrl+z", function ()
					{
						t._sidebar.isItemsSelected() || v.getFocus() !== e || t.history.undo()
					}), y.addHotKey("ctrl+shift+z", function ()
					{
						t._sidebar.isItemsSelected() || v.getFocus() !== e || t.history.redo()
					})
				}, m.prototype._getDefaults = function ()
				{
					var e = {
						text:
						{
							text: "Text"
						}
					};
					return a(Object.keys(h.flowShapes)).forEach(function (t)
					{
						e[t] = {
							text: t[0].toUpperCase() + t.slice(1),
							fill: "#EEF1F6",
							stroke: "#B8C6D6",
							extraLinesStroke: "#B8C6D6"
						}
					}), ["card", "img-card"].forEach(function (t)
					{
						e[t] = {
							text: "Text",
							title: "Title",
							headerColor: "#03A9F4",
							height: 90,
							width: "img-card" === t ? 210 : 140
						}
					}), e = r(r(
					{}, e), this.config.defaults)
				}, m.prototype._importFile = function (t)
				{
					this.diagram.data.parse(t)
				}, m.prototype._removeSelected = function ()
				{
					var e = this,
						t = this.diagram.selection.getId();
					t ? this._removeShape(t) : this._blockSelection.getSelected().length && this._blockSelection.getSelected().forEach(function (t)
					{
						e._removeShape(t)
					})
				}, m.prototype._itemsHandlerClick = function (t, e)
				{
					var i;
					e.shiftKey ? ((i = this.diagram.selection.getId()) && (this.diagram.selection.remove(i), this._blockSelection.add(i)), this._blockSelection.add(t)) : e.altKey ? (this.diagram.selection.remove(t), this._blockSelection.remove(t)) : this._blockSelection.clearSelection()
				}, m);

			function m(t, e)
			{
				var i = this,
					e = c.extend(
					{
						shapeType: "card",
						gridStep: 10,
						reservedWidth: 40,
						editMode: !0,
						lineGap: 20,
						defaults:
						{},
						scale: 1,
						gapPreview: "6px 8px",
						scalePreview: .5,
						shapeBarWidth: 295,
						autoplacement:
						{},
						controls:
						{
							apply: !0,
							reset: !0,
							export: !0,
							import: !0,
							autoLayout: !0,
							historyManager: !0,
							editManager: !0,
							scale: !0,
							gridStep: !0
						}
					}, e);
				return (i = s.call(this, t, e) || this).version = "3.0.4", i.events = new u.EventSystem(i), i._initDiagram(), i.history = new g.UndoManager(i.diagram.data), i._initUI(t), i._setHandlers(), i.diagram.config.autoplacement = r(r(
				{}, i.diagram.config.autoplacement), i.config.autoplacement), i
			}
			e.BaseDiagramEditor = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = (o.prototype.start = function (t, e, i)
			{
				this._handler = e, this._context = i, this._start = {
					x: t.clientX,
					y: t.clientY
				}, document.addEventListener("mousemove", this._moveHandler), document.addEventListener("mouseup", this._upHandler), document.body.classList.add("dhx_noselect")
			}, o);

			function o()
			{
				var i = this;
				this._moveHandler = function (t)
				{
					var e;
					(5 < Math.abs(t.clientX - i._start.x) || 5 < Math.abs(t.clientY - i._start.y)) && (e = {
						x: t.clientX - i._start.x,
						y: t.clientY - i._start.y
					}, i._handler.onMove(t, e, i._context), i._start.x += e.x, i._start.y += e.y)
				}, this._upHandler = function (t)
				{
					document.removeEventListener("mousemove", i._moveHandler), document.removeEventListener("mouseup", i._upHandler), document.body.classList.remove("dhx_noselect"), i._handler.onUp(t), i._handler = i._start = null
				}
			}
			e.drag = new n
		}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(111)), n(e(43))
		}, function (t, e, i)
		{
			"use strict";
			var j = this && this.__assign || function ()
			{
				return (j = Object.assign || function (t)
				{
					for (var e, i = 1, n = arguments.length; i < n; i++)
						for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t
				}).apply(this, arguments)
			};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(13),
				r = i(0),
				a = i(115),
				s = i(25),
				c = i(22),
				i = (n.prototype.setValues = function ()
				{
					var t, e, i, n, o, r, a, s, c, l, u, d, h, p, g, f, _, y, v, m, I, x, C, b, w, A, M, D, S = this._diagram.selection.getItem();
					S && (t = S.backArrow, e = S.forwardArrow, i = S.connectType, n = S.cornersRadius, o = S.horizontalAlign, r = S.verticalAlign, a = S.width, s = S.height, c = S.angle, l = S.x, u = S.y, d = S.fill, h = S.stroke, p = S.strokeWidth, g = S.strokeType, f = S.fontColor, _ = S.fontSize, y = S.lineHeight, v = S.fontStyle, m = S.fontWeight, I = S.textAlign, x = S.textVerticalAlign, C = S.dx, b = S.dy, D = S.headerColor, w = S.fromSide, M = S.toSide, A = "org" === this._diagram.config.type, M = S.$shape.isConnector() ?
					{
						backArrow: t || "",
						forwardArrow: e || "",
						connectType: i || "elbow",
						cornersRadius: n,
						fromSide: w,
						toSide: M
					} :
					{}, D = j(j(
					{}, S),
					{
						align:
						{
							horizontal: o || "",
							vertical: r || ""
						},
						arrange:
						{
							x: l || 0,
							y: u || 0,
							width: a,
							height: s,
							angle: c || 0
						},
						fill: d || "",
						strokeProps: j(
						{
							stroke: h || "#2196F3",
							strokeWidth: p,
							strokeType: g || "line"
						}, M),
						textProps:
						{
							fontColor: f,
							fontSize: _,
							lineHeight: y,
							fontStyle: v,
							fontWeight: m,
							textAlign: I,
							textVerticalAlign: x
						},
						position: A ?
						{
							dx: C || 0,
							dy: b || 0
						} :
						{
							dx: l || 0,
							dy: u || 0
						},
						size:
						{
							width: a,
							height: s
						},
						headerColor: D || "",
						gridStep:
						{
							step: this._diagram.config.gridStep
						}
					}), this._ui.setValues(D))
				}, n.prototype.getValues = function ()
				{
					var t = "org" === this._diagram.config.type,
						e = j(
						{}, this._ui.getValues());
					t && e.position ? (e.dx = +e.position.dx, e.dy = +e.position.dy, delete e.position) : e.position && (e.x = +e.position.dx, e.y = +e.position.dy, delete e.position), e.size && (e.width = +e.size.width, e.height = +e.size.height, delete e.size), e.arrange && (e.x = +e.arrange.x, e.y = +e.arrange.y, e.width = +e.arrange.width, e.height = +e.arrange.height, e.angle = +e.arrange.angle, delete e.arrange), e.align && (e.horizontalAlign = e.align.horizontal, e.verticalAlign = e.align.vertical, "bottom" === e.align.vertical && (e.dy = e.height), "top" === e.align.vertical && (e.dy = -e.height), "middle" === e.align.vertical && (e.dy = 0), "center" === e.align.horizontal && (e.dx = 0), "left" === e.align.horizontal && (e.dx = -e.width), "right" === e.align.horizontal && (e.dx = e.width)), e.strokeProps && (e.connectType !== e.strokeProps.connectType && (e.points = null), delete(e = j(j(
					{}, e), e.strokeProps)).strokeProps), e.textProps && delete(e = j(j(
					{}, e), e.textProps)).textProps, e.gridStep && (0 < (i = parseFloat(e.gridStep.step)) && this._events.fire(c.DiagramEditorEvents.changeGridStep, [i]), delete e.gridStep);
					var i = this._diagram.selection.getId();
					this._diagram.data.update(i, e)
				}, n.prototype.clear = function ()
				{
					this._ui.clear()
				}, n.prototype.empty = function ()
				{
					this._config.showGridStep ? this._ui.data.parse([
					{
						id: "gridStep",
						type: "inputsGroup",
						label: o.locale.gridStep,
						validate: "number",
						options: [
						{
							id: "step",
							value: this._diagram.config.gridStep,
							icon: function ()
							{
								return r.el(".dxi.dxi-grid-step")
							},
							validate: "number"
						}]
					}]) : this._ui.data.parse([
					{
						type: "empty"
					}])
				}, n.prototype.select = function (t)
				{
					this._ui.selectItem(t)
				}, n.prototype.isItemsSelected = function ()
				{
					return this._ui.isItemsSelected()
				}, n.prototype.getUI = function ()
				{
					return this._ui
				}, n.prototype.paint = function ()
				{
					this._ui.paint()
				}, n.prototype._updateData = function ()
				{
					var e = this,
						t = this._diagram.selection.getItem().$shape.getMetaInfo().filter(function (t)
						{
							return "gridStep" !== t.id || e._config.showGridStep ? t : null
						});
					this._ui.data.parse(t)
				}, n);

			function n(t, e, i)
			{
				var n = this;
				this._diagram = t, this._config = e, this._events = i, this._ui = new a.Property(null), this._ui.events.on(s.PropertyEvents.change, function ()
				{
					return n.getValues()
				}), this._diagram.events.on(o.DataEvents.change, function ()
				{
					return n.setValues()
				}), this.empty(), this._diagram.events.on(o.SelectionEvents.afterSelect, function ()
				{
					r.awaitRedraw().then(function ()
					{
						n._updateData(), n.setValues()
					})
				}), this._events.on(c.DiagramEditorEvents.redoButton, function ()
				{
					n._diagram.selection.getItem() ? (n._updateData(), n.setValues()) : (n._diagram.selection.remove(), n.empty())
				}), this._events.on(c.DiagramEditorEvents.undoButton, function ()
				{
					n._diagram.selection.remove(), n.empty()
				}), this._ui.getRootView().hooks = {
					didRedraw: function ()
					{
						n._selectItem && (n.select(n._selectItem), n._selectItem = null)
					}
				}
			}
			e.Sidebar = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.grayShades = ["#000000", "#4C4C4C", "#666666", "#808080", "#999999", "#B3B3B3", "#CCCCCC", "#E6E6E6", "#F2F2F2", "#FFFFFF"], e.palette = [
				["#D4DAE4", "#B0B8CD", "#949DB1", "#727A8C", "#5E6677", "#3F4757", "#1D2534"],
				["#FFCDD2", "#FE9998", "#F35C4E", "#E94633", "#D73C2D", "#CA3626", "#BB2B1A"],
				["#F9E6AD", "#F4D679", "#EDB90F", "#EAA100", "#EA8F00", "#EA7E00", "#EA5D00"],
				["#BCE4CE", "#90D2AF", "#33B579", "#36955F", "#247346", "#1D5B38", "#17492D"],
				["#BDF0E9", "#92E7DC", "#02D7C5", "#11B3A5", "#018B80", "#026B60", "#024F43"],
				["#B3E5FC", "#81D4FA", "#29B6F6", "#039BE5", "#0288D1", "#0277BD", "#01579B"],
				["#AEC1FF", "#88A3F9", "#5874CD", "#2349AE", "#163FA2", "#083596", "#002381"],
				["#C5C0DA", "#9F97C1", "#7E6BAD", "#584A8F", "#4F4083", "#473776", "#3A265F"],
				["#D6BDCC", "#C492AC", "#A9537C", "#963A64", "#81355A", "#6E3051", "#4C2640"],
				["#D2C5C1", "#B4A09A", "#826358", "#624339", "#5D4037", "#4E342E", "#3E2723"]
			]
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (e = e.ColorpickerEvents || (e.ColorpickerEvents = {})).change = "change", e.apply = "apply", e.cancelClick = "cancelClick", e.modeChange = "modeChange", e.selectClick = "selectClick", e.colorChange = "colorChange", e.viewChange = "viewChange"
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), (e = e.PopupEvents || (e.PopupEvents = {})).beforeHide = "beforeHide", e.beforeShow = "beforeShow", e.afterHide = "afterHide", e.afterShow = "afterShow", e.click = "click"
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				},
				a = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var s, c = i(0),
				l = i(25),
				u = i(44),
				i = i(14),
				o = (s = i.Text, o(d, s), d.prototype.setValue = function (t, e)
				{
					for (var i in t)
					{
						var n = this._map[i];
						this._setValue(n, t[i], !0)
					}
					e || this._evs.fire(l.PropertyEvents.change)
				}, d.prototype.getValue = function ()
				{
					for (var t = {}, e = this._config.options, i = 0; i < e.length; i++)
					{
						var n = e[i];
						t[n.id] = n.value
					}
					return t
				}, d.prototype.clear = function ()
				{
					for (var t = this._config.options, e = {}, i = 0; i < t.length; i++) e[t[i].id] = "";
					this.setValue(e, !0)
				}, d.prototype.toVDOM = function ()
				{
					for (var t = this._config.options, e = t.length, i = [], n = [], o = 0; o < e; o++)
					{
						var r = t[o];
						n.push(c.el("input",
						{
							type: "text",
							name: r.id,
							value: r.value,
							index: o,
							class: r.invalid ? "dhx_invalid" : "",
							_ref: this._uid + o,
							onchange: this._handlers.change,
							oninput: this._handlers.change
						})), i.push(c.el("span", r.label))
					}
					return c.el(".edit-section", [c.el(".inputs_group", a([c.el("span", this._config.label)], n)), c.el(".inputs_group_desc", i)])
				}, d.prototype._changed = function (t)
				{
					var e = t.target.value,
						i = t.target.getAttribute("index"),
						i = this._config.options[i];
					e !== i.value && (u.validate(e, i.validate) ? (t.target.setAttribute("class", ""), this._setValue(i, e)) : t.target.setAttribute("class", "dhx_invalid"))
				}, d.prototype._setValue = function (t, e, i)
				{
					var n = t.value;
					t.value = e, i || this._evs.fire(l.PropertyEvents.change, [t.id, e, n])
				}, d);

			function d(t, e)
			{
				var i = s.call(this, t, e) || this;
				return i._map = {}, t.options = t.options.map(function (t)
				{
					return i._map[t.id] = t, r(
					{}, t)
				}), i
			}
			e.Inputs = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(13),
				i = (o.prototype.updateSelection = function (t, i)
				{
					var n = this;
					void 0 === i && (i = "create");
					var o = (t.start.x < t.end.x ? t.start : t.end).x,
						r = (t.end.x > t.start.x ? t.end : t.start).x,
						a = (t.start.y < t.end.y ? t.start : t.end).y,
						s = (t.end.y > t.start.y ? t.end : t.start).y;
					this._diagram.data.map(function (t)
					{
						return t
					}).forEach(function (t)
					{
						var e;
						("org" !== n._diagram.config.type || t.$shape.isConnector()) && "org" === n._diagram.config.type || (e = t.$shape.getBox(), !t.hidden && e.left >= o && e.right <= r && e.top >= a && e.bottom <= s ? n._diagram.data.update(t.id,
						{
							$blockSelected: "add" === i || "create" === i
						}) : "create" === i && n._diagram.data.update(t.id,
						{
							$blockSelected: !1
						}), n._diagram.data.update(t.id,
						{
							$selected: !1
						}))
					})
				}, o.prototype.clearSelection = function ()
				{
					var e = this;
					this._diagram.data.map(function (t)
					{
						return t
					}).forEach(function (t)
					{
						e._diagram.data.update(t.id,
						{
							$blockSelected: !1
						})
					})
				}, o.prototype.add = function (t)
				{
					this._diagram.data.update(t,
					{
						$blockSelected: !0
					})
				}, o.prototype.remove = function (t)
				{
					this._diagram.data.update(t,
					{
						$blockSelected: !1
					})
				}, o.prototype.getSelected = function ()
				{
					return this._diagram.data.map(function (t)
					{
						return !!t.$blockSelected && t.id
					}).filter(function (t)
					{
						return t
					})
				}, o.prototype.getCurrentCoordinates = function (t, e)
				{
					var i = e.getBoundingClientRect(),
						n = this._diagram.config.margin,
						o = this._diagramSize ||
						{
							left: -n.x,
							top: -n.y
						},
						r = this._diagram.config.scale,
						a = e.scrollLeft,
						e = e.scrollTop;
					return {
						x: (t.clientX - i.left + a) / r - n.x + (o.left + n.x),
						y: (t.clientY - i.top + e) / r - n.y + (o.top + n.y),
						$rx: t.clientX - i.left + a,
						$ry: t.clientY - i.top + e
					}
				}, o);

			function o(t)
			{
				var e = this;
				this.diagram = t, this._diagram = t, this._diagram.events.on(n.DiagramEvents.beforeRender, function (t)
				{
					return e._diagramSize = t
				})
			}
			e.BlockSelection = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(23);
			e.buttons = [
			{
				content: n.addIcon,
				id: "add"
			},
			{
				content: n.horizontalIcon,
				id: "horizontal",
				check: function (t)
				{
					return t.$kids && t.$kids.length
				},
				css: function (t)
				{
					return "vertical" !== t.dir ? "dhx_active" : ""
				}
			},
			{
				content: n.verticalIcon,
				id: "vertical",
				check: function (t)
				{
					return t.$kids && t.$kids.length
				},
				css: function (t)
				{
					return "vertical" === t.dir ? "dhx_active" : ""
				}
			},
			{
				content: n.removeIcon,
				id: "remove",
				check: function (t)
				{
					return !!t.$parent
				},
				css: function ()
				{
					return "dhx_icon_remove"
				}
			}], e.freeEditorButtons = [
			{
				content: function ()
				{
					return n.getIcon("duplicate")
				},
				id: "copy",
				check: function (t)
				{
					return !t.$shape.isConnector()
				}
			},
			{
				content: function ()
				{
					return n.getIcon("connect")
				},
				id: "connect",
				check: function (t)
				{
					return !t.$shape.isConnector()
				},
				css: function (t)
				{
					return t.$connectMode ? "dhx_active_icon" : ""
				}
			},
			{
				content: n.removeIcon,
				id: "removePoint",
				check: function (t)
				{
					return t.$shape.isConnector() && t.$selectedPoint
				},
				css: function (t)
				{
					return t.$connectMode ? "dhx_active_icon" : ""
				}
			},
			{
				content: n.removeIcon,
				id: "remove",
				css: function ()
				{
					return "dhx_icon_remove"
				},
				check: function (t)
				{
					return !t.$selectedPoint
				}
			}]
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var u = i(0),
				d = i(13),
				h = i(22);

			function p(t, e)
			{
				e.data.editor.history.undo(!0), e.data.editor.events.fire(h.DiagramEditorEvents.resetButton)
			}

			function g(t, e)
			{
				e.data.editor.events.fire(h.DiagramEditorEvents.applyButton)
			}

			function f(t, e)
			{
				e.data.editor.history.undo(), e.data.editor.events.fire(h.DiagramEditorEvents.undoButton)
			}

			function _(t, e)
			{
				e.data.editor.history.redo(), e.data.editor.events.fire(h.DiagramEditorEvents.redoButton)
			}

			function y(t, e)
			{
				var i = e.data.editor;
				"in" === e.data.dir ? i.events.fire(h.DiagramEditorEvents.zoomIn) : i.events.fire(h.DiagramEditorEvents.zoomOut)
			}

			function v(t, e)
			{
				e.data.editor.events.fire(h.DiagramEditorEvents.visibility)
			}

			function m(t, e)
			{
				e.data.editor.events.fire(h.DiagramEditorEvents.exportData)
			}

			function I(t, e)
			{
				e.data.editor.events.fire(h.DiagramEditorEvents.autoLayout)
			}
			e.topbar = function (n)
			{
				var t = n.config.controls,
					e = n.history,
					i = u.el("button",
					{
						class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_link dhx_button__topbar",
						dhx_id: "resetAll",
						_data:
						{
							editor: n
						},
						onclick: [p]
					}, [u.el("span.dhx_button__text", d.locale.resetChanges)]),
					o = u.el("button",
					{
						class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_flat dhx_button__topbar",
						dhx_id: "applyAll",
						_data:
						{
							editor: n
						},
						onclick: [g]
					}, [u.el("span.dhx_button__text", d.locale.applyAll)]),
					r = u.el("button",
					{
						class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_link dhx_button__topbar",
						dhx_id: "exportData",
						_data:
						{
							editor: n
						},
						onclick: [m]
					}, [u.el("span.dhx_button__text", d.locale.exportData)]),
					a = u.el("label",
					{
						class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_link dhx_button__topbar",
						dhx_id: "importData",
						_data:
						{
							editor: n
						},
						for: "file-upload"
					}, [u.el("span.dhx_button__text", d.locale.importData), u.el("input",
					{
						id: "file-upload",
						type: "file",
						style:
						{
							display: "none"
						},
						accept: "application/JSON",
						onchange: [function (t)
						{
							var t = t.target,
								i = new FileReader;
							i.onload = function ()
							{
								var t, e;
								t = n, e = i.result, t.events.fire(h.DiagramEditorEvents.importData, [e])
							}, i.readAsText(t.files[0])
						}]
					})]),
					s = u.el("button",
					{
						class: "dhx_button dhx_button--size_medium dhx_button--color_primary dhx_button--view_flat dhx_button__topbar",
						dhx_id: "autoLayout",
						_data:
						{
							editor: n
						},
						onclick: [I]
					}, [u.el("span.dhx_button__text", d.locale.autoLayout)]),
					c = u.el(".dhx_editor_scale", [u.el(".dhx_zoom_in",
					{
						class: "dxi dxi-minus",
						onclick: [y],
						_data:
						{
							editor: n,
							dir: "out"
						}
					}), u.el(".dhx_scale_value", (100 * (n.config.scale || 1)).toFixed(0) + "%"), u.el(".dhx_zoom_out",
					{
						class: "dxi dxi-plus",
						onclick: [y],
						_data:
						{
							editor: n,
							dir: "in"
						}
					})]),
					l = n.config.editMode ? "dxi-eye" : "dxi-eye-off dhx_selected",
					l = u.el(".dhx_visibility",
					{
						class: "dxi " + l,
						onclick: [v],
						_data:
						{
							editor: n,
							visible: !0
						}
					}),
					c = u.el(".dhx_items_block", [t.export && r, t.import && a, t.autoLayout && s, t.editManager && l, t.scale && c]),
					e = u.el(".dhx_state_block", [u.el("div",
					{
						dhx_id: "undo",
						_data:
						{
							editor: n
						},
						onclick: [f],
						class: "undo dxi dxi-undo " + (e.isUndo() ? "undo--active" : "")
					}), u.el("div",
					{
						dhx_id: "redo",
						_data:
						{
							editor: n
						},
						onclick: [_],
						class: "redo dxi dxi-redo " + (e.isRedo() ? "redo--active" : "")
					})]);
				return u.el("div",
				{
					class: "dhx_topbar_wrap",
					style:
					{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						height: "100%"
					}
				}, [t.reset && i, t.apply && o, t.historyManager && e, c])
			}
		}, , , , function (t, e, i)
		{
			i(45), i(46), i(47), i(48), i(49), i(56), i(57), t.exports = i(105)
		}, function (t, o, e)
		{
			"use strict";
			Object.defineProperty(o, "__esModule",
			{
				value: !0
			});
			var i = e(2),
				n = e(0);
			o.awaitRedraw = n.awaitRedraw;
			n = e(40);
			o.Diagram = n.Diagram, e(106);
			n = e(16);
			o.DataCollection = n.DataCollection;
			var r = e(107),
				n = e(3),
				e = e(35);
			o.DiagramShapes = e.shapes;
			e = window;
			o.i18n = e.dhx && e.dhx.i18n ? e.dhx.i18 :
			{}, o.i18n.setLocale = function (t, e)
			{
				var i, n = o.i18n[t];
				for (i in e) n[i] = e[i]
			}, o.i18n.diagram = o.i18n.diagram || n.default;
			n = function (t, e)
			{
				void 0 === e && (e = {}), e = new("org" === e.type ? r.DiagramEditor : r.FreeEditor)(t, e), i.extend(this, e)
			};
			o.DiagramEditor = n
		}, function (t, e, i) {}, function (t, i, e)
		{
			"use strict";

			function n(t)
			{
				for (var e in t) i.hasOwnProperty(e) || (i[e] = t[e])
			}
			Object.defineProperty(i, "__esModule",
			{
				value: !0
			}), n(e(108)), n(e(162)), n(e(22));
			e = e(23);
			i.getIcon = e.getIcon
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(90),
				c = i(13),
				l = i(2),
				u = i(22),
				d = i(92),
				h = i(93),
				p = i(98),
				g = i(89),
				f = i(99),
				_ = i(100),
				y = i(82),
				v = i(81),
				m = i(83),
				o = (a = s.BaseDiagramEditor, o(I, a), I.prototype._setHandlers = function ()
				{
					var n = this;
					a.prototype._setHandlers.call(this), this.diagram.events.on(c.DiagramEvents.shapeIconClick, function (t)
					{
						var e = n.diagram.selection.getId();
						switch (t)
						{
						case "add":
							var i = {
								id: l.uid(),
								parent: e
							};
							n.diagram.data.add(i), n.diagram.showItem(i.id);
							break;
						case "remove":
							n._removeShape(e);
							break;
						case "vertical":
						case "horizontal":
							n.diagram.data.update(e,
							{
								dir: t
							})
						}
					}), this.events.on(u.DiagramEditorEvents.exportData, function ()
					{
						var t = JSON.stringify(n.serialize());
						l.downloadFile(t, "data.json", "text/json")
					}), this.events.on(u.DiagramEditorEvents.zoomIn, function ()
					{
						n.config.scale = n.config.scale || 1, n.config.scale += .05, n.diagram.config.scale = n.config.scale, n.paint()
					}), this.events.on(u.DiagramEditorEvents.zoomOut, function ()
					{
						n.config.scale = n.config.scale || 1, n.config.scale = n.config.scale <= .05 ? .05 : n.config.scale - .05, n.diagram.config.scale = n.config.scale, n.paint()
					}), this.events.on(u.DiagramEditorEvents.visibility, function ()
					{
						n.config.editMode = !n.config.editMode, n._checkEditMode(), n._layout.paint()
					}), this.events.on(u.DiagramEditorEvents.changeGridStep, function (t)
					{
						n.diagram.config.gridStep = t, n.config.gridStep = t, n.paint()
					}), this.diagram.events.on(c.DataEvents.change, function ()
					{
						return n._layout.paint()
					}), this.config.controls.autoLayout = !1
				}, I.prototype._initDiagram = function ()
				{
					this.diagram = new c.Diagram(null,
					{
						type: "org",
						select: !0,
						toolbar: f.buttons,
						defaultShapeType: this.config.shapeType,
						scroll: !0,
						gridStep: this.config.gridStep,
						margin:
						{
							y: 70,
							x: this.config.reservedWidth
						},
						lineGap: this.config.lineGap,
						defaults: this._getDefaults(),
						scale: this.config.scale
					})
				}, I.prototype._initUI = function (t)
				{
					var i = this,
						t = this._layout = new d.Layout(t,
						{
							height: "100%",
							width: "100%",
							rows: [
							{
								id: "top",
								css: "dhx_topbar shadow-bottom"
							},
							{
								css: "flex editor",
								cols: [
								{
									id: "center",
									css: "flex"
								},
								{
									id: "right",
									css: "sidebar"
								}]
							}],
							css: "dhx_org_chart_editor"
						});
					this._sidebar = new h.Sidebar(this.diagram,
					{
						showGridStep: this.config.controls.gridStep
					}, this.events), this._blockSelection = new p.BlockSelection(this.diagram), this._resizer = new g.Controls(this.events, this.diagram, this._blockSelection), this.history = new v.UndoManager(this.diagram.data), this.diagram.config.$svg = function (t)
					{
						var e = i.diagram.selection.getId(),
							e = i.diagram.data.getItem(e);
						return i._selectionBox && i._selectionBox.isValid() ? i._selectionBox.render() : i._blockSelection.getSelected().length ? null : i._resizer.render(e, t)
					}, this.diagram.events.on(c.SelectionEvents.beforeSelect, function (t)
					{
						return !i.diagram.data.getItem(t).$shape.isConnector()
					}), this.diagram.data.parse([
					{
						id: "1"
					}]), this.diagram.events.on(c.DataEvents.load, function ()
					{
						i.history.reset()
					}), t.getCell("top").attach(_.topbar, this), t.getCell("right").attach(this._sidebar.getUI()), t.getCell("center").attach(this.diagram)
				}, I.prototype._initHotkeys = function ()
				{
					var e = this;
					a.prototype._initHotkeys.call(this);
					var i = this.diagram._uid;
					y.addHotKey("arrowLeft", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || m.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							dx: (t.dx || 0) - e.config.gridStep
						})
					}), y.addHotKey("arrowRight", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || m.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							dx: (t.dx || 0) + e.config.gridStep
						})
					}), y.addHotKey("arrowUp", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || m.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							dy: (t.dy || 0) - e.config.gridStep
						})
					}), y.addHotKey("arrowDown", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || m.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							dy: (t.dy || 0) + e.config.gridStep
						})
					})
				}, I.prototype._getDefaults = function ()
				{
					var e = {
						text:
						{
							text: "Text"
						}
					};
					return ["card", "img-card"].forEach(function (t)
					{
						e[t] = {
							text: "Text",
							title: "Title",
							height: 90,
							width: "img-card" === t ? 210 : 140
						}
					}), e = r(r(
					{}, e), this.config.defaults)
				}, I);

			function I()
			{
				return null !== a && a.apply(this, arguments) || this
			}
			e.DiagramEditor = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var o = i(0),
				i = (n.prototype.render = function ()
				{
					var t = Math.abs(this.start.$rx - this.end.$rx),
						e = Math.abs(this.start.$ry - this.end.$ry),
						i = (this.start.$rx < this.end.$rx ? this.start : this.end).$rx,
						n = (this.start.$ry < this.end.$ry ? this.start : this.end).$ry;
					return o.el(".dhx_selection_box",
					{
						dhx_id: "dhx_selection_box",
						style:
						{
							left: i,
							top: n,
							width: this.start.$rx < this.end.$rx ? t : this.start.$rx - i,
							height: this.start.$ry < this.end.$ry ? e : this.start.$ry - n
						}
					})
				}, n.prototype.isValid = function ()
				{
					return this.start && this.end && 10 < Math.abs(this.start.$rx - this.end.$rx) && 10 < Math.abs(this.start.$ry - this.end.$ry)
				}, n);

			function n(t)
			{
				this.start = t
			}
			e.SelectionBox = i
		}, function (t, o, e)
		{
			"use strict";
			Object.defineProperty(o, "__esModule",
			{
				value: !0
			});
			var a = e(1);

			function s(t)
			{
				for (var e = t.toLowerCase().match(/\w+/g), i = 0, n = "", o = 0; o < e.length; o++)
				{
					var r = e[o];
					"ctrl" === r ? i += 4 : "shift" === r ? i += 2 : "alt" === r ? i += 1 : n = r
				}
				return i + n
			}
			i.prototype.addHotKey = function (t, e, i)
			{
				t = s(t);
				this._keysStorage[t] || (this._keysStorage[t] = []), this._keysStorage[t].push(
				{
					handler: e,
					scope: i
				})
			}, i.prototype.removeHotKey = function (t, e)
			{
				var i = this._keysStorage;
				if (t && delete i[n = s(t)], e)
					for (var n in i)
					{
						for (var o = [], r = 0; r < i[n].length; r++) i[n][r].scope === e && o.push(r);
						if (i[n].length === o.length) delete i[n];
						else
							for (r = o.length - 1; 0 <= r; r--) i[n].splice(o[r], 1)
					}
			}, i.prototype.exist = function (t)
			{
				t = s(t);
				return !!this._keysStorage[t]
			}, e = i;

			function i()
			{
				var r = this;
				this._keysStorage = {}, document.addEventListener("keydown", function (t)
				{
					var e = (t.ctrlKey || t.metaKey ? 4 : 0) + (t.shiftKey ? 2 : 0) + (t.altKey ? 1 : 0),
						i = 48 <= t.which && t.which <= 57 || 65 <= t.which && t.which <= 90 ? String.fromCharCode(t.which) : 32 !== t.which || a.isIE() ? t.key : t.code,
						i = e + (i && i.toLowerCase()),
						n = r._keysStorage[i];
					if (n)
						for (var o = 0; o < n.length; o++) n[o].handler(t)
				})
			}
			o.keyManager = new e, o.addHotkeys = function (t, i)
			{
				var e, n = new Date;
				for (e in t) o.keyManager.addHotKey(e, function (e)
				{
					return function (t)
					{
						i && !1 === i() || e(t)
					}
				}(t[e]), n);
				return function ()
				{
					return o.keyManager.removeHotKey(void 0, n)
				}
			}
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(112),
				s = i(43),
				c = i(0),
				o = (r = a.Cell, o(l, r), l.prototype.destructor = function ()
				{
					this.forEach(function (t)
					{
						t.getWidget() && "function" == typeof t.getWidget().destructor && t.getWidget().destructor()
					}), r.prototype.destructor.call(this)
				}, l.prototype.toVDOM = function ()
				{
					if (this._isViewLayout)
					{
						var t = [this.getCell(this.config.activeView).toVDOM()];
						return r.prototype.toVDOM.call(this, t)
					}
					var e = [];
					return this._inheritTypes(), this._cells.forEach(function (t)
					{
						t = t.toVDOM();
						Array.isArray(t) ? e = e.concat(t) : e.push(t)
					}), r.prototype.toVDOM.call(this, e)
				}, l.prototype.removeCell = function (e)
				{
					if (this.events.fire(s.LayoutEvents.beforeRemove, [e]))
					{
						var t = this.config.parent || this;
						if (t !== this) return t.removeCell(e);
						t = this.getCell(e);
						t && (t = t.getParent(), delete this._all[e], t._cells = t._cells.filter(function (t)
						{
							return t.id !== e
						}), t.paint()), this.events.fire(s.LayoutEvents.afterRemove, [e])
					}
				}, l.prototype.addCell = function (t, e)
				{
					var i;
					void 0 === e && (e = -1), this.events.fire(s.LayoutEvents.beforeAdd, [t.id]) && (i = this._createCell(t), e < 0 && (e = this._cells.length + e + 1), this._cells.splice(e, 0, i), this.paint(), this.events.fire(s.LayoutEvents.afterAdd, [t.id]))
				}, l.prototype.getId = function (t)
				{
					return t < 0 && (t = this._cells.length + t), this._cells[t] ? this._cells[t].id : void 0
				}, l.prototype.getRefs = function (t)
				{
					return this._root.getRootView().refs[t]
				}, l.prototype.getCell = function (t)
				{
					return this._root._all[t]
				}, l.prototype.forEach = function (t, e, i)
				{
					if (void 0 === i && (i = 1 / 0), this._haveCells(e) && !(i < 1))
						for (var n = (e ? this._root._all[e] : this._root)._cells, o = 0; o < n.length; o++)
						{
							var r = n[o];
							t.call(this, r, o, n), this._haveCells(r.id) && r.forEach(t, r.id, --i)
						}
				}, l.prototype.cell = function (t)
				{
					return this.getCell(t)
				}, l.prototype._getCss = function (t)
				{
					var e = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows",
						i = this.config.align ? " " + e + "--" + this.config.align : "";
					if (t) return e + " dhx_layout-cell" + (this.config.align ? " dhx_layout-cell--" + this.config.align : "");
					var n = this.config.parent ? r.prototype._getCss.call(this) : "dhx_widget dhx_layout",
						t = this.config.parent ? "" : " dhx_layout-cell";
					return n + (this.config.full ? t : " " + e) + i
				}, l.prototype._parseConfig = function ()
				{
					var e = this,
						t = this.config,
						i = t.rows || t.cols || t.views || [];
					this._xLayout = !t.rows, this._cells = i.map(function (t)
					{
						return e._createCell(t)
					})
				}, l.prototype._createCell = function (t)
				{
					var e = t.rows || t.cols || t.views ? (t.parent = this._root, new l(this, t)) : new a.Cell(this, t);
					return this._root._all[e.id] = e, t.init && t.init(e, t), e
				}, l.prototype._haveCells = function (t)
				{
					if (t)
					{
						t = this._root._all[t];
						return t._cells && 0 < t._cells.length
					}
					return 0 < Object.keys(this._all).length
				}, l.prototype._inheritTypes = function (t)
				{
					var e, i = this;
					void 0 === t && (t = this._cells), Array.isArray(t) ? t.forEach(function (t)
					{
						return i._inheritTypes(t)
					}) : ((e = t.config).rows || e.cols) && (t = t.getParent(), !e.type && t && (t.config.type ? e.type = t.config.type : this._inheritTypes(t)))
				}, l);

			function l(t, e)
			{
				var i = r.call(this, t, e) || this;
				return i._root = i.config.parent || i, i._all = {}, i._parseConfig(), i.config.activeTab && (i.config.activeView = i.config.activeTab), i.config.views && (i.config.activeView = i.config.activeView || i._cells[0].id, i._isViewLayout = !0), e.parent || (e = c.create(
				{
					render: function ()
					{
						return i.toVDOM()
					}
				}, i), i.mount(t, e)), i
			}
			e.Layout = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				l = this && this.__assign || function ()
				{
					return (l = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, v = i(2),
				u = i(0),
				a = i(9),
				c = i(43),
				d = i(113),
				s = i(8),
				h = i(114),
				o = (r = a.View, o(p, r), p.prototype.paint = function ()
				{
					var t;
					this.isVisible() && ((t = this.getRootView()) ? t.redraw() : this._parent.paint())
				}, p.prototype.isVisible = function ()
				{
					if (!this._parent) return !(!this._container || !this._container.tagName) || Boolean(this.getRootNode());
					var t = this._parent.config.activeView;
					return (!t || t === this.id) && (!this.config.hidden && (!this._parent || this._parent.isVisible()))
				}, p.prototype.hide = function ()
				{
					this.events.fire(c.LayoutEvents.beforeHide, [this.id]) && (this.config.hidden = !0, this._parent && this._parent.paint && this._parent.paint(), this.events.fire(c.LayoutEvents.afterHide, [this.id]))
				}, p.prototype.show = function ()
				{
					this.events.fire(c.LayoutEvents.beforeShow, [this.id]) && (this._parent && this._parent.config && void 0 !== this._parent.config.activeView ? this._parent.config.activeView = this.id : this.config.hidden = !1, this._parent && !this._parent.isVisible() && this._parent.show(), this.paint(), this.events.fire(c.LayoutEvents.afterShow, [this.id]))
				}, p.prototype.expand = function ()
				{
					this.events.fire(c.LayoutEvents.beforeExpand, [this.id]) && (this.config.collapsed = !1, this.events.fire(c.LayoutEvents.afterExpand, [this.id]), this.paint())
				}, p.prototype.collapse = function ()
				{
					this.events.fire(c.LayoutEvents.beforeCollapse, [this.id]) && (this.config.collapsed = !0, this.events.fire(c.LayoutEvents.afterCollapse, [this.id]), this.paint())
				}, p.prototype.toggle = function ()
				{
					this.config.collapsed ? this.expand() : this.collapse()
				}, p.prototype.getParent = function ()
				{
					return this._parent
				}, p.prototype.destructor = function ()
				{
					this.config = null, this.unmount()
				}, p.prototype.getWidget = function ()
				{
					return this._ui
				}, p.prototype.getCellView = function ()
				{
					return this._parent && this._parent.getRefs(this._uid)
				}, p.prototype.attach = function (t, e)
				{
					return this.config.html = null, "object" == typeof t ? this._ui = t : "string" == typeof t ? this._ui = new window.dhx[t](null, e) : "function" == typeof t && (t.prototype instanceof a.View ? this._ui = new t(null, e) : this._ui = {
						getRootView: function ()
						{
							return t(e)
						}
					}), this.paint(), this._ui
				}, p.prototype.attachHTML = function (t)
				{
					this.config.html = t, this.paint()
				}, p.prototype.toVDOM = function (t)
				{
					if (null === this.config && (this.config = {}), !this.config.hidden)
					{
						var e, i = this._calculateStyle(),
							n = v.isDefined(this.config.padding) ? isNaN(Number(this.config.padding)) ?
							{
								padding: this.config.padding
							} :
							{
								padding: this.config.padding + "px"
							} : "",
							o = this.config.full || this.config.html ? i : l(l(
							{}, i), n),
							i = this._cssManager.add(o, "dhx_cell-style__" + this._uid);
						this.config.html || (e = this._ui ? ((r = this._ui.getRootView()).render && (r = u.inject(r)), [r]) : t || null);
						var r = !this.config.resizable || this._isLastCell() || this.config.collapsed ? null : u.el(".dhx_layout-resizer." + (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), l(l(
							{}, this._resizerHandlers),
							{
								_ref: "resizer_" + this._uid
							}), [u.el("span.dhx_layout-resizer__icon",
							{
								class: "dxi " + (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal")
							})]),
							a = {};
						if (this.config.on)
							for (var s in this.config.on) a["on" + s] = this.config.on[s];
						var c = "",
							t = this.config.cols || this.config.rows;
						if (this.config.type && t) switch (this.config.type)
						{
						case "line":
							c = " dhx_layout-line";
							break;
						case "wide":
							c = " dhx_layout-wide";
							break;
						case "space":
							c = " dhx_layout-space"
						}
						n = u.el("div", l(l(((t = {
							_key: this._uid,
							_ref: this._uid
						})["aria-labelledby"] = this.config.id ? "tab-content-" + this.config.id : null, t), a),
						{
							class: this._getCss(!1) + (this.config.css ? " " + this.config.css : "") + (o ? " " + i : "") + (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") + (this.config.resizable ? " dhx_layout-cell--resizable" : "") + (this.config.type && !this.config.full ? c : "")
						}), this.config.full ? [u.el("div",
						{
							tabindex: this.config.collapsable ? "0" : "-1",
							class: "dhx_layout-cell-header" + (this._isXDirection() ? " dhx_layout-cell-header--col" : " dhx_layout-cell-header--row") + (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") + (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") + (((this.getParent() ||
							{}).config ||
							{}).isAccordion ? " dhx_layout-cell-header--accordion" : ""),
							style:
							{
								height: this.config.headerHeight
							},
							onclick: this._handlers.toggle,
							onkeydown: this._handlers.enterCollapse
						}, [this.config.headerIcon && u.el("span.dhx_layout-cell-header__icon",
						{
							class: this.config.headerIcon
						}), this.config.headerImage && u.el(".dhx_layout-cell-header__image-wrapper", [u.el("img",
						{
							src: this.config.headerImage,
							class: "dhx_layout-cell-header__image"
						})]), this.config.header && u.el("h3.dhx_layout-cell-header__title", this.config.header), this.config.collapsable ? u.el("div.dhx_layout-cell-header__collapse-icon",
						{
							class: this._getCollapseIcon()
						}) : u.el("div.dhx_layout-cell-header__collapse-icon",
						{
							class: "dxi dxi-empty"
						})]), this.config.collapsed ? null : u.el("div",
						{
							style: l(l(
							{}, n),
							{
								height: "calc(100% - " + (this.config.headerHeight || 37) + "px)"
							}),
							".innerHTML": this.config.html,
							class: this._getCss(!0) + " dhx_layout-cell-content" + (this.config.type ? c : "")
						}, e)] : !this.config.html || this.config.rows && this.config.cols && this.config.views ? e : [u.el(".dhx_layout-cell-content",
						{
							".innerHTML": this.config.html,
							style: n
						})]);
						return r ? [n, r] : n
					}
				}, p.prototype._getCss = function (t)
				{
					return "dhx_layout-cell"
				}, p.prototype._initHandlers = function ()
				{
					function e(t)
					{
						if (a.isActive)
						{
							var e = (t.targetTouches ? t.targetTouches[0] : t).clientX,
								t = (t.targetTouches ? t.targetTouches[0] : t).clientY,
								i = a.xLayout ? e - a.range.min + window.pageXOffset : t - a.range.min + window.pageYOffset,
								n = a.xLayout ? "width" : "height";
							switch (i < 0 ? i = a.resizerLength / 2 : i > a.size && (i = a.size - a.resizerLength), a.mode)
							{
							case c.resizeMode.pixels:
								r.config[n] = i - a.resizerLength / 2 + "px", a.nextCell.config[n] = a.size - i - a.resizerLength / 2 + "px";
								break;
							case c.resizeMode.mixedpx1:
								r.config[n] = i - a.resizerLength / 2 + "px";
								break;
							case c.resizeMode.mixedpx2:
								a.nextCell.config[n] = a.size - i - a.resizerLength / 2 + "px";
								break;
							case c.resizeMode.percents:
								r.config[n] = i / a.size * a.percentsum + "%", a.nextCell.config[n] = (a.size - i) / a.size * a.percentsum + "%";
								break;
							case c.resizeMode.mixedperc1:
								r.config[n] = i / a.size * a.percentsum + "%";
								break;
							case c.resizeMode.mixedperc2:
								a.nextCell.config[n] = (a.size - i) / a.size * a.percentsum + "%";
								break;
							case c.resizeMode.unknown:
								r.config[n] = i - a.resizerLength / 2 + "px", a.nextCell.config[n] = a.size - i - a.resizerLength / 2 + "px", r.config.$fixed = !0
							}
							r.paint(), r.events.fire(c.LayoutEvents.resize, [r.id])
						}
					}

					function i(t)
					{
						var e, i, n, o;
						t.targetTouches && t.preventDefault(), 3 !== t.which && (a.isActive && s(t), r.events.fire(c.LayoutEvents.beforeResizeStart, [r.id]) && (document.body.classList.add("dhx_no-select--resize"), i = r.getCellView(), n = (e = r._getNextCell()).getCellView(), t = r._getResizerView(), i = i.el.getBoundingClientRect(), t = t.el.getBoundingClientRect(), n = n.el.getBoundingClientRect(), a.xLayout = r._isXDirection(), a.left = i.left + window.pageXOffset, a.top = i.top + window.pageYOffset, a.margin = d.getMarginSize(r.getParent().config, a.xLayout), a.range = d.getBlockRange(i, n, a.xLayout), a.size = a.range.max - a.range.min - a.margin, a.isActive = !0, a.nextCell = e, a.resizerLength = a.xLayout ? t.width : t.height, a.mode = d.getResizeMode(a.xLayout, r.config, e.config), a.mode === c.resizeMode.percents && (o = a.xLayout ? "width" : "height", a.percentsum = parseFloat(r.config[o].slice(0, -1)) + parseFloat(e.config[o].slice(0, -1))), a.mode === c.resizeMode.mixedperc1 && (o = a.xLayout ? "width" : "height", a.percentsum = 1 / (i[o] / (a.size - a.resizerLength)) * parseFloat(r.config[o].slice(0, -1))), a.mode === c.resizeMode.mixedperc2 && (o = a.xLayout ? "width" : "height", a.percentsum = 1 / (n[o] / (a.size - a.resizerLength)) * parseFloat(e.config[o]))))
					}
					var r = this,
						a = {
							left: null,
							top: null,
							isActive: !(this._handlers = {
								enterCollapse: function (t)
								{
									13 === t.keyCode && r._handlers.toggle()
								},
								collapse: function ()
								{
									r.config.collapsable && r.collapse()
								},
								expand: function ()
								{
									r.config.collapsable && r.expand()
								},
								toggle: function ()
								{
									r.config.collapsable && r.toggle()
								}
							}),
							range: null,
							xLayout: null,
							nextCell: null,
							size: null,
							resizerLength: null,
							mode: null,
							percentsum: null,
							margin: null
						},
						s = function (t)
						{
							a.isActive = !1, document.body.classList.remove("dhx_no-select--resize"), t.targetTouches ? (document.removeEventListener("touchend", s), document.removeEventListener("touchmove", e)) : (document.removeEventListener("mouseup", s), document.removeEventListener("mousemove", e)), r.events.fire(c.LayoutEvents.afterResizeEnd, [r.id])
						};
					this._resizerHandlers = {
						onmousedown: function (t)
						{
							i(t), document.addEventListener("mouseup", s), document.addEventListener("mousemove", e)
						},
						ontouchstart: function (t)
						{
							i(t), document.addEventListener("touchend", s), document.addEventListener("touchmove", e)
						},
						ondragstart: function (t)
						{
							return t.preventDefault()
						}
					}
				}, p.prototype._getCollapseIcon = function ()
				{
					return this._isXDirection() && this.config.collapsed ? "dxi dxi-chevron-right" : this._isXDirection() && !this.config.collapsed ? "dxi dxi-chevron-left" : !this._isXDirection() && this.config.collapsed ? "dxi dxi-chevron-up" : this._isXDirection() || this.config.collapsed ? void 0 : "dxi dxi-chevron-down"
				}, p.prototype._isLastCell = function ()
				{
					var t = this._parent;
					return t && t._cells.indexOf(this) === t._cells.length - 1
				}, p.prototype._getNextCell = function ()
				{
					var t = this._parent,
						e = t._cells.indexOf(this);
					return t._cells[e + 1]
				}, p.prototype._getResizerView = function ()
				{
					return this._parent.getRefs("resizer_" + this._uid)
				}, p.prototype._isXDirection = function ()
				{
					return this._parent && this._parent._xLayout
				}, p.prototype._calculateStyle = function ()
				{
					var t = this.config;
					if (t)
					{
						var e = {},
							i = !1,
							n = !1;
						isNaN(Number(t.width)) || (t.width = t.width + "px"), isNaN(Number(t.height)) || (t.height = t.height + "px"), isNaN(Number(t.minWidth)) || (t.minWidth = t.minWidth + "px"), isNaN(Number(t.minHeight)) || (t.minHeight = t.minHeight + "px"), isNaN(Number(t.maxWidth)) || (t.maxWidth = t.maxWidth + "px"), isNaN(Number(t.maxHeight)) || (t.maxHeight = t.maxHeight + "px"), "content" === t.width && (i = !0), "content" === t.height && (n = !0);
						var o = t.width,
							r = t.height,
							a = t.cols,
							s = t.rows,
							c = t.minWidth,
							l = t.minHeight,
							u = t.maxWidth,
							d = t.maxHeight,
							h = t.gravity,
							p = t.collapsed,
							g = t.$fixed,
							f = -1 === v.sign(h) ? 0 : h;
						"boolean" == typeof h && (f = h ? 1 : 0);
						var _ = "boolean" == typeof h ? !h : -1 === v.sign(h);
						this._isXDirection() ? (g || o || void 0 === h && (c || u)) && (_ = !0) : (g || r || void 0 === h && (l || d)) && (_ = !0);
						var y, _ = _ ? 0 : f || 1,
							f = this._isXDirection() ? "x" : "y";
						return void 0 !== c && (e.minWidth = c), void 0 !== l && (e.minHeight = l), void 0 !== u && (e.maxWidth = u), void 0 !== d && (e.maxHeight = d), void 0 === this._parent && (f = !0), void 0 !== o && "content" !== o ? e.width = o : !0 === f ? e.width = "100%" : "x" === f && (i ? e.flex = "0 0 auto" : (y = this._isXDirection() ? "1px" : "auto", e.flex = _ + " " + (a || s ? "0 " + y : "1 auto"))), void 0 !== r && "content" !== r ? e.height = r : !0 === f ? e.height = "100%" : "y" === f && (n ? e.flex = "0 0 auto" : (y = this._isXDirection() ? "auto" : "1px", e.flex = _ + " " + (a || s ? "0 " + y : "1 auto"))), !0 === f && void 0 === t.width && void 0 === t.height && (e.flex = _ + " 1 auto"), p && (this._isXDirection() ? e.width = "auto" : e.height = "auto", e.flex = "0 0 auto"), e
					}
				}, p);

			function p(t, e)
			{
				e = r.call(this, t, e) || this;
				return e._disabled = [], t && t.isVisible && (e._parent = t), e._parent && e._parent.events ? e.events = e._parent.events : e.events = new s.EventSystem(e), e._cssManager = new h.CssManager, e.config.full = void 0 === e.config.full ? Boolean(e.config.header || e.config.collapsable || e.config.headerHeight || e.config.headerIcon || e.config.headerImage) : e.config.full, e._initHandlers(), e.id = e.config.id || v.uid(), e
			}
			e.Cell = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r = i(43);
			e.getResizeMode = function (t, e, i)
			{
				var n = e[o = t ? "width" : "height"] && e[o].includes("%"),
					t = i[o] && i[o].includes("%"),
					e = e[o] && e[o].includes("px"),
					o = i[o] && i[o].includes("px");
				return n && t ? r.resizeMode.percents : e && o ? r.resizeMode.pixels : e && !o ? r.resizeMode.mixedpx1 : o && !e ? r.resizeMode.mixedpx2 : n ? r.resizeMode.mixedperc1 : t ? r.resizeMode.mixedperc2 : r.resizeMode.unknown
			}, e.getBlockRange = function (t, e, i)
			{
				return void 0 === i && (i = !0), i ?
				{
					min: t.left + window.pageXOffset,
					max: e.right + window.pageXOffset
				} :
				{
					min: t.top + window.pageYOffset,
					max: e.bottom + window.pageYOffset
				}
			}, e.getMarginSize = function (t, e)
			{
				return t && ("space" === t.type || "wide" === t.type && e) ? 10 : 0
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(2),
				i = (o.prototype.update = function ()
				{
					this._styleCont.innerHTML !== this._generateCss() && (document.head.appendChild(this._styleCont), this._styleCont.innerHTML = this._generateCss())
				}, o.prototype.remove = function (t)
				{
					delete this._classes[t], this.update()
				}, o.prototype.add = function (t, e, i)
				{
					void 0 === i && (i = !1);
					var n = this._toCssString(t),
						t = this._findSameClassId(n);
					return t && e && e !== t ? (this._classes[e] = this._classes[t], e) : t || this._addNewClass(n, e, i)
				}, o.prototype.get = function (t)
				{
					if (this._classes[t])
					{
						for (var e = {}, i = 0, n = this._classes[t].split(";"); i < n.length; i++)
						{
							var o = n[i];
							o && (e[(o = o.split(":"))[0]] = o[1])
						}
						return e
					}
					return null
				}, o.prototype._findSameClassId = function (t)
				{
					for (var e in this._classes)
						if (t === this._classes[e]) return e;
					return null
				}, o.prototype._addNewClass = function (t, e, i)
				{
					e = e || "dhx_generated_class_" + n.uid();
					return this._classes[e] = t, i || this.update(), e
				}, o.prototype._toCssString = function (t)
				{
					var e, i = "";
					for (e in t)
					{
						var n = t[e];
						i += e.replace(/[A-Z]{1}/g, function (t)
						{
							return "-" + t.toLowerCase()
						}) + ":" + n + ";"
					}
					return i
				}, o.prototype._generateCss = function ()
				{
					var t, e = "";
					for (t in this._classes) e += "." + t + "{" + this._classes[t] + "}\n";
					return e
				}, o);

			function o()
			{
				this._classes = {};
				var t = document.createElement("style");
				t.id = "dhx_generated_styles", this._styleCont = document.head.appendChild(t)
			}
			e.CssManager = i, e.cssManager = new i
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(116),
				c = i(25),
				l = i(0),
				u = i(8),
				d = i(9),
				h = i(16),
				o = (a = d.View, o(p, a), p.prototype.clear = function ()
				{
					this.data.map(function (t)
					{
						return t.$item.clear()
					})
				}, p.prototype.getValues = function ()
				{
					return this.data.reduce(function (t, e)
					{
						return t[e.id] = e.$item.getValue(), t
					},
					{})
				}, p.prototype.setValues = function (t)
				{
					var i = this;
					this._data = t, this.data.forEach(function (t)
					{
						var e = i._data[t.id];
						e ? (t.$item.clear(), t.$item.setValue(e, !0)) : "function" == typeof t.$item.clear && t.$item.clear()
					})
				}, p.prototype.isItemSelected = function (t)
				{
					t = this.data.getItem(t), t = t ? t._uid : "";
					return !!t && this.getRootView().refs[t].el === document.activeElement
				}, p.prototype.isItemsSelected = function ()
				{
					var t, e = this.getRootView().refs,
						i = !1;
					for (t in e) e[t].el === document.activeElement && (i = !0);
					return i
				}, p.prototype.selectItem = function (t)
				{
					var e = this.data.getItem(t),
						t = e && e.$item ? e.$item._uid : "",
						e = this.getRootView().refs;
					t && e && e[t].el.focus()
				}, p.prototype._parseStruct = function ()
				{
					var e = this;
					this.data.map(function (t)
					{
						t.$item = new s.items[t.type](t, e.events)
					}), this.paint()
				}, p.prototype._toVDOM = function ()
				{
					var t = this.data.map(function (t)
					{
						return t.$item.toVDOM()
					});
					return l.el(".dhx_property", r(t))
				}, p);

			function p(t, e)
			{
				var i = a.call(this, t, e) || this;
				i.events = new u.EventSystem, i.data = new h.DataCollection;
				e = l.create(
				{
					render: function (t, e)
					{
						return e._toVDOM()
					}
				}, i);
				return i.events.on(c.PropertyEvents.afterFileUpload, function ()
				{
					return i.paint()
				}), i.data.events.on(h.DataEvents.load, function ()
				{
					i._parseStruct()
				}), i.mount(t, e), i
			}
			e.Property = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(117),
				o = i(146),
				r = i(151),
				a = i(97),
				s = i(152),
				c = i(153),
				l = i(154),
				u = i(155),
				d = i(14),
				h = i(156),
				p = i(157),
				g = i(158),
				i = i(159);
			e.items = {
				text: d.Text,
				textarea: h.Textarea,
				group: r.Group,
				inputs: a.Inputs,
				color: o.ColorPicker,
				image: g.Uploader,
				inputsGroup: s.InputsGroup,
				stroke: u.Stroke,
				textProps: p.TextProps,
				alignBar: n.AlignBar,
				label: c.Label,
				select: l.Select,
				empty: i.Empty
			}
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(0),
				c = i(23),
				l = i(84),
				i = i(14),
				o = (a = i.Text, o(u, a), u.prototype.toVDOM = function ()
				{
					return s.el(".edit-section.align_bar",
					{
						_key: this._uid
					}, [l.getIconGroup(this._handlers.iconClick, "horizontal", [
					{
						id: "left",
						el: c.getIcon("align-horizontal-left"),
						css: "align_icon_wrap"
					},
					{
						id: "center",
						el: c.getIcon("align-horizontal-center"),
						css: "align_icon_wrap"
					},
					{
						id: "right",
						el: c.getIcon("align-horizontal-right"),
						css: "align_icon_wrap"
					}], this._config.value.horizontal), l.getIconGroup(this._handlers.iconClick, "vertical", [
					{
						id: "top",
						el: c.getIcon("align-vertical-top"),
						css: "align_icon_wrap"
					},
					{
						id: "middle",
						el: c.getIcon("align-vertical-middle"),
						css: "align_icon_wrap"
					},
					{
						id: "bottom",
						el: c.getIcon("align-vertical-bottom"),
						css: "align_icon_wrap"
					}], this._config.value.vertical)])
				}, u);

			function u(t, e)
			{
				var n = a.call(this, t, e) || this;
				return n._handlers.iconClick = function (t, e)
				{
					var i = e.target.getAttribute("dhx_id");
					n.setValue(r(r(
					{}, n._config.value), ((e = {})[t] = i, e)))
				}, n
			}
			e.AlignBar = o
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5yb3RhdGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0icm90YXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTMuNTUsNS4wNSBMOSwwLjUgTDksMy41NyBDNS4wNiw0LjA2IDIsNy40MiAyLDExLjUgQzIsMTUuNTggNS4wNSwxOC45NCA5LDE5LjQzIEw5LDE3LjQxIEM2LjE2LDE2LjkzIDQsMTQuNDcgNCwxMS41IEM0LDguNTMgNi4xNiw2LjA3IDksNS41OSBMOSw5LjUgTDEzLjU1LDUuMDUgTDEzLjU1LDUuMDUgWiBNMTcuOTMsMTAuNSBDMTcuNzYsOS4xMSAxNy4yMSw3Ljc3IDE2LjMxLDYuNjEgTDE0Ljg5LDguMDMgQzE1LjQzLDguNzggMTUuNzcsOS42MyAxNS45MSwxMC41IEwxNy45MywxMC41IEwxNy45MywxMC41IFogTTExLDE3LjQgTDExLDE5LjQyIEMxMi4zOSwxOS4yNSAxMy43NCwxOC43MSAxNC45LDE3LjgxIEwxMy40NiwxNi4zNyBDMTIuNzEsMTYuOTEgMTEuODcsMTcuMjYgMTEsMTcuNCBMMTEsMTcuNCBaIE0xNC44OSwxNC45OCBMMTYuMzEsMTYuMzkgQzE3LjIxLDE1LjIzIDE3Ljc2LDEzLjg5IDE3LjkzLDEyLjUgTDE1LjkxLDEyLjUgQzE1Ljc3LDEzLjM3IDE1LjQzLDE0LjIyIDE0Ljg5LDE0Ljk4IEwxNC44OSwxNC45OCBaIgogICAgICAgICAgICAgIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5lbGJvdzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJlbGJvdyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gZmlsbD0iI0I4QzZENiIKICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDEwLjAwMDAwMCkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMC4wMDAwMDAsIC0xMC4wMDAwMDApICIKICAgICAgICAgICAgICAgICBwb2ludHM9IjEzIDYgMTMgMTIgMiAxMiAyIDE4IDQgMTggNCAxNCAxMyAxNCAxNSAxNCAxNSA2IDE4IDYgMTQgMiAxMCA2Ij48L3BvbHlnb24+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMiAoNTExNjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnN0cmFpZ2h0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIKICAgICAgICAgICAgICAgICBwb2ludHM9IjE1Ljg4MDAwNDkgMTQuNDU5OTkxNSAzLjQxMDAzNDE4IDIgMiAzLjQxMDAwMzY2IDE0LjQ2OTk3MDcgMTUuODgwMDA0OSAxMi4zNDk5NzU2IDE4IDE4IDE4IDE4IDEyLjMzOTk5NjMiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJzdHJhaWdodCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzkwOUNBRCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0I4QzZENiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMiAoNTExNjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmN1cnZlZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xNSwxMy45OTgxNjIgQzE0LjkwMDQ1MSwxMC45NTU5OTc1IDEzLjcwMzM2MDEsOC4yMDU2NzY0OSAxMS40MDg3MjczLDUuNzQ3MTk4OTkgQzkuMTE0MDk0NTUsMy4yODg3MjE0OSA1Ljk3Nzg1MjEsMi4wMzk2NTUxNiAyLDIgTDIsNCBDNS4yNzY0MzI2MSwzLjk5ODA4MzY3IDcuODkyODI3NDgsNC45OTc2MzcgOS44NDkxODQ2MSw2Ljk5ODY1OTk5IEMxMS44MDU1NDE3LDguOTk5NjgyOTkgMTIuODU1ODEzNSwxMS4zMzUyMDI1IDEzLDE0LjAwNTIxODQgTDEwLDE0LjAwNTIxODQgTDE0LDE4LjAwMDM4OSBMMTgsMTMuOTk4MTYyIEwxNSwxMy45OTgxNjIgWiIKICAgICAgICAgICAgICBpZD0icGF0aC0yIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iY3VydmVkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjOTA5Q0FEIiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjQjhDNkQ2IiB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ib3R0b208L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tYm90dG9tIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTEsMTIgTDExLDEgTDksMSBMOSwxMiBMNiwxMiBMMTAsMTYgTDE0LDEyIEwxMSwxMiBaIE0yLDE3IEwyLDE5IEwxOCwxOSBMMTgsMTcgTDIsMTcgTDIsMTcgWiIKICAgICAgICAgICAgICBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1jZW50ZXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tY2VudGVyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNNCwxNyBMMTYsMTcgTDE2LDE1IEw0LDE1IEw0LDE3IEw0LDE3IFogTTEsMTMgTDE5LDEzIEwxOSwxMSBMMSwxMSBMMSwxMyBMMSwxMyBaIE00LDkgTDE2LDkgTDE2LDcgTDQsNyBMNCw5IEw0LDkgWiBNMSwzIEwxLDUgTDE5LDUgTDE5LDMgTDEsMyBMMSwzIFoiCiAgICAgICAgICAgICAgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1sZWZ0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImFsaWduLWxlZnQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMywxNSBMMSwxNSBMMSwxNyBMMTMsMTcgTDEzLDE1IEwxMywxNSBaIE0xMyw3IEwxLDcgTDEsOSBMMTMsOSBMMTMsNyBMMTMsNyBaIE0xLDEzIEwxOSwxMyBMMTksMTEgTDEsMTEgTDEsMTMgTDEsMTMgWiBNMSwzIEwxLDUgTDE5LDUgTDE5LDMgTDEsMyBMMSwzIFoiCiAgICAgICAgICAgICAgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1yaWdodDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJhbGlnbi1yaWdodCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEsMTcgTDE5LDE3IEwxOSwxNSBMMSwxNSBMMSwxNyBMMSwxNyBaIE03LDEzIEwxOSwxMyBMMTksMTEgTDcsMTEgTDcsMTMgTDcsMTMgWiBNMSw5IEwxOSw5IEwxOSw3IEwxLDcgTDEsOSBMMSw5IFogTTcsNSBMMTksNSBMMTksMyBMNywzIEw3LDUgTDcsNSBaIgogICAgICAgICAgICAgIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1taWRkbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tbWlkZGxlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNOSwxNiBMOSwxOSBMMTEsMTkgTDExLDE2IEwxNCwxNiBMMTAsMTIgTDYsMTYgTDksMTYgWiBNMTEsNCBMMTEsMSBMOSwxIEw5LDQgTDYsNCBMMTAsOCBMMTQsNCBMMTEsNCBaIE0yLDkgTDIsMTEgTDE4LDExIEwxOCw5IEwyLDkgTDIsOSBaIgogICAgICAgICAgICAgIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi10b3A8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNOSw4IEw5LDE5IEwxMSwxOSBMMTEsOCBMMTQsOCBMMTAsNCBMNiw4IEw5LDggWiBNMiwxIEwyLDMgTDE4LDMgTDE4LDEgTDIsMSBMMiwxIFoiCiAgICAgICAgICAgICAgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ob3Jpem9udGFsLWNlbnRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJhbGlnbi1ob3Jpem9udGFsLWNlbnRlciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTExLDE2IEwxMSwxOSBMOSwxOSBMOSwxNiBMNSwxNiBMNSwxMiBMOSwxMiBMOSw4IEwzLDggTDMsNyBMMyw0IEw5LDQgTDksMSBMMTEsMSBMMTEsNCBMMTcsNCBMMTcsOCBMMTEsOCBMMTEsMTIgTDE1LDEyIEwxNSwxMyBMMTUsMTYgTDExLDE2IFoiCiAgICAgICAgICAgICAgaWQ9Imhvcml6b250YWwtY2VudGVyIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ob3Jpem9udGFsLWxlZnQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24taG9yaXpvbnRhbC1sZWZ0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTUsMTIgTDUsMTIgTDUsMTYgTDE1LDE2IEwxNSwxMyBMMTUsMTIgWiBNNSw4IEwxOSw4IEwxOSw0IEw1LDQgTDUsNyBMNSw4IFogTTEsMTkgTDMsMTkgTDMsMSBMMSwxIEwxLDE5IFoiCiAgICAgICAgICAgICAgaWQ9Imhvcml6b250YWwtbGVmdCIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi1ob3Jpem9udGFsLXJpZ2h0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImFsaWduLWhvcml6b250YWwtcmlnaHQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xNSwxMiBMMTUsMTMgTDE1LDE2IEw1LDE2IEw1LDEyIEwxNSwxMiBaIE0xLDggTDEsNyBMMSw0IEwxNSw0IEwxNSw4IEwxLDggWiBNMTcsMTkgTDE3LDEgTDE5LDEgTDE5LDE5IEwxNywxOSBaIgogICAgICAgICAgICAgIGlkPSJob3Jpem9udGFsLXJpZ2h0IiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi12ZXJ0aWNhbC1ib3R0b208L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdmVydGljYWwtYm90dG9tIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTYsNSBMMTYsNy41IEwxNiwxNSBMMTIsMTUgTDEyLDUgTDE2LDUgWiBNNCwxNSBMNCwxMS41IEw0LDEgTDgsMSBMOCwxNSBMNCwxNSBaIE0xLDE5IEwxLDE3IEwxOSwxNyBMMTksMTkgTDEsMTkgWiIKICAgICAgICAgICAgICBpZD0idmVydGljYWwtYm90dG9tIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi12ZXJ0aWNhbC10b3A8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdmVydGljYWwtdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTYsNSBMMTYsNy41IEwxNiwxNSBMMTIsMTUgTDEyLDUgTDE2LDUgWiBNNCwxOSBMNCwxNS41IEw0LDUgTDgsNSBMOCwxOSBMNCwxOSBaIE0xLDMgTDEsMSBMMTksMSBMMTksMyBMMSwzIFoiCiAgICAgICAgICAgICAgaWQ9InZlcnRpY2FsLXRvcCIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGlnbi12ZXJ0aWNhbC1taWRkbGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iYWxpZ24tdmVydGljYWwtbWlkZGxlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTYsOSBMMTksOSBMMTksMTEgTDE2LDExIEwxNiwxNSBMMTIsMTUgTDEyLDExIEw4LDExIEw4LDE3IEw0LDE3IEw0LDEzLjUgTDQsMTEgTDEsMTEgTDEsOSBMNCw5IEw0LDMgTDgsMyBMOCw5IEwxMiw5IEwxMiw1IEwxNiw1IEwxNiw3LjUgTDE2LDkgWiIKICAgICAgICAgICAgICBpZD0idmVydGljYWwtbWlkZGxlIiBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT50ZXh0LXNoYXBlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InRleHQtc2hhcGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0zLDcgTDMsMTAgTDksMTAgTDksMjMgTDEyLDIzIEwxMiwxMCBMMTgsMTAgTDE4LDcgTDQsNyBMMyw3IFogTTE2LDEyIEwxNiwxNSBMMjAsMTUgTDIwLDIzIEwyMywyMyBMMjMsMTUgTDI3LDE1IEwyNywxMiBMMTYsMTIgWiIKICAgICAgICAgICAgICBpZD0iVGV4dCIgZmlsbD0iI0I4QzZENiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pbWFnZS1zaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJpbWFnZS1zaGFwZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTMsMSBMMjcsMSBDMjguMTA0NTY5NSwxIDI5LDEuODk1NDMwNSAyOSwzIEwyOSwyNyBDMjksMjguMTA0NTY5NSAyOC4xMDQ1Njk1LDI5IDI3LDI5IEwzLDI5IEMxLjg5NTQzMDUsMjkgMSwyOC4xMDQ1Njk1IDEsMjcgTDEsMyBDMSwxLjg5NTQzMDUgMS44OTU0MzA1LDEgMywxIFogTTQsMyBDMy40NDc3MTUyNSwzIDMsMy40NDc3MTUyNSAzLDQgTDMsMjYgQzMsMjYuNTUyMjg0NyAzLjQ0NzcxNTI1LDI3IDQsMjcgTDI2LDI3IEMyNi41NTIyODQ3LDI3IDI3LDI2LjU1MjI4NDcgMjcsMjYgTDI3LDQgQzI3LDMuNDQ3NzE1MjUgMjYuNTUyMjg0NywzIDI2LDMgTDQsMyBaIE0xMywyMSBMMTgsMTQgTDI1LjAwMDU1NTcsMjQgTDUuMDAwNTY5MywyNCBMOS41LDE2Ljk5NTI1MDUgTDEzLDIxIFoiCiAgICAgICAgICAgICAgaWQ9Ik1hc2siIGZpbGw9IiNCOEM2RDYiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5maWxsZWQtYXJyb3c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iZmlsbGVkLWFycm93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU29saWQtLS1TZWxlY3RlZC1Ob3ctU3R5bGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTAwMDAwLCAyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJMZWZ0LUFycm93IgogICAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjUwMDAwMCwgOC4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04LjUwMDAwMCwgLTguMDAwMDAwKSB0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy41LDEyLjUgTDcuNSwwLjUiIGlkPSJTaGFwZSIgc3Ryb2tlPSIjOTA5Q0FEIiBzdHJva2Utd2lkdGg9IjIiCiAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iU2hhcGUiIGZpbGw9IiM5MDlDQUQiIHBvaW50cz0iMC41IDYuNSA3LjUgMTUuNSAxNC41IDYuNSI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5maWxsZWQtYXJyb3c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iZmlsbGVkLWFycm93IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iU29saWQtLS1TZWxlY3RlZC1Ob3ctU3R5bGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTAwMDAwLCAyLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJMZWZ0LUFycm93IgogICAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjUwMDAwMCwgOC4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTguNTAwMDAwLCAtOC4wMDAwMDApIHRyYW5zbGF0ZSgxLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjUsMTIuNSBMNy41LDAuNSIgaWQ9IlNoYXBlIiBzdHJva2U9IiM5MDlDQUQiIHN0cm9rZS13aWR0aD0iMiIKICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgZmlsbD0iIzkwOUNBRCIgcG9pbnRzPSIwLjUgNi41IDcuNSAxNS41IDE0LjUgNi41Ij48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDMwIDMwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bGluZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cG9seWdvbiBmaWxsPSIjOTA5Q0FEIiBwb2ludHM9IjUgMTAgNSA4IDI1IDggMjUgMTAiPjwvcG9seWdvbj4NCiAgICA8L2c+DQo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5kdXBsaWNhdGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iZHVwbGljYXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTAsNSBMMTgsNSBDMTkuMTA0NTY5NSw1IDIwLDUuODk1NDMwNSAyMCw3IEwyMCwxOCBDMjAsMTkuMTA0NTY5NSAxOS4xMDQ1Njk1LDIwIDE4LDIwIEwxMCwyMCBDOC44OTU0MzA1LDIwIDgsMTkuMTA0NTY5NSA4LDE4IEw4LDcgQzgsNS44OTU0MzA1IDguODk1NDMwNSw1IDEwLDUgWiBNMTAsNyBMMTgsNyBMMTgsMTggTDEwLDE4IEwxMCw3IFogTTIsMCBMMTAsMCBDMTEuMTA0NTY5NSwwIDEyLDAuODk1NDMwNSAxMiwyIEwxMiw0IEwxMCw0IEwxMCwyIEwyLDIgTDIsMTMgTDcsMTMgTDcsMTUgTDIsMTUgQzAuODk1NDMwNSwxNSAwLDE0LjEwNDU2OTUgMCwxMyBMMCwyIEMwLDAuODk1NDMwNSAwLjg5NTQzMDUsMCAyLDAgWiIKICAgICAgICAgICAgICBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jb25uZWN0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbm5lY3QiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik01LjgyOTI5NDI5LDE1IEw5LDE1IEw5LDMgTDE0LDMgTDE0LDEgTDIwLDEgTDIwLDcgTDE0LDcgTDE0LDUgTDExLDUgTDExLDE1IEwxMSwxNyBMNS44MjkyOTQyOSwxNyBDNS40MTc0NTc4OCwxOC4xNjUxOTI0IDQuMzA2MjE4ODMsMTkgMywxOSBDMS4zNDMxNDU3NSwxOSAwLDE3LjY1Njg1NDIgMCwxNiBDMCwxNC4zNDMxNDU4IDEuMzQzMTQ1NzUsMTMgMywxMyBDNC4zMDYyMTg4MywxMyA1LjQxNzQ1Nzg4LDEzLjgzNDgwNzYgNS44MjkyOTQyOSwxNSBaIE0xNiw1IEwxOCw1IEwxOCwzIEwxNiwzIEwxNiw1IFogTTMsMTcgQzMuNTUyMjg0NzUsMTcgNCwxNi41NTIyODQ3IDQsMTYgQzQsMTUuNDQ3NzE1MyAzLjU1MjI4NDc1LDE1IDMsMTUgQzIuNDQ3NzE1MjUsMTUgMiwxNS40NDc3MTUzIDIsMTYgQzIsMTYuNTUyMjg0NyAyLjQ0NzcxNTI1LDE3IDMsMTcgWiIKICAgICAgICAgICAgICBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jaGFuZ2Utc2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iY2hhbmdlLXNoYXBlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMTUsMCBDMTcuNzYxNDIzNywwIDIwLDIuMjM4NTc2MjUgMjAsNSBDMjAsNy43NjE0MjM3NSAxNy43NjE0MjM3LDEwIDE1LDEwIEMxMi4yMzg1NzYzLDEwIDEwLDcuNzYxNDIzNzUgMTAsNSBDMTAsMi4yMzg1NzYyNSAxMi4yMzg1NzYzLDAgMTUsMCBaIE0wLDEwIEwxMCwxMCBMMTAsMjAgTDAsMjAgTDAsMTAgWiIKICAgICAgICAgICAgICBmaWxsPSIjQjhDNkQ2Ij48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5wbHVzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InBsdXMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwb2x5Z29uIGZpbGw9IiM5MDlDQUQiCiAgICAgICAgICAgICAgICAgcG9pbnRzPSIxNiAxNiAxNiAyMCAxNCAyMCAxNCAxNiAxMCAxNiAxMCAxNCAxNCAxNCAxNCAxMCAxNiAxMCAxNiAxNCAyMCAxNCAyMCAxNiI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzBweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMzAgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgo+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjIgKDUxMTYwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5taW51czwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJtaW51cyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gZmlsbD0iIzkwOUNBRCIgcG9pbnRzPSIxMCAxNiAxMCAxNCAyMCAxNCAyMCAxNiI+PC9wb2x5Z29uPgogICAgPC9nPgo8L3N2Zz4="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICAgICAgIHhtbG5zOm9zYj0iaHR0cDovL3d3dy5vcGVuc3dhdGNoYm9vay5vcmcvdXJpLzIwMDkvb3NiIgogICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICAgICAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICAgICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICAgICAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICAgICAgIHdpZHRoPSIyMCIKICAgICAgICBoZWlnaHQ9IjIwIgogICAgICAgIHZpZXdCb3g9IjAgMCA1LjI5MTY2NjUgNS4yOTE2NjY1IgogICAgICAgIHZlcnNpb249IjEuMSIKICAgICAgICBpZD0ic3ZnOCIKICAgICAgICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICAgICAgIHNvZGlwb2RpOmRvY25hbWU9InJlbW92ZV9wb2ludC5zdmciPgogICAgPGRlZnMKICAgICAgICAgICAgaWQ9ImRlZnMyIj4KICAgICAgICA8bGluZWFyR3JhZGllbnQKICAgICAgICAgICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDQ1NTYiCiAgICAgICAgICAgICAgICBvc2I6cGFpbnQ9InNvbGlkIj4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eToxOyIKICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9IjAiCiAgICAgICAgICAgICAgICAgICAgaWQ9InN0b3A0NTU0Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQKICAgICAgICAgICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgICAgICAgICAgIGlkPSJsaW5lYXJHcmFkaWVudDM3MjUiPgogICAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgICAgICAgIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDA7c3RvcC1vcGFjaXR5OjE7IgogICAgICAgICAgICAgICAgICAgIG9mZnNldD0iMCIKICAgICAgICAgICAgICAgICAgICBpZD0ic3RvcDM3MjEiLz4KICAgICAgICAgICAgPHN0b3AKICAgICAgICAgICAgICAgICAgICBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwO3N0b3Atb3BhY2l0eTowOyIKICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9IjEiCiAgICAgICAgICAgICAgICAgICAgaWQ9InN0b3AzNzIzIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQKICAgICAgICAgICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgICAgICAgICAgIHhsaW5rOmhyZWY9IiNsaW5lYXJHcmFkaWVudDM3MjUiCiAgICAgICAgICAgICAgICBpZD0ibGluZWFyR3JhZGllbnQzNzI3IgogICAgICAgICAgICAgICAgeDE9IjEzMi44NTg2MyIKICAgICAgICAgICAgICAgIHkxPSIxMjAuNjc0MTEiCiAgICAgICAgICAgICAgICB4Mj0iMTcwLjg0NTI1IgogICAgICAgICAgICAgICAgeTI9IjE4Ni42MzA5NSIKICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+CiAgICA8L2RlZnM+CiAgICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgICAgICAgIGlkPSJiYXNlIgogICAgICAgICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgICAgICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgICAgICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgICAgICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgICAgICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgICAgICAgIGlua3NjYXBlOnpvb209IjE1LjgzOTE5MiIKICAgICAgICAgICAgaW5rc2NhcGU6Y3g9IjYuNDcwOTY4NiIKICAgICAgICAgICAgaW5rc2NhcGU6Y3k9IjkuMjc4ODE2NyIKICAgICAgICAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgICAgICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgICAgICAgIHNob3dncmlkPSJ0cnVlIgogICAgICAgICAgICB1bml0cz0icHgiCiAgICAgICAgICAgIHNob3dndWlkZXM9InRydWUiCiAgICAgICAgICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICAgICAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgICAgICAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICAgICAgICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgICAgICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiPgogICAgICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICAgICAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICAgICAgICAgICBpZD0iZ3JpZDM3MzEiLz4KICAgIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogICAgPG1ldGFkYXRhCiAgICAgICAgICAgIGlkPSJtZXRhZGF0YTUiPgogICAgICAgIDxyZGY6UkRGPgogICAgICAgICAgICA8Y2M6V29yawogICAgICAgICAgICAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgICAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICAgICAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgogICAgICAgICAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgICAgICAgIDwvY2M6V29yaz4KICAgICAgICA8L3JkZjpSREY+CiAgICA8L21ldGFkYXRhPgogICAgPGcKICAgICAgICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgICAgICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgICAgICAgIGlkPSJsYXllcjEiCiAgICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTI5MS43MDgzMykiPgogICAgICAgIDxjaXJjbGUKICAgICAgICAgICAgICAgIGlkPSJwYXRoMzcyOSIKICAgICAgICAgICAgICAgIGN4PSIyLjYyODU3MjkiCiAgICAgICAgICAgICAgICBjeT0iMjk0LjM3ODU3IgogICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC4xODUyMDgzMztzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgICAgICAgcj0iMS45MDgwNTI4Ii8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMTQ4MTY2Nzk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOmJldmVsO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgICAgICBkPSJtIDAuNzkzNzUsMjkyLjUwMjA4IDMuNzA0MTY2NywzLjcwNDE3IgogICAgICAgICAgICAgICAgaWQ9InBhdGgzNzM3IgogICAgICAgICAgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIvPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjE0ODE2Njc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgICAgICAgZD0ibSAwLjc5Mzc1LDI5Ni4yMDYyNSAzLjcwNDE2NjcsLTMuNzA0MTciCiAgICAgICAgICAgICAgICBpZD0icGF0aDM3MzkiCiAgICAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgICAgICAgZD0iTSAwLDI5NC4zNTQxNiBIIDAuNzkzNzQ5OTkiCiAgICAgICAgICAgICAgICBpZD0icGF0aDQ1NjIiCiAgICAgICAgICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIi8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICAgICAgICAgZD0ibSA0LjQ5NzkxNjYsMjk0LjM1NDE2IGggMC43OTM3NSIKICAgICAgICAgICAgICAgIGlkPSJwYXRoNDU2NCIKICAgICAgICAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
		}, function (t, e)
		{
			t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNC4zNjE0IDIyLjMxNTRMMjYuNDQyOCAyMC4yMzQzQzI2LjcyMzQgMTkuOTUzNyAyNi42NDEgMTkuNjM0MSAyNi4yNTkxIDE5LjUyNDFMMTcuNTI0NCAxNy4wMjc5QzE3LjE0MjUgMTYuOTE4MSAxNi45MTk4IDE3LjE0MjIgMTcuMDI2OCAxNy41MjU1TDE5LjUyNDggMjYuMjU3OUMxOS42MzE4IDI2LjY0MTIgMTkuOTUyOSAyNi43MjM2IDIwLjIzMzUgMjYuNDQzMUwyMi4zMTQ4IDI0LjM2MDVMMjYuOTU0OCAyOUwyOSAyNi45NTM1TDI0LjM2MTQgMjIuMzE1NFoiIGZpbGw9IiNCOEM2RDYiLz4KICAgIDxwYXRoIGQ9Ik0xMyAwSDlWM0gxM1YwWiIgZmlsbD0iI0I4QzZENiIvPgogICAgPHBhdGggZD0iTTEzIDI2SDlWMjlIMTNWMjZaIiBmaWxsPSIjQjhDNkQ2Ii8+CiAgICA8cGF0aCBkPSJNMjAgMEgxNlYzSDIwVjBaIiBmaWxsPSIjQjhDNkQ2Ii8+CiAgICA8cGF0aCBkPSJNMyA5SDBWMTNIM1Y5WiIgZmlsbD0iI0I4QzZENiIvPgogICAgPHBhdGggZD0iTTI5IDlIMjZWMTNIMjlWOVoiIGZpbGw9IiNCOEM2RDYiLz4KICAgIDxwYXRoIGQ9Ik0zIDE2SDBWMjBIM1YxNloiIGZpbGw9IiNCOEM2RDYiLz4KICAgIDxwYXRoIGQ9Ik0wIDEuNTAwMDRWNkgzVjNINlYwSDEuNTAwMDRDMC42NzA0OTUgMCAwIDAuNjcyMDQyIDAgMS41MDAwNFoiIGZpbGw9IiNCOEM2RDYiLz4KICAgIDxwYXRoIGQ9Ik0zLjAwMDA0IDIzSDBWMjcuNUMwIDI4LjMyOCAwLjY3MDUwMyAyOSAxLjQ5OTk4IDI5SDZWMjZIMy4wMDAwNFYyM1oiIGZpbGw9IiNCOEM2RDYiLz4KICAgIDxwYXRoIGQ9Ik0yNiA2SDI5VjEuNDk5OThDMjkgMC42NzE5NzkgMjguMzI5NSAwIDI3LjUgMEgyM1YzLjAwMDA0SDI2VjZIMjZaIiBmaWxsPSIjQjhDNkQ2Ii8+Cjwvc3ZnPgo="
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(85),
				s = i(0),
				c = i(14),
				l = i(88),
				o = (r = c.Text, o(u, r), u.prototype.toVDOM = function ()
				{
					return s.el(".edit-section.color-edit",
					{
						_key: this._uid
					}, [s.el(".section-title", this._config.label || ""), s.el(".color-edit", [s.el(".color_picker_wrap",
					{
						onclick: this._handlers.show
					}, [s.el("label.input_element",
					{
						for: this._config.id
					}, [s.el("input",
					{
						type: "text",
						name: this._config.id,
						value: this._config.value,
						disabled: !0
					}), s.el(".input_icon_wrap", [s.el(".input_icon",
					{
						style:
						{
							backgroundColor: this._config.value
						}
					})])])])])])
				}, u.prototype._showPopup = function (t)
				{
					this._colorPicker.setValue(this._config.value), this._popup.show(t)
				}, u);

			function u(t, e)
			{
				var i = this;
				return t.validation = t.validation || "color", (i = r.call(this, t, e) || this)._colorPicker = new a.Colorpicker(null), i._colorPicker.events.on(a.ColorpickerEvents.change, function (t)
				{
					i._popup.hide(), i.setValue(t)
				}), i._popup = new l.Popup, i._popup.attach(i._colorPicker), i._handlers.show = function (t)
				{
					return i._showPopup(t.target)
				}, i
			}
			e.ColorPicker = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(0),
				c = i(8),
				l = i(1),
				u = i(9),
				d = i(2),
				h = i(86),
				p = i(94),
				g = i(87),
				f = i(95),
				_ = i(39),
				y = i(15),
				v = i(148),
				m = i(149),
				o = (a = u.View, o(I, a), I.prototype.destructor = function ()
				{
					this.unmount()
				}, I.prototype.clear = function ()
				{
					this._selected = "", this.events.fire(f.ColorpickerEvents.change, [this._selected]), this.paint()
				}, I.prototype.setValue = function (t)
				{
					this._focusColor(t) && (this.paint(), this.events.fire(f.ColorpickerEvents.change, [this._selected]), this.events.fire(f.ColorpickerEvents.colorChange, [this._selected]))
				}, I.prototype.setFocus = function (t)
				{
					this._focusColor(t) && this.paint()
				}, I.prototype.getValue = function ()
				{
					return this._selected || ""
				}, I.prototype.getCustomColors = function ()
				{
					return this.config.customColors
				}, I.prototype.setCustomColors = function (t)
				{
					this.config.customColors = t.map(function (t)
					{
						return t.toUpperCase()
					}), this.paint()
				}, I.prototype.setCurrentMode = function (t)
				{
					"palette" !== t && "picker" !== t || (this.config.mode = t, this.events.fire(f.ColorpickerEvents.modeChange, [t]), this.events.fire(f.ColorpickerEvents.viewChange, [t]), this.paint())
				}, I.prototype.getCurrentMode = function ()
				{
					return this.config.mode
				}, I.prototype.getView = function ()
				{
					return this.getCurrentMode()
				}, I.prototype.setView = function (t)
				{
					this.setCurrentMode(t)
				}, I.prototype.focusValue = function (t)
				{
					this.setFocus(t)
				}, I.prototype._setHandlers = function ()
				{
					var i = this;
					this._handlers = {
						click:
						{
							".dhx_palette__cell": this._onColorClick
						},
						mousedown: function (t)
						{
							i._pickerMove(t)
						},
						touchstart: function (t)
						{
							i._pickerMove(t)
						},
						buttonsClick: function (t)
						{
							i.setCurrentMode("palette"), "cancel" !== t ? "apply" !== t || i.config.customColors.includes(i._pickerState.background) || (i.setValue(i._pickerState.background), i.events.fire(f.ColorpickerEvents.apply, []), i.events.fire(f.ColorpickerEvents.selectClick, [])) : i.events.fire(f.ColorpickerEvents.cancelClick, [])
						},
						customColorClick: function ()
						{
							i.setView("picker")
						},
						oninput: function (e)
						{
							i._inputTimeout && clearTimeout(i._inputTimeout), i._inputTimeout = setTimeout(function ()
							{
								var t = e.target.value; - 1 === t.indexOf("#") && (t = "#" + t), i._pickerState.customHex = t, h.isHex(t) && (i._pickerState.hsv = h.HexToHSV(t), i.paint())
							}, 100)
						},
						contextmenu:
						{
							".dhx_palette__cell": function (t, e)
							{
								t.preventDefault();
								e = i.config.customColors.indexOf(e.data.color); - 1 !== e && i._removeCustomColor(e), i.paint()
							}
						},
						mouseover:
						{
							".dhx_palette__cell": function (t)
							{
								t.target && _.tooltip(g.default.rightClickToDelete,
								{
									node: t.target,
									position: y.Position.bottom
								})
							},
							".dhx_colorpicker-custom-colors__picker": function (t)
							{
								t.target && _.tooltip(g.default.addNewColor,
								{
									node: t.target,
									position: y.Position.bottom
								})
							}
						}
					}, this.events.on(f.ColorpickerEvents.change, function ()
					{
						i.paint()
					}), this.events.on(f.ColorpickerEvents.colorChange, function ()
					{
						i.paint()
					})
				}, I.prototype._pickerMove = function (t)
				{
					var e = l.locate(t);
					this._pickerState.customHex = "", "picker_palette" === e ? this._setPaletteGrip(t) : this._setRangeGrip(t);
					var i = "picker_palette" === e ? this._setPaletteGrip : this._setRangeGrip,
						n = t.targetTouches ? "touchmove" : "mousemove",
						t = t.targetTouches ? "touchend" : "mouseup";
					document.addEventListener(n, i), document.addEventListener(t, function ()
					{
						document.removeEventListener(n, i)
					}), this.paint()
				}, I.prototype._focusColor = function (t)
				{
					if (void 0 === t || t.length < 4) return !1;
					var i = t.toUpperCase();
					if (!h.isHex(i)) return !1;
					var e = this.config.palette.reduce(function (e, t)
						{
							return e || (t.forEach(function (t)
							{
								t.toUpperCase() === i && (e = !0)
							}), e)
						}, !1),
						t = p.grayShades.includes(i);
					return e || t || ((t = this.getCustomColors()).includes(i.toUpperCase()) || t.push(i.toUpperCase())), this._selected = i || null, this._pickerState.hsv = h.HexToHSV(i), !0
				}, I.prototype._removeCustomColor = function (t)
				{
					this.config.customColors.splice(t, 1)
				}, I.prototype._getCells = function (t, n)
				{
					var o = this;
					return void 0 === n && (n = ""), t.reduce(function (t, e)
					{
						var i = (o._selected || "").toUpperCase() === e.toUpperCase() ? "dhx_palette__cell--selected" : "";
						return t.push(s.el(".dhx_palette__cell",
						{
							class: i + " " + n,
							_data:
							{
								color: e
							},
							style: "background:" + e
						})), t
					}, [])
				}, I.prototype._getGrayShades = function ()
				{
					return s.el(".dhx_palette__row", this._getCells(p.grayShades))
				}, I.prototype._getPalette = function ()
				{
					var i = this;
					return this.config.palette.reduce(function (t, e)
					{
						return t.push(s.el(".dhx_palette__col", i._getCells(e))), t
					}, [])
				}, I.prototype._getContent = function ()
				{
					var t = !this.config.pickerOnly && "palette" === this.config.mode ? r([this.config.grayShades && this._getGrayShades()], this._getPalette(), [!this.config.paletteOnly && s.el(".dhx_colorpicker-custom-colors",
					{
						onmouseover: this._handlers.mouseover
					}, [s.el(".dhx_colorpicker-custom-colors__header", [g.default.customColors]), s.el(".dhx_palette--custom.dhx_palette__row", r(this._getCells(this.config.customColors, "dhx_custom-color__cell"), [s.el(".dhx_colorpicker-custom-colors__picker",
					{
						class: "dxi dxi-plus",
						onclick: this._handlers.customColorClick,
						onmouseover: this._handlers.mouseover
					})]))])]) : [v.getPicker(this, this._pickerState, this._handlers)];
					return s.el(".dhx_widget.dhx_colorpicker",
					{
						class: this.config.css,
						style:
						{
							width: this.config.width
						}
					}, [s.el(".dhx_palette",
					{
						onclick: this._handlers.click,
						oncontextmenu: this._handlers.contextmenu
					}, t)])
				}, I);

			function I(t, e)
			{
				var n = a.call(this, t, e) || this;
				n._setPaletteGrip = function (t)
				{
					var e = n.getRootView().refs.picker_palette.el.getBoundingClientRect(),
						i = (t.targetTouches ? t.targetTouches[0] : t).clientX,
						t = (t.targetTouches ? t.targetTouches[0] : t).clientY - e.top,
						i = i - e.left,
						t = m.calculatePaletteGrip(e, t, i),
						i = t.s,
						t = t.v;
					n._pickerState.hsv.s = i, n._pickerState.hsv.v = t, n.paint()
				}, n._setRangeGrip = function (t)
				{
					var e = n.getRootView().refs.hue_range.el.getBoundingClientRect(),
						t = (t.targetTouches ? t.targetTouches[0] : t).clientX - e.left,
						e = m.calculateRangeGrip(e, t),
						t = e.h,
						e = e.rangeLeft;
					n._pickerState.hsv.h = t, n._pickerState.rangeLeft = e, n.paint()
				}, n._onColorClick = function (t, e)
				{
					n._selected = e.data.color.toUpperCase(), n.events.fire(f.ColorpickerEvents.change, [n._selected]), n.events.fire(f.ColorpickerEvents.colorChange, [n._selected])
				}, n._container = t, n.config = d.extend(
				{
					css: "",
					grayShades: !0,
					pickerOnly: !1,
					paletteOnly: !1,
					customColors: [],
					palette: p.palette,
					width: "238px",
					mode: "palette"
				}, n.config), n.config.palette || (n.config.palette = p.palette), n.config.customColors && (n.config.customColors = n.config.customColors.map(function (t)
				{
					return t.toUpperCase()
				})), n._pickerState = {
					hsv:
					{
						h: 0,
						s: 1,
						v: 1
					},
					customHex: ""
				}, n.events = new c.EventSystem(n), n._setHandlers();
				t = s.create(
				{
					render: function ()
					{
						return n._getContent()
					}
				});
				return n.mount(n._container, t), n
			}
			e.Colorpicker = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var c = i(86),
				l = i(0),
				u = i(87);
			e.getPicker = function (t, e, i)
			{
				var n = c.HSVtoRGB(e.hsv);
				e.background = c.RGBToHex(n);
				var o = c.RGBToHex(c.HSVtoRGB(
					{
						h: e.hsv.h,
						s: 1,
						v: 1
					})),
					r = t.getRootView(),
					a = (s = r.refs ? r.refs.picker_palette.el.getBoundingClientRect() :
					{
						height: 200,
						width: 218,
						x: 0,
						y: 0
					}).height - 2,
					n = s.width - 2,
					r = a - e.hsv.v * a - 4,
					a = e.hsv.s * n - 4,
					s = (n = s.width - 6) - (360 - e.hsv.h) / 360 * n,
					n = (c.isHex(e.customHex) ? e.customHex : e.background).replace("#", "");
				return l.el(".dhx_colorpicker-picker",
				{}, [l.el(".dhx_colorpicker-picker__palette",
				{
					style:
					{
						height: 132,
						background: o
					},
					onmousedown: i.mousedown,
					ontouchstart: i.touchstart,
					dhx_id: "picker_palette",
					_ref: "picker_palette"
				}, [l.el(".dhx_palette_grip",
				{
					style:
					{
						top: r,
						left: a
					}
				})]), l.el(".dhx_colorpicker-hue-range",
				{
					style:
					{
						height: 16
					},
					onmousedown: i.mousedown,
					ontouchstart: i.touchstart,
					dhx_id: "hue_range",
					_key: "hue_range",
					_ref: "hue_range"
				}, [l.el(".dhx_colorpicker-hue-range__grip",
				{
					style:
					{
						left: s
					}
				})]), l.el(".dhx_colorpicker-value", [l.el(".dhx_colorpicker-value__color",
				{
					style:
					{
						background: e.background
					}
				}), l.el(".dhx_colorpicker-value__input__wrapper", [l.el("input",
				{
					class: "dhx_colorpicker-value__input",
					value: n,
					oninput: i.oninput,
					maxlength: "7",
					_key: "hex_input"
				})])]), l.el(".dhx_colorpicker-picker__buttons", [!t.config.pickerOnly && l.el("button",
				{
					class: "dhx_button dhx_button--size_medium dhx_button--view_link dhx_button--color_primary",
					onclick: [i.buttonsClick, "cancel"]
				}, u.default.cancel), l.el("button",
				{
					class: "dhx_button dhx_button--size_medium dhx_button--view_flat dhx_button--color_primary",
					onclick: [i.buttonsClick, "apply"]
				}, u.default.select)])])
			}, e.calculatePaletteGrip = function (t, e, i)
			{
				var t = (n = t.refs.picker_palette.el.getBoundingClientRect()).height,
					n = n.width;
				e = e < 0 ? 0 : t < e ? t : e, i = i < 0 ? 0 : n < i ? n : i, n = Math.round(i / (n / 100)), t = 100 - Math.round(e / (t / 100)), this._pickerState.hsv.s = n / 100, this._pickerState.hsv.v = t / 100
			}
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			}), e.calculatePaletteGrip = function (t, e, i)
			{
				var n = t.height,
					t = t.width;
				return e = e < 0 ? 0 : n < e ? n : e, i = i < 0 ? 0 : t < i ? t : i,
				{
					s: Math.round(i / (t / 100)) / 100,
					v: (100 - Math.round(e / (n / 100))) / 100
				}
			}, e.calculateRangeGrip = function (t, e)
			{
				return t = t.width, e = e < 0 ? 0 : t < e ? t : e,
				{
					h: Math.round(e / t * 360),
					rangeLeft: e
				}
			}
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				a = this && this.__assign || function ()
				{
					return (a = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, s = i(2),
				c = i(0),
				l = i(8),
				u = i(1),
				d = i(9),
				h = i(96),
				o = (r = d.View, o(p, r), p.prototype.show = function (t, e, i)
				{
					var n = this;
					void 0 === e && (e = {}), this.events.fire(h.PopupEvents.beforeShow, [t]) && (t = u.toNode(t), this._isActive ? this._setPopupSize(t, e) : (i && this.attach(i), this._popup.style.left = "0", this._popup.style.top = "0", c.awaitRedraw().then(function ()
					{
						n._setPopupSize(t, e), n._popup.style.position = "fixed", document.body.appendChild(n._popup), n._isActive = !0
					}).then(function ()
					{
						n._popup.style.position = "absolute", n.events.fire(h.PopupEvents.afterShow, [t]), n._outerClickDestructor = n._detectOuterClick(t)
					})))
				}, p.prototype.hide = function ()
				{
					this._hide(!1, null)
				}, p.prototype.isVisible = function ()
				{
					return this._isActive
				}, p.prototype.attach = function (t, e)
				{
					return this._html = null, "object" == typeof t ? this._ui = t : "string" == typeof t ? this._ui = new window.dhx[t](null, e) : "function" == typeof t && (t.prototype instanceof d.View ? this._ui = new t(null, e) : this._ui = {
						getRootView: function ()
						{
							return t(e)
						}
					}), this.paint(), this._ui
				}, p.prototype.attachHTML = function (t)
				{
					this._html = t, this.paint()
				}, p.prototype.getWidget = function ()
				{
					return this._ui
				}, p.prototype.getContainer = function ()
				{
					return this.getRootView().refs.content.el
				}, p.prototype.toVDOM = function ()
				{
					var t;
					return this._html ? t = c.el(".dhx_popup__inner-html-content",
					{
						".innerHTML": this._html
					}) : (t = this._ui ? this._ui.getRootView() : null) && t.render && (t = c.inject(t)), c.el("div",
					{
						class: "dhx_popup-content",
						onclick: this._clickEvent,
						_key: this._uid,
						_ref: "content"
					}, [t])
				}, p.prototype.destructor = function ()
				{
					this.hide(), this._outerClickDestructor && this._outerClickDestructor(), this._popup = null
				}, p.prototype._setPopupSize = function (t, e, i)
				{
					var n = this;
					void 0 === i && (i = 3);
					var o = this._popup.getBoundingClientRect(),
						r = o.width,
						o = o.height;
					if (this._timeout && (clearTimeout(this._timeout), this._timeout = null), !i || 0 !== r && 0 !== o)
					{
						r = u.fitPosition(t, a(a(
						{
							centering: !0,
							mode: "bottom"
						}, e),
						{
							width: r,
							height: o
						})), o = r.left, r = r.top;
						if (this._popup.style.left = o, this._popup.style.top = r, e.indent && 0 !== e.indent) switch (e.mode)
						{
						case "top":
							this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) - parseInt(e.indent.toString(), null) + "px";
							break;
						case "bottom":
							this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px";
							break;
						case "left":
							this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) - parseInt(e.indent.toString(), null) + "px";
							break;
						case "right":
							this._popup.style.left = parseInt(this._popup.style.left.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px";
							break;
						default:
							this._popup.style.top = parseInt(this._popup.style.top.slice(0, -2), null) + parseInt(e.indent.toString(), null) + "px"
						}
					}
					else this._timeout = setTimeout(function ()
					{
						n._isActive && (n._setPopupSize(t, e, i - 1), n._timeout = null)
					})
				}, p.prototype._detectOuterClick = function (i)
				{
					var n = this,
						o = function (t)
						{
							for (var e = t.target; e;)
							{
								if (e === i || e === n._popup) return;
								e = e.parentNode
							}
							n._hide(!0, t) && document.removeEventListener("click", o)
						};
					return document.addEventListener("click", o),
						function ()
						{
							return document.removeEventListener("click", o)
						}
				}, p.prototype._hide = function (t, e)
				{
					if (this._isActive) return !!this.events.fire(h.PopupEvents.beforeHide, [t, e]) && (document.body.removeChild(this._popup), this._isActive = !1, this._outerClickDestructor && (this._outerClickDestructor(), this._outerClickDestructor = null), this.events.fire(h.PopupEvents.afterHide, [e]), !0)
				}, p);

			function p(t)
			{
				void 0 === t && (t = {});
				var e = r.call(this, null, s.extend(
					{}, t)) || this,
					i = e._popup = document.createElement("div");
				return i.className = "dhx_widget dhx_popup" + (e.config.css ? " " + e.config.css : ""), i.style.position = "absolute", e.mount(i, c.create(
				{
					render: function ()
					{
						return e.toVDOM()
					}
				})), e._clickEvent = function (t)
				{
					return e.events.fire(h.PopupEvents.click, [t])
				}, e.events = t.events || new l.EventSystem(e), e._isActive = !1, e
			}
			e.Popup = o
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(0),
				i = (o.prototype.toVDOM = function ()
				{
					return n.el(".dhx_group_item.side-bar", this._config.label || "")
				}, o);

			function o(t, e)
			{
				this._config = t
			}
			e.Group = i
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(0),
				i = i(97),
				o = (a = i.Inputs, o(c, a), c.prototype.toVDOM = function ()
				{
					for (var t = this._config.options, e = t.length, i = [], n = 0; n < e; n++)
					{
						var o = t[n];
						i.push(s.el("label.input_element",
						{
							for: o.id
						}, [s.el("input",
						{
							type: "text",
							name: o.id,
							value: o.value,
							index: n,
							class: o.invalid ? "dhx_invalid" : "",
							_ref: this._uid + n,
							onchange: this._handlers.change,
							oninput: this._handlers.change
						}), s.el(".input_icon_wrap", [o.icon ? o.icon() : s.el(".input_icon", o.label)])]))
					}
					return s.el(".edit-section.input_group_up", [s.el(".section-title", this._config.label), s.el(".inputs_group", r(i))])
				}, c);

			function c()
			{
				return null !== a && a.apply(this, arguments) || this
			}
			e.InputsGroup = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				i = i(14),
				o = (r = i.Text, o(s, r), s.prototype.toVDOM = function ()
				{
					var t = this._config;
					return a.el(".edit-section.text-edit",
					{
						_key: this._uid
					}, [a.el(".section-title", t.label)])
				}, s);

			function s()
			{
				return null !== r && r.apply(this, arguments) || this
			}
			e.Label = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				s = i(16),
				i = i(14),
				o = (r = i.Text, o(c, r), c.prototype.toVDOM = function ()
				{
					var t = this._getOptions(this._config.data);
					return a.el(".edit-section.input_group_up", [a.el(".section-title", this._config.label), a.el("select.dhx_select",
					{
						onchange: this._handlers.change,
						oninput: this._handlers.change
					}, t)])
				}, c.prototype._getOptions = function (t)
				{
					var e, i = this;
					return t instanceof Array && ((e = new s.DataCollection).parse(t), t = e), t.add(
					{
						value: "",
						title: ""
					}, 0), t.map(function (t)
					{
						var e = t.value === i._config.value;
						return a.el("option.dhx_option",
						{
							value: t.value,
							selected: e
						}, t.title)
					})
				}, c);

			function c()
			{
				return null !== r && r.apply(this, arguments) || this
			}
			e.Select = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(85),
				c = i(0),
				l = i(44),
				u = i(23),
				d = i(84),
				h = i(14),
				p = i(88),
				o = (a = h.Text, o(g, a), g.prototype.toVDOM = function ()
				{
					var t = "center" === this._config.value.toSide || "center" === this._config.value.fromSide;
					return c.el(".edit-section.line-edit",
					{
						_key: this._uid
					}, [c.el(".section-title", this._config.label || ""), c.el(".line-edit-content", [c.el(".input_element.alone_picker",
					{
						onclick: this._handlers.show
					}, [c.el(".input_icon_wrap", [c.el(".input_icon",
					{
						style:
						{
							backgroundColor: this._config.value.stroke
						}
					})])]), c.el(".dropup.input_element", d.getSelect(this._handlers.saveType, "strokeType", [
					{
						id: "none",
						text: "None",
						disabled: this._config.connector
					},
					{
						id: "line",
						class: "dhx_select_line"
					},
					{
						id: "dash",
						class: "dhx_select_dash"
					}], this._config.value.strokeType || "line")), "none" !== this._config.value.strokeType && c.el(".input_element.line_width", [c.el("input",
					{
						type: "text",
						onchange: this._handlers.change,
						oninput: this._handlers.change,
						_ref: this._uid,
						value: this._config.value.strokeWidth,
						name: "strokeWidth",
						class: this._config.invalid ? "dhx_invalid" : ""
					}), c.el(".title", "PX")])]), !t && this._config.connector && c.el(".line-edit-content", [c.el(".input_element.arrow_select", d.getSelect(this._handlers.saveType, "backArrow", [
					{
						id: "",
						el: function ()
						{
							return u.getIcon("line")
						}
					},
					{
						id: "filled",
						el: function ()
						{
							return u.getIcon("filled-arrow")
						}
					}], this._config.value.backArrow)), c.el(".input_element.arrow_select", d.getSelect(this._handlers.saveType, "forwardArrow", [
					{
						id: "",
						el: function ()
						{
							return u.getIcon("line")
						}
					},
					{
						id: "filled",
						el: function ()
						{
							return u.getIcon("filled-arrow-rewerse")
						}
					}], this._config.value.forwardArrow)), d.getIconGroup(this._handlers.iconClick, "connectType", [
					{
						id: "straight",
						el: u.getIcon("straight"),
						css: "dhx_line_icon"
					},
					{
						id: "elbow",
						el: u.getIcon("elbow"),
						css: "dhx_line_icon"
					}], this._config.value.connectType)]), !t && this._config.value.connectType && "elbow" === this._config.value.connectType && c.el(".input_element", [c.el("input",
					{
						type: "text",
						name: "cornersRadius",
						onchange: this._handlers.change,
						oninput: this._handlers.change,
						value: this._config.value.cornersRadius
					}), c.el(".input_icon_wrap", [c.el(".input_icon", "r")])])])
				}, g.prototype._showPopup = function (t)
				{
					this._colorPicker.setValue(this._config.value.stroke), this._popup.show(t)
				}, g);

			function g(t, e)
			{
				var o = this;
				return t.validation = t.validation || "color", (o = a.call(this, t, e) || this)._colorPicker = new s.Colorpicker(null), o._popup = new p.Popup, o._popup.attach(o._colorPicker), o._colorPicker.events.on(s.ColorpickerEvents.change, function (t)
				{
					o._popup.hide(), o.setValue(r(r(
					{}, o._config.value),
					{
						stroke: t
					}))
				}), o._handlers.show = function (t)
				{
					return o._showPopup(t.target)
				}, o._handlers.saveType = function (t, e)
				{
					var i;
					o.setValue(r(r(
					{}, o._config.value), ((i = {})[t] = e, i)))
				}, o._handlers.change = function (t)
				{
					var e, i = t.target.getAttribute("name"),
						n = t.target.value;
					l.validate(n, "number") ? (t.target.setAttribute("class", ""), o.setValue(r(r(
					{}, o._config.value), ((e = {})[i] = n, e)))) : t.target.setAttribute("class", "dhx_invalid")
				}, o._handlers.iconClick = function (t, e)
				{
					var i = e.target.getAttribute("dhx_id");
					o.setValue(r(r(
					{}, o._config.value), ((e = {})[t] = i, e)))
				}, o
			}
			e.Stroke = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
			{
				return (n = Object.setPrototypeOf ||
					{
						__proto__: []
					}
					instanceof Array && function (t, e)
					{
						t.__proto__ = e
					} || function (t, e)
					{
						for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
					})(t, e)
			}, function (t, e)
			{
				function i()
				{
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
			});
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, a = i(0),
				s = i(14),
				c = i(2),
				l = i(25),
				o = (r = s.Text, o(u, r), u.prototype.setValue = function (t, e)
				{
					"array" === c.isType(t) && (t = t.join("\n"), this._isArray = !0);
					var i = this._config.value;
					t !== i && (this._config.value = t, e || this._evs.fire(l.PropertyEvents.change, [this._config.id, t, i]))
				}, u.prototype.getValue = function ()
				{
					return this._isArray ? this._config.value.split(/\r?\n/) : this._config.value
				}, u.prototype.toVDOM = function ()
				{
					var t = this._config,
						e = t.placeholder,
						i = void 0 === e ? "" : e,
						n = t.label,
						e = t.value,
						t = t.isValid;
					return a.el(".edit-section.text-edit",
					{
						_key: this._uid
					}, [a.el(".section-title", n), a.el("textarea.dhx_textarea",
					{
						placeholder: i,
						value: e,
						class: t ? "" : "dhx_invalid",
						_ref: this._uid,
						onchange: this._handlers.change,
						oninput: this._handlers.change,
						rows: this._getRows(e)
					})])
				}, u.prototype._getRows = function (t)
				{
					t = t.split(/\r?\n/).length;
					return 5 < t ? 5 : t
				}, u);

			function u()
			{
				var t = null !== r && r.apply(this, arguments) || this;
				return t._isArray = !1, t
			}
			e.Textarea = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(85),
				c = i(0),
				l = i(44),
				u = i(84),
				d = i(14),
				h = i(88),
				o = (a = d.Text, o(p, a), p.prototype.toVDOM = function ()
				{
					return c.el(".edit-section.line-edit",
					{
						_key: this._uid
					}, [c.el(".section-title", this._config.label || ""), c.el(".line-edit-content", [c.el(".dropup.input_element", u.getSelect(this._handlers.onSelect, "fontSize", [
					{
						id: "10",
						text: "10"
					},
					{
						id: "12",
						text: "12"
					},
					{
						id: "14",
						text: "14"
					},
					{
						id: "16",
						text: "16"
					},
					{
						id: "18",
						text: "18"
					},
					{
						id: "20",
						text: "20"
					}], parseFloat(this._config.value.fontSize).toString() || "14")), c.el(".input_element.line_height", [c.el("input",
					{
						type: "text",
						_ref: this._uid,
						onchange: this._handlers.change,
						oninput: this._handlers.change,
						value: this._config.value.lineHeight,
						_key: "line_height"
					}), c.el(".input_icon_wrap", [c.el(".dxi.dxi-format-line-spacing")])]), u.getIconGroup(this._handlers.iconClick, "fontWeight", [
					{
						id: "bold",
						css: "dxi dxi-format-bold"
					}], this._config.value.fontWeight, !0), u.getIconGroup(this._handlers.iconClick, "fontStyle", [
					{
						id: "italic",
						css: "dxi dxi-format-italic"
					}], this._config.value.fontStyle, !0)]), c.el(".line-edit-content", [c.el(".input_element.alone_picker",
					{
						onclick: this._handlers.show
					}, [c.el(".input_icon_wrap", [c.el(".input_icon",
					{
						style:
						{
							backgroundColor: this._config.value.fontColor
						}
					})])]), !1 !== this._config.alignments && u.getIconGroup(this._handlers.iconClick, "textAlign", [
					{
						id: "left",
						css: "dxi dxi-format-align-left"
					},
					{
						id: "center",
						css: "dxi dxi-format-align-center"
					},
					{
						id: "right",
						css: "dxi dxi-format-align-right"
					}], this._config.value.textAlign), !1 !== this._config.alignments && u.getIconGroup(this._handlers.iconClick, "textVerticalAlign", [
					{
						id: "top",
						css: "dxi dxi-format-vertical-align-top"
					},
					{
						id: "center",
						css: "dxi dxi-format-vertical-align-center"
					},
					{
						id: "bottom",
						css: "dxi dxi-format-vertical-align-bottom"
					}], this._config.value.textVerticalAlign)])])
				}, p.prototype._showPopup = function (t)
				{
					this._colorPicker.setValue(this._config.value.fontColor), this._popup.show(t)
				}, p);

			function p(t, e)
			{
				var n = this;
				return t.validation = t.validation || "color", (n = a.call(this, t, e) || this)._colorPicker = new s.Colorpicker(null), n._popup = new h.Popup, n._popup.attach(n._colorPicker), n._colorPicker.events.on(s.ColorpickerEvents.change, function (t)
				{
					n._popup.hide(), n.setValue(r(r(
					{}, n._config.value),
					{
						fontColor: t
					}))
				}), n._handlers.show = function (t)
				{
					return n._showPopup(t.target)
				}, n._handlers.change = function (t)
				{
					var e = t.target.value;
					l.validate(e, "number") ? (t.target.setAttribute("class", ""), n.setValue(r(r(
					{}, n._config.value),
					{
						lineHeight: e
					}))) : t.target.setAttribute("class", "dhx_invalid")
				}, n._handlers.onSelect = function (t, e)
				{
					var i;
					n.setValue(r(r(
					{}, n._config.value), ((i = {})[t] = e, i)))
				}, n._handlers.iconClick = function (t, e)
				{
					var i = e.target.getAttribute("dhx_id");
					n.setValue(r(r(
					{}, n._config.value), ((e = {})[t] = i, e)))
				}, n
			}
			e.TextProps = o
		}, function (t, l, u)
		{
			"use strict";
			(function (t)
			{
				var n, e = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				});
				Object.defineProperty(l, "__esModule",
				{
					value: !0
				});
				var o, i = u(0),
					r = u(13),
					a = u(25),
					s = u(14),
					e = (o = s.Text, e(c, o), c.prototype.toVDOM = function ()
					{
						return i.el(".edit-section.color-edit", [i.el(".section-title", this._config.label), i.el(".dhx_img_uploader", [i.el("label", [i.el("input.dhx_uploader_input",
						{
							_refs: this._uid,
							type: "file",
							name: "file",
							id: "dhx_img_upload",
							accept: ".jpg, .jpeg, .png",
							style:
							{
								display: "none"
							},
							onchange: this._handlers.upload
						}), i.el(".dhx_uploader_preview",
						{
							id: "dhx_img_preview",
							class: this._loading ? "loading" : "",
							style: 'background-image:url("' + this._config.value + '")',
							_ref: this._uid
						}, [i.el(".dhx_loading")]), i.el(".pop-up", this._config.hint || r.locale.imageUpload)])])])
					}, c.prototype._getBase64 = function (n)
					{
						return new t(function (t, e)
						{
							n || e();
							var i = new FileReader;
							i.onloadend = function ()
							{
								t(i.result)
							}, i.readAsDataURL(n)
						})
					}, c.prototype._onUpload = function (t)
					{
						var e = this,
							t = t.target.files[0];
						this._loading = !0, this._evs.fire(a.PropertyEvents.beforeFileUpload), this._getBase64(t).then(function (t)
						{
							e.setValue(t), e._evs.fire(a.PropertyEvents.afterFileUpload)
						}).catch(function (t)
						{
							return !0
						}).then(function (t)
						{
							return e._loading = !1
						})
					}, c);

				function c(t, e)
				{
					var i = o.call(this, t, e) || this;
					return i._handlers.upload = function (t)
					{
						return i._onUpload(t)
					}, i
				}
				l.Uploader = e
			}).call(this, u(7))
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(0),
				o = i(13),
				r = i(23),
				i = (a.prototype.toVDOM = function ()
				{
					return n.el("div.empty-state", [this._getIcon(), n.el("span.empty-state__text", o.locale.emptyState)])
				}, a.prototype._getIcon = function ()
				{
					return r.getIcon("empty-icon", "", 29, 29)
				}, a);

			function a()
			{}
			e.Empty = i
		}, function (t, e, i)
		{
			"use strict";
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var n = i(2),
				a = i(0),
				i = (o.prototype.getItemId = function ()
				{
					return this._nearShape ? this._nearShape.id : ""
				}, o.prototype.getPoints = function (t, i)
				{
					var n = this;
					if (this._nearShape && this._nearShape.$shape.canResize())
					{
						var o = "org" === this._diagram.config.type ? 10 : 8,
							r = this._diagram.config.scale;
						if (t && t.$shape.isConnector() && t.$move)
						{
							var e = this._diagram.data.map(function (t)
							{
								if (t.$shape.isConnector() || !t.$shape.canResize()) return null;
								var e = t.$shape.getBox();
								return a.el(".dhx_connect",
								{
									style:
									{
										width: t.width * r,
										height: t.height * r,
										position: "absolute",
										top: (e.top - i.top) * r,
										left: (e.left - i.left) * r,
										pointerEvents: "none",
										transform: "rotate(" + (t.angle || 0) + "deg)"
									}
								}, n._getConnectionPoints(s(t, o), r))
							});
							return a.el("div", e)
						}
						e = this._nearShape.$shape.getBox();
						return a.el(".dhx_connect",
						{
							style:
							{
								width: this._nearShape.width * r,
								height: this._nearShape.height * r,
								position: "absolute",
								top: (e.top - i.top) * r,
								left: (e.left - i.left) * r,
								pointerEvents: "none",
								transform: "rotate(" + (this._nearShape.angle || 0) + "deg)"
							}
						}, this._getConnectionPoints(s(this._nearShape, o), r))
					}
				}, o.prototype._getConnectionPoints = function (t, e)
				{
					var i = this;
					return t.map(function (t)
					{
						return a.el(".dhx_connect_point",
						{
							style:
							{
								top: t.y * e - 15,
								left: t.x * e - 15
							},
							_key: n.uid(),
							class: (i._nearPoint && i._nearPoint.side) === t.side && t.id === i._nearPoint.id ? "dhx_nearest_point" : "",
							_data:
							{
								resizer: i._controls,
								p: t
							},
							onmouseover: [i._setNearPoint, t],
							onmouseleave: [i._removeNearPoint],
							onmousedown: [i.createConnector, t]
						}, [a.el(".dhx_connect_grip",
						{
							_data:
							{
								resizer: i._controls,
								p: t
							}
						})])
					})
				}, o.prototype.setNearShape = function (t)
				{
					t !== this._nearShape && (this._nearShape = t, this._diagram.paint())
				}, o.prototype.toggleNearShape = function (t)
				{
					this._nearShape = this._nearShape && this._nearShape.id === t.id ? null : t, this._diagram.paint()
				}, o.prototype.removeNearShape = function ()
				{
					this._nearShape = null, this._nearPoint = null
				}, o.prototype.moveConnector = function (t, e, i, n)
				{
					var o, r = this._controls.getPoint(t.clientX, t.clientY);
					this._connector && ((s = this._diagram.data.getItem(this._connector.id)).points[s.points.length - 1] = {
						x: r.x,
						y: r.y
					}, this._diagram.data.update(s.id, s), this._diagram.paint()), this._findNearShape(r, n);
					var a, t = e.points.map(function (t, e)
						{
							return n.$slide || e !== n.i || (t.x = t.x + i.x, t.y = t.y + i.y, t.$custom = !0, n.side && (o = n.side)), t
						}),
						s = 0;
					n.$slide && (r = e.points[e.points.length - 1], a = e.points[e.points.length - 2], s = "horizontal" === n.$slide ? Math.abs(r.x - a.x - i.x) : Math.abs(r.y - a.y - i.y)), this._nearPoint && o ? this._diagram.data.update(e.id, ((a = {
						points: t,
						$move: !0
					})[o] = this._nearPoint.id, a[o + "Side"] = this._nearPoint.side, a.customGap = s, a)) : (this._diagram.data.update(e.id,
					{
						points: t,
						$move: !0,
						customGap: s
					}), this._diagram.paint())
				}, o.prototype.onUp = function ()
				{
					var t, e, i = this._diagram.selection.getItem();
					i && delete i.$move, this._connector && this._nearShape && (t = this._connector.from, e = this._nearShape.id, i && t && e && t !== e && this._nearPoint ? this._diagram.data.update(i.id,
					{
						from: this._connector.from,
						to: this._nearShape.id,
						fromSide: this._connector.fromSide,
						toSide: this._nearPoint.side,
						points: null
					}) : (this._diagram.selection.add(this._connector.from), this._diagram.data.remove(i.id)), this._connector = null), this._nearShape = null, this._nearPoint = null
				}, o.prototype._findNearShape = function (n, o)
				{
					var t = this._diagram.data.map(function (t)
					{
						if (!t.$shape.isConnector() && t.id !== o.id)
						{
							var e = t.x + t.width / 2,
								i = t.y + t.height / 2;
							return {
								shape: t,
								distance: Math.sqrt(Math.pow(n.x - e, 2) + Math.pow(n.y - i, 2))
							}
						}
					}).filter(function (t)
					{
						return t
					}).sort(function (t, e)
					{
						return t.distance - e.distance
					}).map(function (t)
					{
						return t.shape
					});
					this._nearShape = t[0] || this._diagram.data[0]
				}, o);

			function o(t, e)
			{
				var i = this;
				this.createConnector = function (t)
				{
					var e = n.uid();
					i._connector = {
						id: e,
						from: t.id,
						fromSide: t.side
					};
					t = i._nearShape.$shape.getPoint(t.dx, t.dy);
					i._diagram.data.add(
					{
						id: e,
						type: "line",
						points: [
						{
							x: t.x,
							y: t.y
						},
						{
							x: t.x,
							y: t.y
						}],
						stroke: "#2196F3",
						$move: !0
					}), i._diagram.selection.add(e)
				}, this._setNearPoint = function (t)
				{
					i._nearPoint && t.side === i._nearPoint.side || (i._nearPoint = t, i._diagram.paint())
				}, this._removeNearPoint = function ()
				{
					i._nearPoint && (i._nearPoint = null, i._diagram.paint())
				}, this._controls = t, this._diagram = e
			}

			function s(t, e)
			{
				if (!t) return [];
				var i = t.$shape.getBox(),
					n = t.width,
					o = t.height,
					r = i.left - e / 2,
					e = i.top - e / 2;
				return [
				{
					dx: r + n / 2,
					dy: e + o / 2,
					x: 0 + n / 2,
					y: 0 + o / 2,
					id: t.id,
					side: "center"
				},
				{
					x: 0 + n / 2,
					y: 0,
					dx: r + n / 2,
					dy: e,
					id: t.id,
					side: "top"
				},
				{
					x: 0 + n,
					y: 0 + o / 2,
					dx: r + n,
					dy: e + o / 2,
					id: t.id,
					side: "right"
				},
				{
					x: 0 + n / 2,
					y: 0 + o,
					dx: r + n / 2,
					dy: e + o,
					id: t.id,
					side: "bottom"
				},
				{
					x: 0,
					y: 0 + o / 2,
					dx: r,
					dy: e + o / 2,
					id: t.id,
					side: "left"
				}]
			}
			e.Connect = i, e.getConnectPoints = s
		}, function (t, e, i)
		{
			"use strict";
			var u = this && this.__assign || function ()
				{
					return (u = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				},
				d = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var c = i(0),
				l = i(23),
				h = i(89),
				i = (n.prototype.getPoints = function (t, e)
				{
					var i = this;
					if (t)
					{
						var n = t.$shape.getBox(),
							o = "org" === this._diagram.config.type ? 10 : 8,
							r = this._diagram.config.scale,
							a = 0;
						t.$shape.isConnector() && (a = 2);
						var s = p(t, r).map(function (t)
						{
							return c.el(".dhx_resize_grip",
							{
								style:
								{
									cursor: t.cursor,
									position: "absolute",
									top: t.y - a - o / 2,
									left: t.x - a - o / 2,
									pointerEvents: "auto",
									outline: "none"
								},
								tabindex: -1,
								class: t.$break ? "dhx_break_point" : t.$slide ? "dhx_slide_point dhx_slide_point__" + t.$slide : "",
								_data:
								{
									resizer: i._controls,
									p: t
								}
							})
						});
						return c.el(".dhx_resizer",
						{
							style:
							{
								width: t.width * r,
								height: t.height * r,
								position: "absolute",
								top: (n.top - e.top) * r,
								left: (n.left - e.left) * r,
								pointerEvents: "none",
								transform: "rotate(" + (t.angle || 0) + "deg)"
							}
						}, d(s, [!t.$shape.isConnector() && c.el("div",
						{
							class: "dhx_diagram_item",
							dhx_id: t.id,
							style:
							{
								width: t.width * r,
								height: t.height * r,
								top: 0,
								left: 0,
								background: "none",
								outline: "1px dashed #1876d2",
								position: "absolute",
								zIndex: 0,
								pointerEvents: "none"
							}
						}), !t.$shape.isConnector() && "org" !== this._diagram.config.type && c.el(".dhx_shape_rotate",
						{
							style:
							{
								width: 20,
								height: 20,
								position: "absolute",
								top: t.height * r / 2 - 10,
								left: t.width * r + 10,
								zIndex: 1e4,
								pointerEvents: "auto"
							},
							_data:
							{
								resizer: this._controls,
								p:
								{
									rotate: !0
								}
							}
						}, [l.getIcon("rotate")])]))
					}
				}, n);

			function n(t, e)
			{
				this._controls = t, this._diagram = e
			}

			function o(a, s)
			{
				var c = u(
				{}, a.points[0]);
				c.x *= s, c.y *= s;
				var l = [],
					t = a.points.map(function (t, e, i)
					{
						var n, o, r;
						return (t = u(
						{}, t)).x *= s, t.y *= s, t.cursor = "pointer", 0 === (t.i = e) && (t.side = "from"), e === a.points.length - 1 && (t.side = "to"), "curved" !== a.connectType && i[e + 1] && ((n = u(
						{}, i[e + 1])).x *= s, n.y *= s, r = i[e + 2] &&
						{
							x: i[e + 2].x,
							y: i[e + 2].y
						}, i = (o = i[e - 1] &&
						{
							x: i[e - 1].x,
							y: i[e - 1].y
						}) && n && r && (o.x === t.x || o.y === t.y) && (n.x === t.x || n.y === t.y) && n.x !== o.x && n.y !== o.y && (r.x === n.x || r.y === n.y) && r.x !== t.x && r.y !== t.y, 20 < h.getLength(t, n) && (o = (t.x + n.x) / 2, r = (t.y + n.y) / 2, i && l.push(
						{
							x: o - c.x + 1,
							y: r - c.y + 1,
							dx: o / s,
							dy: r / s,
							$slide: t.x === n.x ? "horizontal" : "vertical",
							i: e + 1
						}))), t.dx = t.x, t.dy = t.y, t.x = t.x - c.x + 2, t.y = t.y - c.y + 2, t
					});
				return d(t, l)
			}

			function p(t, e)
			{
				if (t.$shape.isConnector()) return o(t, e);
				var i = t.width * e,
					e = t.height * e;
				return [
				{
					cursor: "nw-resize",
					x: 0,
					y: 0,
					dx: 1,
					dy: 1
				},
				{
					cursor: "n-resize",
					x: 0 + i / 2,
					y: 0,
					dx: 0,
					dy: 1
				},
				{
					cursor: "ne-resize",
					x: 0 + i,
					y: 0,
					dx: -1,
					dy: 1
				},
				{
					cursor: "e-resize",
					x: 0 + i,
					y: 0 + e / 2,
					dx: -1,
					dy: 0
				},
				{
					cursor: "se-resize",
					x: 0 + i,
					y: 0 + e,
					dx: -1,
					dy: -1
				},
				{
					cursor: "s-resize",
					x: 0 + i / 2,
					y: 0 + e,
					dx: 0,
					dy: -1
				},
				{
					cursor: "sw-resize",
					x: 0,
					y: 0 + e,
					dx: 1,
					dy: -1
				},
				{
					cursor: "w-resize",
					x: 0,
					y: 0 + e / 2,
					dx: 1,
					dy: 0
				}]
			}
			e.Resize = i, e.getConnectorPoints = o, e.getRectPoints = p
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				r = this && this.__assign || function ()
				{
					return (r = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var a, s = i(2),
				c = i(13),
				l = i(92),
				u = i(99),
				d = i(89),
				h = i(90),
				p = i(100),
				g = i(163),
				f = i(93),
				_ = i(22),
				y = i(81),
				v = i(98),
				m = i(82),
				I = i(83),
				o = (a = h.BaseDiagramEditor, o(x, a), x.prototype.parse = function (t)
				{
					this.diagram.data.parse(t.map(function (t)
					{
						return t.from || t.to, t
					}))
				}, x.prototype._initDiagram = function ()
				{
					this.diagram = new c.Diagram(null,
					{
						type: this.config.type || "",
						select: !0,
						toolbar: u.freeEditorButtons,
						gridStep: this.config.gridStep,
						margin:
						{
							y: 70,
							x: this.config.reservedWidth
						},
						lineGap: this.config.lineGap,
						defaults: this._getDefaults(),
						scale: this.config.scale
					})
				}, x.prototype._initUI = function (t)
				{
					var i = this,
						t = this._layout = new l.Layout(t,
						{
							height: "100%",
							css: "dhx_free_editor",
							rows: [
							{
								id: "top",
								css: "dhx_topbar shadow-bottom"
							},
							{
								css: "flex editor free_editor",
								cols: [
								{
									id: "left",
									width: this.config.shapeBarWidth,
									css: "shapesbar_cont dhx_shapesbar--with-width"
								},
								{
									id: "center",
									css: "flex"
								},
								{
									id: "right",
									css: "sidebar free_sidebar"
								}]
							}]
						});
					this.diagram.config.$svg = function (t)
					{
						var e = i.diagram.selection.getId(),
							e = i.diagram.data.getItem(e);
						return i._selectionBox && i._selectionBox.isValid() ? i._selectionBox.render() : i._blockSelection.getSelected().length ? null : i._resizer.render(e, t)
					}, this.diagram.data.parse([
					{
						id: "1",
						type: "rectangle",
						text: "",
						x: 0,
						y: 0
					}]), this.diagram.events.on(c.DataEvents.load, function ()
					{
						i.history.reset(), i._checkEditMode()
					}), this.diagram.events.on(c.DiagramEvents.emptyAreaClick, function (t)
					{
						i.diagram.selection.getId() && (i.diagram.selection.remove(), i._sidebar.empty(), i.paint()), i._findNearestConnector(t)
					}), this._shapesBar = new g.ShapesBar(null,
					{
						events: this.events,
						diagram: this.diagram,
						shapeSections: this.config.shapeSections,
						defaults: this.diagram.config.defaults,
						margin: this.config.gapPreview,
						scale: this.config.scalePreview
					}), this._sidebar = new f.Sidebar(this.diagram,
					{
						showGridStep: this.config.controls.gridStep
					}, this.events), this._blockSelection = new v.BlockSelection(this.diagram), this._resizer = new d.Controls(this.events, this.diagram, this._blockSelection), this.history = new y.UndoManager(this.diagram.data), t.getCell("top").attach(p.topbar, this), t.getCell("right").attach(this._sidebar.getUI()), t.getCell("left").attach(this._shapesBar), t.getCell("center").attach(this.diagram), this._checkEditMode()
				}, x.prototype._showConnectPoints = function (t, e)
				{
					t = this.diagram.data.getItem(t);
					e ? (t.$connectMode = !t.$connectMode, this._resizer.toggleNearShape(t)) : this._resizer.setNearShape(t)
				}, x.prototype._setHandlers = function ()
				{
					var n = this;
					a.prototype._setHandlers.call(this), this.diagram.events.on(c.DiagramEvents.shapeIconClick, function (t)
					{
						var e = n.diagram.selection.getId();
						switch (t)
						{
						case "copy":
							n._copyShape(), n._pasteShape();
							break;
						case "remove":
							n._removeShape(e);
							break;
						case "connect":
							n._showConnectPoints(n.diagram.selection.getId(), !0);
							break;
						case "removePoint":
							var i = n.diagram.selection.getItem();
							i.points.splice(i.$selectedPoint, 1), i.$selectedPoint = null, n.diagram.paint()
						}
					}), this.events.on(_.DiagramEditorEvents.exportData, function ()
					{
						var t = JSON.stringify(n.serialize());
						s.downloadFile(t, "data.json", "text/json")
					}), this.events.on(_.DiagramEditorEvents.autoLayout, function ()
					{
						n.diagram.autoPlace(
						{
							root: n.diagram.selection.getId(),
							mode: n.config.autoplacement.mode,
							graphPadding: n.config.autoplacement.graphPadding
						}), n.paint()
					}), this.diagram.events.on(c.DiagramEvents.shapeHover, function (t)
					{
						var e = n.diagram.selection.getId(),
							i = n.diagram.data.getItem(t);
						t === e || i.$shape.isConnector() || n._showConnectPoints(t)
					}), this.events.on(_.DiagramEditorEvents.zoomIn, function ()
					{
						n.config.scale = n.config.scale || 1, n.config.scale += .05, n.diagram.config.scale = n.config.scale, n.paint()
					}), this.events.on(_.DiagramEditorEvents.zoomOut, function ()
					{
						n.config.scale = n.config.scale || 1, n.config.scale = n.config.scale <= .05 ? .05 : n.config.scale - .05, n.diagram.config.scale = n.config.scale, n.paint()
					}), this.events.on(_.DiagramEditorEvents.visibility, function ()
					{
						n.config.editMode = !n.config.editMode, n._checkEditMode(), n._layout.paint()
					}), this.events.on(_.DiagramEditorEvents.shapesUp, function (t)
					{
						if (n._changeMode)
						{
							var e = n.diagram.selection.getId();
							return n.diagram.data.update(e,
							{
								type: t.type
							}), n.diagram.paint(), n._changeMode = !1, void n._layout.getCell("center").attach(n.diagram)
						}
						e = n.diagram.getRootView().node.el.getBoundingClientRect();
						t.x < e.left || t.x > e.right ? n._addShape(t, 0, 0) : ((e = n._resizer.getPoint(t.x, t.y)).x = Math.round(e.x / n.config.gridStep) * n.config.gridStep, e.y = Math.round(e.y / n.config.gridStep) * n.config.gridStep, n._addShape(t, e.x, e.y))
					}), this.events.on(_.DiagramEditorEvents.changeGridStep, function (t)
					{
						n.diagram.config.gridStep = t, n.config.gridStep = t, n.paint()
					})
				}, x.prototype._copyShape = function ()
				{
					var e = this;
					this._copiedShapes = this.diagram.selection.getItem() ? [this.diagram.selection.getItem()] : this._blockSelection.getSelected().map(function (t)
					{
						return e.diagram.data.getItem(t)
					})
				}, x.prototype._pasteShape = function ()
				{
					var e = this;
					this._copiedShapes && this._copiedShapes.length && (this._blockSelection.clearSelection(), this.diagram.selection.remove(), this._copiedShapes.forEach(function (t)
					{
						t = e.diagram.data.add(r(r(
						{}, t),
						{
							id: s.uid(),
							x: t.x + t.width + 40
						}));
						(1 === e._copiedShapes.length ? e.diagram.selection : e._blockSelection).add(t)
					}))
				}, x.prototype._findNearestConnector = function (t)
				{
					var s = this,
						c = this._resizer.getPoint(t.clientX, t.clientY);
					this.diagram.data.map(function (t)
					{
						if (t.$shape.isConnector())
							for (var e = 0; e < t.points.length; e++)
							{
								var i = t.points[e];
								if (t.points[e + 1])
								{
									var n = c,
										o = i,
										r = t.points[e + 1],
										a = o.y < n.y && r.y > n.y || r.y < n.y && o.y > n.y,
										i = o.x < n.x && r.x > n.x || r.x < n.x && o.x > n.x;
									if (a || i)
									{
										i = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2)), n = Math.sqrt(Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2)), r = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)), o = (i + n + r) / 2;
										if (2 * Math.sqrt(o * (o - i) * (o - n) * (o - r)) / r <= 10)
										{
											s.diagram.selection.add(t.id);
											break
										}
									}
								}
							}
					})
				}, x.prototype._initHotkeys = function ()
				{
					var e = this;
					a.prototype._initHotkeys.call(this);
					var i = this.diagram._uid;
					m.addHotKey("ctrl+a", function (t)
					{
						e._sidebar.isItemsSelected() || I.getFocus() !== i || (t.preventDefault(), e.diagram.data.forEach(function (t)
						{
							e.diagram.data.update(t.id,
							{
								$blockSelected: "add"
							})
						}))
					}), m.addHotKey("ctrl+c", function ()
					{
						e._sidebar.isItemsSelected() || I.getFocus() !== i || e._copyShape()
					}), m.addHotKey("ctrl+v", function ()
					{
						e._sidebar.isItemsSelected() || I.getFocus() !== i || e._pasteShape()
					}), m.addHotKey("ctrl+d", function (t)
					{
						I.getFocus() === i && (t.preventDefault(), e._copyShape(), e._pasteShape())
					}), m.addHotKey("arrowLeft", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || I.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							x: t.x - e.config.gridStep
						})
					}), m.addHotKey("arrowRight", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || I.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							x: t.x + e.config.gridStep
						})
					}), m.addHotKey("arrowUp", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || I.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							y: t.y - e.config.gridStep
						})
					}), m.addHotKey("arrowDown", function ()
					{
						var t;
						e._sidebar.isItemsSelected() || I.getFocus() !== i || (t = e.diagram.selection.getItem()) && e.diagram.data.update(t.id,
						{
							y: t.y + e.config.gridStep
						})
					})
				}, x.prototype._addShape = function (t, e, i)
				{
					void 0 === e && (e = 0), void 0 === i && (i = 0), this.diagram.data.add(
					{
						id: s.uid(),
						type: t.type,
						x: e,
						y: i
					})
				}, x);

			function x()
			{
				return null !== a && a.apply(this, arguments) || this
			}
			e.FreeEditor = o
		}, function (t, e, i)
		{
			"use strict";
			var n, o = this && this.__extends || (n = function (t, e)
				{
					return (n = Object.setPrototypeOf ||
						{
							__proto__: []
						}
						instanceof Array && function (t, e)
						{
							t.__proto__ = e
						} || function (t, e)
						{
							for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
						})(t, e)
				}, function (t, e)
				{
					function i()
					{
						this.constructor = t
					}
					n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
				}),
				p = this && this.__assign || function ()
				{
					return (p = Object.assign || function (t)
					{
						for (var e, i = 1, n = arguments.length; i < n; i++)
							for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
						return t
					}).apply(this, arguments)
				},
				s = this && this.__spreadArrays || function ()
				{
					for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
					for (var n = Array(t), o = 0, e = 0; e < i; e++)
						for (var r = arguments[e], a = 0, s = r.length; a < s; a++, o++) n[o] = r[a];
					return n
				};
			Object.defineProperty(e, "__esModule",
			{
				value: !0
			});
			var r, g = i(0),
				f = i(1),
				a = i(9),
				_ = i(13),
				c = i(23),
				o = (r = a.View, o(l, r), l.prototype._getShadow = function ()
				{
					if (!this._pressedShapeInfo) return this._shadow;
					var t = this._pressedShapeInfo,
						e = t.type,
						i = t.x,
						n = t.y,
						o = _.shapes[e],
						t = this._getShapeDataDefaults(e);
					return g.el(".dhx_shape_shadow",
					{
						style:
						{
							top: n,
							left: i
						}
					}, ["text" === e ? this._getTextShape() : new(o || _.DiagramCustomShape)(t,
					{
						defaults: this._defaults[e] ||
						{},
						shapes: this._shapes
					}).render()])
				}, l.prototype._getWrapped = function (t, e, i)
				{
					var n, o, r = _.shapes[t],
						a = this.config.defaults[t].preview ||
						{},
						s = this.config,
						c = s.margin,
						s = s.scale;
					if (this.config.defaults[t] && "string" == typeof a ? h = a : (a.img && (h = a.img), a.gap && (l = a.gap), a.scale && (n = a.scale), a.width && (u = a.width), a.height && (d = a.height)), s = n || s, c = l || c, h) return g.el(".dhx_shape_thumb.dhx_shape_thumb-container",
					{
						dhx_id: t,
						style:
						{
							width: u || "calc(100% /3)",
							height: d || "100%",
							margin: c
						}
					}, [g.el("img",
					{
						style:
						{
							maxWidth: "100%",
							maxHeight: "100%"
						},
						src: h || "",
						alt: t
					}), g.el("div.dhx_shape_thumb--img-overlay")]);
					var l = e.width,
						u = e.height,
						d = this._getShapeDataDefaults(t),
						h = Object.keys(_.flowShapes).includes(t),
						e = h ? (o = this.config.defaults[t].width * s || 140 * s, this.config.defaults[t].height * s || 90 * s) : (o = l * s, u * s);
					return h && (l = this.config.defaults[t].width || 140, u = this.config.defaults[t].height || 90), g.el(".dhx_shape_thumb.dhx_shape_thumb-container",
					{
						dhx_id: t,
						style:
						{
							width: o,
							height: e,
							margin: c
						}
					}, [i || g.el("div",
					{
						style:
						{
							transform: "scale(" + s + ")",
							transformOrigin: f.isIE() ? "0" : "50%"
						}
					}, [new(r || _.DiagramCustomShape)(p(p(
					{}, d),
					{
						width: l,
						height: u
					}),
					{
						defaults: this._defaults[t] ||
						{},
						shapes: this._shapes
					}).render()])])
				}, l.prototype._getShapeDataDefaults = function (t)
				{
					var e = s(Object.keys(_.flowShapes), ["card", "img-card"]).includes(t),
						i = ["img-card", "card"].includes(t);
					return {
						type: t,
						x: 0,
						y: 0,
						text: e ? i ? "Text" : t[0].toUpperCase() + t.slice(1) : null,
						title: i ? "Title" : null,
						fontSize: 14
					}
				}, l.prototype._getTextShape = function ()
				{
					return c.getIcon("text-shape", "", 60, 48)
				}, l.prototype._wrapDropdown = function (t, e, i)
				{
					void 0 === i && (i = !0);
					var n = t;
					return this._dropdowns[t] = this._dropdowns[t] || i, g.el(".dhx_dropdown", [g.el("input",
					{
						class: "dhx_dropdown_checkbox",
						id: n,
						name: n,
						type: "checkbox",
						checked: this._dropdowns[t],
						onchange: [this._toggle, t]
					}), g.el("label",
					{
						class: "dhx_dropdown_label",
						for: n
					}, t), g.el(".dhx_dropdown_content", [e])])
				}, l.prototype._shapeInit = function (t, e)
				{
					var i = this.config.defaults[t],
						n = i.width,
						i = i.height;
					if (-1 !== e.indexOf(t)) return "text" === t ? this._getWrapped("text",
					{
						width: 120,
						height: 90
					}, this._getTextShape()) : this._getWrapped(t,
					{
						width: n,
						height: i
					})
				}, l.prototype._barCreator = function ()
				{
					var i = this,
						n = this.config.shapeSections,
						o = s(Object.keys(this._shapes), ["text", "card", "img-card"]),
						r = [];
					if (n)
					{
						var t, a = this;
						for (t in n) ! function (t)
						{
							var e = [];
							n[t].forEach(function (t)
							{
								!0 === t ? Object.keys(_.flowShapes).forEach(function (t)
								{
									e.push(i._shapeInit(t, o))
								}) : e.push(i._shapeInit(t, o))
							}), r.push(a._wrapDropdown(t, g.el(".shapesbar", e)))
						}(t)
					}
					else
					{
						var e = o.map(function (t)
						{
							return i._shapeInit(t, o)
						});
						r.push(this._wrapDropdown(_.locale.shapeSections, g.el(".shapesbar", e)))
					}
					return r
				}, l.prototype._render = function (t)
				{
					return g.el(".shapesbar_wrap",
					{
						onclick: this._htmlEvents.onclick,
						onmousedown: this._htmlEvents.onmousedown
					}, s(this._barCreator()))
				}, l);

			function l(t, e)
			{
				var i = r.call(this, t, e) || this;
				i._dropdowns = [], i._handleMove = function (t)
				{
					Math.abs(t.pageX - i._pressedShapeInfo.x + t.pageY - i._pressedShapeInfo.y) < 10 && !i._shadow || i._pressedShapeInfo && (i._shadow || (i._shadow = g.create(
					{
						render: function ()
						{
							return i._getShadow()
						}
					}, i), i._shadow.mount(document.body)), i._pressedShapeInfo.x = t.clientX, i._pressedShapeInfo.y = t.clientY, i._shadow.redraw())
				}, i._handleUp = function ()
				{
					document.removeEventListener("mousemove", i._handleMove), document.removeEventListener("mouseup", i._handleUp), i.config.events.fire("shapesUp", [p(
					{}, i._pressedShapeInfo)]), i._pressedShapeInfo = null, i._shadow && (i._shadow.unmount(), i._shadow = null)
				}, i._toggle = function (t)
				{
					i._dropdowns[t] = !i._dropdowns[t]
				}, i._shapes = i.config.diagram.flowShapes ||
				{}, i._defaults = i.config.defaults ||
				{}, i._htmlEvents = {
					onmousedown: f.eventHandler(function (t)
					{
						return f.locate(t)
					},
					{
						dhx_shape_thumb: function (t, e)
						{
							1 === t.which && (i._pressedShapeInfo = {
								type: e,
								x: t.x,
								y: t.y
							}, "text" === e && (i._pressedShapeInfo.text = "Text"), document.addEventListener("mousemove", i._handleMove), document.addEventListener("mouseup", i._handleUp))
						}
					})
				};
				e = g.create(
				{
					render: function (t)
					{
						return i._render(t)
					}
				}, i);
				return i.mount(t, e), i
			}
			e.ShapesBar = o
		}], o.c = n, o.d = function (t, e, i)
		{
			o.o(t, e) || Object.defineProperty(t, e,
			{
				enumerable: !0,
				get: i
			})
		}, o.r = function (t)
		{
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag,
			{
				value: "Module"
			}), Object.defineProperty(t, "__esModule",
			{
				value: !0
			})
		}, o.t = function (e, t)
		{
			if (1 & t && (e = o(e)), 8 & t) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var i = Object.create(null);
			if (o.r(i), Object.defineProperty(i, "default",
				{
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
				for (var n in e) o.d(i, n, function (t)
				{
					return e[t]
				}.bind(null, n));
			return i
		}, o.n = function (t)
		{
			var e = t && t.__esModule ? function ()
			{
				return t.default
			} : function ()
			{
				return t
			};
			return o.d(e, "a", e), e
		}, o.o = function (t, e)
		{
			return Object.prototype.hasOwnProperty.call(t, e)
		}, o.p = "/codebase/", o(o.s = 104);

		function o(t)
		{
			if (n[t]) return n[t].exports;
			var e = n[t] = {
				i: t,
				l: !1,
				exports:
				{}
			};
			return i[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
		}
		var i, n
	}), window.dhx_legacy)
{
	if (window.dhx)
		for (var key in dhx) dhx_legacy[key] = dhx[key];
	window.dhx = dhx_legacy, delete window.dhx_legacy
}