import { createContext } from "react";
import { useState } from "react";
export const AutheContext= createContext()
export const AutheContextprovider=({children})=>{
    const [token,setToken] = useState(JSON.parse((localStorage.getItem('token')))|| "")
    const [audio,setaudio]= useState({})
    const _token=JSON.parse((localStorage.getItem('token')))
    const change=(value)=>{
        setToken(value)
    }

    const audiochange=(value)=>{
        setaudio(value)
    }
    return <>

    <AutheContext.Provider value={{'state':token,'t':_token,'f':change,'audio':audio,'setaudio':audiochange}}>{children}</AutheContext.Provider>

    </>
}