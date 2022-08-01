import React, { useContext } from "react"
import { PresetsContext } from "../context/PresetsContext"
// import useAxios from "../hooks/useAxios";

export function Presets(props) {

const { difficulty, setDifficulty } = useContext(PresetsContext)
  return (
    <>
    <label htmlFor="difficulty-level">Level of Difficulty</label>
        <select 
            value={difficulty}
            onChange={(e)=>{
                setDifficulty(e.target.value)
            }}
            name="difficulty" 
            id="difficulty-level"
        >
            <option value="easy">EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">DIFFICULT</option>
        </select>
    
    </>
  )
}






//select region

//select difficulty level