import React, { useContext, useMemo } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { CardContext } from "../context/CardContext";

function Card(props) {
    // ***Here, answers and question were set with the API call in "Categories":
    const { answers, question, setCorrect } = useContext(CardContext);
    const { selected  } = useContext(CategoryContext);
    //***Anytime "answers" array is updated
    // Put the current value in a variable */
    //run the variable through the shuffling code and return it
    //wrap that new value in a variable called choices
    const choices = useMemo(() => {
        const toShuffle = [...answers];
        for (let i = toShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
        }
        return toShuffle;
    }, [answers]);
    // Now that you have question, selected and answers set, return the div:
        // Map over EACH choice in the new choices array
        // and output a list item  containing a button 
    return (
        question &&
        selected &&
        answers && 
        (
            <>
                <section className="show-card">
                    <h2>{question}</h2>
                    <ul>
                        {choices.map((c, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => {
                                        if (c === answers[0]) {
                                            console.log("Correct!");
                                            setCorrect(true)
                                        } else {
                                            console.log("Wrong!");
                                        }
                                    }}
                                    
                                >
                                    {c}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="flex center">
                        <button className="rounded bg-[#daa520] py-1 px-6">
                            Submit Answer
                        </button>
                    </div> */}
                </section>
            </>
        )
    );
}

export default Card;