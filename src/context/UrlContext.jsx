import React, { useState, createContext } from 'react'
export const UrlContext = createContext(null)

export function UrlProvider(props) {
    const [url, setUrl] = useState()
    // const [param, setParam] = useState([])

    return (
        <UrlContext.Provider value={{ url, setUrl }}>

            {props.children}

        </UrlContext.Provider>
    )
}