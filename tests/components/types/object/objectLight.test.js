import React from "react"
import { shallow, mount } from "enzyme"
import ObjectLight from "@Components/types/object/objectLight"

describe("<ObjectLight />", () => {
	const wrapper = shallow(<ObjectLight />)
	test("should be correctly rendered", () => {
		expect(wrapper.text()).toEqual("{…}")
	})
})