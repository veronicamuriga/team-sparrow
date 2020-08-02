import React from 'react';
import '../styling/InfoGameCard.css';

class InfoGameCard extends React.Component{
    render(){
        return(
            <div className="InfoGameCard">
                <div className="InfoCards">
                    <div className="card-cover" id="who-said-info"></div>
                    <div className="card-text"><button className="info-accent">#WhoSaidThat?</button></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-liked-info"></div>
                    <div className="card-text"><button className="info-accent">#WhoHasMoreFollowers?</button></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-follows-info"></div>
                    <div className="card-text"><button className="info-accent">#WhoLikedIt?</button></div>
                </div>
            </div>
        );
    }


}




export default InfoGameCard;