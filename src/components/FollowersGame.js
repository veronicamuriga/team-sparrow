import React from 'react';
import '../styling/FollowersGame.css';
import account1 from '../img/logo.png';
import account2 from '../img/logo.png';

class FollowersGame extends React.Component{
    render(){
        return(
            <div className="FollowersGame">
            <h1 className="game-title">#WhoHasMoreFollowers?</h1>
                <div className="followers-container">
                    
                    
                    <div className="followers-account">
                        <div className="followers-picture"><img src={account1}></img></div>
                        <div className="followers-text">
                        <p className="followers-handle">@ladygaga</p>
                            <button className="followers-name">Lady Gaga</button>
                            
                        </div>
                    </div>

                    <div className="followers-account">
                        <div className="followers-picture"><img src={account2}></img></div>
                        <div className="followers-text">
                        <p className="followers-handle">@arianagrande</p>
                            <button className="followers-name">Ariana Grande</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}




export default FollowersGame;