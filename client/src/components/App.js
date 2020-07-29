import React, { useState } from 'react';
import Routes from './Routes';
import Nav from './shared/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App () {
  return (
    <React.Fragment>
      <Nav/>
      <Routes/>
    </React.Fragment>
  );
};

export default App;


