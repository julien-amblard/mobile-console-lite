import React from "react"
import { shallow } from "enzyme"
import ErrorLine from "@Components/errors/errorLine"

const PROPS = {
	source: "file/path/name.js?", 
	line: "10"
}
describe("<ErrorLine />", () => {
	const wrapper = shallow(<ErrorLine {...PROPS} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains errorLine && path class", () => {
		expect(wrapper.find(".errorLine").exists()).toBe(true)
		expect(wrapper.find(".errorLine").hasClass("path")).toBe(true)
	})
	test("should display correct text", () => {
		expect(wrapper.find(".errorLine").text()).toEqual("name.js:10")
	})
})