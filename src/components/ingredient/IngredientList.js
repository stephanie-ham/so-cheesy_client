import React, { useContext, useEffect } from "react"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import "../../styles/list.css"

export const IngredientList = (props) => {
  const { ingredients, getIngredients, ingredientLikes, getIngredientLikes, ingredientDislikes, getIngredientDislikes } = useContext(IngredientContext)
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
      <h2 className="page__title"> {props.title} </h2>
      <section className="ingredient__list">
        {
          ingredients.map(ingredient => {
            if (ingredient.type === `${props.type}`) {
              return (
                <>
                  <section className="ingredient">
                    <IngredientCard
                      key={ingredient.id}
                      ingredient={ingredient}
                      ingredientLikeId={findIngredientLikeId(ingredient)}
                      isLiked={isIngredientLiked(ingredient)}
                      ingredientDislikeId={findIngredientDislikeId(ingredient)}
                      isDisliked={isIngredientDisliked(ingredient)}
                      isForm={props.isForm}
                    />
                  </section>
                </>
              )
            }
          })
        }
      </section>
    </>
  )
}