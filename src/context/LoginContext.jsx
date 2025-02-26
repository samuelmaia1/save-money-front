import { useEffect, useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext()

export const LoginContextProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState()
    const [user, setUser] = useState(null)

    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        // const login = async () => {
        //     const response = await fetch(apiUrl + "/users/login", {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify({userName: 'maia', password: '123'})
        //     })
        //     const data = await response.json()

        //     console.log(data)

        //     if (data !== null){
        //         setUser(data)
        //         setIsLogged(true)
        //     }
        // }

        // login()
    },[])


    return (
        <LoginContext.Provider value={{isLogged, user}}>
            {children}
        </LoginContext.Provider>
    )
}