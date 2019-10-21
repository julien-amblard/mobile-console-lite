import React from "react"
import { mount } from "enzyme"
import ObjectPlain from "@Components/types/object/objectPlain"
import ObjectDetails from "@Components/types/object/objectDetails"
import Arrow from "@Components/commons/arrow/arrow"


describe("<ObjectPlain /> default", () => {
	const wrapper = mount(<ObjectPlain log={{a: 1, b: 2}} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains <Arrow />", () => {
		expect(wrapper.find(Arrow).exists()).toBe(true)
	})
	test("should contains <Arrow /> without .down class", () => {
		expect(wrapper.find(Arrow).getDOMNode().classList.contains("down")).toBe(false)
	})
	test("should correctly rendered object content", () => {
		expect(wrapper.text()).toEqual("▶{a: 1, b: 2}")
	})
})

describe("<ObjectPlain /> open after a click", () => {
	const wrapper = mount(<ObjectPlain log={{a: 1, b: 2}} />)
	wrapper.find("[data-test=\"click\"]").simulate("click")
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains <Arrow />", () => {
		expect(wrapper.find(Arrow).exists()).toBe(true)
	})
	test("should contains <ObjectDetails />", () => {
		expect(wrapper.find(ObjectDetails).exists()).toBe(true)
	})
	test("should contains <Arrow /> with .down class", () => {
		expect(wrapper.find(Arrow).getDOMNode().classList.contains("down")).toBe(true)
	})
	test("should be defined", () => {
		expect(wrapper.text()).toEqual("▶{a: 1, b: 2}a: 1b: 2")
	})
})