import React from "react"
import { mount } from "enzyme"
import Boolean from "@Components/types/boolean/boolean"

describe("<Boolean />", () => {
	const wrapper = mount(<Boolean log={true} />)
	test("should have .bool class", () => {
		expect(wrapper.find(".bool").exists()).toBe(true)
	})
	test("should be correctly renderer", () => {
		expect(wrapper.find(".bool").text()).toEqual("true")
	})
})