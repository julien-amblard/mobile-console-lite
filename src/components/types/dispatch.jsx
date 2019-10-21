import React from "react"

import BoolLog from "@Components/types/boolean/boolean"
import TextLog from "@Components/types/text/text"
import UndefinedLog from "@Components/types/undefined/undefined"
import NullLog from "@Components/types/null/null"
import IntLog from "@Components/types/int/int"
import ArrLog from "@Components/types/array/array"
import ObjLog from "@Components/types/object/object"
import FuncLog from "@Components/types/func/func"

const checker = [
	{ check: log => typeof log === "undefined", Cmp: UndefinedLog },
	{ check: log => null === log, Cmp: NullLog },
	{ check: log => typeof log === "boolean", Cmp: BoolLog },
	{ check: log => typeof log === "function", Cmp: FuncLog },
	{ check: log => typeof log === "string", Cmp: TextLog },
	{ check: log => typeof log === "number", Cmp: IntLog },
	{ check: log => Array.isArray(log), Cmp: ArrLog },
	{ check: log => Object.prototype.toString.call(log) === '[object Object]', Cmp: ObjLog }
]

export default (log, light = false) => {
	const TypeCmp = checker.find( entry => entry.check(log) )
	return (
		<>
			{ !!TypeCmp
				? <TypeCmp.Cmp log={log} light={light} />
				: <p>this type is not supported</p>
			}
		</> 
	)
}