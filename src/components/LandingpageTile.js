import React from 'react';
import '../styling/LandingpageTile.css';
import whitebird from '../images/whitetwitterbird.png';


class LandingPageTile extends React.Component{
    render(){
        return(
            <div className="LandingpageTile">
            <div className="hero">
                <div className="hero-text">
                <h1>Welcome to <em>Twivia</em>!</h1>
                <p>Twivia is a .....</p>
                <button className="SignIn"><img src={whitebird}/> <p>Sign in with Twitter</p></button>
                </div>
                <div className="hero-media">
                    
                </div>
            </div>
                
            </div>
        );
    }


}




export default LandingPageTile;