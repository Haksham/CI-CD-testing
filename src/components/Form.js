import React,{useState} from 'react'

export default function Form(props) {
  const[text,setText]=useState("");
  const upper=()=>{
    let newt = text.toUpperCase();
    setText(newt);
  }
  const lower=()=>{
    let newt = text.toLowerCase();
    setText(newt);
  }
  const switchs=()=>{
    let newt = text;
    setText(newt);
  }
  const clear=()=>{
    let newt = "";
    setText(newt);
  }
  const copy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const expspace=()=>{
    let ner=text.split(/[ ]+/);
    setText(ner.join(" "));
  }
  const handle=(event)=>{
    setText(event.target.value);
  }
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea value={text} onChange={handle}  placeholder="Enter the text here: " className='form-control' id="myBox" rows={8}></textarea>
        </div>
        <button onClick={upper}  className='btn btn-primary mx-2'>Convert to upper</button>
        <button onClick={lower}  className='btn btn-primary mx-2'>Convert to lower</button>
        <button onClick={switchs}  className='btn btn-danger mx-2'>Switch</button>
        <button onClick={clear}  className='btn btn-secondary mx-2'>Clear</button>
        <button onClick={copy}  className='btn btn-secondary mx-2'>Copy</button>
        <button onClick={expspace}  className='btn btn-secondary mx-2'>Remove extra space</button>
      </div>
      <div className="container my-5">
        <h2>Text summary:</h2>
        <p>
          {text.split(" ").length} words <br/> {text.length} Characters
        </p>
        <h3>Preview:</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
