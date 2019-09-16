import React, { useMemo, useState } from "react"
import dispatchComponent from "../dispatch"
import ObjectDetails from "./objectDetails"

const ObjetPlain = ({log}) => {
	const Keys = useMemo( () => Object.keys(log), [log] )
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
				{'{'}
				{Keys.map( (k, index) => (
					<React.Fragment key={index}>
						<span className="key">{k}: </span>
						<span className="value">{dispatchComponent(log[k], true)}</span>
						{index < (Keys.length - 1) ? ", " : "" }
					</React.Fragment>
				))}
				{'}'}
			</span>
			{ open && <ObjectDetails log={log} /> }
		</>
	)
}

export default ObjetPlain