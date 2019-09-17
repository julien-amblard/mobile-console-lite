import React from "react"
import "./arrow.scss"

const Arrow = ({open}) => {
	const classList = (() => {
		const arr = ["arrow"]
		if( open ) arr.push("down")
		return arr.join(" ")
	})()
	return (<span className={classList}>▶</span>)
}
export default Arrow