import React from "react"
import './func.scss'
const FunctLog = ({log}) => {
	return (
		<span className="func">
			<span className="funcLabel">{"f "}</span> 
			{log.toString()}
		</span>
	)
}
export default FunctLog