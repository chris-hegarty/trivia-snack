import React, { useState, createContext, useCallback } from 'react'

export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        const [correct, setCorrect] = useState(null);
        const [incorrect, setIncorrect] = useState(null);

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
        
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