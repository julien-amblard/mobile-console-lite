import React from 'react'
import { render, hydrate } from 'react-dom'
import ReactConsole from "./components/reactConsole/reactConsole"

class MCL {
	constructor( root, options ) {
		this.catch()
		this.init(root)
	}
	init (root) {
		this.logs = []
		this.root = root instanceof HTMLElement ? root : this.createRoot()
		this.renderApp()
	}
	catch () {
		this._console = {
			log: console.log,
			warn: console.warn 
		}
		console.log	  = this.consoleCatcher.bind(this);
		window.onerror  = this.errorCatcher.bind(this);
	}
	renderApp () {
		render(<ReactConsole logs={this.logs} />, this.root)
	}
	hydrateApp () {
		hydrate(<ReactConsole logs={this.logs} />, this.root)
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

export { MCL }