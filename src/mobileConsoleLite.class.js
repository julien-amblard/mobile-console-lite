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

        var oDocFragment = document.createDocumentFragment();

        this.objects    = [];
        this.cssBuilder = new cssBuilder();
        this.tab         = "    ";
        console.debug = this.debug.bind(this);



        this.console = {
            class       : 'consoleLog',
            el          : "div",
            events      : [],
            content     : "",
            css         : {
                default : {
                    position            : 'fixed',
                    bottom              : "0px",
                    left                : "0px",
                    width               : "100%",
                    'background-color'  : "white",
                    padding             : "30px 15px 15px",
                    margin              : "0",
                    'max-height'        : "300px"
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
                  'z-index'           : 9999999,
                  height              :  "100%",
                  'max-height'        : "200px",
                  'overflow-Y'        : 'scroll'
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
                    position           :  "absolute",
                    top                : "10px",
                    right              : '40px',
                    height             : "15px",
                    'background-color' : "red",
                    color              : "white",
                    cursor             : "pointer",
                    padding            : "2px",
                }
            }
        }

        this.toggle = {
            class       : 'consoleToggle',
            el          : "div",
            content     : "",
            events      : [{
                name    : 'click',
                fn      : this.toggleConsole.bind(this)
            }],
            css         : {
                default : {
                    position            :  "absolute",
                    bottom              : "100%",
                    right               : '40px',
                    height              : "20px",
                    width               : "30px",
                    'background-color'  : "black",
                    'border-radius'     : "4px 4px 0 0"
                }
            }
        }

        this.expand = {
            class       : 'consoleExpand',
            el          : "div",
            content     : "",
            events      : [{
                name    : 'click',
                fn      : this.expandConsole.bind(this)
            }],
            css         : {
                default : {
                    position            : "absolute",
                    top                 : "0",
                    left                : '10px',
                    height              : "20px",
                    width               : "30px",
                    'background-color'  : "green",
                    'border-radius'     : "4px 4px 0 0"
                }
            }
        }


        this.objects.push( this.console );
        this.objects.push( this.consoleWrap );
        this.objects.push( this.clear );
        this.objects.push( this.toggle );
        this.objects.push( this.expand );

        this.buildElemes();

        oDocFragment.appendChild( this.consoleWrap.el );
        oDocFragment.appendChild( this.clear.el );
        oDocFragment.appendChild( this.toggle.el );
        oDocFragment.appendChild( this.expand.el );

        this.console.el.appendChild( oDocFragment);

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
            let msg = document.createElement('span');
            msg.style.display = 'block';
            msg.innerHTML   = this.line + " : " + this.buildMessage( arguments[key] );
            oDocFragment.appendChild( msg );
        }
        this.consoleWrap.el.appendChild( oDocFragment )
        this.line++;
    }

    buildMessage( _msg, _isIndent = false ) {
        let sReturn = "", _sTab;

        var sConst = _msg.constructor+'',
            oRegex = /(function |\(\) \{ \[native code\] \})/g,
            sName  = sConst.replace( oRegex, '');

        sReturn = sName+ " " + JSON.stringify( _msg, null, 2)+ "";

        if( sName == 'Function'){
          sReturn = sName +' '+ _msg;
        }

        return sReturn;
    }

    clearConsole() {
        this.consoleWrap.el.innerHTML = "";
        this.line = 0;
    }

    toggleConsole(){

        this.console.el.classList.toggle('close');
        if( this.console.el.classList.contains('close') ){
            this.console.el.style.top = "100%";
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


console.debug( 'test', 'test 2' )
console.debug( ['test 3', 'test 4', 2, {prenom : 'julien'}] )
console.debug({
    key1:'test 5',
    key2:'test 6',
    key3 : {'key4' : 1, 'key5' : "test", 'key6': {key7:"test"} }
})
let fn = () => {2*3}
console.debug( fn )
