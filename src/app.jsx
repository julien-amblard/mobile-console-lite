import React from 'react'
import { render } from 'react-dom'
import MobileConsoleLight from "./mobileConsoleLight/console"

class MCL {
	constructor( root, options ) {
		console.log(options);
		this.root = root instanceof HTMLElement 
			? root
			: this.createRoot()
		this.init()
	}
	init () {
		render(<MobileConsoleLight />, this.root)
	}
	createRoot () {
		const $root = document.createElement("div")
		document.body.appendChild($root)
		return $root
	}
}

export default MCL