import { createContext, useContext, useMemo, useState } from "react"

export const  ThemeOptions = {
    black:'current theme is black',
    white:'current theme is white'
}

const ThemeContext = createContext(null)

const ThemeContextProvider = ({children}) => {
    const [dark,setdark] = useState(true)

    const contextValue = useMemo(() => {
        return {
            theme:dark ? 'black' : 'white',
            toggle:() => setdark((prev) => !prev)
        }
    })

    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export const useThemeContext = () => {
    const contextValue = useContext(ThemeContext)
    if(!contextValue) throw new Error('erro')
        return contextValue
}

export default ThemeContextProvider