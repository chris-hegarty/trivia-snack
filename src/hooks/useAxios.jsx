import{useState, useEffect} from "react"
// import { PresetsContext } from "../context/PresetsContext"
// import { CategoryContext } from "../context/PresetsContext"

import axios from "axios";

const baseUrl = "https://the-trivia-api.com/api/questions/?limit=1&region=US&difficulty=medium"

function useAxios(url) {
  // const { selected  } = useContext(CategoryContext)
  const[data, setData] = useState(null); 
  const [error, setError] = useState(null);

    useEffect(() => {
      setData(null)
      setError(null)
      async function init(){
        try {
            const response = await axios.get(baseUrl + url);
            const card = response.data.map((val) => ({
                question: val[0].question,
                correct: val[0].correctAnswer,
                incorrect: val[0].incorrectAnswers,
              })
            )
            setData(card)

        } catch (error) {
            setError("No cards available")
        }
      }
      init()
    
    }, [url])

    return {data,error}

}

export default useAxios