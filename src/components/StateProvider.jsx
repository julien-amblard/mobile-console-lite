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
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext)