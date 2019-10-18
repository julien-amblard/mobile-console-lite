import React from 'react'
import { render, hydrate } from 'react-dom'
import App from "@Components/app"
const default_options = {
	initOn: {
		hash: "",
		query: "",
	},
	display: {
		minimize: false,
		popup: false
	}
}
class MCL {
	constructor( root, options = default_options) {
		this.options = {...default_options, options}
		this._root = root
		this.init()
	}
	get hasOnInit () {
		return this.options.initOn && ( this.initOnHash || this.initOnQuery )
	}
	get initOnHash () { return !!this.options.initOn.hash }
	get initOnQuery () { return !!this.options.initOn.query }
	get isHashReady () { return location.hash === `#${this.options.initOn.hash}` }
	get isQueryReady () { return new URLSearchParams(window.location.search).has(this.options.initOn.query) }
	init () {
		if( this.hasOnInit && !this.isHashReady && !this.isQueryReady ) return
		this.launchDebugger()
	}
	launchDebugger () {
		this.catch()
		this.logs = []
		this.root = this._root instanceof HTMLElement ? this._root : this.createRoot()
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
		render(<App logs={this.logs} display={this.options.display} />, this.root)
	}
	hydrateApp () {
		hydrate(<App logs={this.logs} />, this.root)
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
export { MCL }