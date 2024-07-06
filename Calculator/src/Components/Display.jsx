function Display({displayVal}){
    return(
        <input type="text"
        value={displayVal}
        className="border border-black p-1 m-1"
        readOnly   
        />
    );
}
export default Display;
