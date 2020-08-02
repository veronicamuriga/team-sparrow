import React from 'react';
import '../styling/tweet.css';
import '../styling/setup.css';

import logo from '../img/logo.png';

function Tweet(){
    return(
        <div className="tweet">
        <img className="avatar" src={logo} alt="Twivia logo"></img>
        <div className="tweetText">
            <h3>@????????????????</h3>
            <p>We be tweetin'</p>
        </div>
            
        </div>
    );

}

export default Tweet;