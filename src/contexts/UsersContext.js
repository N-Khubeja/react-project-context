import { createContext, useCallback, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const UsersContext = createContext(null)

const UsersContextProvider = ({children}) => {
    const {response,loading:dataLoading,resendRequest} = useFetch({url:'/api/v1/users',method:'GET'})
    const {sendRequest,loading:deleteLoading} = useRequest({method:'DELETE'})

    const userList = useMemo(() => {
      return  response?.items.map(item => {
            return {
                    firstname:item.first,
                    lastname:item.last,
                    id:item._uuid
                    }
            }) || []
    },[response])
        
    const ondelete  = useCallback((userid) => {
        sendRequest(null,`/api/v1/users/${userid}`)
        .then(() => resendRequest())
        
    }, [resendRequest])

    const contextValue = useMemo(() => {
        return {
            dataLoading,
            deleteLoading,
            userList,
            ondelete
        }
    },[dataLoading,deleteLoading,userList,ondelete])


    return <UsersContext.Provider value={contextValue}>
        {children}
    </UsersContext.Provider>
}

export const useUsersContext = () => {
    const contextValue = useContext(UsersContext)
    if(!contextValue) throw new Error('eeerror')
    return contextValue
}

export default UsersContextProvider