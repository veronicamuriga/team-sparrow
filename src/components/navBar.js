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
                    
                    <p>Player: @account</p>
                    <p>Points: 12345</p>

                </div>
            </div>
            
        </div>
        );
    }


}




export default NavBar;