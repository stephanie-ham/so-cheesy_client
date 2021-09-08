import React, { useState, createContext } from "react"

export const IngredientContext = createContext()

export const IngredientProvider = (props) => {

  const URL = "http://localhost:8088"

  const [ingredients, setIngredients] = useState([])

  const getIngredients = () => {
    return fetch(`${URL}/ingredients?_expand=image`)
      .then(res => res.json())
      .then(setIngredients)
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

  const getIngredientByType = type => {
    return fetch(`${URL}/ingredients/${type}`)
    .then(response => response.json())
  }

  return (
    <IngredientContext.Provider value={{
      ingredients, addIngredient, getIngredients, getIngredientByType
    }}>
      {props.children}
    </ IngredientContext.Provider>
  )
}