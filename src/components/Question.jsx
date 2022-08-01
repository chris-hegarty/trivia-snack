import React, { useContext, useState, useEffect } from 'react'
import { CategoryContext } from "../context/CategoryContext";
import { UrlContext } from '../context/UrlContext';
import useAxios from "../hooks/useAxios";



function Question() {
    const {setSelected} = useContext(CategoryContext)
    const { url } = useContext(UrlContext)
    const {data:card} = useAxios(url)
    console.log(card);

    useEffect( () => {
        if(card) {
            setSelected(card)
        }
    }, [card, setSelected])

  return (
    <section className="question-card">
        {/* Not able to use card object here? */}
        <h3>{}</h3>
        <ul>
            <li className="choice">{}</li>
            <li className="choice">{}</li>
              <li className="choice">{}</li>
              <li className="choice">{}</li>
        </ul>
        <div>
            <button>Submit Answer</button>
        </div>


    </section>
  )
}

export default Question