import React from "react"
import "./object.scss"

import ObjectLight from "./objectLight"
import ObjectPlain from "./objectPlain"

const ObjectCmp = ({ log, light }) => {
	return (
		<>
			<span className="object">
			{ light 
				? <ObjectLight log={ log } />
				: <ObjectPlain log={ log } />
			}
			</span>
		</>
	)
}

export default ObjectCmp