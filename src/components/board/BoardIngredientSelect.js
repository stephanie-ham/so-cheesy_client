import React, { useContext, useEffect } from "react"
import { IngredientContext } from "../ingredient/IngredientProvider"
import { IngredientCard } from "../ingredient/IngredientCard"

export const BoardIngredientSelect = (props) => {

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

  const handleChange = (event) => {

    let ingredientArray = [...props.selectedIngredients]

    if (event.target.checked) {
      ingredientArray.push(parseInt(event.target.value))
    } else {
      ingredientArray = ingredientArray.filter(ingredient =>
        ingredient !== parseInt(event.target.value)
      )
    }
    props.setIngredients(ingredientArray)
  }


  return (
    <div>
      <label component="legend" className="list__label" htmlFor="ingredientId">{props.labelName}</label>
      <div className="form__ingredient--list">
        {
          ingredients.map((ingredient) => {
            if (ingredient.type === `${props.ingredientType}`) {
              return (
                <>
                  <div className="form__ingredient">
                    <IngredientCard
                      key={ingredient.id}
                      value={ingredient.id}
                      ingredient={ingredient}
                      ingredientType={ingredient.type}
                      ingredientLikeId={findIngredientLikeId(ingredient)}
                      isLiked={isIngredientLiked(ingredient)}
                      ingredientDislikeId={findIngredientDislikeId(ingredient)}
                      isDisliked={isIngredientDisliked(ingredient)}
                    />
                    <div className="form__checkbox--container">
                        <input
                          className="checkbox"
                          onChange={handleChange}
                          name={`${props.ingredientType}-${ingredient.id}`}
                          type="checkbox"
                          id={`${props.ingredientType}-${ingredient.id}`}
                          key={ingredient.id}
                          value={ingredient.id}
                        />
                    </div>
                  </div>
                </>
              )
            }
          })
        }
      </div>
    </div>
  )
}
