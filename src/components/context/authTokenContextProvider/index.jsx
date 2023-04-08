import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";
export const AuthTokenContext = createContext({})

export default function AuthTokenContextProvider (props) {
    const [token, setToken] = useState(null)
    const localStorageToken = localStorage.getItem("token")
    const {userState} = useSelector((state)=>state)
    const api = useApi();

    if(token === null && localStorageToken !== null){
        setToken(localStorageToken);
    } else {
        localStorage.setItem("token", token)
    }
    const authTokenContextValue = {
        token, setToken,
    };

    if(token !== null && userState.userData === null){
        api
            .get("user/appData")
            .then((res)=>{
                console.log(res);

            })
            .catch((err)=>{
                console.log(err);
            });
    }

    
    return(
        <AuthTokenContext.Provider value={authTokenContextValue}>
            {props.children}
        </AuthTokenContext.Provider>
    )
}