import React, { useState } from "react"
import './input.scss'

const InputJs = () => {
    const [value, setValue] = useState("")
    const [history, setHistory] = useState([])
    const [hidx, setHidx] = useState(-1)
    const reset = () => {
        setHistory([value, ...history])
        setValue("")
        setHidx(-1)
    }
    const onArrowUp = () => {
        const newIdx = hidx < (history.length - 1) ? hidx + 1 : history.length - 1
        setHidx(newIdx)
        if( !!history[newIdx] ) setValue(history[newIdx])
    }
    const onArrowDown = () => {
        const newIdx = hidx > -1 ? hidx - 1 : -1
        setHidx( newIdx )
        if( !!history[newIdx] ) setValue(history[newIdx])
    }
    const onEnter = () => {
        const cmd = value
        reset()
        const ret = eval(cmd)
        console.log(ret);
    }
    const keyBinding = { 13: onEnter, 38: onArrowUp, 40: onArrowDown }
    const onChange = e => setValue(e.target.value)
    const onKeyUp = ({ keyCode }) => typeof keyBinding[keyCode] === "function" ? keyBinding[keyCode]() : null
    
    return (
        <div className="inputJS">
            <input className={"inputJSEval"} type="text" onChange={onChange} onKeyUp={onKeyUp} value={value} />
        </div>
    )
}

export default InputJs