import './App.css';
import Navbar from './components/Navbar';
import Form  from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  var dtoggle=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark mode enabled","success");
    }
    else{setmode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Haks" mode={mode} dtoggle={dtoggle}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <div className={`container border border-${mode==='light'?'dark':'light'}  bg-${mode} rounded my-3`}>
              <About mode={mode}/>
            </div>
          </Route>
          <Route path="/">
            <Form heading="fill them please" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>   
    </Router> 
    </>
  );
}

export default App;
