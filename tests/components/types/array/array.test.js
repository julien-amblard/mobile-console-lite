import React from "react"
import { shallow, mount } from "enzyme"
import ArrayCmp from "@Components/types/array/array"
import ArrLight from "@Components/types/array/arrayLight"
import ArrPlain from "@Components/types/array/arrayPlain"

describe("<Array /> empty", () => {
	const wrapper = shallow(<ArrayCmp />)
	test("should not be rendered because empty props", () => {
		expect(wrapper.find(".array").exists()).toBe(false)
	})
})
describe("<Array /> default", () => {
	const wrapper = shallow(<ArrayCmp log={[1,2]} />)
	test("should be rendered", () => {
		expect(wrapper).toBeDefined()
		expect(wrapper.find(".array").exists()).toBe(true)
	})
	test("should contain <ArrPlain /> component", () => {
		expect(wrapper.find(ArrPlain).exists()).toBe(true)
	})
	test("should not contain <ArrLight /> component", () => {
		expect(wrapper.find(ArrLight).exists()).toBe(false)
	})
})
describe("<Array /> light", () => {
	const wrapper = mount(<ArrayCmp light={true} log={[1,2]} />)
	test("should be rendered", () => {
		expect(wrapper).toBeDefined()
		expect(wrapper.find(".array").exists()).toBe(true)
	})
	test("should not contain <ArrPlain /> component", () => {
		expect(wrapper.find(ArrPlain).exists()).toBe(false)
	})
	test("should contain <ArrLight /> component", () => {
		expect(wrapper.find(ArrLight).exists()).toBe(true)
	})
})