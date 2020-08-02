import React from 'react';
import '../styling/navBar.css';
import user from '../img/user.png'

class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
            <h1>#Twivia</h1>
            <div className="playerProfile">
                <img className="playerIcon" src={user}></img>
                <div className="playerInfo">
                    
                    <p>Player: @dodie_iro</p>
                    <p>Points: 4850</p>

                </div>
            </div>
            
        </div>
        );
    }


}




export default NavBar;