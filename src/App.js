import React from 'react';
import './App.css';
import { TopNewsProvider } from './components/contexts/TopNewsContext'
import TopNewsList from './components/TopNewsList';

function App() {
  return (

    <TopNewsProvider>
      <div className="App">
        <TopNewsList />
      </div>
    </TopNewsProvider>

  );
}

export default App;
