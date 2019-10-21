import React from "react"
import { mount } from "enzyme"
import Func from "@Components/types/func/func"

describe("<Func />", () => {
	const propFunc = () => { void 0 }
	const wrapper = mount(<Func log={propFunc} />)
	test("should have .func class", () => {
		expect(wrapper.find(".func").exists()).toBe(true)
	})
	test("should have .funcLabel class", () => {
		expect(wrapper.find(".funcLabel").exists()).toBe(true)
		expect(wrapper.find(".funcLabel").text()).toEqual("f ")
	})
	test("should be correctly renderer", () => {
		expect(wrapper.find(".func").text()).toEqual(`f ${propFunc.toString()}`)
	})
})