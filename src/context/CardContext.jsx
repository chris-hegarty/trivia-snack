import React, { useState, createContext } from 'react'

export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        const [correct, setCorrect] = useState();
        const[correctAnswer, setCorrectAnswer] = useState();
        const[winList, setWinList] = useState([]);

        console.log(correctAnswer)

        const correctPicks = useMemo(
            setWinList(
                {
                    geography: false,
                    film_and_tv: false,
                    history: false,
                    arts_and_literature: true,
                    science: false,
                    sport_and_leisure: false

                }
            ), []
        )


        // setWinList( (curr) => [...curr, correctAnswer])



        console.log(winList);


    return <CardContext.Provider value={{    
            question, 
            setQuestion, 
            answers, 
            setAnswers,
            correct,
            setCorrect,
            correctAnswer,
            setCorrectAnswer,
            addToWinsList
        }}>

        {props.children}

    </CardContext.Provider>

}