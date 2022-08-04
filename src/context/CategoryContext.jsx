import React, { useState, createContext } from 'react'
export const CategoryContext = createContext(null)

export function CategoryProvider(props) {
    const [selected, setSelected] = useState("default")

    //map selected values to color codes.
    //switch case statement?

    return (
        <CategoryContext.Provider value={{ selected, setSelected }}>

            {props.children}

        </CategoryContext.Provider>
    )
}

