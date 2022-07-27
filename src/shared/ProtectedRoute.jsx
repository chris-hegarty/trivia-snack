import React, {useContext, useMemo} from 'react'
import { Navigate } from 'react-router-dom'
import { PlayerContext } from "../context/PlayerContext";

function ProtectedRoute({requiresLogin, component}) {
    
    const{loggedInPlayer} = useContext(PlayerContext)
  
    const authorized = useMemo(
        () => { 
            return (requiresLogin && loggedInPlayer) || 
            (!requiresLogin && !loggedInPlayer)
        }, [requiresLogin, loggedInPlayer]
    )

    const redirect = useMemo(
        () => (requiresLogin ? "/login" : "/game"), [requiresLogin]
    )
  
    return (
        <>
            {authorized && <>{component}</>}
            {!authorized && <Navigate to={redirect}/>}
        </>
  )
}

export default ProtectedRoute