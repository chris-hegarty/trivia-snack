import React, { useState, createContext} from 'react'
export const PresetsContext = createContext(null)

export function PresetsProvider (props) {
    const [difficulty, setDifficulty] = useState()
    // const [param, setParam] = useState([])

    return(
     <PresetsContext.Provider value={{difficulty, setDifficulty}}>

        {props.children}

    </PresetsContext.Provider>
    )
}

