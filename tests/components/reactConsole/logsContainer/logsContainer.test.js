import React from "react"
import { mount } from "enzyme"
import { StateContext, DEFAULT_STATE } from '@Components/StateProvider'
import LogsContainer from "@Components/reactConsole/logsContainer/logsContainer"
import LogItem from "@Components/logItem/logItem"
import ErrorItem from "@Components/errors/error"

DEFAULT_STATE.logs = [
	{ type: "log", stack: 1 },
	{ type: "log", stack: true },
	{ type: "log", stack: "lorem" },
	{ type: "error", stack: "lorem" }
]
const dispatch = jest.fn()
describe("<LogsContainer />", () => {
	const wrapper = mount(<StateContext.Provider value={[DEFAULT_STATE, dispatch]}>
		<LogsContainer />
	</StateContext.Provider>)
	test("Should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have .logsContainer class", () => {
		expect(wrapper.find(".logsContainer").exists()).toBe(true)
	})
	test("should have <LogItem /> component", () => {
		expect(wrapper.find(LogItem).exists()).toBe(true)
	})
	test("should have 3 <LogItem /> component", () => {
		expect(wrapper.find(LogItem)).toHaveLength(3)
	})
	test("first <LogItem /> component should equal 1", () => {
		expect(wrapper.find(LogItem).at(0).text()).toEqual("1")
	})
	test("second <LogItem /> component should equal true", () => {
		expect(wrapper.find(LogItem).at(1).text()).toEqual("true")
	})
	test("last <LogItem /> component should equal lorem", () => {
		expect(wrapper.find(LogItem).at(2).text()).toEqual("lorem")
	})
	test("should have <ErrorItem /> component", () => {
		expect(wrapper.find(ErrorItem).exists()).toBe(true)
	})
	test("should have 1 <ErrorItem /> component", () => {
		expect(wrapper.find(ErrorItem)).toHaveLength(1)
	})
})