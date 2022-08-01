import React, { useState, createContext } from 'react'
export const CategoryContext = createContext(null)

export function CategoryProvider(props) {
    const [selected, setSelected] = useState("default"  )

    return (
        <CategoryContext.Provider value={{ selected, setSelected }}>

            {props.children}

        </CategoryContext.Provider>
    )
}






//Follow pattern from Presets.
//Make a category context.
//Pass category state from UseContext.
//setCategory on checkbox.
