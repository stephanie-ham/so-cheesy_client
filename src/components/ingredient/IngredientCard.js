import React, { useContext, useEffect } from "react"
import { Card } from "../card/Card"
import { IngredientButton } from "./IngredientButton"
import { IngredientContext } from "./IngredientProvider"

export const IngredientCard = (props) => {
  const { getIngredients, ingredientLikes, getIngredientLikes, ingredientDislikes, getIngredientDislikes } = useContext(IngredientContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"))

  useEffect(() => {
    getIngredients().then(getIngredientLikes())
    .then(getIngredientDislikes())
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

  const isIngredientDisliked = (ingredient) => {
    return ingredientDislikes.find((ingredientDislike) => (
      currentUser === ingredientDislike.userId &&
      ingredient.id === ingredientDislike.ingredientId
    ))
  }

  const findIngredientDislikeId = (ingredient) => {
    let ingredientDislikeId
    ingredientDislikes.map((ingredientDislike) => {
      if (currentUser === ingredientDislike.userId &&
        ingredient.id === ingredientDislike.ingredientId) {
          ingredientDislikeId = ingredientDislike.id
        }
    })
    return ingredientDislikeId
  }

  return (
    <>
      <section className="ingredient" key={props.ingredient.id} type={props.ingredient.type}>
          <Card 
            key={props.ingredient.id}
            card={props.ingredient}
          />
          <IngredientButton
            ingredient={props.ingredient}
            ingredientLikeId={findIngredientLikeId(props.ingredient)}
            isLiked={isIngredientLiked(props.ingredient)}
            ingredientDislikeId={findIngredientDislikeId(props.ingredient)}
            isDisliked={isIngredientDisliked(props.ingredient)}
          />
      </section>
    </>
  )
}


/* add tertiary for card like and dislike buttons. do not allow workable buttons on form */