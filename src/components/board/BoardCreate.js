import React, { useState } from "react"
import "./boardform.css"
import { useHistory, Redirect } from "react-router-dom"

export const BoardCreate = () => {
  const [disabled, setDisabled] = useState(false)
  // const history = useHistory();

  const handleOpenForm = () => {
    setDisabled(true)
    return <Redirect push to="/TESTform/create" />
  }

  return (
    <>
      <section className="create">
        <h2 className="page__title">Build your Board</h2>

        <div className="page__subtitle">
          <p className="create__subtitle">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        </div>
        <button
          className="mediumButton create__button"
          disabled={disabled}
          onClick={handleOpenForm}>
          {disabled ? <>Looking Gouda!</> : <>Let's Jam!</>}
        </button>
      </section>
    </>
  )
}