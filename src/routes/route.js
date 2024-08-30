import Header from "../components/Header"
import ThemeContextProvider from "../contexts/ThemeContext"
import UsersContextProvider from "../contexts/UsersContext"
import CreatePage from "../pages/CreatePage"
import MainPage from "../pages/MainPage"
import UpdatePage from "../pages/UpdatePage"

const routes =  [
    {
        element:(
           <div>
             <ThemeContextProvider>
                <Header/>
            </ThemeContextProvider>
           </div>
        ),
        path:'/',
        children:[
            {
                element:(
                    <div>
                        <UsersContextProvider>
                            <MainPage/>
                        </UsersContextProvider>
                    </div>
                ),
                index:true
            },
            {
                element:<CreatePage/>,
                path:'/create'
            },
            {
                element:<UpdatePage/>,
                path:`/update/:userid`
            }
        ]
    }
]

export default routes