import React from 'react';
import '../styling/FollowersGame.css';
import FollowersGameRound from './followers_game/FollowersGameRound';

class FollowersGame extends React.Component{
	constructor() {
		super()
	}


	state = {
		roundsLeft: 5,
		rounds: [],
		currentRound: null
	}

	startRound = () => {
		var roundsLeft = [...this.state.rounds];

		var nextRound = roundsLeft.pop();
		this.setState({...this.state, currentRound: nextRound, roundsLeft: roundsLeft.length, rounds: roundsLeft})
	}

	componentDidMount = () => {
		this.startRound();
	}	

    render(){
        return(
            <div className="FollowersGame">
            <h1 className="game-title">#WhoHasMoreFollowers?</h1>
                <div className="followers-container">
					<FollowersGameRound data={this.currentRound} roundFinished={this.startRound}/>
                </div>
            </div>
        );
    }


}




export default FollowersGame;