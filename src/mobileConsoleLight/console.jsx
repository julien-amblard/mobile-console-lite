import React, { useEffect, useRef } from "react"
import dispatchComponent from "./types/dispatch"
import "./console.scss"



const MobileConsoleLight = ({logs}) => {
	const $scroller = useRef(null)
	const scrollBottom = () => {
		$scroller.current.scrollTop = $scroller.current.scrollHeight
	}
	useEffect(scrollBottom, [logs.length])
	return (
		<div className="mobileConsoleLight" ref={$scroller}>
			{logs.map( (log, index) => (
				<div className="logItem" key={index}>
					{dispatchComponent(log)}
				</div>
			))}
		</div>
	)
}

export default MobileConsoleLight