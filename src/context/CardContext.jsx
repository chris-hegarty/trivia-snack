import React, { useState, createContext, useCallback } from 'react'
export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        const [correct, setCorrect] = useState(null);
        const [incorrect, setIncorrect] = useState(null);

        
    return <CardContext.Provider value={{ 
        
        question, 
        setQuestion, 
        answers, 
        setAnswers,
        correct, 
        setCorrect,
        incorrect, 
        setIncorrect  
        
        }}>

        {props.children}

    </CardContext.Provider>

}