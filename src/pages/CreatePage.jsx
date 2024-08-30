import { useNavigate } from 'react-router-dom';
import Users from '../components/Users';
import useRequest from '../hooks/useRequest';
import { ThemeOptions, useThemeContext } from "../contexts/ThemeContext";

const CreatePage = () => {
  const {theme} = useThemeContext()
    const {loading,sendRequest} = useRequest({url:'/api/v1/users',method:'POST'})
    const navigate = useNavigate()

    const onsubmit = (first,last) => {
      sendRequest([{first,last}])
      .then(() => navigate('/'))
      .catch(err => console.log(err))
    }

    if(loading) return <p>...loading</p>
    return (
        <div>
          <Users forpost={onsubmit}/>
          <p>{ThemeOptions[theme]}</p>
        </div>
    )
}

export default CreatePage