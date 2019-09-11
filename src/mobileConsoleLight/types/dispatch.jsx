import React from "react"

import TextLog from "./text"
import IntLog from "./int"
import ArrLog from "./array"

export default log => {
	if( typeof log === "string" ) return <TextLog log={log} />
	if( typeof log === "number" ) return <IntLog log={log} />
	if( Array.isArray(log) ) return <ArrLog log={log} />
	return
}