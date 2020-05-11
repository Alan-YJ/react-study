import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useURLLoader = (url:string,deps:any[] = [])=>{
    const [ loading, setLoading ] = useState(false)
    const [ result , setResult ] = useState<any>(null)
    useEffect(()=>{
        setLoading(true)
        axios.get(url).then(res=>{
            setLoading(false)
            setResult(res.data)
        })
    },deps)
    return [loading,result]
}

export default useURLLoader