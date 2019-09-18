import React from "react"
import ErrorStack from "./errorStack"
import ErrorLine from "./errorLine"
import "./error.scss"

const ErrorItem = ({ log }) => {
	const { messageOrEvent, source, noligne, nocolonne, erreur } = log	
	return (
		<div className="logItem errorItem">
			<ErrorStack stack={erreur.stack} />
			<ErrorLine source={source} line={noligne} />
		</div>
	)
}
export default ErrorItem