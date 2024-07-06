const Button=({buttonClicked})=>{
    const buttonName = ['C', '%', 'X', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '00', '0', '.', '='];
  // '÷'
  return (
        <div className="flex flex-wrap justify-center">
        { buttonName.map((buttonName)=> <button className="border border-black w-10 h-8 mx-2 mt-2 font-semibold text-xl bg-slate-300"
        onClick={()=>buttonClicked(buttonName)} key={buttonName}>
        {buttonName}
        </button>)}
        </div>
  );
}
export default Button;
