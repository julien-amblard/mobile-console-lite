import React from "react"
import { useStateValue } from '../../StateProvider'
import LogItem from "../../logItem/logItem"
import ErrorItem from "../../errors/error"
import "./logsContainer.scss"

const LogsContainer = (props) => {
	const [{ logs }] = useStateValue()
	return (
		<div className="logsContainer">
			{logs.map( (log, index) => (
				<React.Fragment key={index} >
					{ log.type === "log" && <LogItem log={log.stack} />}
					{ log.type === "error" && <ErrorItem log={log.stack} />}
				</React.Fragment>
			))}
		</div>
	)
}

export default LogsContainer