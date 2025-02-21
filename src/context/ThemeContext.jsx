import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {return localStorage.getItem('theme') || 'light'})

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => {return prev === 'light' ? 'dark' : 'light'})
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}