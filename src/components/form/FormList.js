import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { BoardContext } from "../board/BoardProvider"
import { BoardIngredientSelect } from "../board/BoardIngredientSelect"
import "../board/boardform.css"

export const FormList = () => {

  

  const { addFullBoard } = useContext(BoardContext);
  const [isLoading, setIsLoading] = useState(true);
  const [cheeses, setCheeses] = useState([])
  const [meats, setMeats] = useState([])
  const [nuts, setNuts] = useState([])
  const [fruits, setFruits] = useState([])
  const [jams, setJams] = useState([])

  const [board, setBoard] = useState({
    userId: 0,
    title: "",
    imageId: 4
  });

  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));
  const history = useHistory();
  const boardIngredientArray = []

  const handleSetCheeses = (cheeses) => {
    setCheeses(cheeses)
  }
  const handleAddCheeses = () => {
    cheeses.forEach((cheese) => {
      boardIngredientArray.push({
        ingredientId: parseInt(cheese)
      })
    })
  }

  const handleSetMeats = (meats) => {
    setMeats(meats)
  }
  const handleAddMeats = () => {
    meats.forEach((meat) => {
      boardIngredientArray.push({
        ingredientId: parseInt(meat)
      })
    })
  }

  const handleSetNuts = (nuts) => {
    setNuts(nuts)
  }
  const handleAddNuts = () => {
    nuts.forEach((nut) => {
      boardIngredientArray.push({
        ingredientId: parseInt(nut)
      })
    })
  }

  const handleSetFruits = (fruits) => {
    setFruits(fruits)
  }
  const handleAddFruits = () => {
    fruits.forEach((fruit) => {
      boardIngredientArray.push({
        ingredientId: parseInt(fruit)
      })
    })
  }

  const handleSetJams = (jams) => {
    setJams(jams)
  }
  const handleAddJams = () => {
    jams.forEach((jam) => {
      boardIngredientArray.push({
        ingredientId: parseInt(jam)
      })
    })
  }

  const handleInputChange = (event) => {
    const newBoard = { ...board } // create a copy 
    newBoard[event.target.id] = event.target.value // set new value
    setBoard(newBoard) // update state
  }

  const handleCreate = (event) => {
    event.preventDefault() // Prevent browser from submitting the form and refreshing the page

    setIsLoading(true);

    handleAddCheeses()
    handleAddMeats()
    handleAddNuts()
    handleAddFruits()
    handleAddJams()

    addFullBoard({ // POST
      title: board.title,
      userId: currentUser,
      imageId: 4
    }, boardIngredientArray)

    history.push("/")
  }

  return (
    <>
      <form className="boardform padding-bottom">
        <fieldset>
          <div className="form-group">
            <label className="page__title" htmlFor="title">Board Title:</label>
            <input
              type="text"
              id="title"
              required autoFocus
              className="form-control"
              placeholder="Title of Board"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <fieldset>
          <h5>Cheeses</h5>
          <BoardIngredientSelect
            ingredientType="cheese"
            setIngredients={handleSetCheeses}
            selectedIngredients={cheeses}
          />
        </fieldset>

        <fieldset>
          <h5>Meats</h5>
          <BoardIngredientSelect
            ingredientType="meat"
            setIngredients={handleSetMeats}
            selectedIngredients={meats}
          />
        </fieldset>

        <fieldset>
          <h5>Nuts</h5>
          <BoardIngredientSelect
            ingredientType="nut"
            setIngredients={handleSetNuts}
            selectedIngredients={nuts}
          />
        </fieldset>

        <fieldset>
          <h5>Fruits</h5>
          <BoardIngredientSelect
            ingredientType="fruit"
            setIngredients={handleSetFruits}
            selectedIngredients={fruits}
          />
        </fieldset>

        <fieldset>
          <h5>Jams + Spreads</h5>
          <BoardIngredientSelect
            ingredientType="jam+spread"
            setIngredients={handleSetJams}
            selectedIngredients={jams}
          />
        </fieldset>

        <button
          className="mediumButton"
          isLoading={isLoading}
          onClick={handleCreate}>
          Create Board!
        </button>
      </form>
    </>
  )
}

// use toggle or something to open and close with buttons isOpen props(?)

