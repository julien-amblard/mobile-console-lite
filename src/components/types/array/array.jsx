import React from "react"
import "./array.scss"
import ArrLight from "./arrayLight"
import ArrPlain from "./arrayPlain"


const ArrLog = ({ log, light }) => {
	return (
		<span className="array">
			{ light 
				? <ArrLight log={ log } />
				: <ArrPlain log={ log } />
			}
		</span>
	)
}
export default ArrLog