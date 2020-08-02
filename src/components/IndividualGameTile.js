import React from 'react';
import '../styling/IndividualGameTile.css';
import DailyGameCard from './DailyGameCard';
import InfoGameCard from './InfoGameCard';

class IndividualGameTile extends React.Component{
    render(){
        return(
            <div className="GameTile">
                <div className="Daily">
                <h1>#DailyTrivia: Check in Daily</h1>
                <DailyGameCard/>
                </div>
                <div className="Info">
                <h1>#StayInformed: Test your Knowledge of Important Topics</h1>
                <InfoGameCard/>
                </div>
            </div>
        );
    }


}




export default IndividualGameTile;