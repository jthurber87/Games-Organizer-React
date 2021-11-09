import logo from "./logo.svg";
import "./App.css";
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import GameCard from './components/GameCard'

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
     return (
          <>
               <NavBar user={user}/>
               <GameCard />
          </>
     );
}

export default App;
