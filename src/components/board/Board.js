/* This will export clickable boards to BoardList. When clicked, they will go to applicable BoardDetail */

import React from "react"
import { Link } from 'react-router-dom'
import Pear from '../../images/noun_Pear_3997576.png'
import Trash from '../../images/noun_Trash_453943.png'

export const Board = (props) => {

  return (
    <>
      <section className="board">
        <Link to={`/board/detail/${props.board.id}`} key={props.board.id}>
          <div className="board__container">
            <h5 className="board__title">{props.board.title}</h5>
          </div>
        </Link>
        <div className="board__buttons">
          <img className="perfect__pair board__button" src={Pear} alt="" />
          <img className="trash board__button" src={Trash} alt="" />
        </div>
      </section>
    </>
  )

}