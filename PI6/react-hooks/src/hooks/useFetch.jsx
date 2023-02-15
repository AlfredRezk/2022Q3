import { useEffect, useState } from "react";

const useFetch = (url, options)=>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchData = async()=>{
            try{
                const res= await fetch(url, options);
                const data = await res.json();
                setData(data);
                setLoading(false);
                console.log(data);
            }
            catch(err){
                setError(err);
                setLoading(false)
            }
        }

        fetchData();

    }, [])

    return [data, loading, error];
}


export default useFetch;