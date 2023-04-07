import { createContext, useState } from "react";

export const AuthTokenContext = createContext({})

export default function AuthTokenContextProvider (props) {
    const [token, setToken] = useState(null)
    const localStorageToken = localStorage.getItem("token")

    if(token === null && localStorageToken !== null){
        setToken(localStorageToken);
    } else {
        localStorage.setItem("token", token)
    }
    const authTokenContextValue = {
        token, setToken,
    };

    
    return(
        <AuthTokenContext.Provider value={authTokenContextValue}>
            {props.children}
        </AuthTokenContext.Provider>
    )
}