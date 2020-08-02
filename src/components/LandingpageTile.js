import React from 'react';
import '../styling/LandingpageTile.css';
import whitebird from '../images/whitetwitterbird.png';
import logo from '../img/logo.png';
import {signInWithTwitter} from '../components/firebase'

class LandingPageTile extends React.Component{

	signInClicked = (event) => {
		event.preventDefault();
		signInWithTwitter();
	}

    render(){
        return(
            <div className="LandingpageTile">
            	<div className="hero">
					<div className="hero-text">
						<div className="logo"><img src={logo}></img></div>
						<h1>Welcome to <em>#Twivia!</em></h1>
						<p>Game nights will never be the same! Twivia is a personalized Twitter trivia game created by <em>Team Sparrow</em></p>
						<button onClick={this.signInClicked} className="SignIn"><img src={whitebird}/> <p>Sign in with Twitter</p></button>
					</div>
					<div className="hero-media">
						
					</div>
            	</div>
            </div>
        );
    }


}




export default LandingPageTile;