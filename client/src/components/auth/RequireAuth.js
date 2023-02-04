import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const RequireAuth = (props) => {

    const auth = props.auth
    const navigate = useNavigate();

    useEffect(() => {

        if(!auth){
            navigate("/login")
        }

    }, [])

  
  return props.children
}

export default RequireAuth