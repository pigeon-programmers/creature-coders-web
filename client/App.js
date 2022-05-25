import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import Routes from './Routes';

const App = () => {
  const activePage = useSelector((state) => state.user.activePage);

  return (
    <div>
      {activePage === 'home' ? null : <StatusBar />}
      <Routes />
      {activePage === 'home' ? null : <Navbar />}
    </div>
  );
};

export default App;
