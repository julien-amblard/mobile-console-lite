import React from "react"
import "./error.scss"

const ErrorItem = ({ log }) => {
	const { messageOrEvent, source, noligne, nocolonne, erreur } = log
	const Erruer = erreur
	
	console.log( erreur.stack );
	
	const sourceName = source.split("/").reverse()[0].replace("?", "")
	return (
		<div className="logItem errorItem">
			{erreur.fileName}
			<span className="errorStack">
				{erreur.stack}
			</span>
			<span className="errorLine">{sourceName+":"+noligne}</span>
		</div>
	)
}
export default ErrorItem