import React from "react"

import BoolLog from "./boolean/boolean"
import TextLog from "./text/text"
import UndefinedLog from "./undefined/undefined"
import NullLog from "./null/null"
import IntLog from "./int/int"
import ArrLog from "./array/array"
import ObjLog from "./object/object"
import FuncLog from "./func/func"

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