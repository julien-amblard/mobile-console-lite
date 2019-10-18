import React from "react"
import ReactConsole from "@Components/reactConsole/reactConsole"
import { StateProvider, DEFAULT_STATE } from './StateProvider'




const App = ({ logs = [], options = {} }) => {
	const initialState = {
		...DEFAULT_STATE,
		minimize: typeof options.minimize === "boolean" ? options.minimize : false,
		popup: typeof options.popup === "boolean" ? options.popup : false,
		logs
	}
	const reducer = (state, action) => {
		switch (action.type) {
			case 'close': return { ...state, close: action.value }
			case 'minimize': return { ...state, minimize: action.value }
			case 'popup': return { ...state, popup: action.value }
			case 'popupPos': return { 
				...state, 
				popupPos: { 
					...state.popupPos, 
					left: action.value[0] > 0 ? action.value[0] : 0, 
					top: action.value[1] > 0 ? action.value[1] : 0 
				} 
			}
			default: return state
		}
	}
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<ReactConsole />
		</StateProvider>
	)
}
export default App