import React from 'react'


const CardTradeItem = (props) => {
  return (
    <div>
      <div className="card-container">
        <div className="image-container">
          <img src={props.image_url} alt="" />
        </div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CardTradeItem
