import React from "react"
import { mount } from "enzyme"
import ObjectDetails from "@Components/types/object/objectDetails"

describe("<ObjectDetails />", () => {
	const wrapper = mount(<ObjectDetails log={{a: 1, b: 2}} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have a .objectExpand class", () => {
		expect(wrapper.find(".objectExpand").exists()).toBe(true)
	})
	test("should have a .objectLine class", () => {
		expect(wrapper.find(".objectExpand").find(".objectLine").exists()).toBe(true)
	})
	test("should have 2 .objectLine span", () => {
		expect(wrapper.find(".objectExpand").find(".objectLine")).toHaveLength(2)
	})
	test("first .objectLine should correctly rendered", () => {
		expect(wrapper.find(".objectExpand").find(".objectLine").at(0).text()).toEqual("a: 1")
	})
	test("second .objectLine should correctly rendered", () => {
		expect(wrapper.find(".objectExpand").find(".objectLine").at(1).text()).toEqual("b: 2")
	})
})