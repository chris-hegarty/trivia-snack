import React, {useContext, useState} from 'react'
import { CategoryContext } from "../context/CategoryContext";

function Category() {
const {selected,setSelected} = useContext(CategoryContext)
//trying to have only one checkbox checked at a time???
const [checked, setChecked] = useState()

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
    </section>
  )
}

export default Category