import React from "react"

export const IngredientCard = (props) => {

  return (
    <>
      <section className="ingredient" key={props.ingredient.id} type={props.ingredient.type}>
        <div className="ingredient__container">
          <div className="ingredient__image">
            <img src={props.ingredient.image.url} />
          </div>
          <div className="ingredient__info" key={props.ingredient.id}>
            <h5 className="ingredient__name">{props.ingredient.name}</h5>
            <p className="ingredient__description">{props.ingredient.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}