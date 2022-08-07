/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext, useMemo } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { CardContext } from "../context/CardContext";

function Card(props) {
    // ***Here, answers and question were set with the API call in "Categories":
    const { answers, question, addPieToWheel} = useContext(CardContext);
    const { selected  } = useContext(CategoryContext);
    
    //***Anytime "answers" array is updated
    // **Use [...answers] to put each element in a variable called toShuffle */
    //**run the variable through the shuffling code and return it
    //*** memoize the saved value in a variable called choices
    const choices = useMemo(() => {
        const toShuffle = [...answers];
        for (let i = toShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
        }
        return toShuffle;
    }, [answers]);
    console.log(answers[0]);
    // **Now that you have question, selected and answers set, return the div:
        // **Map over EACH choice in the new choices array
        // **and output a list item  containing a button 
    return (
        question &&
        selected &&
        answers && 
        (
        <>
        <section id="game-card" className="show-card flex column center basis-66">
            <div className="outerCard">
                        <div className="cat-label"><p>{selected}</p></div>  
                  <h2 className="py-6">{question}</h2>
                    <ul>
        {/* //** For each choice in choices, which is set to "c"
        //** output each choice in a list item.
        //** The API is returning the correct answer 
        // **as the first element of an answers array, so it is answers[0].
        //**so check it in the if statement.
        // **if c === answers[0], trigger what you  need to with a correct answer.               */}
                        {choices.map((c, idx) => (
                            <li className="py-2 my-2 bg-amber-400   hover:bg-violet-600 rounded-xl" key={idx}>
                                <button
                                    className="px-4 text-black hover:text-white font-semibold"
                                    onClick={() => {
                                        if (c === answers[0]) {
                                            console.log("Correct!");
                                            addPieToWheel(selected)
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
                    <div className="flex center">

                    </div>
                    </div>

        </section>
        </>
        )
    );
}

export default Card;