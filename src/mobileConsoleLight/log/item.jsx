import React from "react"
import dispatchComponent from "../types/dispatch"
import "./log.scss"

const LogItem = ({log}) => {
	return (
		<div className="logItem">
			{dispatchComponent(log)}
		</div>
	)
}
export default LogItem