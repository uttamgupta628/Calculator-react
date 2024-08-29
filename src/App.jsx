import React, { useState } from 'react'
import style from './App.module.css'
import Button from './container/button_container'
function App() {
    let [displayvalue,setdisplayvalue]=useState("");
    const buttonvalue =(e)=>{
      if(e==='Ac'){
        setdisplayvalue(" ");
      }
      else if(e==='pow'){
        const result=Math.pow(displayvalue,2);
        setdisplayvalue(result);
      }
      else if(e==='del'){
        const result=displayvalue.slice(0,-1);
        setdisplayvalue(result);
      }
      else if(e==='+/-'){
        const result=-displayvalue;
        setdisplayvalue(result);
      }
      else if(e==='='){
        const result=eval(displayvalue);
        setdisplayvalue(result);
      }
      else{
        setdisplayvalue(displayvalue+e);
      }
      
    }

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Calculator</h1>
        <div className={style.input} >
            <input type="text"  value={displayvalue} readOnly/>
        </div>
        <Button onbuttonclick= {buttonvalue}/>
    </div>
  )
}

export default App
