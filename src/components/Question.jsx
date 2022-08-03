// import React, { useContext, useEffect } from 'react'
// import { CategoryContext } from "../context/CategoryContext";
// import { UrlContext } from '../context/UrlContext';
// // import { CardContext } from '../context/CardContext';
// import useAxios from "../hooks/useAxios";

// function Question() {
//     const {setSelected} = useContext(CategoryContext)
//     const { url } = useContext(UrlContext)
//   // const { answers,setAnswers } = useContext(CardContext)
//     const {data:card} = useAxios(url) 
    


  


//   return (
//     (card &&
//       <section className="question-card">
//           <h2>{card.question}</h2>
//           <ul>
//             {/* {shuffleArray(answers)} */}
//           </ul>
//           <div className="flex center">
//                 <button className="rounded bg-[#daa520] py-1 px-6">Submit Answer</button>
//           </div>
//       </section>
//     )
//   )
// }

// export default Question