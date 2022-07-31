import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function Wheel() {

  const data = 
    [
      { title: 'One', value: 60, key: 1, color:"blue" },
      { title: 'Two', value: 60, key: 2, color: "green" },
      { title: 'Three', value: 60, key: 3, color: "red" },
      { title: 'Four', value: 60, key: 4, color: "brown" },
      { title: 'Five', value: 60, key: 5, color: "orange" },
      { title: 'Six', value: 60, key: 6, color: "purple" }
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