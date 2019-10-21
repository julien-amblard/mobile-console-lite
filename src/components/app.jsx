import React from "react"
import ReactConsole from "@Components/reactConsole/reactConsole"
import { StateProvider, DEFAULT_STATE, Reducer } from './StateProvider'




const App = ({ logs = [], display = {} }) => {
	const initialState = {
		...DEFAULT_STATE,
		minimize: typeof display.minimize === "boolean" ? display.minimize : false,
		popup: typeof display.popup === "boolean" ? display.popup : false,
		logs
	}
	return (
		<StateProvider initialState={initialState} reducer={Reducer}>
			<ReactConsole />
		</StateProvider>
	)
}
export default App