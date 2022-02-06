import React from 'react';
//import Topbar from './Components/Topbar/Topbar';
import InformationCard from './Components/InformationCard/InformationCard';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (  
    <React.Fragment>
      <LandingPage />
      {/* <Topbar /> */}
      <InformationCard />
    </React.Fragment>
  );
}

export default App;
