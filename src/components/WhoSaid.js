import React from 'react';
import '../styling/WhoSaid.css';
import Tweet from '../components/tweet';

class WhoSaid extends React.Component{
    render(){
        return(
            <div className="WhoSaid">
                <h1 className="game-title">#WhoSaidThat?</h1>
                
                <div className="who-said-container">
                    <Tweet/>

                    <div className="game-options">

                        <button>@AccountNumber1</button>
                        <button>@AccountNumber2</button>
                        <button>@AccountNumber3</button>
                        <button>@AccountNumber4</button>

                    </div>
                </div>
            
            </div>
        );
    }


}




export default WhoSaid;