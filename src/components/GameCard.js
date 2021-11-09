import * as React from "react";
import '../App.css'
import ReactCardFlip from "react-card-flip";

class GameCard extends React.Component {
     constructor() {
          super();
          this.state = {
               isFlipped: false
          };
          this.handleClick = this.handleClick.bind(this);
     }

     handleClick(e) {
          e.preventDefault();
          this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
     }

     render(props) {
          console.log(this.props.games)
          return (
               <div onClick={this.handleClick}>
                    <ReactCardFlip
                         isFlipped={this.state.isFlipped}
                         flipDirection="horizontal"
                    >
                         <div className="gameCard">
                              <h5>{this.props.game.name}</h5>
                         </div>

                         <div className="gameCard">
                              This is the back of the card.
                         </div>
                    </ReactCardFlip>
               </div>
          );
     }
}

export default GameCard;
