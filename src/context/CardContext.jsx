import React, { useState, createContext, useContext} from 'react'
import { CategoryContext } from "../context/CategoryContext";

export const CardContext = createContext(null)

export function CardProvider(props) {

        const [question, setQuestion] = useState(null);
        const [answers, setAnswers] = useState([]);
        const [correct, setCorrect] = useState();
        const[correctAnswer, setCorrectAnswer] = useState();
        const {selected, setSelected } = useContext(CategoryContext);
        const[winList, setWinList] = useState({
            geography: false,
            film_and_tv: false,
            history: false,
            arts_and_literature: false,
            science: false,
            sport_and_leisure: false
        });

       console.log(winList);
        console.log(selected);

        function add(selected){
            winList.map((category, index) => { 
                //for each winList 
                return(
                winList[index] === selected ? 
                    winList[category] = true : winList[category] = false)
                })
            }
            // if selected === winList[idx]
        

        // if selected === winList[idx]
          
       //get the object keys.
       //get value of selected.
       //loop over the object keys.
       //check if each object key matches selected.
       //sounds like .filter method.
       //if they match
       //set the key's value to true
       console.log(selected);

    // console.log(winList.geography);
        // setWinList( (curr) => [...curr, correctAnswer])
        // data[5].color = "#dfdfdf";

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
            add


        }}>

        {props.children}

    </CardContext.Provider>

}