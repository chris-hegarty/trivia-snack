import React, { useState, createContext } from 'react'

export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        const [correct, setCorrect] = useState();

        // console.log(answers[0]);
    return <CardContext.Provider value={{    
            question, 
            setQuestion, 
            answers, 
            setAnswers,
            correct,
            setCorrect
        }}>

        {props.children}

    </CardContext.Provider>

}