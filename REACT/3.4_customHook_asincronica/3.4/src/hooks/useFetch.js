import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = url => {
const [response, setResponse] = useState()

useEffect(()=>{
    axios.get(url)
        .then(res=>setResponse(res.data))
        .catch()
}, [])
    return response
  
}

export default useFetch