import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Display from './Components/Display'
function App() {
  let [calVal,setCalVal] =useState("");
  const buttonClick = (buttonText) => {
    if(buttonText==="C"){
      setCalVal("");
    }else if(buttonText==="X"){
      const newCalVal = calVal.slice(0,-1);
      setCalVal(newCalVal);
    }else if(buttonText==="="){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newVal=calVal+buttonText;
      setCalVal(newVal);
    }
  }
  return (
    <div className="flex items-center align-middle justify-center h-screen">
      <div className="flex border border-black flex-col px-2 py-3 w-1/5 bg-slate-100">
        <h1 className="text-center font-bold text-2xl">Calculator</h1>
        <Display displayVal={calVal}/>
        <Button buttonClicked={buttonClick}/>
      </div>
    </div>
  )
}

export default App
