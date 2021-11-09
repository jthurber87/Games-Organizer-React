import React, { useState, useEffect } from "react";
import "../App.css";
import GameCard from './GameCard'

export default function Library(props) {
     const [games, setGames] = useState(props.games)
     return (
          <div className="allGames">
               <GameCard />
               <GameCard />
               <GameCard />
               <GameCard />
               <GameCard />  
          </div>
     );
}
