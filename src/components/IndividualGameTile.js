import React from 'react';
import '../styling/IndividualGameTile.css';
import DailyGameCard from './DailyGameCard';
import InfoGameCard from './InfoGameCard';

class IndividualGameTile extends React.Component{
    render(){
        return(
            <div className="GameTile">

                <div className="Daily">
                    <h1 id="daily-title">#DailyTrivia: Check in Daily</h1>
                </div>
                <DailyGameCard/>

                <div className="Daily">
                    <h1 id="info-title">#StayInformed: Test your Knowledge of Important Topics</h1>
                </div>                
                <InfoGameCard/>
            </div>
        );
    }


}


/*
<div className="Info">
                
                <InfoGameCard/>
                </div>
*/



export default IndividualGameTile;