import{useState, useEffect, useContext } from "react"
import { PresetsContext } from "../context/PresetsContext"
import axios from "axios";

const baseUrl = "https://the-trivia-api.com/api/questions/?limit=1&region=US"

//Get the difficulty value and store it here?

function useAxios(url) {
  const { difficulty } = useContext(PresetsContext);
  const diffParam = (`&difficulty=${difficulty}`)
  const[data, setData] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
      setData(null)
      setError(null)
      async function init(){
        try {
            const response = await axios.get(baseUrl + diffParam + url);
            const card = response.map((val) => ({
                question: val[0].question,
                correct: val[0].correctAnswer,
                incorrect: val[0].incorrectAnswers,
              })
            )
            setData(card)
            // name response object and map over it here.
        } catch (error) {
            setError("No cards available")
        }
      }
      init()
    
    }, [url, diffParam])

    return {data,error}
    




}

export default useAxios