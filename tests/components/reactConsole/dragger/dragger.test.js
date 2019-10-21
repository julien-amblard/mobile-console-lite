import React from "react"
import { mount } from "enzyme"
import { StateContext, DEFAULT_STATE } from '@Components/StateProvider'
import Dragger from "@Components/reactConsole/dragger/dragger"
import Arrow from "@Components/commons/arrow/arrow"

const dispatch = jest.fn()
describe("<Dragger />", () => {
	const wrapper = mount(<StateContext.Provider value={[DEFAULT_STATE, dispatch]}>
		<Dragger className="classtest">
			<Arrow />
			lorem ipsum
		</Dragger>
	</StateContext.Provider>)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should have a .classtest class", () => {
		expect(wrapper.find(".classtest").exists()).toBe(true)
	})
	test("should have <Arrow /> children", () => {
		expect(wrapper.find(Arrow).exists()).toBe(true)
	})
	test("should have valide text children", () => {
		expect(wrapper.text()).toEqual("▶lorem ipsum")
	})

	// test("should be moved", () => {
	// 	wrapper.find("div.classtest").simulate("touchStart")
	// 	expect(wrapper.find("div.classtest").length).toEqual("▶lorem ipsum")
	// })
})
/**	
 * find a way to test touchmove
 */