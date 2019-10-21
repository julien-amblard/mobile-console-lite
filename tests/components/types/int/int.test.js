import React from "react"
import { mount } from "enzyme"
import Int from "@Components/types/int/int"

describe("<Int />", () => {
	const wrapper = mount(<Int log={5555} />)
	test("should have .int class", () => {
		expect(wrapper.find(".int").exists()).toBe(true)
	})
	test("should be correctly renderer", () => {
		expect(wrapper.find(".int").text()).toEqual("5555")
	})
})