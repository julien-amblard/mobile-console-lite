import React from "react"
import { mount } from "enzyme"
import ErrorStack from "@Components/errors/errorStack"

const PROPS = {
	stack: "lorem ipsum"
}
describe("<ErrorStack />", () => {
	const wrapper = mount(<ErrorStack {...PROPS} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains errorStack && path class", () => {
		expect(wrapper.find(".errorStack").exists()).toBe(true)
	})
	test("should display correct text", () => {
		expect(wrapper.find(".errorStack").text()).toEqual("lorem ipsum")
	})
})