import React, { useEffect, useRef } from "react"
import LogItem from "./log/item"
import ErrorItem from "./errors/error"
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
				<React.Fragment key={index} >
					{ log.type === "log" && <LogItem log={log.stack} />}
					{ log.type === "error" && <ErrorItem log={log.stack} />}
				</React.Fragment>
			))}
		</div>
	)
}

export default MobileConsoleLight