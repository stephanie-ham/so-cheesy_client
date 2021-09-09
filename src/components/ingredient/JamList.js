import React, { useContext, useEffect } from "react"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import "./ingredient.css"

export const JamList = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext)

  useEffect(() => (
    getIngredients()
  ), [])

  return (
    <>
      <h2 className="ingredient__title">Jams + Spreads</h2>
      <section className="ingredient__list">
        {
          ingredients.map(ingredient => {
            if (ingredient.type === "jam") {
              return <IngredientCard
                ingredientType={ingredient.type}
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