import React from "react"
import { mount } from "enzyme"
import NullLog from "@Components/types/null/null"

describe("<NullLog />", () => {
	const wrapper = mount(<NullLog />)
	test("should have .null class", () => {
		expect(wrapper.find(".null").exists()).toBe(true)
	})
	test("should be correctly renderer", () => {
		expect(wrapper.find(".null").text()).toEqual("null")
	})
})