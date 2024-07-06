import Items from "./Items";
import { useState } from "react";
function Ui(){
    let [date,setDate] = useState("");
    let [desc,setDesc] = useState("");
    let [clicked,setClicked]=useState(0);
    function addDate(item){
        if(item.key=='Enter')
        setDate(item.target.value);
    }
    function addDesc(item){
        if(item.key=='Enter')
        setDesc(item.target.value);
    }
    function Add(){
        if(date && desc)
            setClicked(1);
    }
    return(
 
    <div className="flex items-center justify-center h-screen flex-col ">
    <h1 className="text-3xl font-bold mb-2">To-Do App</h1> 
        <div className="flex justify-between ">
            <input className="border border-2 mx-2 px-1 border-black" type="text" 
            onKeyDown={(e)=>addDesc(e)}/>
            
            <input className="border border-2 border-black"
             type="date" 
             onKeyDown={(e)=>addDate(e)}/>
            
            <button className=" bg-green-500 mx-2 py-2 px-4 rounded-md" onClick={Add}>
            Add
            </button>
        </div>
        {clicked? <Items dt={date} description={desc} click={setClicked}/>:null}
    </div>    
    );
}
export default Ui;
