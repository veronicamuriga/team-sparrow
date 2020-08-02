import React from 'react'
import '../../styling/FollowersGame.css';
import PropTypes from 'prop-types'
import accountImg from '../img/logo.png';

export default function FollowersGameOption(props) {

	return (
		<div className="followers-account">
			<div className="followers-picture"><img src={accountImg}></img></div>
			<div className="followers-text">
			{/* <p className="followers-handle">@ladygaga</p> */}
				<button className="followers-name" onClick={props.answerChosen(event, name)}>{props.name}</button>
			</div>
		</div>
	)
}

FollowersGameOption.propTypes = {
	name: PropTypes.string.isRequired,
	answerChosen: PropTypes.func.isRequired
}
