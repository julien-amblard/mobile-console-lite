import React from "react"
import { mount } from "enzyme"
import Input from "@Components/input/input"

describe("<Input />", () => {
	const wrapper = mount(<Input />)
	test("Input should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have inputJS class", () => {
		expect(wrapper.find(".inputJS").exists()).toBe(true)
	})
	test("should have input text component", () => {
		expect(wrapper.find("input[type='text']").exists()).toBe(true)
		expect(wrapper.find("input[type='text']").hasClass("inputJSEval")).toBe(true)
	})
})