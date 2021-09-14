import React, { useContext, useEffect } from "react"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import "./ingredient.css"

export const IngredientList = (props) => {
  const { ingredients, getIngredients } = useContext(IngredientContext)

  useEffect(() => (
    getIngredients()
  ), [])

  return (
    <>
      <h2 className="page__title"> {props.title} </h2>
      <section className="ingredient__list">
        {
          ingredients.map(ingredient => {
            if (ingredient.type === `${props.type}`) {
              return <IngredientCard
                // ingredientType={ingredient.type}
                key={ingredient.id}
                ingredient={ingredient}
              />
            }
          })
        }
      </section>
    </>
  )
}