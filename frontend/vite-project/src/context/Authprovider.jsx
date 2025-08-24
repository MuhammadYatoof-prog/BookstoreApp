import React,{createContext,useState,useContext} from 'react'
export const Authcontext=createContext()
export default function Authprovider({children}) {
  
    const initialAuthuser=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
    const [authuser,setAuthuser]=React.useState(initialAuthuser)
    return (
    <Authcontext.Provider value={[authuser,setAuthuser]}>
        {children}
    </Authcontext.Provider>
    )
}
export const useAuth=()=>{
    return React.useContext(Authcontext)
}