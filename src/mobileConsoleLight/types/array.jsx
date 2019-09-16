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

const arrLight = log => {
	return (
		<>Array({log.length})</>
	)
}

const arrPlain = log => {
	const [ open, setOpen ] = useState(false)
	const toggle = () => setOpen(!open)
	const classList = (() => {
		const arr = ["arrow"]
		if( open ) arr.push("down")
		return arr.join(" ")
	})()
	return (
		<>
			<span onClick={toggle}>
				<span className={classList}>▶</span> 
				{ open ? arrLight(log) :
					<>
					({log.length}) 
					[{log.map( (entry, index) => (
						<React.Fragment key={index}>
							{ dispatchComponent(entry, true) }
							{index < (log.length - 1) ? ", " : "" }
						</React.Fragment>
					))}]
					</>
				}
			</span>
			{ open && <ArrDetails log={log} /> }
		</>
	)
}

const ArrLog = ({ log, light }) => {
	return (
		<span className="array">
			{ light 
				? arrLight(log)
				: arrPlain(log)
			}
		</span>
	)
}
export default ArrLog