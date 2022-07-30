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

    console.log(data[0].color);
  console.log(data[1].color);
  console.log(data[2].color);
  console.log(data[3].color);
  console.log(data[4].color);
  console.log(data[5].color);
    
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