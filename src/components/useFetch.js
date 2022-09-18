import { useEffect, useState } from "react";
const useFetch = (request) => {
    
    let [data, setData] = useState( null );
    let [pending, setPending]=useState(true);
    let [error, setError]=useState(null);
   
 useEffect( ()=>{
        setTimeout( ()=>{
            
        fetch(request)
        .then((response)=>{
            
            if(response.ok===false)
            {
                throw Error("data not found , Please try for different resourse")
            }
        return (response.json());})
        .then((data)=>{setData(data); setPending(false);})
       
          .catch((error)=>{setError(error.message);setPending(false);})
        }, 500)
    
    } ,[]);
    return{data,pending,error}
} 
export default useFetch;