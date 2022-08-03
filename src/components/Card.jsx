import React, { useContext, useEffect, useCallback, useMemo } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { CardContext } from "../context/CardContext";

function Card(props) {
    const { answers, question } = useContext(CardContext);

    const { selected } = useContext(CategoryContext);

    const choices = useMemo(() => {
        const toShuffle = [...answers];
        for (let i = toShuffle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [toShuffle[i], toShuffle[j]] = [toShuffle[j], toShuffle[i]];
        }
        return toShuffle;
    }, [answers]);
    return (
        question &&
        selected &&
        answers && (
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
                        <button className="rounded bg-[#daa520] py-1 px-6">
                            Submit Answer
                        </button>
                    </div>
                </section>
            </>
        )
    );
}

export default Card;