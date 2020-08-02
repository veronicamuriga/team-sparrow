import React, { Component } from 'react'

// Contains the user related information

export default class UserContext extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
