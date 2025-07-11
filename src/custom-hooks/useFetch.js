import { useCallback, useEffect, useState } from "react";
import { apiCall } from "../APICalls/APICall";

export default function useFetch(initialData, url, config,skip=false) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const fetchCall = useCallback(async () => await apiCall(url, config), [url, config]);

    useEffect(() => {
        if(skip){
            return;
        }
        async function fetchData(){
            try {
                setIsLoading(true);
                //api call
                const response = await fetchCall();
                setData(response);
            }
            catch (error) {
                setError({ message: error.message || "Failed to fetch data" })
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [fetchCall,skip]);

    return {
        data,
        isLoading,
        error,
        fetchCall
    }
}