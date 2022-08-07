import React, { useContext, useMemo } from "react";
import { PieChart } from 'react-minimal-pie-chart';
import { CardContext } from "../context/CardContext";

function Wheel(props) {
  
  const {winList} = useContext(CardContext)

  const data = useMemo(()=>
    [
      { title: 'geography', value: 60, key: 1, color: winList.geography ? "#05b4e1" : "#8c8c8c" },
      { title: 'film_and_tv', value: 60, key: 2, color: winList.film_and_tv ? "#b91274" : "#8c8c8c" },
      { title: 'history', value: 60, key: 3, color: winList.history ? "#fbd60a" : "#8c8c8c" },
      { title: 'arts_and_literature', value: 60, key: 4, color: winList.arts_and_literature ? "#8c4e09" : "#8c8c8c" },
      { title: 'science', value: 60, key: 5, color: winList.science ? "#6cac06" : "#8c8c8c" },
      { title: 'sport_and_leisure', value: 60, key: 6, color: winList.sport_and_leisure ? "#b91274" : "#8c8c8c" }
    ], [winList] )
  
  return (
    <div className="basis-50 flex center">
      <div id="wheel">
      <PieChart
        data={data}
        totalValue={360}
        paddingAngle={4}
        background={"#daa520"}
      />
    </div>
    </div>
  )
}

export default Wheel

//PATTERN for renaming an object key:

// As long as you use the same variable name in your destructured variables as is in the object it will work perfectly.

// Luckily, you can also easily rename variables as well.If you wanted the name variable to be called firstName instead you can do the following.
// const person = { name: 'Kyle', age: 25 }
// const { name: firstName, age } = person

// console.log(firstName)
// // Kyle
// console.log(age)
// // 25
// This is essentially saying that you are mapping the property name from the object person to a new variable called firstName.