import React from 'react';
import '../styling/gameDisplayPage.css';
import NavBar from '../components/navBar';
import GameTile from '../components/GameTile';
import SideBar from '../components/sidebar';


class GameDisplayPage extends React.Component{
    render(){
        return(
            <div className="GameDisplay">
                <NavBar/>
                <GameTile/>
                <SideBar/>
            </div>
        );
    }


}




export default GameDisplayPage;