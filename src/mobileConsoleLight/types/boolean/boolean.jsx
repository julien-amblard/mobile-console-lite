import React from "react"
import "./boolean.scss"

const Boolean = ({ log }) => {
	return (
		<span className="bool">{log.toString()}</span>
	)
}
export default Boolean