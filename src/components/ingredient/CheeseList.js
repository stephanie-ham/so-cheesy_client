import React, { useContext, useEffect } from "react"
import { IngredientContext } from "./IngredientProvider"
import { IngredientCard } from "./IngredientCard"
import "./ingredient.css"

export const CheeseList = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext)

  useEffect(() => (
    getIngredients()
  ), [])

  return (
    <>
      <h2 className="ingredient__title">Cheeses</h2>
      <section className="ingredient__list">
        {
          ingredients.map(ingredient => {
            if (ingredient.type === "cheese") {
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