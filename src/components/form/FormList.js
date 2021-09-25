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
            <label className="page__title form__label divider" htmlFor="title"><h5>Board Title:</h5></label>
            <input
              type="text"
              id="title"
              required autoFocus
              className="form--input"
              placeholder="Title of Board"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <button
          className="mediumButton create__button">
            <>Looking Gouda!</>
        </button>

        <fieldset className="fieldset--margin">
          <div className="form--center">
            <h4 className="form--label divider">Cheeses</h4>
          </div>
          <BoardIngredientSelect
            ingredientType="cheese"
            setIngredients={handleSetCheeses}
            selectedIngredients={cheeses}
          />
        </fieldset>

        <button
          className="mediumButton create__button">
            <>What a ham.</>
        </button>

        <fieldset className="fieldset--margin">
          <div className="form--center">
            <h4 className="form--label divider">Meats</h4>
          </div>
          <BoardIngredientSelect
            ingredientType="meat"
            setIngredients={handleSetMeats}
            selectedIngredients={meats}
          />
        </fieldset>

        <button
          className="mediumButton create__button">
            <>Aw, nuts!</>
        </button>

        <fieldset className="fieldset--margin">
          <div className="form--center">
          <h4 className="form--label divider">Nuts</h4>
          </div>
          <BoardIngredientSelect
            ingredientType="nut"
            setIngredients={handleSetNuts}
            selectedIngredients={nuts}
          />
        </fieldset>

        <button
          className="mediumButton create__button">
            <>The perfect pear.</>
        </button>

        <fieldset className="fieldset--margin">
          <div className="form--center">
            <h4 className="form--label divider">Fruits</h4>
          </div>
          <BoardIngredientSelect
            ingredientType="fruit"
            setIngredients={handleSetFruits}
            selectedIngredients={fruits}
          />
        </fieldset>

        <button
          className="mediumButton create__button">
            <>Show me the honey.</>
        </button>

        <fieldset className="fieldset--margin">
          <div className="form--center">
            <h4 className="form--label divider">Jams + Spreads</h4>
          </div>
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

