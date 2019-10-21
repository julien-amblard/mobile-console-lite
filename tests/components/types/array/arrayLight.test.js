import React from "react"
import { shallow } from "enzyme"
import ArrLight from "@Components/types/array/arrayLight"
describe("<ArrLight />", () => {
	const wrapper = shallow(<ArrLight log={[1,2,3,4]} />)
	test("should be rendered", () => {
		expect(wrapper).toBeDefined()
	})
	test("should correctly render value length", () => {
		expect(wrapper.text()).toEqual("Array(4)")
	})
})