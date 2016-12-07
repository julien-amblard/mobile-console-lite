"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

        var oDocFragment = document.createDocumentFragment();

        this.objects = [];
        this.cssBuilder = new cssBuilder();
        this.tab = "    ";
        console.log = this.debug.bind(this);

        this.console = {
            class: 'consoleLog',
            el: "div",
            events: [],
            content: "",
            css: {
                default: {
                    position: 'fixed',
                    bottom: "0px",
                    left: "0px",
                    width: "100%",
                    'background-color': "white",
                    padding: "30px 15px 15px",
                    margin: "0",
                    'max-height': "300px"
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
                    'z-index': 9999999,
                    height: "100%",
                    'max-height': "200px",
                    'overflow-Y': 'scroll'
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
                default: {
                    position: "absolute",
                    top: "10px",
                    right: '40px',
                    height: "15px",
                    'background-color': "red",
                    color: "white",
                    cursor: "pointer",
                    padding: "2px"
                }
            }
        };

        this.toggle = {
            class: 'consoleToggle',
            el: "div",
            content: "",
            events: [{
                name: 'click',
                fn: this.toggleConsole.bind(this)
            }],
            css: {
                default: {
                    position: "absolute",
                    bottom: "100%",
                    right: '40px',
                    height: "20px",
                    width: "30px",
                    'background-color': "black",
                    'border-radius': "4px 4px 0 0"
                }
            }
        };

        this.expand = {
            class: 'consoleExpand',
            el: "div",
            content: "",
            events: [{
                name: 'click',
                fn: this.expandConsole.bind(this)
            }],
            css: {
                default: {
                    position: "absolute",
                    top: "0",
                    left: '10px',
                    height: "20px",
                    width: "30px",
                    'background-color': "green",
                    'border-radius': "4px 4px 0 0"
                }
            }
        };

        this.objects.push(this.console);
        this.objects.push(this.consoleWrap);
        this.objects.push(this.clear);
        this.objects.push(this.toggle);
        this.objects.push(this.expand);

        this.buildElemes();

        oDocFragment.appendChild(this.consoleWrap.el);
        oDocFragment.appendChild(this.clear.el);
        oDocFragment.appendChild(this.toggle.el);
        oDocFragment.appendChild(this.expand.el);

        this.console.el.appendChild(oDocFragment);

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
                msg.innerHTML = this.line + " : " + this.buildMessage(arguments[key]);
                oDocFragment.appendChild(msg);
            }
            this.consoleWrap.el.appendChild(oDocFragment);
            this.line++;
        }
    }, {
        key: "buildMessage",
        value: function buildMessage(_msg) {
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
                this.console.el.style.top = "100%";
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