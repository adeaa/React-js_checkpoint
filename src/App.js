import React from 'react';
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
