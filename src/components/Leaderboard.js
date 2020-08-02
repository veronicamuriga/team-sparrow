import React from 'react';
import '../styling/leaderboard.css';
import trophy from '../images/award.png';
import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';
import badge from '../images/badge.png';



class LeaderBoard extends React.Component{
    render(){
        return(
            <div className="LeaderBoard">
                    <div className="Title">
                    <img src ={trophy}/>
                    <h1>LeaderBoard</h1>
                    </div>
                

                <div className="leaderboard-container">
                    <div className="leaderboard-entry first-place">
                    <img src={first}/>
                    <h2>1st</h2>
                    <p className="leaderboard-user">@dodie_iro</p>
                    <p>5200 pts</p>
                    </div>

                    <div className="leaderboard-entry second-place">
                    <img src={second}/>
                    <h2>2nd</h2>
                    <p className="leaderboard-user">@JaimeOtraVez</p>
                    <p>4870 pts</p>

                    </div>

                    <div className="leaderboard-entry third-place">
                    <img src={third}/>
                    <h2>3rd</h2>
                    <p className="leaderboard-user">@PuentesCasey</p>
                    <p>4300 pts</p>

                    </div>

                    <div className="leaderboard-entry low-place">
                    <img src={badge}/>
                    <h2>4th</h2>
                    <p className="leaderboard-user">@dodie_iro</p>
                    <p>4280 pts</p>
                    </div>

                    <div className="leaderboard-entry low-place">
                    <img src={badge}/>
                    <h2>5th</h2>
                    <p className="leaderboard-user">@dodie_iro</p>
                    <p>3850 pts</p>
                    </div>

                </div>                
            </div>
        );
    }

}

export default LeaderBoard;