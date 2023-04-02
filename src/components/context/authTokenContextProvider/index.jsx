import { createContext, useState } from "react";

export const AuthTokenContext = createContext({})

export default function AuthTokenContextProvider (props) {
    const [token, setToken] = useState(null)
    const authTokenContextValue = {
        token, setToken,
    };

    return(
        <AuthTokenContext.Provider value={authTokenContextValue}>
            {props.children}
        </AuthTokenContext.Provider>
    )
}