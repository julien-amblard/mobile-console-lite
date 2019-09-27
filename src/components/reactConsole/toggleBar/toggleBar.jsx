import React, { useState } from "react"
import "./toggleBar.scss"

export default ({ onMinimizeChange, onPopupChange, onClose }) => {
	const [minimize, setMinimize] = useState(false)
	const [popup, setPopup] = useState(false)
	const toggleMinimize = () => {
		onMinimizeChange(!minimize)
		setMinimize(!minimize)
	}
	const togglePopup = () => {
		onPopupChange(!popup)
		setPopup(!popup)
	}
	return (
		<div className="toggleBar">
			<div className="toggleBarTool minimize" title="Reduire" onClick={toggleMinimize}>-</div>
			<div className="toggleBarTool popup" title="Détacher" onClick={togglePopup}></div>
			<div className="toggleBarTool close" title="Fermer" onClick={onClose}>&times;</div>
		</div>
	)
}