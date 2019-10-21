import React from "react"
import { shallow } from "enzyme"
import App from "@Components/app"
import ReactConsole from "@Components/reactConsole/reactConsole"
import { StateProvider } from '@Components/StateProvider'

describe("<App />", () => {
	const wrapper = shallow(<App logs={[]} />)
	const wrapper2 = shallow(<App logs={[]} display={{ minimize: false, popup: false }} />)
	const wrapper3 = shallow(<App logs={[]} display={{ minimize: true, popup: true }} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have ReactConsole cmp", () => {
		expect(wrapper.find(ReactConsole).exists()).toBe(true)
	})
	test("should have StateProvider cmp", () => {
		expect(wrapper.find(StateProvider).exists()).toBe(true)
	})
	test("StateProvider should have correct props", () => {
		expect(wrapper.find(StateProvider).prop("initialState").minimize).toBe(false)
		expect(wrapper.find(StateProvider).prop("initialState").popup).toBe(false)
		expect(wrapper2.find(StateProvider).prop("initialState").minimize).toBe(false)
		expect(wrapper2.find(StateProvider).prop("initialState").popup).toBe(false)
		expect(wrapper3.find(StateProvider).prop("initialState").minimize).toBe(true)
		expect(wrapper3.find(StateProvider).prop("initialState").popup).toBe(true)
	})
})