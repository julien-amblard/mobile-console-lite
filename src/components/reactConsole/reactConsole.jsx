import React, { useEffect, useRef } from "react"
import InputJS from "../input/input"
import LogsContainer from "./logsContainer/logsContainer"
import "./mobileConsoleLight.scss"

const App = ({ logs }) => {
	const $scroller = useRef(null)
	const scrollBottom = () => {
		$scroller.current.scrollTop = $scroller.current.scrollHeight
	}
	useEffect(scrollBottom, [logs.length])
	return (
		<div className="mobileConsoleLight"  ref={$scroller}>
			<LogsContainer logs={logs} />
			<InputJS />
		</div>
	)
}
export default App