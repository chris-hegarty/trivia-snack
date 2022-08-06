import React, { useState, createContext} from 'react'

export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        // const [correct, setCorrect] = useState();
        // const[correctAnswer, setCorrectAnswer] = useState();
        const[winList, setWinList] = useState({
            geography: false,
            film_and_tv: false,
            history: false,
            arts_and_literature: false,
            science: false,
            sport_and_leisure: false
        });
    
        function addPieToWheel(selected) {
        setWinList((curr)=>{
            let updated = { ...curr };
            updated[selected] = true;
            return updated;
        })
    }

    return <CardContext.Provider value={{    
            question, 
            setQuestion, 
            answers, 
            setAnswers,
            // correct,
            // setCorrect,
            // correctAnswer,
            // setCorrectAnswer,
            winList,
            setWinList,
            addPieToWheel
        }}>

        {props.children}

    </CardContext.Provider>

}