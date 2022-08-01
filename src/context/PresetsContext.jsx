import React, { useState, createContext, useCallback} from 'react'
export const PresetsContext = createContext(null)

export function PresetsProvider (props) {
    const [difficulty, setDifficulty] = useState()

    const level = useCallback(
        (difficulty) => {
            setDifficulty(difficulty)
        },
        [setDifficulty]
    )

    return(
     <PresetsContext.Provider value={{level, difficulty, setDifficulty}}>

        {props.children}

    </PresetsContext.Provider>
    )
}

