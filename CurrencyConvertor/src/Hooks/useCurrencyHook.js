import {useEffect} from "react";
function useCurrencyHook(currency){
    const [data,setData]=useSate({});
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
   },[currency]);
   
   return data;
}
export default useCurrencyHook;
