import React, { useEffect, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { BoardContext } from "./BoardProvider"
import { BoardIngredientSelect } from "./BoardIngredientSelect"
import "./boardform.css"


export const BoardForm = () => {

  const { getBoards, addBoard } = useContext(BoardContext);
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));
  const history = useHistory();

  
  const [board, setBoard] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  // const [isChecked, setIsChecked] = useState(true);
 
  const handleInputChange = (event) => {
    const newBoard = { ...board } // create a copy 
    newBoard[event.target.id] = event.target.value // set new value
    setBoard(newBoard) // update state
  }

  const handleCreate = (event) => {
    event.preventDefault() // Prevent browser from submitting the form and refreshing the page

    setIsLoading(true);

    addBoard({ // POST
      title: board.title,
      userId: currentUser,
      imageId: 4
    })
    .then(() => history.push("/"))
  }


  // const handleSaveBoard = () => {

  //   setIsLoading(true);

  //   addBoard({
  //     title: board.title,
  //     userId: currentUser
  //   })
  //   .then(addBoardIngredient({
  //     boardId: parseInt(board.id),
  //     ingredientId: parseInt(boardIngredient.ingredientId)
  //   }))
  //   .then(() => history.push("/"))
  // }

  // useEffect(() => {
  //   getBoards().then(() => {
  //     setIsLoading(false)
  //   })
  // }, [])

  return (
    <>
      <form className="boardform">
        <fieldset>
          <div className="form-group">
            <label className="page__title" htmlFor="title">Board Title:</label>
            <input 
              type="text" 
              id="title" 
              required autoFocus 
              className="form-control" 
              placeholder="Title of Board" 
              onChange={handleInputChange} />
          </div>
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Cheeses"
            ingredientType="cheese"
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Meats"
            ingredientType="meat"
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Fruits"
            ingredientType="fruit"
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Nuts"
            ingredienttype="nut"
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Jams + Spreads"
            ingredientType="jam+spread"
          />
        </fieldset>

        <button 
          className="mediumButton"
          isLoading={ isLoading } 
          onClick={ handleCreate }>
          Create Board!
        </button>      
      </form>
    </>
  )
}


// delete if not needed

  /*
          <fieldset>
            <div className="form-group">
              <label className="list__label" htmlFor="ingredientId">Cheeses:</label>
              <div className="form__ingredient--list">
                {
                  ingredients.map(ingredient => {
                    if (ingredient.type === "cheese") {
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
                                multiple="true"
                                className="checkbox" 
                                id="ingredientId" 
                                key={ingredient.id} 
                                value={ingredient.id} 
                                // checked={isChecked}
                                onChange={handleIngredientInput} />
                            </div>
                          </div>
                        </>
                      )
                    }
                  })
                }
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label className="list__label" htmlFor="ingredientId">Meats:</label>
              <div className="form__ingredient--list">
                {
                  ingredients.map(ingredient => {
                    if (ingredient.type === "meat") {
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
                                multiple="true"
                                className="checkbox" 
                                id="ingredientId" 
                                key={ingredient.id} 
                                value={ingredient.id} 
                                // checked={isChecked}
                                onChange={handleIngredientInput} />
                            </div>
                          </div>
                        </>
                      )
                    }
                  })
                }
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label className="list__label" htmlFor="ingredientId">Fruits:</label>
              <div className="form__ingredient--list">
                {
                  ingredients.map(ingredient => {
                    if (ingredient.type === "fruit") {
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
                                multiple="true"
                                className="checkbox" 
                                id="ingredientId" 
                                key={ingredient.id} 
                                value={ingredient.id} 
                                // checked={isChecked}
                                onChange={handleIngredientInput} />
                            </div>
                          </div>
                        </>
                      )
                    }
                  })
                }
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label className="list__label" htmlFor="ingredientId">Nuts:</label>
              <div className="form__ingredient--list">
                {
                  ingredients.map(ingredient => {
                    if (ingredient.type === "nut") {
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
                                multiple="true"
                                className="checkbox" 
                                id="ingredientId" 
                                key={ingredient.id} 
                                value={ingredient.id} 
                                // checked={isChecked}
                                onChange={handleIngredientInput} />
                            </div>
                          </div>
                        </>
                      )
                    }
                  })
                }
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="form-group">
              <label className="list__label" htmlFor="ingredientId">Jams + Spreads:</label>
              <div className="form__ingredient--list">
                {
                  ingredients.map(ingredient => {
                    if (ingredient.type === "jam") {
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
                                multiple="true"
                                className="checkbox" 
                                id="ingredientId" 
                                key={ingredient.id} 
                                value={ingredient.id} 
                                // checked={isChecked}
                                onChange={handleIngredientInput} />
                            </div>
                          </div>
                        </>
                      )
                    }
                  })
                }
              </div>
            </div>
          </fieldset>
          */