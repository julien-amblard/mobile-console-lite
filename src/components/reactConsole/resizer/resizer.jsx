import React from "react"
import "./resizer.scss"
class Resizer extends React.Component {
	constructor(props) {
		super(props)
		this.ref = React.createRef()
		this.state = {
			width: this.props.width || "80%",
			height: this.props.height || "30%"
		}
	}
	onTouchMoveX ( event ) {
		event.persist()
		const ev = event.changedTouches ? event.changedTouches[0] : event
		this.setState({
			width: ev.clientX - this.ref.current.offsetLeft
		})
	}
	onTouchMoveY ( event ) {
		event.persist()
		const ev = event.changedTouches ? event.changedTouches[0] : event
		this.setState({
			height: ev.clientY - this.ref.current.offsetTop
		})
	}
	onTouchMoveXY ( event ) {
		this.onTouchMoveX(event)
		this.onTouchMoveY(event)
	}
	render () {
		const style = {
			...this.props.style,
			width: this.state.width,
			height: this.state.height
		}
		return (
			<div className={this.props.className} ref={this.ref} style={style}>
				<div className="resizer">
					{this.props.children}
					{ this.props.active &&
						<>
							<div className="resizerBar resizerBottom"
								onTouchMove={this.onTouchMoveY.bind(this)}
								onMouseMove={this.onTouchMoveY.bind(this)}
							></div>
							<div className="resizerBar resizerRight"
								onTouchMove={this.onTouchMoveX.bind(this)}
								onMouseMove={this.onTouchMoveX.bind(this)}
								></div>
							<div className="resizerBar resizerSquare"
								onTouchMove={this.onTouchMoveXY.bind(this)}
								onMouseMove={this.onTouchMoveXY.bind(this)}
							></div>
						</>
					}
				</div>
			</div>
		)
	}
}
export default Resizer