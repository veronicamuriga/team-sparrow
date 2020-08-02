import React, { Component } from 'react'
import Heroku from 'heroku-client'


export default class Test extends Component {

	componentDidMount = () => {
		console.log("mount.")
		this.testCall()
	}

	testCall = () => {
		
	}

	render() {
		return (
			<div>

			</div>
		)
	}
}
