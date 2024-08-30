
import { Link, Outlet } from "react-router-dom"
import { useThemeContext } from "../contexts/ThemeContext"


const Header = () => {
    const {theme,toggle} = useThemeContext()
    
    return (
        <header>
            <button onClick={toggle} >current theme is {theme}</button>
            <Link to={'/'}>main</Link>
            <Link to={'/create'}>create</Link>

            <Outlet/>
        </header>
    )
}

export default Header