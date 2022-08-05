import React, { useState, createContext, useMemo } from 'react'

export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        const [correct, setCorrect] = useState();
        const[correctAnswer, setCorrectAnswer] = useState();
        const[winList, setWinList] = useState([]);


        const list = useMemo(()=>{
            setWinList(  
            {
                geography: false,
                film_and_tv: false,
                history: false,
                arts_and_literature: false,
                science: false,
                sport_and_leisure: false
            }
            )
        },[setWinList]
        )
    // console.log(winList.geography);
        // setWinList( (curr) => [...curr, correctAnswer])

    return <CardContext.Provider value={{    
            question, 
            setQuestion, 
            answers, 
            setAnswers,
            correct,
            setCorrect,
            correctAnswer,
            setCorrectAnswer,
            winList,
            setWinList,

        }}>

        {props.children}

    </CardContext.Provider>

}