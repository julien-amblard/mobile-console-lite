import React, { useState } from "react"
import dispatchComponent from "../dispatch"
import Arrow from "../../commons/arrow/arrow"
import ArrLight from "./arrayLight"
import ArrDetails from "./arrayDetails"

const arrPlain = ({ log }) => {
	const [ open, setOpen ] = useState(false)
	const toggle = () => setOpen(!open)

	return (
		<>
			<span onClick={toggle}>
				<Arrow open={open} />
				{ open ? <ArrLight log={log} /> :
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

export default arrPlain