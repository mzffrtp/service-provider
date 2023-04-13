import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    theme:"light",
    setTheme:() => {}
})

export default function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme ((prevTheme)=> prevTheme === "light" ? "dark" : "light");
    };

    return(
        <ThemeContext.Provider value = {{theme, setTheme:toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}