import React, { useMemo, useState } from "react"
import dispatchComponent from "../dispatch"
import Arrow from "../../commons/arrow/arrow"
import ObjectDetails from "./objectDetails"

const ObjetPlain = ({log}) => {
	const Keys = useMemo( () => Object.keys(log), [log] )
	const [ open, setOpen ] = useState(false)
	const toggle = () => setOpen(!open)

	return (
		<>
			<span onClick={toggle}>
				<Arrow open={open} />
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