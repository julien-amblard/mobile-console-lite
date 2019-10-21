import React from "react"
import { mount } from "enzyme"
import Arrow from "@Components/commons/arrow/arrow"

describe("<Arrow /> closed", () => {
	const wrapper = mount(<Arrow open={false} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have .arrow class", () => {
		expect(wrapper.find(".arrow").exists()).toBe(true)
	})
	test("should not have .down class", () => {
		expect(wrapper.find(".arrow").hasClass("down")).toBe(false)
	})
	test("should have ▶ content", () => {
		expect(wrapper.text()).toEqual("▶")
	})
})

describe("<Arrow /> open", () => {
	const wrapper = mount(<Arrow open={true} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have .arrow class", () => {
		expect(wrapper.find(".arrow").exists()).toBe(true)
	})
	test("should have .down class", () => {
		expect(wrapper.find(".arrow").hasClass("down")).toBe(true)
	})
	test("should have ▶ content", () => {
		expect(wrapper.text()).toEqual("▶")
	})
})