import React from "react"
import { shallow } from "enzyme"
import Error from "@Components/errors/error"
import ErrorStack from "@Components/errors/errorStack"
import ErrorLine from "@Components/errors/errorLine"

const PROPS = {
	log: {
		source: "filename", 
		noligne: "10", 
		erreur : {
			stack: "error stack"
		}
	}
}
describe("<Error />", () => {
	const wrapper = shallow(<Error {...PROPS} />)
	test("should be defined", () => {
		expect(wrapper).toBeDefined()
	})
	test("should contains logItem && errorItem class", () => {
		expect(wrapper.find(".logItem").exists()).toBe(true)
		expect(wrapper.find(".logItem").hasClass("errorItem")).toBe(true)
	})
	test("should contains <ErrorStack />", () => {
		expect(wrapper.find(ErrorStack).exists()).toBe(true)
	})
	test("should contains <ErrorLine />", () => {
		expect(wrapper.find(ErrorLine).exists()).toBe(true)
	})
})