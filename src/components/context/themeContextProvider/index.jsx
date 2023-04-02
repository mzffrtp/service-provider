import { createContext } from "react";

export const ThemeContext = createContext({})

export default function ThemeContextProvider(props) {
    const themeContextValue ={
        // todo handle later
    };

    return(
        <ThemeContext.Provider value = {themeContextValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}