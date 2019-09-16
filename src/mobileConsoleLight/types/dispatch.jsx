import React from "react"

import TextLog from "./text/text"
import IntLog from "./int/int"
import ArrLog from "./array/array"

export default (log, light = false) => {
	if( typeof log === "string" ) return <TextLog log={log} />
	if( typeof log === "number" ) return <IntLog log={log} />
	if( Array.isArray(log) ) return <ArrLog log={log} light={light} />
	return
}