import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {PlayerContext} from "../context/PlayerContext"

function Menu() {

    const{loggedInPlayer, logout} = useContext(PlayerContext)

  return (
    <>
    <nav>
        <ul>
            { !loggedInPlayer && (
                <>
                    <li>
                        <NavLink to={"/register"}>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/login"}>Login</NavLink>
                    </li>
                </>
                )
            }
            { loggedInPlayer && (
                <>
                    <li>
                        <NavLink to={"/game"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink 
                            onClick={() => {
                                logout()
                            }}
                            to={"/logout"}>
                            Logout
                        </NavLink>
                    </li>
                </>
                )   
            }
        </ul>
    </nav>
    </>
  )
}

export default Menu