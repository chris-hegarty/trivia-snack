import React, {useContext, useState, useEffect} from 'react'
import { CategoryContext } from "../context/CategoryContext";
import useAxios from "../hooks/useAxios";


function Category() {
const {selected, setSelected} = useContext(CategoryContext)
const [url, setUrl] = useState(null)
const{ data:card } = useAxios(url)

    useEffect(() => {
        if (card) {
            setSelected(card);
        }
    }, [card, setSelected]);

  return (
    <section id="category-container flex column">
        <div className="input-container">
            <input
                  value={"geography"}
            onClick={(e)=>{
                setSelected(e.target.value)
            }}
            type="checkbox"
            name="categories"
            id="geography"

            />
            <label htmlFor="geography">Geography</label>
        </div>

        <div className="input-container">
            <input
                  value={"film_and_tv"}
            onClick={(e)=>{
                setSelected(e.target.value)

            }}
            type="checkbox"
            name="categories"
            id="film_and_tv" 

            />
            <label htmlFor="film_and_tv">Entertainment</label>
        </div>

        <div className="input-container">
            <input
                  value={"history"}
            onClick={(e)=>{
                setSelected(e.target.value)
                
            }}
            type="checkbox"
            name="categories"
            id="history"

            />
            <label htmlFor="history">History</label>
        </div>

        <div className="input-container">
            <input
                  value={"arts_and_literature"}
            onClick={(e)=>{
                setSelected(e.target.value, e.target.checked)
            }}
            type="checkbox"
            name="categories"
            id="arts_and_literature"

            />
            <label htmlFor="arts_and_literature">Art & Literature</label>
        </div>

        <div className="input-container">
            <input
                  value={"science"}
            onClick={(e)=>{
                setSelected(e.target.value)
                console.log(e.target.value);
            }}
            type="checkbox"
            name="categories"
            id="science" 

            />
            <label htmlFor="science">Science & Nature</label>
        </div>

        <div className="input-container">
            <input
                  value={"sport_and_leisure"}
            onClick={(e)=>{
                setSelected(e.target.value)
            }}
            type="checkbox"
            name="categories"
            id="sport_and_leisure" 

            />
              <label htmlFor="sport_and_leisure">Sports & Leisure</label>
        </div>
        <div className="input-container">
            <button onClick={(e)=>{
                setUrl(`&categories=${selected}`)
                  console.log(selected);
            }}>
                GET QUESTION
            </button>
        </div>
    </section>
  )
}

export default Category