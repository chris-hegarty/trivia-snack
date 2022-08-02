import React, { useContext, useState} from 'react'
// import { CategoryContext } from "../context/CategoryContext";
import { UrlContext } from '../context/UrlContext';
import { CardContext } from '../context/CardContext';
import useAxios from "../hooks/useAxios";

function Card(props) {
    // const { setSelected } = useContext(CategoryContext)
    const { url } = useContext(UrlContext)
    const { answers, setAnswers } = useContext(CardContext)
    const { data: card } = useAxios(url)


        const answerList = (card) => {
        [card.correctAnswer, card.incorrectAnswers[0], card.incorrectAnswers[1], card.incorrectAnswers[2]] = answers
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        shuffleArray(answers)
    }

    setAnswers(answerList)

    console.log(answers);

        return (
            (card &&
                <section className="show-card">
                    <ul>
                        <li>A</li>
                        <li>A</li>
                        <li>A</li>
                        <li>A</li>
                    </ul>
                    <div className="flex center">
                        <button className="rounded bg-[#daa520] py-1 px-6">Submit Answer</button>
                    </div>
                </section>
            )
        )
    }




export default Card