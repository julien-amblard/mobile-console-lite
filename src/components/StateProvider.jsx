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
export const StateContext = createContext()
export const StateProvider = ({reducer, initialState, children}) =>(
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext)