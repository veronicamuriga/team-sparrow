import React from 'react';
import {Link} from "@reach/router";
import NavBar from '../components/navBar';
import GameTile from '../components/GameTile';
import SideBar from '../components/sidebar';


class LandingPage extends React.Component{
    render(){
        return(
            <div className="LandingPage">
                <NavBar/>
                <GameTile/>
                <SideBar/>
            </div>
        );
    }

}




export default LandingPage;