/***********************************************
  ____  _   _ ___ _     ____  _____ ____
 | __ )| | | |_ _| |   |  _ \| ____|  _ \
 |  _ \| | | || || |   | | | |  _| | |_) |
 | |_) | |_| || || |___| |_| | |___|  _ <
 |____/ \___/|___|_____|____/|_____|_| \_\
************************************************/

class cssBuilder{

    /**
     *
     */
    constructor(){
        this.parent  = this._addBalise();
        this.hasProp = {}.hasOwnProperty;
    }

    /**
     *
     */
    addStyle( sSelect, oCss){
        var sProp, sValue,  tmp = [];

        for (sProp in oCss) {
            if ( !this.hasProp.call( oCss, sProp)) continue;
            sValue = oCss[sProp];
            tmp.push( "" + sProp + ":" + sValue);
        }

        this.parent.insertAdjacentText(
            'beforeend',
            sSelect + " { " + tmp.join(';') + "; }"
        );
    }

    /**
     *
     */
    _addBalise(){
        let oParent  = document.createElement('style');
        oParent.type = 'text/css';
        document.head.appendChild( oParent);
        return oParent;
    }
}



class Idebug {
    constructor () {

        let oFragmentConsole        = document.createDocumentFragment();
        let oFragmentTools          = document.createDocumentFragment();

        this.objects    = [];
        this.cssBuilder = new cssBuilder();
        console.log = this.debug.bind(this);


        this.console = {
            class       : 'consoleLog',
            el          : "div",
            events      : [],
            content     : "",
            css         : {
                default     : {
                    'z-index'              : 9999999,
                    position            : 'fixed',
                    bottom              : "0px",
                    left                : "0px",
                    width               : "100%",
                    'background-color'     : "#e4e3e3",
                    padding             : "0 1px 1px",
                    margin              : "0",
                    'box-sizing'           : "border-box",
                    'max-height'           : "300px",
                    'font-family'          : "Arial",
                    'font-size'            : "12px"
                }
            }
        }

        this.consoleTools = {
            class       : 'consoleLogTools',
            el          : "div",
            events      : [],
            content     : "",
            css         : {
                default     : {
                    position            : "relative",
                    width               : "100%",
                    height              : "40px",
                    'background-color'     : "rgb(58, 54, 54)",
                    'box-sizing'           : "border-box",
                }
            }
        }


        this.clear = {
            class       : 'consoleClear',
            el          : "div",
            content     : "vider",
            events      : [{
                name    : 'click',
                fn      : this.clearConsole.bind(this)
            }],
            css         : {
                default : {
                    position            : "absolute",
                    top                 : "0",
                    bottom              : "0",
                    right               : "0",

                    height              : "100%",
                    'background-color'     : "#cc3575",
                    color               : "white",
                    cursor              : "pointer",
                    padding             : "12px",
                    'box-sizing'           : "border-box",
                    cursor              : "pointer"
                }
            }
        }

        this.toggle = {
            class       : 'consoleToggle',
            el          : "div",
            content     : "cacher",
            events      : [{
                name    : 'click',
                fn      : this.toggleConsole.bind(this)
            }],
            css         : {
                default : {
                    position            : "absolute",
                    top                 : "0",
                    bottom              : "0",
                    left                : '10px',
                    margin              : "auto",

                    height              : "15px",
                    'background-color'     : "rgb(76, 72, 72)",
                    color               : "white",
                    padding             : "5px",
                    'border-radius'        : "2px",
                    border              : "solid 1px #716d6d",
                    cursor              : "pointer"
                }
            }
        }

        this.expand = {
            class       : 'consoleExpand',
            el          : "div",
            content     : "agrandir",
            events      : [{
                name    : 'click',
                fn      : this.expandConsole.bind(this)
            }],
            css         : {
                default : {
                    position            : "absolute",
                    top                 : "0",
                    bottom              : "0",
                    margin              : "auto",
                    left                : '70px',

                    height              : "15px",
                    'background-color'     : "rgb(76, 72, 72)",
                    color               : "white",
                    padding             : "5px",
                    'border-radius'        : "2px",
                    border              : "solid 1px #716d6d",
                    cursor              : "pointer"
                }
            }
        }

        this.consoleWrap = {
            class       : 'consoleWrap',
            el          : "pre",
            content     : "",
            events      : [],
            css         : {
                default : {
                    padding                 : "0",
                    margin                  : 0,
                    height                  : "100%",
                    'max-height'            : "200px",
                    color                   : "#3c3737",
                    'background-color'      : "white",
                    'overflow-y'            : 'scroll'
                }
            }
        }

        this.consoleLine = {
            class       : 'consoleLine',
            el          : "span",
            content     : "",
            events      : [],
            css         : {
                default : {
                    position               : "relative",
                    display                 : "block",
                    padding                  : "5px 25px"
                }
            }
        }

        this.consoleCount = {
            class       : 'consoleCount',
            el          : "span",
            content     : 0,
            events      : [],
            css         : {
                default : {
                    position            : "absolute",
                    height              : "100%",
                    left                : "0",
                    top                : "0",
                    'background-color'  : "#efeeee",
                    padding             : "5px",
                    color               : "#9c9b9b"
                }
            }
        }


        this.objects.push( this.console );
        this.objects.push( this.consoleTools );
        this.objects.push( this.consoleWrap );
        this.objects.push( this.consoleLine );
        this.objects.push( this.consoleCount );
        this.objects.push( this.clear );
        this.objects.push( this.toggle );
        this.objects.push( this.expand );

        this.buildElemes();




        oFragmentTools.appendChild( this.clear.el );
        oFragmentTools.appendChild( this.toggle.el );
        oFragmentTools.appendChild( this.expand.el );
        this.consoleTools.el.appendChild( oFragmentTools );

        oFragmentConsole.appendChild( this.consoleTools.el );
        oFragmentConsole.appendChild( this.consoleWrap.el );
        this.console.el.appendChild( oFragmentConsole );


        document.body.appendChild( this.console.el );

        this.line = 0;

    }
    buildElemes () {
        var i = this.objects.length - 1;
        for (; i >= 0; i--) {
            this.objects[i].el = this.getDom( this.objects[i] );
            this.objects[i].el = this.getCss( this.objects[i], 'default' );
            this.objects[i].el = this.getEvents( this.objects[i] );
        }
    }
    getDom ( obj ) {
        let $el = document.createElement( obj.el );
        $el.innerHTML = obj.content;
        return $el;
    }
    getCss ( obj, key = 'default' ) {
        obj.el.className = key +'_'+ obj.class;
        this.cssBuilder.addStyle( '.'+obj.el.className, obj.css[ key ]);
        return obj.el;
    }
    getEvents ( obj ) {
        var i = obj.events.length - 1;
        for (; i >= 0; i--) {
            obj.el.addEventListener( obj.events[ i ].name, obj.events[ i ].fn );
        }
        return obj.el;
    }



    debug ( _msg ) {
        var oDocFragment = document.createDocumentFragment();
        for( let key in arguments ){     
            let line = this.getLine();   
            let msg = this.getMsg( arguments[key] );
            line.appendChild( msg );
            oDocFragment.appendChild( line );
        }
        this.consoleWrap.el.appendChild( oDocFragment )
    }

    getLine () {
        let el = this.consoleLine.el.cloneNode(true);
        this.consoleCount.content++;
        this.consoleCount.el.innerHTML = this.consoleCount.content;
        el.appendChild( this.consoleCount.el.cloneNode(true) );
        return el;
    }

    getMsg( _msg ) {
        let $return = document.createElement('span');
        var sConst = _msg.constructor + '',
            oRegex = /(function |\(\) \{ \[native code\] \})/g,
            sName  = sConst.replace( oRegex, '');

        $return.innerHTML = sName+ " " + JSON.stringify( _msg, null, 2) + "";

        if( sName === 'Function'){
          $return.innerHTML = sName +' '+ _msg;
        }

        return $return;
    }

    clearConsole() {
        this.consoleWrap.el.innerHTML = "";
        this.line = 0;
    }

    toggleConsole(){

        this.console.el.classList.toggle('close');
        if( this.console.el.classList.contains('close') ){
            this.console.el.style.top = "calc( 100% - 40px )";
            this.console.el.style.bottom = "auto";
        }else{
            this.console.el.style.top = "auto";
            this.console.el.style.bottom = "0";
        }
    }

    expandConsole () {
        this.console.el.classList.toggle('expand');
        if( this.console.el.classList.contains('expand') ){
            this.console.el.style.maxHeight = "90vh";
            this.console.el.style.height = "90vh";
            this.consoleWrap.el.style.maxHeight = "90vh";
        }else{
            this.console.el.style.maxHeight = "300px";
            this.console.el.style.height = "";
            this.consoleWrap.el.style.maxHeight = "200px";
        }
    }

}


let debug = new Idebug();


console.log( 'test', 'test 2' )
console.log( ['test 3', 'test 4', 2, {prenom : 'julien'}] )
console.log({
    key1:'test 5',
    key2:'test 6',
    key3 : {'key4' : 1, 'key5' : "test", 'key6': {key7:"test"} }
})
let fn = () => {2*3}
console.log( fn )
