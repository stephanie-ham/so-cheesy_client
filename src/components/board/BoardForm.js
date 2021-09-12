import React, { useEffect, useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { IngredientContext } from "../ingredient/IngredientProvider"
import { IngredientCard } from "../ingredient/IngredientCard"
import { BoardContext } from "./BoardProvider"
import "./boardform.css"
import "../ingredient/ingredient.css"

export const BoardForm = () => {

  const { ingredients, getIngredients } = useContext(IngredientContext);
  const { boards, getBoards, addBoard, addBoardIngredient } = useContext(BoardContext);
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));
  const [boardIngredient, setBoardIngredient] = useState({
    title: "",
    userId: 0,
    imageId: 5
  });
  const [board, setBoard] = useState({
    boardId: 0,
    ingredientId: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  // const [isChecked, setIsChecked] = useState(true);
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    
    const newBoard = { ...board } // create a copy 

    newBoard[event.target.id] = event.target.value // set new value

    setBoard(newBoard) // update state

  }

  const handleIngredientInput = (event) => {
    const newBoardIngredient = { ...boardIngredient } // create a copy
    
    newBoardIngredient[event.target.id] = event.target.value // set new value

    setBoardIngredient(newBoardIngredient) // update state
    
    // setIsChecked(!isChecked)
  }

  const handleSaveBoard = () => {

    setIsLoading(true);

    addBoard({
      title: board.title,
      userId: currentUser
    })
    .then(addBoardIngredient({
      boardId: parseInt(board.id),
      ingredientId: parseInt(boardIngredient.ingredientId)
    }))
    .then(() => history.push("/"))
  }

  useEffect(() => {
    getIngredients().then(getBoards()).then(() => {
      setIsLoading(false)
    })
  }, [])

  // const ingredientForm = (type) => {
  //   {
  //     ingredients.map(ingredient => {
  //       if (ingredient.type === type) {
  //         return (
  //           <>
  //             <div className="form__list--component">
  //               <IngredientCard
  //                 className="form__list"
  //                 key={ingredient.id}
  //                 ingredient={ingredient}
  //                 ingredientType={ingredient.type}
  //               />
  //               <div className="form__checkbox--container">
  //                 <input type="checkbox" className="checkbox" id={ingredient.id} />
  //               </div>
  //             </div>
  //           </>
  //         )
  //       }
  //     })
  //   }
  // }


  return (
    <>
      <h2 className="boardform__title">Build your Board</h2>
      <p className="boardform__subtitle">Subtitle goes here</p>
      <form className="boardform">
        <fieldset>
          <div className="form-group">
            <label htmlFor="title">Board Title:</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              required autoFocus 
              className="form-control" 
              placeholder="Title of Board" 
              onChange={handleControlledInputChange} 
              defaultValue={board.title}/>
          </div>
        </fieldset>

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

        <button 
          className="button"
          disabled={isLoading} 
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
          handleSaveBoard()
        }}>
          Create Board!
        </button>      
      </form>
    </>
  )
}

