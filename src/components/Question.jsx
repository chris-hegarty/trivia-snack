import React, { useContext, useState, useEffect } from 'react'
import { CategoryContext } from "../context/CategoryContext";
import { UrlContext } from '../context/UrlContext';
import useAxios from "../hooks/useAxios";



function Question() {
    const {setSelected} = useContext(CategoryContext)
    const { url } = useContext(UrlContext)
    const {data:card} = useAxios(url)
    // console.log(card);

    useEffect( () => {
        if(card) {
            setSelected(card)
        }
    }, [card, setSelected])

  return (
    <section className="question-card">
        {/* Not able to use card object here? */}
        <h2>Which of these cities is in France?</h2>
        <ul>
            <li className="choice">Barcelona</li>
            <li className="choice">Copenhagen</li>
              <li className="choice">Toulouse</li>
              <li className="choice">Amsterdam</li>
        </ul>
        <div>
              <button className="rounded bg-[#daa520] py-2 px-6">Submit Answer</button>
        </div>


    </section>
  )
}

export default Question