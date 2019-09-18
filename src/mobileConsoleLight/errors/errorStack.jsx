import React from "react"

const ErrorStack = ({ stack }) => {
    let _stack = stack
    const reg = /(?<start>\()(?<path>.*)(?<line>:[0-9]+)(?<col>:[0-9]+)(?<end>\))/
    const matches = stack.match(/\(.*\)/gm)
    matches.forEach( match => {
        const { path, line } = reg.exec(match).groups
        const file = path.split("/").reverse()[0]
        _stack = _stack.replace(match, `(<span class="path">${file}${line}</span>)`)
    });
    return (
        <span className="errorStack" dangerouslySetInnerHTML={{ __html: _stack }}>
		</span>
    )
}
export default ErrorStack