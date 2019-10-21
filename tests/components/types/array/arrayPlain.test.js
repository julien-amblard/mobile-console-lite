import React from "react"
import { mount } from "enzyme"
import ArrLight from "@Components/types/array/arrayLight"
import ArrDetails from "@Components/types/array/arrayDetails"
import ArrPlain from "@Components/types/array/arrayPlain"
import Arrow from "@Components/commons/arrow/arrow"

describe("<ArrPlain /> default", () => {
	const wrapper = mount(<ArrPlain log={[1,2,3]} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains <Arrow />", () => {
		expect(wrapper.find(Arrow).exists()).toBe(true)
	})
	test("should contains <Arrow /> without .down class", () => {
		expect(wrapper.find(Arrow).getDOMNode().classList.contains("down")).toBe(false)
	})
	test("should correctly rendered array content", () => {
		expect(wrapper.text()).toEqual("▶(3) [1, 2, 3]")
	})
})

describe("<ArrPlain /> open after a click", () => {
	const wrapper = mount(<ArrPlain log={[1,2,3]} />)
	wrapper.find("[data-test=\"click\"]").simulate("click")
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains <Arrow />", () => {
		expect(wrapper.find(Arrow).exists()).toBe(true)
	})
	test("should contains <ArrLight />", () => {
		expect(wrapper.find(ArrLight).exists()).toBe(true)
	})
	test("should contains <ArrDetails />", () => {
		expect(wrapper.find(ArrDetails).exists()).toBe(true)
	})
	test("should contains <Arrow /> with .down class", () => {
		expect(wrapper.find(Arrow).getDOMNode().classList.contains("down")).toBe(true)
	})
	test("should be defined", () => {
		expect(wrapper.text()).toEqual("▶Array(3)0: 11: 22: 3length: 3")
	})
})