import React from 'react';
import '../styling/dashboard.css';
import NavBar from '../components/navBar';
import IndividualGameTile from '../components/IndividualGameTile';
import SideBar from '../components/sidebar';


class DashBoard extends React.Component{
    render(){
        return(
            <div className="Dashboard">
                <NavBar/>
                <SideBar/>
                <IndividualGameTile/>
            </div>
        );
    }


}




export default DashBoard;