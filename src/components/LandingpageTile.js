import React from 'react';
import '../styling/LandingpageTile.css';
import whitebird from '../images/whitetwitterbird.png';


class LandingPageTile extends React.Component{
    render(){
        return(
            <div className="LandingpageTile">
                <h1>Welcome to <em>Twivia</em>!</h1>
                <p>Twivia is a .....</p>
                <button className="SignIn"><img src={whitebird}/> Sign in with Twitter</button>
            </div>
        );
    }


}




export default LandingPageTile;