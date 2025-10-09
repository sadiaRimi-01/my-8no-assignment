import axios from "axios"
import { useEffect, useState } from "react"

const useAllApps =()=>{
    
    const [appCards,setAppCards] =useState([])
    const [loading,setLoading] =useState(true)
    const [error,setError] =useState(null)
     useEffect(() => {
    setLoading(true);

    axios.get('/data.json')
      .then(res => {
        
        setTimeout(() => {
          setAppCards(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

    return{appCards,loading,error}
}



export default useAllApps