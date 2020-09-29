import React from "react";
import "./App.css";
import { GamesProvider } from "./components/contexts/GamesContext";
import GamesList from "./components/GamesList";
import Header from "./Header";

function App() {
  return (
    <GamesProvider>
      <Header />
      <div className="App">
        <GamesList />
      </div>
    </GamesProvider>
  );
}

export default App;
