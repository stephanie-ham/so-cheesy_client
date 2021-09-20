import React, { useState, createContext } from "react"

export const IngredientContext = createContext()

export const IngredientProvider = (props) => {

  const URL = "http://localhost:8088"

  const [ingredients, setIngredients] = useState([])
  const [ingredientLikes, setIngredientLikes] = useState([])

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
  
  const getIngredientLikes = () => {
    return fetch(`${URL}/ingredientLikes`)
    .then(res => res.json())
    .then(setIngredientLikes)
  }

  const addIngredientLike = ingredientLikeObj => {
    return fetch(`${URL}/ingredientLikes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ingredientLikeObj)
    })
    .then(getIngredientLikes)
  }

  const removeIngredientLike = ingredientLikeId => {
    return fetch(`${URL}/ingredientLikes/${ingredientLikeId}`, {
      method: "DELETE"
    })
    .then(getIngredientLikes)
  }

  return (
    <IngredientContext.Provider value={{
      ingredients, addIngredient, getIngredients, getIngredientByType, ingredientLikes, getIngredientLikes, addIngredientLike, removeIngredientLike
    }}>
      {props.children}
    </ IngredientContext.Provider>
  )
}