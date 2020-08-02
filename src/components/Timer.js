import React from 'react'
import PropTypes from 'prop-types'

export default class Timer extends React.Component {

	state = {
		secondsRemaining: this.props.countdownSeconds
	}

	componentDidMount = () => {
		this.myInterval = setInterval(() => {


			this.setState(({secondsRemaining}) => ({
				secondsRemaining: secondsRemaining-1
			}));


		}, 1000)
	}

	render = () => {
		const { secondsRemaining } = this.state

		return (
			<div>
				<h1>Time remaining: {seicondsRemaining}</h1>
			</div>
		)
	}
}

Timer.propTypes = {
	countdownSeconds: PropTypes.number.isRequired,
	timeIsUp: PropTypes.func.isRequired
}
