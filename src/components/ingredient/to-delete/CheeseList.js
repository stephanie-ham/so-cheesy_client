import React, { useContext, useEffect } from "react"
import { IngredientContext } from "../IngredientProvider"
import { IngredientCard } from "../IngredientCard"
import "./ingredient.css"
import { IngredientList } from "../IngredientList"

export const CheeseList = () => {
  const { ingredients, getIngredients } = useContext(IngredientContext)

  useEffect(() => (
    getIngredients()
  ), [])

  return (
    <>
      <IngredientList type="cheese" title="Cheeses" />
    </>
  )
}