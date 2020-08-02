import React from 'react';
import '../styling/gameDisplayPage.css';
import NavBar from '../components/navBar';
import IndividualGameTile from '../components/IndividualGameTile';
import SideBar from '../components/sidebar';


class GameDisplayPage extends React.Component{
    render(){
        return(
            <div className="GameDisplay">
                <NavBar/>
                <IndividualGameTile/>
                <SideBar/>
            </div>
        );
    }


}




export default GameDisplayPage;