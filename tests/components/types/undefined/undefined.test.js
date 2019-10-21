import React from "react"
import { mount } from "enzyme"
import UndefinedLog from "@Components/types/undefined/undefined"

describe("<UndefinedLog />", () => {
	const wrapper = mount(<UndefinedLog />)
	test("should have .undefined class", () => {
		expect(wrapper.find(".undefined").exists()).toBe(true)
	})
	test("should be correctly renderer", () => {
		expect(wrapper.find(".undefined").text()).toEqual("undefined")
	})
})