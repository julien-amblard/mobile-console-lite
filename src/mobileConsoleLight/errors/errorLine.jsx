import React from "react"

const ErrorLine = ({ source, line }) => {
    const sourceName = source.split("/").reverse()[0].replace("?", "")
    return (
        <span className="errorLine path">{ sourceName + ":" + line }</span>
    )
}
export default ErrorLine