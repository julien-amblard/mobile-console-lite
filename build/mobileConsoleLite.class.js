"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Idebug = function () {
    function Idebug() {
        _classCallCheck(this, Idebug);

        this.objects = [];

        console.log = this.debug.bind(this);
        this.console = {
            class: 'consoleLog',
            el: "div",
            events: [],
            content: "",
            css: {
                default: {
                    zIndex: 9999999,
                    position: 'fixed',
                    bottom: "0px",
                    left: "0px",
                    width: "100%",
                    backgroundColor: "white",
                    padding: "30px 15px 15px",
                    margin: "0",
                    maxHeight: "300px"
                }
            }
        };

        this.consoleWrap = {
            class: 'consoleLog',
            el: "pre",
            content: "",
            events: [],
            css: {
                default: {
                    height: "100%",
                    maxHeight: "200px",
                    overflowY: 'scroll'
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
                    backgroundColor: "red",
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
                    backgroundColor: "black",
                    bordeRadius: "4px 4px 0 0"
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
                    backgroundColor: "green",
                    bordeRadius: "4px 4px 0 0"
                }
            }
        };

        this.objects.push(this.console);
        this.objects.push(this.consoleWrap);
        this.objects.push(this.clear);
        this.objects.push(this.toggle);
        this.objects.push(this.expand);

        this.buildElemes();

        this.console.el.appendChild(this.consoleWrap.el);
        this.console.el.appendChild(this.clear.el);
        this.console.el.appendChild(this.toggle.el);
        this.console.el.appendChild(this.expand.el);
        document.body.appendChild(this.console.el);

        this.line = 0;
    }

    _createClass(Idebug, [{
        key: "buildElemes",
        value: function buildElemes() {
            for (var i = this.objects.length - 1; i >= 0; i--) {
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

            obj.el.className = obj.class;
            for (var prop in obj.css.default) {
                obj.el.style[prop] = obj.css[key][prop];
            }
            return obj.el;
        }
    }, {
        key: "getEvents",
        value: function getEvents(obj) {
            for (var i = obj.events.length - 1; i >= 0; i--) {
                obj.el.addEventListener(obj.events[i].name, obj.events[i].fn);
            }
            return obj.el;
        }
    }, {
        key: "debug",
        value: function debug(_msg) {
            for (var key in arguments) {
                var msg = document.createElement('span');
                msg.style.display = 'block';
                msg.innerHTML = this.line + " : " + this.buildMessage(arguments[key]);
                this.consoleWrap.el.appendChild(msg);
            }
            this.line++;
        }
    }, {
        key: "buildMessage",
        value: function buildMessage(_msg) {
            var _isIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var sReturn = "";
            switch (true) {
                case typeof _msg === "function":
                    sReturn += 'function : ' + this.getFuncName(_msg);
                    break;
                case _msg instanceof Array:
                    sReturn = "Array [";
                    sReturn += "   " + this.buildArray(_msg, _isIndent);
                    sReturn += "<br/>";
                    if (_isIndent) sReturn += "   ";
                    sReturn += "]";
                    break;
                case _msg instanceof Object:
                    sReturn = "Object {";
                    sReturn += "   " + this.buildObject(_msg, _isIndent);
                    sReturn += "<br/>";
                    if (_isIndent) sReturn += "   ";
                    sReturn += "}";
                    break;

                default:
                    sReturn = _msg;
                    break;
            }
            return sReturn;
        }
    }, {
        key: "buildObject",
        value: function buildObject(obj) {
            var _isIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var sReturn = "";
            for (var key in obj) {
                sReturn += "<br/>";
                if (_isIndent) sReturn += "   ";
                sReturn += "    " + key + " : ";
                if (typeof obj[key] === "string" || typeof obj[key] === "int") {
                    sReturn += obj[key];
                } else {
                    sReturn += this.buildMessage(obj[key], true);
                }
            }
            return sReturn;
        }
    }, {
        key: "buildArray",
        value: function buildArray(arr) {
            var _isIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var sReturn = "";
            for (var i = arr.length - 1; i >= 0; i--) {
                sReturn += "<br/>";
                if (typeof arr[i] === "string" || typeof arr[i] === "int") {
                    sReturn += "    " + arr[i];
                } else {
                    sReturn += this.buildMessage(arr[i], true);
                }
            }
            return sReturn;
        }
    }, {
        key: "getFuncName",
        value: function getFuncName() {
            var _fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var ret = _fn.toString();
            ret = ret.substr('function '.length);
            ret = ret.substr(0, ret.indexOf('('));
            return ret;
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
console.log(['test 3', 'test 4']);
console.log({
    key1: 'test 5',
    key2: 'test 6',
    key3: { 'key4': 1, 'key5': "test", 'key6': { key7: "test" } }
});
var fn = function fn() {};
console.log(fn);