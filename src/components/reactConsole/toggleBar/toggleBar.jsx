import React from "react"
import { useStateValue } from '@Components/StateProvider'
import Dragger from "@Components/reactConsole/dragger/dragger"
import "./toggleBar.scss"

export default ({ dragRef }) => {
	const [{ minimize, popup, close }, dispatch] = useStateValue()

	const toggleMinimize = () => dispatch({ type: "minimize", value: !minimize})
	const togglePopup = () => dispatch({ type: "popup", value: !popup})
	const onClose = () => dispatch({ type: "close", value: !close})

	return (
		<Dragger className="toggleBar" dragRef={dragRef} >
			<div className="toggleBarTool minimize" title="Reduire" onClick={toggleMinimize} data-test-value={minimize}>-</div>
			<div className="toggleBarTool popup" title="Détacher" onClick={togglePopup} data-test-value={popup}></div>
			<div className="toggleBarTool close" title="Fermer" onClick={onClose} data-test-value={close}>&times;</div>
		</Dragger>
	)
}