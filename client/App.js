import React from 'react';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import Routes from './Routes';

const App = () => {
  return (
    <div>
        <StatusBar />
        <Routes />
        <Navbar />
    </div>
  );
};

export default App;
