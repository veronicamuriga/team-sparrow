import React from 'react';
import '../styling/LandingpageTile.css';
import whitebird from '../images/whitetwitterbird.png';
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
						<h1>Welcome to <em>#Twivia!</em></h1>
						<p>Twivia is a .....</p>
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