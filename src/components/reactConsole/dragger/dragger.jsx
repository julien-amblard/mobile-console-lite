import React, { useState } from "react"

export const Dragger = ({ onUpdate, className, dragRef, active, children }) => {
	const [diff, setDiff] = useState([0, 0])
	const onTouchStart = event => {
		if( !active ) return
		event.persist()
		setDiff([ 
			event.changedTouches[0].clientX - dragRef.ref.current.offsetLeft,
			event.changedTouches[0].clientY - dragRef.ref.current.offsetTop,
		])
	}
	const onTouchMove = event => {
		if( !active ) return
		event.persist()
		onUpdate([ 
			event.changedTouches[0].clientX - diff[0],
			event.changedTouches[0].clientY - diff[1]
		])
	}
	return (
		<div className={className} onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
			{children}
		</div>
	)
}
export default Dragger