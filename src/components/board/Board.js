/* This will export clickable boards to BoardList. When clicked, they will go to applicable BoardDetail */

import React from "react"
import Pear from '../../images/noun_Pear_3997576.png'
import Trash from '../../images/noun_Trash_453943.png'

export const Board = (props) => {

  return (
    <>
      <section className="board">
        <div className="board__container">
          <img className="board__image" key={props.board.id} src={props.board.image.url} alt="" />
          <h5 className="board__title">{props.board.title}</h5>
          <div className="board__buttons">
            <img className="perfect__pair board__button" src={Pear} alt="" />
            <img className="trash board__button" src={Trash} alt="" />
          </div>
        </div>

      </section>
    </>
  )

}