import React from 'react';
import '../styling/InfoGameCard.css';

class InfoGameCard extends React.Component{
    render(){
        return(
            <div className="InfoGameCard">
                <div className="InfoCards">
                    <div className="card-cover" id="who-said-info"></div>
                    <div className="card-text"><p className="info-accent">#WhoSaidThat?</p></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-liked-info"></div>
                    <div className="card-text"><p className="info-accent">#WhoLikedIt?</p></div>
                </div>
                <div className="DailyCards">
                    <div className="card-cover" id="who-follows-info"></div>
                    <div className="card-text"><p className="info-accent">#WhoHasMoreFollowers?</p></div>
                </div>
            </div>
        );
    }


}




export default InfoGameCard;