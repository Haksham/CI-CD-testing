import './App.css';
import Navbar from './components/Navbar';
import Form  from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null)
  var dtoggle=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
    }
    else{setmode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    }
  }
  return (
    <>
    <Navbar title="Haks" mode={mode} dtoggle={dtoggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Form heading="fill them please" mode={mode}/>
    </div>
    <div className={`container border border-${mode==='light'?'dark':'light'}  bg-${mode} rounded my-3`}>
      <About mode={mode}/>
    </div>
    
    </>
  );
}

export default App;
