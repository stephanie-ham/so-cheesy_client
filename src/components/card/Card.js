import React from "react"
import "./card.css"

export const Card = (props) => {
  return (
    <>
      <div className="card__container">
        <div className="card__image">
          <img src={`/images/${props.card.image.url}`} alt="" />
        </div>
        <div className="card__info" key={props.card.id}>
          <h5 className="card__name">{props.card.name}</h5>
          {props.boardIngredientId ? <><h6 className="card__type">{props.card.type}</h6></> : <> </>}
        </div>
      </div>
    </>
  )
}
