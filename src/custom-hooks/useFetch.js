import { useCallback, useEffect, useState } from "react";
import { apiCall } from "../APICalls/APICall";

export default function useFetch(initialData,url,config){
    const [data,setData]=useState(initialData);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState();

    const fetchCall=useCallback(async()=>apiCall(url,config),[url,config]);

    useEffect(async ()=>{
        try{
            setIsLoading(true);
            //api call
            const response=await fetchCall();
            setData(response.data);
        }
        catch(error){
            setError({message:error.message||"Failed to fetch data"})
        }
        finally{
            setIsLoading(false);
        }
    },[fetchCall]);

    return {
        data,
        isLoading,
        error,
        fetchCall
    }
}