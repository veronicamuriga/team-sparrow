import React from 'react';
import '../styling/WhoSaidDisplayPage.css';
import NavBar from '../components/navBar';
import IndividualGameTile from '../components/IndividualGameTile';
import SideBar from '../components/sidebar';
import WhoSaid from '../components/WhoSaid';


class GameDisplayPage extends React.Component{
    render(){
        return(
            <div className="GameDisplay">
                <NavBar/>
                <SideBar/>
                <WhoSaid/>
            </div>
        );
    }


}




export default GameDisplayPage;