import React, { useContext, useEffect } from "react"
import { IngredientContext } from "../ingredient/IngredientProvider"
import { IngredientCard } from "../ingredient/IngredientCard"
import { Checkbox, FormGroup } from "@material-ui/core"

import "../ingredient/ingredient.css"

/* this is currently only selecting one checkbox per category */

export const BoardIngredientSelect = (props) => {

  const { ingredients, getIngredients } = useContext(IngredientContext);

  const handleChange = (event) => {

    let ingredientArray = []

    ingredients.forEach((ingredient) => {
      if (props.ingredientType === ingredient.type 
        && ingredient.id === parseInt(event.target.value)
        && event.target.checked) {
        ingredientArray.push(ingredient.id)
      }
    })
    props.setIngredients(ingredientArray)
  }

  useEffect(() => {
    getIngredients()
  }, [])

  return (
    <div className="form-group">
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
                    />
                    <div className="form__checkbox--container">
                    <FormGroup>
                      <Checkbox
                        onChange={handleChange}
                        name={props.ingredientType}
                        id={`${props.ingredientType}-${ingredient.id}`}
                        key={ingredient.id}
                        value={ingredient.id}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </FormGroup>
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

