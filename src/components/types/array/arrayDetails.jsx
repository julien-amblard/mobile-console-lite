import React from "react"
import dispatchComponent from "../dispatch"

const ArrDetails = ({ log }) => {
	return (
		<div className="arrayExpand">
			{log.map( (entry, index) => (
				<div className="arrayLine" key={index}>
					<span className="index">{index}: </span>
					{ dispatchComponent(entry) }
				</div>
			))}
			<div className="arrayLine arrayLength">
				<span className="index">length: </span>
				<span className="int">{log.length}</span>
			</div>
		</div>
	)
}
export default ArrDetails