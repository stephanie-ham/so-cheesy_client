import React, { useContext, useEffect } from "react"
import { IngredientButton } from "./IngredientButton"
import { IngredientContext } from "./IngredientProvider"

export const IngredientCard = (props) => {
  const { ingredients, getIngredients, ingredientLikes, getIngredientLikes } = useContext(IngredientContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"))

  useEffect(() => {
    getIngredients().then(getIngredientLikes())
  }, [])

  const isIngredientLiked = (ingredient) => {
    return ingredientLikes.find((ingredientLike) => (
      currentUser === ingredientLike.userId &&
      ingredient.id === ingredientLike.ingredientId
    ))
  }

  const findIngredientLikeId = (ingredient) => {
    let ingredientLikeId
    ingredientLikes.map((ingredientLike) => {
      if (currentUser === ingredientLike.userId &&
        ingredient.id === ingredientLike.ingredientId) {
          ingredientLikeId = ingredientLike.id
        }
    })
    return ingredientLikeId
  }

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
          <IngredientButton
            key={props.ingredient.id}
            ingredient={props.ingredient}
            ingredientLikeId={findIngredientLikeId(props.ingredient)}
            isLiked={isIngredientLiked(props.ingredient)}
          />
      </section>
    </>
  )
}


/* add tertiary for card like and dislike buttons. do not allow workable buttons on form */