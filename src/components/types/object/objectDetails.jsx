import React, { useMemo } from "react"
import dispatchComponent from "../dispatch"

const ObjetLight = ({log}) => {
	const Keys = useMemo(() => Object.keys(log), [log] )
	return (
		<div className="objectExpand">
			{Keys.map( (k, i) => (
				<div className="objectLine" key={i}>
					<span className="index">{k}: </span>
					{ dispatchComponent(log[k]) }
				</div>
			))}
		</div>
	)
}

export default ObjetLight