import React, { useState } from "react"
import dispatchComponent from "./dispatch"
import "./array.scss"

const ArrDetails = ({log}) => {
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

const ArrLog = ({log}) => {
	const [ open, setOpen ] = useState(false)
	const classList = (() => {
		const arr = ["arrow"]
		if( open ) arr.push("down")
		return arr.join(" ")
	})()
	const toggle = () => setOpen(!open)

	return (
		<span className="array" onClick={toggle}>

			<span className={classList}>▶</span> 
			({log.length}) 
			[{log.map( (entry, index) => (
				<React.Fragment key={index}>
					{ dispatchComponent(entry) }
					{index < (log.length - 1) ? ", " : "" }
				</React.Fragment>
			))}]

			{ open && <ArrDetails log={log} /> }
		</span>
	)
}
export default ArrLog