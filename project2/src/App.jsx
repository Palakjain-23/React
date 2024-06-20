
import {useRef,useState,useCallback,useEffect } from "react";
export default function App() {
  
  const [pass,setPass]=useState("");
  const [num,setNum]=useState(false);
  const [char,setChar]=useState(false);
  const [length,setLength]=useState(8);
  
  const passRef=useRef(null);
 
  document.querySelector("body").style.backgroundColor="#211f1f";
  const passGenerator=useCallback(()=>{
    let pss="";
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz";
    if(num)str+="0123456789";
    if(char)str+="!@#$%^&*(){}~`";

    for (let  i= 1;  i<=length; i++) {
      let ch=Math.floor(Math.random()*str.length+1);
      pss+=str.charAt(ch);
    }
    setPass(pss);
  },[length,num,char,setPass]);
  
  const copyPass=useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass])

  useEffect(()=>{ 
   passGenerator()
  },[length,char,setPass,passGenerator]);
  return (
    <>
      <div className="bg-cyan-400 w-2/5 h-[230px] mx-auto mt-8 shadow-md">
      <h1 className="text-center text-2xl font-bold pt-4">Password Generator</h1>
        <div className="px-12 pt-8">
           <input type="text" className="bg-white w-4/5 h-8 px-2 py-2" readOnly
           ref={passRef}
            value={pass}
           />
           <button className="bg-green-300 border border-black-800 rounded px-3 py-1 font-bold" onClick={copyPass}>Copy</button>
        </div>
        <div className="my-4 bg-slate-300 h-1/6 mx-9 flex justify-between align-middle px-2 text-lg">
          
          <div><input type="range"
            min={6}
            max={50}
           value={length}
           className="cursor-pointer"
           onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>
          Length : {length}
          </label></div>
          <div><input type="checkbox" defaultChecked={num} onChange={()=>{
            setChar((prev)=>!prev);
          }}
          />
          <label htmlFor="char" >Character</label></div>
          
          <div> <input type="checkbox" defaultChecked={char} onChange={()=>{
            setNum((prev)=>!prev);
          }}/>
          <label htmlFor="NUM">Number</label></div>
        </div>
      </div>
    </>
  )
}
