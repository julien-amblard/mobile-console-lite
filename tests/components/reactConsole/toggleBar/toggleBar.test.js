import React from "react"
import { mount } from "enzyme"
import { StateContext, DEFAULT_STATE, Reducer } from '@Components/StateProvider'
import ToggleBar from "@Components/reactConsole/toggleBar/toggleBar"

const dispatch = jest.fn()
describe("<ToggleBar />", () => {
	const wrapper = mount(<StateContext.Provider value={[DEFAULT_STATE, dispatch]}>
		<ToggleBar />
	</StateContext.Provider>)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have .toggleBar class", () => {
		expect(wrapper.find(".toggleBar").exists()).toBe(true)
	})
	test("should have 3 .toggleBarTool class", () => {
		expect(wrapper.find(".toggleBarTool")).toHaveLength(3)
	})
	test("first .toggleBarTool should have .minimize", () => {
		expect(wrapper.find(".toggleBarTool").at(0).hasClass("minimize")).toBe(true)
	})
	test("second .toggleBarTool should have .popup", () => {
		expect(wrapper.find(".toggleBarTool").at(1).hasClass("popup")).toBe(true)
	})
	test("third .toggleBarTool should have .close", () => {
		expect(wrapper.find(".toggleBarTool").at(2).hasClass("close")).toBe(true)
	})
})
/**	
 * need to find a way to test state change
 */