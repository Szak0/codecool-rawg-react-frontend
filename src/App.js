import React from "react";
import "./App.css";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/GamesList";

function App() {
  return (
    <GamesProvider>
      <div className="App">
        <GamesList />
      </div>
    </GamesProvider>
  );
}

export default App;
