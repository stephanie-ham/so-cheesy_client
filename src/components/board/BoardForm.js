import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { BoardContext } from "./BoardProvider"
import { BoardIngredientSelect } from "./BoardIngredientSelect"
import "./boardform.css"

/* is there a way to have addBoard run before the ingredient piece? How do we store a board id if it hasn't been created yet?! */

export const BoardForm = () => {

  const { addBoard, 
    addBoardIngredient } = useContext(BoardContext);
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));
  const history = useHistory();

  const [cheeses, setCheeses] = useState([])
  const handleSetCheeses = (cheeses) => {
    setCheeses(cheeses)
  }
  const handleAddCheeses = () => {
    cheeses.forEach((cheese) => {
      addBoardIngredient({
        ingredientId: parseInt(cheese),
        boardId: 10
      })
    })
  }

  const [meats, setMeats] = useState([])
  const handleSetMeats = (meats) => {
    setMeats(meats)
  }
  const handleAddMeats = () => {
    meats.forEach((meat) => {
      addBoardIngredient({
        ingredientId: parseInt(meat),
        boardId: 10
      })
    })
  }

  const [fruits, setFruits] = useState([])
  const handleSetFruits = (fruits) => {
    setFruits(fruits)
  }
  const handleAddFruits = () => {
    fruits.forEach((fruit) => {
      addBoardIngredient({
        ingredientId: parseInt(fruit),
        boardId: 10
      })
    })
  }

  const [nuts, setNuts] = useState([])
  const handleSetNuts = (nuts) => {
    setNuts(nuts)
  }
  const handleAddNuts = () => {
    nuts.forEach((nut) => {
      addBoardIngredient({
        ingredientId: parseInt(nut),
        boardId: 10
      })
    })
  }

  const [jams, setJams] = useState([])
  const handleSetJams = (jams) => {
    setJams(jams)
  }
  const handleAddJams = () => {
    jams.forEach((jam) => {
      addBoardIngredient({
        ingredientId: parseInt(jam),
        boardId: 10
      })
    })
  }
  
  const [board, setBoard] = useState({
    boardId: 0,
    userId: 0,
    title: "",
    imageId: 4
  });

  //create in provider saveFullBoard
      //saveBoard.then(saveIngredients) in provider... when returning board id, save ingredients

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

    handleAddCheeses()
    handleAddMeats()
    handleAddFruits()
    handleAddNuts()
    handleAddJams()

    history.push("/")
  }

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
              onChange={ handleInputChange } 
            />
          </div>
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Cheeses"
            ingredientType="cheese"
            setIngredients={ handleSetCheeses }
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Meats"
            ingredientType="meat"
            setIngredients={ handleSetMeats }
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Fruits"
            ingredientType="fruit"
            setIngredients={ handleSetFruits }
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Nuts"
            ingredientType="nut"
            setIngredients={ handleSetNuts }
          />
        </fieldset>

        <fieldset>
          <BoardIngredientSelect
            labelName="Jams + Spreads"
            ingredientType="jam+spread"
            setIngredients={ handleSetJams }
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

