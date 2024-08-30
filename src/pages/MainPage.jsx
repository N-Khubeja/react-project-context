import { Link } from "react-router-dom"
import { useUsersContext } from "../contexts/UsersContext"
import { ThemeOptions, useThemeContext } from "../contexts/ThemeContext"


const MainPage = () => {
    const {theme} = useThemeContext()
    const { dataLoading,deleteLoading,userList,ondelete} = useUsersContext()

    if(dataLoading || deleteLoading) return <p>... loading</p>

    return (
        <div className="App">
        {userList.map((user) => 
            <div className='card' key={user.id}>
              <h2>{user.firstname}</h2>
              <h2>{user.lastname}</h2>
              <Link to={`/update/${user.id}`}>edit</Link>
              <button onClick={() => ondelete(user.id)}>delete</button>
            </div>
            
        )}
        <p>{ThemeOptions[theme]}</p>
        </div>
    )
}

export default MainPage