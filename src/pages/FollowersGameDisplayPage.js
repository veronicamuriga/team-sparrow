import React from 'react';
import '../styling/gameDisplayPage.css';
import NavBar from '../components/navBar';
import IndividualGameTile from '../components/IndividualGameTile';
import SideBar from '../components/sidebar';
import FollowersGame from '../components/FollowersGame';


class GameDisplayPage extends React.Component{
    render(){
        return(
            <div className="GameDisplay">
                <NavBar/>
                <SideBar/>
                <FollowersGame/>
            </div>
        );
    }


}




export default GameDisplayPage;