import './App.css';
import Navbar from './components/Navbar';
import Form  from './components/Form';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode,setmode]=useState('light');
  var dtoggle=()=>{
    if(mode==='light'){
      setmode('dark')
    }else{setmode('light')}
  }
  return (
    <>
    <Navbar title="Haks" mode={mode} dtoggle={dtoggle}/>
    <div className="container my-3">
      <Form heading="fill them please"/>
    </div>
    <div className="container border border-black rounded my-3">
      <About/>
    </div>
    
    </>
  );
}

export default App;
