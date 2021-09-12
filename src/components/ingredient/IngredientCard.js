import React from "react"

export const IngredientCard = (props) => {


  return (
    <>
      <section className="ingredient" key={props.ingredient.id} type={props.ingredient.type}>
        <div className="ingredient__container">
          <div className="ingredient__image">
            <img src={`/images/${props.ingredient.image.url}`} alt="" />
          </div>
          <div className="ingredient__info" key={props.ingredient.id}>
            <h5 className="ingredient__name">{props.ingredient.name}</h5>
            {props.boardIngredientId ? <><h6 className="ingredient__type">{props.ingredient.type}</h6></> : <> </>}
          </div>
        </div>
      </section>
    </>
  )
}


/* add tertiary for card like and dislike buttons. do not allow workable buttons on form */