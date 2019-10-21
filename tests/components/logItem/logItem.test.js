import React from "react"
import { mount } from "enzyme"
import LogItem from "@Components/logItem/logItem"
import Int from "@Components/types/int/int"
import Text from "@Components/types/text/text"

describe("<LogItem /> with int", () => {
	const wrapper  = mount(<LogItem log={1} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains .logItem class", () => {
		expect(wrapper.find(".logItem").exists()).toBe(true)
	})
	test("should contains <Int /> cmp", () => {
		expect(wrapper.find(Int).exists()).toBe(true)
	})
	test("should be correctly rendered", () => {
		expect(wrapper.text()).toEqual("1")
	})
})

describe("<LogItem /> with text", () => {
	const wrapper  = mount(<LogItem log={"lorem"} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains .logItem class", () => {
		expect(wrapper.find(".logItem").exists()).toBe(true)
	})
	test("should contains <Text /> cmp", () => {
		expect(wrapper.find(Text).exists()).toBe(true)
	})
	test("should be correctly rendered", () => {
		expect(wrapper.text()).toEqual("lorem")
	})
})

/**	
 * can do some other text with all types
 */