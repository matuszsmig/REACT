import React from 'react';
import StageComponent from './components/Stage';
import {BrowserRouter as Router} from 'react-router-dom'

const AppComponent = () => {
  return (
    <>
      <Router>
        <StageComponent></StageComponent>
      </Router>
    </>
  );
}

export default AppComponent;
