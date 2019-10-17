import React, { useEffect, useRef } from "react"
import { useStateValue } from '../StateProvider'
import InputJS from "../input/input"
import LogsContainer from "./logsContainer/logsContainer"
import ToggleBar from "./toggleBar/toggleBar"
import Resizable from "./resizer/resizer"
import "./mobileConsoleLight.scss"


const ReactConsole = (props) => {
	const [{ minimize, popup, popupPos, close, logs }] = useStateValue()

	const $scroller = useRef(null)
	const $console = useRef(null)

	const scrollBottom = () => {
		if( !$scroller.current ) return
		$scroller.current.scrollTop = $scroller.current.scrollHeight
	}
	const classList = (() => {
		const arr = ["mobileConsoleLight"]
		if( minimize ) arr.push("minimized")
		if( popup ) arr.push("popuped")
		return arr.join(" ")
	})()
	useEffect(scrollBottom, [logs.length, minimize, popup])

	return (
		<>
		{ !close && 
			<Resizable className={classList} style={ popup ? popupPos : null } ref={$console} active={popup} >
				<ToggleBar dragRef={$console.current} />
				{ !minimize && <div className="mobileConsoleLightContent" ref={$scroller}>
					<LogsContainer />
					<InputJS />
				</div>}
			</Resizable>
		}
		</>
	)
}
export default ReactConsole