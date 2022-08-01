import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Wheel() {

  const data = 
    [
      { title: 'One', value: 60, key: 1, color:"#05b4e1" },
      { title: 'Two', value: 60, key: 2, color: "#6cac06" },
      { title: 'Three', value: 60, key: 3, color: "#fbd60a" },
      { title: 'Four', value: 60, key: 4, color: "#8c4e09" },
      { title: 'Five', value: 60, key: 5, color: "#d93905" },
      { title: 'Six', value: 60, key: 6, color: "#b91274" }
    ]
    
  return (

    <div id="wheel">
      <PieChart
        data={data}
        totalValue={360}
        paddingAngle={4}
        background={"grey"}
      />
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