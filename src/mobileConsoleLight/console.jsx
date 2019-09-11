import React from "react"
import dispatchComponent from "./types/dispatch"
import "./console.scss"



const MobileConsoleLight = props => {
	return (
		<div className="mobileConsoleLight">
			{props.logs.map( (log, index) => (
				<div className="logItem" key={index}>
					{dispatchComponent(log)}
				</div>
			))}
		</div>
	)
}

export default MobileConsoleLight