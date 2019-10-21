//nice tips
//https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c
import React, {createContext, useContext, useReducer} from 'react'
export const DEFAULT_STATE = {
	close: false,
	minimize: false,
	popup: false,
	logs: [],
	popupPos: { top: "10px", left: "30px" }
}
export const Reducer = (state, action) => {
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
export const StateContext = createContext()
export const StateProvider = ({reducer, initialState, children}) =>(
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext)