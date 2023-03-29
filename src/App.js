
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import AppStyles from './App.css'
import Login from "./componets/login";
import Signup from "./componets/signup";
import Nav from "./componets/nav"
import NASA from "./componets/nasa"

function App(props) {

  return (
    <div >
      <div className={AppStyles.lines}>
        <div className={AppStyles.line}></div>
        <div className={AppStyles.line}></div>
        <div className={AppStyles.line}></div>
    </div>
      
      <Nav/>
      
      <Routes>

        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/signup" element={<Signup/>}/>
        <Route path="/nasa" element={<NASA/>}/>
      </Routes>
    </div>
  );
}

export default App;
