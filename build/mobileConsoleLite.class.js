"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***********************************************
  ____  _   _ ___ _     ____  _____ ____
 | __ )| | | |_ _| |   |  _ \| ____|  _ \
 |  _ \| | | || || |   | | | |  _| | |_) |
 | |_) | |_| || || |___| |_| | |___|  _ <
 |____/ \___/|___|_____|____/|_____|_| \_\
************************************************/

var cssBuilder = function () {

    /**
     *
     */
    function cssBuilder() {
        _classCallCheck(this, cssBuilder);

        this.parent = this._addBalise();
        this.hasProp = {}.hasOwnProperty;
    }

    /**
     *
     */


    _createClass(cssBuilder, [{
        key: "addStyle",
        value: function addStyle(sSelect, oCss) {
            var sProp,
                sValue,
                tmp = [];

            for (sProp in oCss) {
                if (!this.hasProp.call(oCss, sProp)) continue;
                sValue = oCss[sProp];
                tmp.push("" + sProp + ":" + sValue);
            }

            this.parent.insertAdjacentText('beforeend', sSelect + " { " + tmp.join(';') + "; }");
        }

        /**
         *
         */

    }, {
        key: "_addBalise",
        value: function _addBalise() {
            var oParent = document.createElement('style');
            oParent.type = 'text/css';
            document.head.appendChild(oParent);
            return oParent;
        }
    }]);

    return cssBuilder;
}();

var Idebug = function () {
    function Idebug() {
        _classCallCheck(this, Idebug);

        var oFragmentConsole = document.createDocumentFragment();
        var oFragmentTools = document.createDocumentFragment();

        this.objects = [];
        this.cssBuilder = new cssBuilder();
        console.log = this.debug.bind(this);

        this.console = {
            class: 'consoleLog',
            el: "div",
            events: [],
            content: "",
            css: {
                default: {
                    'z-index': 9999999,
                    position: 'fixed',
                    bottom: "0px",
                    left: "0px",
                    width: "100%",
                    'background-color': "#e4e3e3",
                    padding: "0 1px 1px",
                    margin: "0",
                    'box-sizing': "border-box",
                    'max-height': "300px",
                    'font-family': "Arial",
                    'font-size': "12px"
                }
            }
        };

        this.consoleTools = {
            class: 'consoleLogTools',
            el: "div",
            events: [],
            content: "",
            css: {
                default: {
                    position: "relative",
                    width: "100%",
                    height: "40px",
                    'background-color': "rgb(58, 54, 54)",
                    'box-sizing': "border-box"
                }
            }
        };

        this.clear = {
            class: 'consoleClear',
            el: "div",
            content: "vider",
            events: [{
                name: 'click',
                fn: this.clearConsole.bind(this)
            }],
            css: {
                default: _defineProperty({
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    right: "0",

                    height: "100%",
                    'background-color': "#cc3575",
                    color: "white",
                    cursor: "pointer",
                    padding: "12px",
                    'box-sizing': "border-box"
                }, "cursor", "pointer")
            }
        };

        this.toggle = {
            class: 'consoleToggle',
            el: "div",
            content: "cacher",
            events: [{
                name: 'click',
                fn: this.toggleConsole.bind(this)
            }],
            css: {
                default: {
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: '10px',
                    margin: "auto",

                    height: "15px",
                    'background-color': "rgb(76, 72, 72)",
                    color: "white",
                    padding: "5px",
                    'border-radius': "2px",
                    border: "solid 1px #716d6d",
                    cursor: "pointer"
                }
            }
        };

        this.expand = {
            class: 'consoleExpand',
            el: "div",
            content: "agrandir",
            events: [{
                name: 'click',
                fn: this.expandConsole.bind(this)
            }],
            css: {
                default: {
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    margin: "auto",
                    left: '70px',

                    height: "15px",
                    'background-color': "rgb(76, 72, 72)",
                    color: "white",
                    padding: "5px",
                    'border-radius': "2px",
                    border: "solid 1px #716d6d",
                    cursor: "pointer"
                }
            }
        };

        this.consoleWrap = {
            class: 'consoleWrap',
            el: "pre",
            content: "",
            events: [],
            css: {
                default: {
                    padding: "15px",
                    height: "100%",
                    'max-height': "200px",
                    'background-color': "white",
                    'overflow-y': 'scroll'
                }
            }
        };

        this.consoleLine = {
            class: 'consoleLine',
            el: "span",
            content: "",
            events: [],
            css: {
                default: {
                    posititon: "relative",
                    display: "block",
                    padding: "5px 25px"
                }
            }
        };

        this.consoleCount = {
            class: 'consoleLine',
            el: "span",
            content: 0,
            events: [],
            css: {
                default: {
                    position: "absolute",
                    height: "100%",
                    left: "0",
                    'background-color': "#efeeee",
                    padding: "0 5px",
                    color: "#9c9b9b"
                }
            }
        };

        this.objects.push(this.console);
        this.objects.push(this.consoleTools);
        this.objects.push(this.consoleWrap);
        this.objects.push(this.consoleLine);
        this.objects.push(this.consoleCount);
        this.objects.push(this.clear);
        this.objects.push(this.toggle);
        this.objects.push(this.expand);

        this.buildElemes();

        oFragmentTools.appendChild(this.clear.el);
        oFragmentTools.appendChild(this.toggle.el);
        oFragmentTools.appendChild(this.expand.el);
        this.consoleTools.el.appendChild(oFragmentTools);

        oFragmentConsole.appendChild(this.consoleTools.el);
        oFragmentConsole.appendChild(this.consoleWrap.el);
        this.console.el.appendChild(oFragmentConsole);

        document.body.appendChild(this.console.el);

        this.line = 0;
    }

    _createClass(Idebug, [{
        key: "buildElemes",
        value: function buildElemes() {
            var i = this.objects.length - 1;
            for (; i >= 0; i--) {
                this.objects[i].el = this.getDom(this.objects[i]);
                this.objects[i].el = this.getCss(this.objects[i], 'default');
                this.objects[i].el = this.getEvents(this.objects[i]);
            }
        }
    }, {
        key: "getDom",
        value: function getDom(obj) {
            var $el = document.createElement(obj.el);
            $el.innerHTML = obj.content;
            return $el;
        }
    }, {
        key: "getCss",
        value: function getCss(obj) {
            var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

            obj.el.className = key + '_' + obj.class;
            this.cssBuilder.addStyle('.' + obj.el.className, obj.css[key]);
            return obj.el;
        }
    }, {
        key: "getEvents",
        value: function getEvents(obj) {
            var i = obj.events.length - 1;
            for (; i >= 0; i--) {
                obj.el.addEventListener(obj.events[i].name, obj.events[i].fn);
            }
            return obj.el;
        }
    }, {
        key: "debug",
        value: function debug(_msg) {
            var oDocFragment = document.createDocumentFragment();
            for (var key in arguments) {
                var msg = document.createElement('span');
                msg.style.display = 'block';
                msg.innerHTML = this.line + " : " + this.buildLine(arguments[key]);
                oDocFragment.appendChild(msg);
            }
            this.consoleWrap.el.appendChild(oDocFragment);
            this.line++;
        }
    }, {
        key: "buildLine",
        value: function buildLine(_msg) {
            var _isIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var sReturn = "",
                _sTab = void 0;

            var sConst = _msg.constructor + '',
                oRegex = /(function |\(\) \{ \[native code\] \})/g,
                sName = sConst.replace(oRegex, '');

            sReturn = sName + " " + JSON.stringify(_msg, null, 2) + "";

            if (sName == 'Function') {
                sReturn = sName + ' ' + _msg;
            }

            return sReturn;
        }
    }, {
        key: "clearConsole",
        value: function clearConsole() {
            this.consoleWrap.el.innerHTML = "";
            this.line = 0;
        }
    }, {
        key: "toggleConsole",
        value: function toggleConsole() {

            this.console.el.classList.toggle('close');
            if (this.console.el.classList.contains('close')) {
                this.console.el.style.top = "calc( 100% - 40px )";
                this.console.el.style.bottom = "auto";
            } else {
                this.console.el.style.top = "auto";
                this.console.el.style.bottom = "0";
            }
        }
    }, {
        key: "expandConsole",
        value: function expandConsole() {
            this.console.el.classList.toggle('expand');
            if (this.console.el.classList.contains('expand')) {
                this.console.el.style.maxHeight = "90vh";
                this.console.el.style.height = "90vh";
                this.consoleWrap.el.style.maxHeight = "90vh";
            } else {
                this.console.el.style.maxHeight = "300px";
                this.console.el.style.height = "";
                this.consoleWrap.el.style.maxHeight = "200px";
            }
        }
    }]);

    return Idebug;
}();

var debug = new Idebug();

console.log('test', 'test 2');
console.log(['test 3', 'test 4', 2, { prenom: 'julien' }]);
console.log({
    key1: 'test 5',
    key2: 'test 6',
    key3: { 'key4': 1, 'key5': "test", 'key6': { key7: "test" } }
});
var fn = function fn() {
    2 * 3;
};
console.log(fn);