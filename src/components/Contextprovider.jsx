import { createContext } from "react";
import { useState } from "react";
export const AutheContext= createContext()
export const AutheContextprovider=({children})=>{
    const [token,setToken] = useState("")
    const change=(value)=>{
        setToken(value)
    }
    return <>

    <AutheContext.Provider value={{'state':token,'f':change}}>{children}</AutheContext.Provider>

    </>
}