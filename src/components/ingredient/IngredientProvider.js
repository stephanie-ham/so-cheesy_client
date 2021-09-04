import React, { useState, createContext } from "react"

export const IngredientContext = createContext()

export const IngredientProvider = (props) => {

  const URL = "http://localhost:8088"

  const [ingredients, setIngredients] = useState([])

  const getIngredients = () => {
    return fetch(`${URL}/ingredients`)
      .then(res => res.json())
      .then(setAnimals)
  }

  const addIngredient = ingredientObj => {
    return fetch(`${URL}/ingredients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ingredientObj)
    })
      .then(getIngredients)
  }

  return (
    <IngredientContext.Provider value={{
      ingredients, addIngredient, getIngredients
    }}>
      {props.children}
    </ IngredientContext.Provider>
  )
}