import React from "react"
import { useStateValue } from '../../StateProvider'
import Dragger from "../dragger/dragger"
import "./toggleBar.scss"

export default ({ dragRef }) => {
	const [{ minimize, popup, close }, dispatch] = useStateValue()

	const toggleMinimize = () => dispatch({ type: "minimize", value: !minimize})
	const togglePopup = () => dispatch({ type: "popup", value: !popup})
	const onClose = () => dispatch({ type: "close", value: !close})

	return (
		<Dragger className="toggleBar" dragRef={dragRef} >
			<div className="toggleBarTool minimize" title="Reduire" onClick={toggleMinimize}>-</div>
			<div className="toggleBarTool popup" title="Détacher" onClick={togglePopup}></div>
			<div className="toggleBarTool close" title="Fermer" onClick={onClose}>&times;</div>
		</Dragger>
	)
}