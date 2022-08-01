import React from 'react'

function Question() {

    const optionClicked = (isCorrect)=>{
         if(isCorrect){
            //highlight question in green
         } else {
            //
         }
    }
  return (
    <section className="question-card">
        <h3>Question goes here</h3>
        <ul>
            <li className="choice">Choice 1</li>
            <li className="choice">Choice 2</li>
            <li className="choice">Choice 3</li>
            <li className="choice">Choice 4</li>
        </ul>


    </section>
  )
}

export default Question