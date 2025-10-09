import axios from "axios"
import { useEffect, useState } from "react"

const useAllApps =()=>{
    
    const [appCards,setAppCards] =useState([])
    const [loading,setLoading] =useState(true)
    const [error,setError] =useState(null)
    
    useEffect(()=>{
        setLoading(true)
        axios.get('../data.json').then(data=>setAppCards(data.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    }, []
    )
    return{appCards,loading,error}
}



export default useAllApps