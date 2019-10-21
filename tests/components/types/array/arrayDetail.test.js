import React from "react"
import { mount } from "enzyme"
import ArrDetails from "@Components/types/array/arrayDetails"

describe("<ArrDetails />", () => {
	const wrapper = mount(<ArrDetails log={[1,2,3]} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have a .arrayExpand class", () => {
		expect(wrapper.find(".arrayExpand").exists()).toBe(true)
	})
	test("should have a .arrayLine class", () => {
		expect(wrapper.find(".arrayExpand").find(".arrayLine").exists()).toBe(true)
	})
	test("should have 4 .arrayLine span", () => {
		expect(wrapper.find(".arrayExpand").find(".arrayLine")).toHaveLength(4)
	})
	test("first .arrayLine should correctly rendered", () => {
		expect(wrapper.find(".arrayExpand").find(".arrayLine").at(0).text()).toEqual("0: 1")
	})
	test("second .arrayLine should correctly rendered", () => {
		expect(wrapper.find(".arrayExpand").find(".arrayLine").at(1).text()).toEqual("1: 2")
	})
	test("third .arrayLine should correctly rendered", () => {
		expect(wrapper.find(".arrayExpand").find(".arrayLine").at(2).text()).toEqual("2: 3")
	})
	test("last .arrayLine should correctly rendered log length", () => {
		expect(wrapper.find(".arrayExpand").find(".arrayLine").at(3).hasClass("arrayLength")).toBe(true)
		expect(wrapper.find(".arrayExpand").find(".arrayLine").at(3).text()).toEqual("length: 3")
	})
})