export const apiCall =async (url,config)=>{
    const response=await fetch(url,config);
    if(!response.ok){
        throw new Error(response);
    }
    const data=await response.json()
    return data;
}