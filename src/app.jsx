import React from 'react'
import { render, hydrate } from 'react-dom'
import MobileConsoleLight from "./mobileConsoleLight/console"

class MCL {
	constructor( root, options ) {
		this.catch()
		this.init()
	}
	init () {
		this.logs = []
		this.root = root instanceof HTMLElement 
		? root
		: this.createRoot();
		
		this.renderApp()
	}
	catch () {
		this._console = {
			log: console.log,
			warn: console.warn 
		}
		console.log     = this.consoleCatcher.bind(this);
		window.onerror  = this.errorCatcher.bind(this);
	}
	renderApp () {
		render(<MobileConsoleLight logs={this.logs} />, this.root)
	}
	hydrateApp () {
		hydrate(<MobileConsoleLight logs={this.logs} />, this.root)
	}
	consoleCatcher () {
		for( let key in arguments ) {
			this.logs.push( { type: "log", stack: arguments[key]} )
			this._console.log( arguments[key] )
		}
		this.hydrateApp()
	} 
	errorCatcher (messageOrEvent, source, noligne, nocolonne, erreur) {
		this.logs.push( { type: "error", stack: { messageOrEvent, source, noligne, nocolonne, erreur } } )
		this.hydrateApp()
	}
	createRoot () {
		const $root = document.createElement("div")
		document.body.appendChild($root)
		return $root
	}
}

export default MCL