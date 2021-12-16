import { createContext } from "react";
import { useState } from "react";
export const AutheContext= createContext()
export const AutheContextprovider=({children})=>{
    const [token,setToken] = useState(JSON.parse((localStorage.getItem('token')))|| "")
    const _token=JSON.parse((localStorage.getItem('token')))
    const change=(value)=>{
        setToken(value)
    }
    return <>

    <AutheContext.Provider value={{'state':token,'t':_token,'f':change}}>{children}</AutheContext.Provider>

    </>
}