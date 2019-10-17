import React from "react"
import ReactConsole from "../../../src/components/reactConsole/reactConsole"
import { shallow } from "enzyme"

describe("<ReactConsole />", () => {
    test("should be correctly renderer", () => {
        const wrapper = shallow(<ReactConsole />)
        expect(wrapper).toBeDefined()
    })
})