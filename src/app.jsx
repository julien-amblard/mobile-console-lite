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

		this.renderApp()
	}
	renderApp () {
		render(<MobileConsoleLight logs={this.logs} />, this.root)
	}
	debug () {
		for( let key in arguments ) {
			this.logs.push( arguments[key] )
			this._console.log( arguments )
		}
		hydrate(<MobileConsoleLight logs={this.logs} />, this.root)
	} 
	createRoot () {
		const $root = document.createElement("div")
		document.body.appendChild($root)
		return $root
	}
}

export default MCL