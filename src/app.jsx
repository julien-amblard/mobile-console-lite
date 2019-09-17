import React from 'react'
import { render, hydrate } from 'react-dom'
import MobileConsoleLight from "./mobileConsoleLight/console"

class MCL {
	constructor( root, options ) {
		this._console = {
			log: console.log
		}
		console.log     = this.debug.bind(this);
		this.logs = []
		this.root = root instanceof HTMLElement 
			? root
			: this.createRoot();

		window.onerror  = this.errorCatcher.bind(this);
		this.renderApp()
	}
	renderApp () {
		render(<MobileConsoleLight logs={this.logs} />, this.root)
	}
	debug () {
		for( let key in arguments ) {
			this.logs.push( { type: "log", stack: arguments[key]} )
			this._console.log( arguments[key] )
		}
		hydrate(<MobileConsoleLight logs={this.logs} />, this.root)
	} 
	createRoot () {
		const $root = document.createElement("div")
		document.body.appendChild($root)
		return $root
	}
	errorCatcher (messageOrEvent, source, noligne, nocolonne, erreur) {
		// console.warn("messageOrEvent :", messageOrEvent)
		// console.warn("source :", source)
		// console.warn("noligne :", noligne, "nocolonne: ", nocolonne)
		// console.warn("erreur :", erreur)
		this.logs.push( { type: "error", stack: { messageOrEvent, source, noligne, nocolonne, erreur } } )
		hydrate(<MobileConsoleLight logs={this.logs} />, this.root)
	}
}

export default MCL