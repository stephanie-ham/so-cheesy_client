import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { BoardContext } from "./BoardProvider"
import { BoardIngredientSelect } from "./BoardIngredientSelect"
import Accordion from '@material-ui/core/Accordion'
import { AccordionDetails, AccordionSummary } from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./boardform.css"

export const BoardForm = () => {
  const [expanded, setExpanded] = React.useState(false);
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

  const handleAccordianChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <Accordion className="accordian" expanded={expanded === 'cheesePanel'} onChange={handleAccordianChange('cheesePanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="cheesePanel-content"
            id="cheesePanel-header">
            <h5>Cheeses</h5>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset>
              <BoardIngredientSelect
                ingredientType="cheese"
                setIngredients={handleSetCheeses}
                selectedIngredients={cheeses}
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordian" expanded={expanded === 'meatPanel'} onChange={handleAccordianChange('meatPanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="meatPanel-content"
            id="meatPanel-header">
            <h5>Meats</h5>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset>
              <BoardIngredientSelect
                ingredientType="meat"
                setIngredients={handleSetMeats}
                selectedIngredients={meats}
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordian" expanded={expanded === 'nutPanel'} onChange={handleAccordianChange('nutPanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="nutPanel-content"
            id="nutPanel-header">
            <h5>Nuts</h5>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset>
              <BoardIngredientSelect
                ingredientType="nut"
                setIngredients={handleSetNuts}
                selectedIngredients={nuts}
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordian" expanded={expanded === 'fruitPanel'} onChange={handleAccordianChange('fruitPanel')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="fruitPanel-content"
            id="fruitPanel-header">
            <h5>Fruits</h5>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset>
              <BoardIngredientSelect
                ingredientType="fruit"
                setIngredients={handleSetFruits}
                selectedIngredients={fruits}
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordian" expanded={expanded === 'jam+spreadPanel'} onChange={handleAccordianChange('jam+spreadPanel')}>
          <AccordionSummary
            className="accordian"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="jam+spreadPanel-content"
            id="jam+spreadPanel-header">
            <h5>Jams + Spreads</h5>
          </AccordionSummary>
          <AccordionDetails className="accordian">
            <fieldset>
              <BoardIngredientSelect
                ingredientType="jam+spread"
                setIngredients={handleSetJams}
                selectedIngredients={jams}
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>

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

