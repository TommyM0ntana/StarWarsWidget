import React from 'react'
import CardTradeItem from '../cardtradeitem/CardTradeItem'

const CardTradeList = (props) => {
  let cardtrades = props.filteredCardtrades.map((cardtrade) => {
    return <CardTradeItem key={cardtrade.id} name={cardtrade.name} image_url={cardtrade.image_url} description={cardtrade.description} />
  }

  )
  return (
    <div>
      <div className="container">
        <div className="card-list">
          {cardtrades}
        </div>
      </div>

    </div>
  )
}

export default CardTradeList
