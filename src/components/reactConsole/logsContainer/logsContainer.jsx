import React from "react"
import LogItem from "../../logItem/logItem"
import ErrorItem from "../../errors/error"
import "./logsContainer.scss"



const LogsContainer = ({logs}) => {
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