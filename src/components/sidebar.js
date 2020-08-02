import React from 'react';
import '../styling/sidebar.css';
import '../styling/setup.css';

import logo from './img/logo.png';
import leaderboard from './img/leaderboard.png';
import party from './img/party.png';
import logout from './img/logout.png';

class SideBar extends React.Component{
    render(){
        return(
            <div className="sidebar">
        <a className="menuSelect"><img src={logo} alt="Twivia logo"></img></a>
            
        </div><div className="SideBar">
                <h2>SideBar</h2>
            </div>
        );
    }

}




export default SideBar;