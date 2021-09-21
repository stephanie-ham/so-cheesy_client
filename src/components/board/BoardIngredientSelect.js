import React, { useContext, useEffect } from "react"
import { IngredientContext } from "../ingredient/IngredientProvider"
import { IngredientCard } from "../ingredient/IngredientCard"
import { Checkbox, FormGroup } from "@material-ui/core"

export const BoardIngredientSelect = (props) => {

  const { ingredients, getIngredients } = useContext(IngredientContext);

  useEffect(() => {
    getIngredients()
  }, [])

  const handleChange = (event) => {

    let ingredientArray = [...props.selectedIngredients]

    if (event.target.checked) {
      ingredientArray.push(parseInt(event.target.value))
    } else {
      ingredientArray = ingredientArray.filter(ingredient =>
        ingredient !== parseInt(event.target.value)
      )
    }
    props.setIngredients(ingredientArray)
  }


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
                      isForm={true}
                    />
                    <div className="form__checkbox--container">
                      <FormGroup>
                        <Checkbox
                          onChange={handleChange}
                          name={`${props.ingredientType}-${ingredient.id}`}
                          id={`${props.ingredientType}-${ingredient.id}`}
                          key={ingredient.id}
                          value={ingredient.id}
                          sx={{
                            color: "#fefcfa",
                            '&.Mui-checked': {
                              color: "#fefcfa",
                            },
                          }}
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
