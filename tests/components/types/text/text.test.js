import React from "react"
import { mount } from "enzyme"
import Text from "@Components/types/text/text"

describe("<Text />", () => {
	const wrapper = mount(<Text log={"lorem"} />)
	test("should have .text class", () => {
		expect(wrapper.find(".text").exists()).toBe(true)
	})
	test("should be correctly renderer", () => {
		expect(wrapper.find(".text").text()).toEqual("lorem")
	})
})