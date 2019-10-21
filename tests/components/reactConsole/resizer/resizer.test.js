import React from "react"
import { mount } from "enzyme"
import { StateContext, DEFAULT_STATE } from '@Components/StateProvider'
import Resizer from "@Components/reactConsole/resizer/resizer"

const dispatch = jest.fn()
describe("<Resizer /> default", () => {
	const wrapper = mount(<StateContext.Provider value={[DEFAULT_STATE, dispatch]}>
		<Resizer className="classTest">
			lorem ipsum
		</Resizer>
	</StateContext.Provider>)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should correctly display childens", () => {
		expect(wrapper.text()).toEqual("lorem ipsum")
	})
	test("should have correct classname", () => {
		expect(wrapper.find(".classTest").exists()).toBe(true)
	})
	test("should have correct style", () => {
		expect(wrapper.find("div.classTest").prop("style").width).toEqual("80%")
		expect(wrapper.find("div.classTest").prop("style").height).toEqual("30%")
	})
	test("should have .resizer div", () => {
		expect(wrapper.find("div.resizer").exists()).toBe(true)
	})
	test("should not have.resizerBar div", () => {
		expect(wrapper.find("div.resizerBar").exists()).toBe(false)
	})
})

describe("<Resizer />", () => {
	const wrapper = mount(<StateContext.Provider value={[DEFAULT_STATE, dispatch]}>
		<Resizer className="classTest" width="10px" height="20px" active={true}>
			lorem ipsum
		</Resizer>
	</StateContext.Provider>)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should correctly display childens", () => {
		expect(wrapper.text()).toEqual("lorem ipsum")
	})
	test("should have correct classname", () => {
		expect(wrapper.find(".classTest").exists()).toBe(true)
	})
	test("should have correct style", () => {
		expect(wrapper.find("div.classTest").prop("style").width).toEqual("10px")
		expect(wrapper.find("div.classTest").prop("style").height).toEqual("20px")
	})
	test("should have .resizer div", () => {
		expect(wrapper.find("div.resizer").exists()).toBe(true)
	})
	test("should have 3 .resizerBar div", () => {
		expect(wrapper.find("div.resizerBar")).toHaveLength(3)
	})
	test("should have .resizerBottom div", () => {
		expect(wrapper.find("div.resizerBar").at(0).hasClass("resizerBottom")).toBe(true)
	})
	test("should have .resizerRight div", () => {
		expect(wrapper.find("div.resizerBar").at(1).hasClass("resizerRight")).toBe(true)
	})
	test("should have .resizerSquare div", () => {
		expect(wrapper.find("div.resizerBar").at(2).hasClass("resizerSquare")).toBe(true)
	})
})

/**	
 * find a way to test touchmove
 */