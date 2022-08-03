import React, { useContext, useEffect, useCallback} from 'react'
// import { CategoryContext } from "../context/CategoryContext";
import { UrlContext } from '../context/UrlContext';
import { CardContext } from '../context/CardContext';
import useAxios from "../hooks/useAxios";

function Card(props) {
    // const { setSelected } = useContext(CategoryContext)
    const { url } = useContext(UrlContext)
    const { answers, setAnswers } = useContext(CardContext)
    // const { setSelected } = useContext(CategoryContext)
    const { data: card } = useAxios(url)
    console.log(card);

            return (
            (card &&
                <>
                <section className="show-card">
                    <h2>{card.question}</h2>
                    <ul>

                    </ul>
                    <div className="flex center">
                        <button className="rounded bg-[#daa520] py-1 px-6">Submit Answer</button>
                    </div>
                </section>
            </>
            )
        )
    }

export default Card