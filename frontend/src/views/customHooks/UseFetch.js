import React, { useEffect, useState } from 'react'

const UseFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await fetch(url);
                const result =await response.json();
                if (Array.isArray(result)) {
                    setData(result); // ✅ Ensure it's an array before setting state
                } else {
                    console.error("Unexpected data format:", result);
                }
            }
            catch(error){
                console.error('Error:', error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[url])

  return {data, loading}
}

export default UseFetch