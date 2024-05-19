import './App.css';
import Navbar from './components/Navbar';
import Form  from './components/Form';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="Haks"/>
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
