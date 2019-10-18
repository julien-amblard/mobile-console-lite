import React from "react"
import { mount } from "enzyme"

import { StateContext, DEFAULT_STATE } from '@Components/StateProvider'
import ReactConsole from "@Components/reactConsole/reactConsole"
import InputJS from "@Components/input/input"
import LogsContainer from "@Components/reactConsole/logsContainer/logsContainer"
import ToggleBar from "@Components/reactConsole/toggleBar/toggleBar"
import Resizable from "@Components/reactConsole/resizer/resizer"


const dispatch = jest.fn()
describe("<ReactConsole /> default", () => {
    const wrapper = mount(<StateContext.Provider value={[DEFAULT_STATE, dispatch]}>
        <ReactConsole />
    </StateContext.Provider>)
    test("should be correctly renderer", () => {
        expect(wrapper).toBeDefined()
    })
    test("should contains <Resizable /> component", () => {
        expect(wrapper.find(Resizable).exists()).toBe(true)
    })
    test("<Resizable /> should have mobileConsoleLight class", () => {
        expect(wrapper.find(Resizable).hasClass("mobileConsoleLight")).toBe(true)
    })
    test("<Resizable /> should not have minimized class", () => {
        expect(wrapper.find(Resizable).hasClass("minimized")).toBe(false)
    })
    test("<Resizable /> should not have popuped class", () => {
        expect(wrapper.find(Resizable).hasClass("popuped")).toBe(false)
    })

    test("<Resizable /> should contain .mobileConsoleLightContent div", () => {
        expect(wrapper.find(Resizable).find(".mobileConsoleLightContent").exists()).toBe(true)
    })

    test("should contains <ToggleBar /> component", () => {
        expect(wrapper.find(Resizable).find(ToggleBar).exists()).toBe(true)
    })
    test("should contains <LogsContainer /> component", () => {
        expect(wrapper.find(".mobileConsoleLightContent").find(LogsContainer).exists()).toBe(true)
    })
    test("should contains <InputJS /> component", () => {
        expect(wrapper.find(".mobileConsoleLightContent").find(InputJS).exists()).toBe(true)
    })
})



describe("<ReactConsole /> minimized", () => {
    const wrapper = mount(<StateContext.Provider value={[{...DEFAULT_STATE, minimize: true}, dispatch]}>
        <ReactConsole />
    </StateContext.Provider>)
    test("should be correctly renderer", () => {
        expect(wrapper).toBeDefined()
    })
    test("should contains <Resizable /> component", () => {
        expect(wrapper.find(Resizable).exists()).toBe(true)
    })
    test("<Resizable /> should have mobileConsoleLight class", () => {
        expect(wrapper.find(Resizable).hasClass("mobileConsoleLight")).toBe(true)
    })
    test("<Resizable /> should have minimized class", () => {
        expect(wrapper.find(Resizable).hasClass("minimized")).toBe(true)
    })
    test("<Resizable /> should not have popuped class", () => {
        expect(wrapper.find(Resizable).hasClass("popuped")).toBe(false)
    })

    test("<Resizable /> should not contain .mobileConsoleLightContent div", () => {
        expect(wrapper.find(Resizable).find(".mobileConsoleLightContent").exists()).toBe(false)
    })

    test("should contains <ToggleBar /> component", () => {
        expect(wrapper.find(Resizable).find(ToggleBar).exists()).toBe(true)
    })
    test("should not contains <LogsContainer /> component", () => {
        expect(wrapper.find(".mobileConsoleLightContent").find(LogsContainer).exists()).toBe(false)
    })
    test("should not contains <InputJS /> component", () => {
        expect(wrapper.find(".mobileConsoleLightContent").find(InputJS).exists()).toBe(false)
    })
})

describe("<ReactConsole /> popuped", () => {
    const wrapper = mount(<StateContext.Provider value={[{...DEFAULT_STATE, popup: true}, dispatch]}>
        <ReactConsole />
    </StateContext.Provider>)
    test("should be correctly renderer", () => {
        expect(wrapper).toBeDefined()
    })
    test("should contains <Resizable /> component", () => {
        expect(wrapper.find(Resizable).exists()).toBe(true)
    })
    test("<Resizable /> should have style", () => {
        expect(wrapper.find(Resizable).prop("style").left).toEqual("30px")
        expect(wrapper.find(Resizable).prop("style").top).toEqual("10px")
    })

    test("<Resizable /> should have mobileConsoleLight class", () => {
        expect(wrapper.find(Resizable).hasClass("mobileConsoleLight")).toBe(true)
    })
    test("<Resizable /> should not have minimized class", () => {
        expect(wrapper.find(Resizable).hasClass("minimized")).toBe(false)
    })
    test("<Resizable /> should have popuped class", () => {
        expect(wrapper.find(Resizable).hasClass("popuped")).toBe(true)
    })

    test("<Resizable /> should contain .mobileConsoleLightContent div", () => {
        expect(wrapper.find(Resizable).find(".mobileConsoleLightContent").exists()).toBe(true)
    })

    test("should contains <ToggleBar /> component", () => {
        expect(wrapper.find(Resizable).find(ToggleBar).exists()).toBe(true)
    })
    test("should contains <LogsContainer /> component", () => {
        expect(wrapper.find(".mobileConsoleLightContent").find(LogsContainer).exists()).toBe(true)
    })
    test("should contains <InputJS /> component", () => {
        expect(wrapper.find(".mobileConsoleLightContent").find(InputJS).exists()).toBe(true)
    })
})