import React, { useEffect, useRef, useState } from "react"
import InputJS from "../input/input"
import LogsContainer from "./logsContainer/logsContainer"
import ToggleBar from "./toggleBar/toggleBar"
import "./mobileConsoleLight.scss"

const DEFAULT_POS = { top: "10px", left: "30px", width: "80%", height: "30%" }

const App = ({ logs }) => {
	const [minimize, setMinimize] = useState(false)
	const [popup, setPopup] = useState(false)
	const [popupPos, setPopupPos] = useState(DEFAULT_POS)
	const [close, setClose] = useState(false)
	const $scroller = useRef(null)
	const $console = useRef(null)

	const onUpdatePos = newPos => setPopupPos({ ...popupPos, left: newPos[0] > 0 ? newPos[0] : 0, top: newPos[1] > 0 ? newPos[1] : 0 })

	const scrollBottom = () => {
		$scroller.current.scrollTop = $scroller.current.scrollHeight
	}
	const classList = (() => {
		const arr = ["mobileConsoleLight"]
		if( minimize ) arr.push("minimized")
		if( popup ) arr.push("popuped")
		return arr.join(" ")
	})()
	useEffect(scrollBottom, [logs.length])

	return (
		<>
		{
			!close && 
			<div className={classList} style={ popup ? popupPos : null } ref={$console}>
				<ToggleBar 
					onMinimizeChange={b => setMinimize(b)} 
					onPopupChange={b => setPopup(b)} 
					onClose={() => setClose(true)} 
					onUpdatePos={onUpdatePos}
					dragRef={$console.current}
				/>
				{ !minimize && <div className="mobileConsoleLightContent" ref={$scroller}>
					<LogsContainer logs={logs} />
					<InputJS />
				</div>}
			</div>
		}
		</>
	)
}
export default App