import React, { useContext, useEffect, useState } from "react"
import { IngredientContext } from "../ingredient/IngredientProvider"
import { IngredientCard } from "../ingredient/IngredientCard"

import "../ingredient/ingredient.css"

/* this is currently only treating all checkboxes as one. Not sure how to correct! */

export const BoardIngredientSelect = (props) => {

  const { ingredients, getIngredients, boardIngredients } = useContext(IngredientContext);
  const [boardIngredient, setBoardIngredient] = useState({})
  // const [ isChecked, setIsChecked ] = useState(true) /* no longer need this becauese of array below */

  // const [checkedState, setCheckedState] = useState(
  //   new Array(ingredients.length).fill(false)
  // ) /* replaces need for multiple state hooks for each checkbox. This uses an array equal to the number of checkboxes then sets all with boolean true */

  // const handleCheckbox = (position) => {
  //   const updatedCheckedState = checkedState.map((ingredient, index) =>
  //     index === position ? !ingredient : ingredient
  //   )

  //   setCheckedState(updatedCheckedState)

  //   // const newBoardIngredient = checkedState.reduce((currentState, index) => {
  //   //   if (currentState === true) {
  //   //     return ingredients[index]
  //   //   }
  //   // })

  //   // setBoardIngredient(newBoardIngredient)

  // } 
  /* onChange, this will run to map through checkedState array. It will match the index of the ingredient in the Checked state with the original ingredient array. When setCheckedState is called, it will update wthe checkedState array*/

  useEffect(() => {
    getIngredients()
  }, [])

  // const handleControlledInputChange = (event) => {

  //   if (isChecked) {
  //     setIsChecked(false)
  //     console.log("checking box")
  //   } else {
  //     const newBoardIngredient = { ...boardIngredient } // create a copy 
  //     newBoardIngredient[event.target.id] = event.target.value // set new value
  //     setBoardIngredient(newBoardIngredient)
  //     setIsChecked(true)
  //     console.log("unchecking box")
  //   }
  // }

  // const handleControlledInputChange = (event) => {

  //     const newBoardIngredient = { ...boardIngredient } // create a copy 
  //     newBoardIngredient[event.target.id] = event.target.value // set new value
  //     setBoardIngredient(newBoardIngredient)
  //     setIsChecked(true)
  //     console.log("checking box")

  // }

  return (
    <div className="form-group">
      <label className="list__label" htmlFor="ingredientId">{props.labelName}</label>
      <div className="form__ingredient--list">
        {
          ingredients.map((ingredient, index) => {
            if (ingredient.type === `${props.ingredientType}`) {
              return (
                <>
                  <div className="form__ingredient">

                    <IngredientCard
                      key={ingredient.id}
                      value={ingredient.id}
                      ingredient={ingredient}
                      ingredientType={ingredient.type}
                    />

                    <div className="form__checkbox--container">
                      <input
                        type="checkbox"
                        className="checkbox"
                        id={`custom-checkbox-${index}`}
                        key={ingredient.id}
                        value={ingredient.id}
                        // checked={checkedState[index]}
                        // onChange={handleCheckbox(index)}

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


