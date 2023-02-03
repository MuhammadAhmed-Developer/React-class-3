import React, {createContext, useState} from 'react'

export const AuthContext = createContext()
const initialState = " user"

export default function AuthContextprovider(props) {

    const [myName, setmyName] = useState(initialState)
  
    return (
    <AuthContext.Provider value={{myName, setmyName}}>
        {props.children}
    </AuthContext.Provider>
  )
}
