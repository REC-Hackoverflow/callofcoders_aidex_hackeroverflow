import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landingpage from './components/Landingpage';
import Aboutus from './components/Aboutus';
import Signin from './components/Signin'
import Contactus from './components/Contactus';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path = "/" exact element = {<Landingpage />} />
          <Route path = "/about" exact element = {<Aboutus />} />
          <Route path = "/signin" exact element = {<Signin />} />
          <Route path = "/contact" exact element = {<Contactus />} />
        </Routes>
      </Router>

  );
}

export default App;
