import React, {useContext, useState, useEffect} from 'react'
import { CategoryContext } from "../context/CategoryContext";
import {UrlContext} from "../context/UrlContext"
import Question from "../components/Question"
import useAxios from "../hooks/useAxios";


function Category() {
const {selected, setSelected} = useContext(CategoryContext)
const {url, setUrl} = useContext(UrlContext)
const{ data:card } = useAxios(url)
    useEffect(() => {
        if (card) {
            setSelected(card);
        }
    }, [card, setSelected]);

  return (
    // <section id="category-container flex">
        <>
        <div>
        <label htmlFor="category-dropdown">Select a Category:</label>
        <select
            value={selected}
            onChange={(e) => {
                setSelected(e.target.value)
            }}
            name="categories"
            id="category-dropdown"
              className="px-2 py-1 mx-6 rounded"
        >
            <option value="default">-Select-</option>
            <option value="geography">Geography</option>
            <option value="film_and_tv">Entertainment</option>
            <option value="history">History</option>
            <option value="arts_and_literature">Art & Literature</option>
            <option value="science">Science & Nature</option>
            <option value="sport_and_leisure">Sports and Leisure</option>
        </select>
        </div>
       
        <div className="input-container px-4 py-8 flex center">
            <button 
                className="rounded bg-[#daa520] py-1 px-6"
                onClick={(e)=>{
                e.preventDefault( )
                setUrl(`&categories=${selected}`)
            }}>
                Get Question
            </button>
        </div>
      </>
    // </section>
  )
}

export default Category