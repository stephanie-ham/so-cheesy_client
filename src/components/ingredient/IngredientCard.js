import React from "react"
import { Card } from "../card/Card"
import { IngredientButton } from "./IngredientButton"

export const IngredientCard = (props) => {

  return (
    <>
      <section className="ingredient" key={props.ingredient.id} type={props.ingredient.type}>
          <Card 
            key={props.ingredient.id}
            card={props.ingredient}
            boardIngredientId={props.boardIngredientId}
            
          />
          <IngredientButton
            ingredient={props.ingredient}
            ingredientLikeId={props.ingredientLikeId}
            isLiked={props.isLiked}
            ingredientDislikeId={props.ingredientDislikeId}
            isDisliked={props.isDisliked}
          />
      </section>
    </>
  )
}
