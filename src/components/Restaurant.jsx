import React from 'react'
import style from '../styles/restaurant.css'

const Restaurant = (props) => {
  return (
    <div className = "container">
{
  props.Data.map((item)=>{
    return (

      <div className="subCont" key = {item.id}>
        <div className="innerCont" >

        <img src={item.image} alt="logo" />
        <hr />
        </div>



        <div>

      <h3> {item.name }</h3>
      <p>{item.category}</p>
      <p>{item.costForTwo}</p>

        <p>{item.deliveryTimings}</p>
        <h3>{item.offers}</h3>
<p>{item.paymentMethod}</p>

<hr />

<button>Order Online <i class="fa-solid fa-angle-right"></i></button>
        </div>



    </div>
      )
  })
}
   
    </div>
  )
}

export default Restaurant