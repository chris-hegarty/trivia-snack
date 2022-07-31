import React, {useContext, useState} from 'react'
import { CategoryContext } from "../context/CategoryContext";
// import { UrlContext } from "../context/UrlContext";
import useAxios from "../hooks/useAxios";


function Category() {
const {selected,setSelected} = useContext(CategoryContext)
//trying to have only one checkbox checked at a time???
const [url, setUrl] = useState()
const{ data, error } = useAxios(url)

  return (
    <section id="category-container flex column">
        <div className="input-container">
            <input
            value={selected}
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
            value={selected}
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
            value={selected}
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
            value={selected}
            onClick={(e)=>{
                setSelected(e.target.value, e.target.checked)
                console.log(e.target.value);
            }}
            type="checkbox"
            name="categories"
            id="arts_and_literature"

            />
            <label htmlFor="arts_and_literature">Art & Literature</label>
        </div>

        <div className="input-container">
            <input
            value={selected}
            onClick={(e)=>{
                setSelected(e.target.value, e.target.checked)
                console.log(e.target.checked);
            }}
            type="checkbox"
            name="categories"
            id="science" 

            />
            <label htmlFor="science">Science & Nature</label>
        </div>

        <div className="input-container">
            <input
            value={selected}
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
            }}>
                GET QUESTION
            </button>
        </div>
    </section>
  )
}

export default Category