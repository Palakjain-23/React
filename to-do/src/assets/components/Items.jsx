const Items=({ dt, description,click })=>{
    function delItem(){
        click(0);
    }
    return(
        
        <div className="flex justify-between px-4 w-1/3 mt-4"> 
            <div className="text-xl">{description}</div>
            <div className="text-xl">{dt}</div>
            <div>
                <button className="text-xl px-2 py-2 rounded-md bg-blue-400"
                onClick={delItem}>
                Delete</button>
            </div>
        </div>
    );
}
export default Items;
