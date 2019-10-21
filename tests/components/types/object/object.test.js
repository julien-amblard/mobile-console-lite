import React from "react"
import { shallow, mount } from "enzyme"
import ObjectCmp from "@Components/types/object/object"
import ObjectLight from "@Components/types/object/objectLight"
import ObjectPlain from "@Components/types/object/objectPlain"

describe("<ObjectCmp /> empty", () => {
	const wrapper = shallow(<ObjectCmp />)
	test("should not be rendered because empty props", () => {
		expect(wrapper.find(".Object").exists()).toBe(false)
	})
})
describe("<ObjectCmp /> default", () => {
	const wrapper = shallow(<ObjectCmp log={{a: 1, b: 2}} />)
	test("should be rendered", () => {
		expect(wrapper).toBeDefined()
		expect(wrapper.find(".object").exists()).toBe(true)
	})
	test("should contain <ObjectPlain /> component", () => {
		expect(wrapper.find(ObjectPlain).exists()).toBe(true)
	})
	test("should not contain <ObjectLight /> component", () => {
		expect(wrapper.find(ObjectLight).exists()).toBe(false)
	})
})
describe("<ObjectCmp /> light", () => {
	const wrapper = mount(<ObjectCmp light={true} log={{a: 1, b: 2}} />)
	test("should be rendered", () => {
		expect(wrapper).toBeDefined()
		expect(wrapper.find(".object").exists()).toBe(true)
	})
	test("should not contain <ObjectPlain /> component", () => {
		expect(wrapper.find(ObjectPlain).exists()).toBe(false)
	})
	test("should contain <ObjectLight /> component", () => {
		expect(wrapper.find(ObjectLight).exists()).toBe(true)
	})
})