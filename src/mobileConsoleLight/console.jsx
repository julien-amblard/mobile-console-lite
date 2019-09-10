import React, { useState } from "react"
import "./console.scss"

const TextLog = ({ log }) => {
	return ( <span className="logItem text">{log}</span> )
}
const IntLog = ({ log }) => {
	return ( <span className="logItem int">{log}</span> )
}

const MobileConsoleLight = props => {
	return (
		<div className="mobileConsoleLight">
			{props.logs.map( (log, index) => (
				<React.Fragment key={index}>
					{ typeof log === "string" && <TextLog log={log} />}
					{ typeof log === "number" && <IntLog log={log} />}
				</React.Fragment>
			))}
		</div>
	)
}

export default MobileConsoleLight