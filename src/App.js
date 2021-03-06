import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landingpage from './components/Landingpage';
import Aboutus from './components/Aboutus';
import Signin from './components/Signin'
import Contactus from './components/Contactus';
import Landingpage2 from './components/Landingpage2';
import Hiring from './components/Hiring';
import Firstpage from './components/Firstpage';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path = "/" exact element = {<Landingpage />} />
          <Route path = "/about" exact element = {<Aboutus />} />
          <Route path = "/signin" exact element = {<Signin />} />
          <Route path = "/contact" exact element = {<Contactus />} />
          <Route path = "/landingpage" exact element = {<Landingpage2 />} />
          <Route path = "/hiring" exact element = {<Hiring />} />
          <Route path = "/firstpage" exact element = {<Firstpage />} />
        </Routes>
      </Router>

  );
}

export default App;
