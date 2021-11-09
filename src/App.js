import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import Library from './components/Library'

const firebaseConfig = {
     apiKey: "AIzaSyDqrOG38IzexaGJY_bUWWQC70h0FsyiVlI",
     authDomain: "board-game-organizer-b594e.firebaseapp.com",
     projectId: "board-game-organizer-b594e",
     storageBucket: "board-game-organizer-b594e.appspot.com",
     messagingSenderId: "76602264263",
     appId: "1:76602264263:web:4eb59bc88666af8de78ce2",
     measurementId: "G-CN6ZEMBMBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
     const user = {
          name: "Jay Thurber"
     };
     const games = [
          {
               name: "Azul",
               players: "1-4",
               description: "Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the Royal Palace of Evora. In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score. The player with the most points at the end of the game wins."
          },
          {
               name: "Splendor",
               players: "1-4"
          }
     ]
     return (
          <>
               <NavBar user={user}/>
               <Library games={games}/>
          </>
     );
}

export default App;
