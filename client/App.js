import React from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';
import Theme from './components/style/theme';

const App = () => {
  return (
    <div>
      <Theme>
        <Routes />
        <Navbar />
      </Theme>
    </div>
  );
};

export default App;
