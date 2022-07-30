import{useState, useEffect, useContext } from "react"
import { PresetsContext } from "../context/PresetsContext"
import axios from "axios";


const { difficulty } = useContext(PresetsContext);

const baseUrl = "https://the-trivia-api.com/api/questions/?limit=1&region=US"
const diffParam = (`&difficulty=${difficulty}`)
//Get the difficulty value and store it here?

function useAxios(url) {
    
    const [data, setData] = useState(null);

    useEffect(() => {
      async function init(){
        try {
            const response = await axios.get(baseUrl + diffParam + url);
            // name response object and map over it here.
        } catch (error) {
            
        }
      }
      init()
    
    }, [url])

    return {data}
    




}

export default useAxios