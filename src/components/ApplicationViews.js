import React from "react"
import { Route } from "react-router-dom"
import { Header } from "./header/Header"
import { IngredientProvider } from "./ingredient/IngredientProvider"
import { IngredientList } from "./ingredient/IngredientList"
/* delete these if IngredientList is confirmed way to go */
// import { CheeseList } from "./ingredient/CheeseList"
// import { MeatList } from "./ingredient/MeatList"
// import { FruitList } from "./ingredient/FruitList"
// import { NutList } from "./ingredient/NutList"
// import { JamList } from "./ingredient/JamList"
import { BoardProvider } from "./board/BoardProvider"
import { BoardCreate } from "./board/BoardCreate"
import { BoardForm } from "./board/BoardForm"
import { BoardList } from "./board/BoardList"
import { BoardDetail } from "./board/BoardDetail"
import HeaderHome from "../images/header-home.jpg"
import HeaderCreate from "../images/header-create.jpg"
import "./ingredient/ingredient.css"
import "./board/boardform.css"
import "../styles/button.css"

import { FormTest } from "./board/TestBoardForm"


export const ApplicationViews = () => {
  return (
    <>
      <BoardProvider>
        <IngredientProvider>

          <section className="header__page">
            <Route exact path="/">
              <Header
                imageSource={HeaderHome} className="header__component"
              />
              <BoardList className="padding" />
            </Route>
            <Route path="/create">
              <Header
                imageSource={HeaderCreate} className="header__component"
              />
              <BoardCreate className="padding" />
            </Route>
          </section>

          <section className="padding">
            <Route path="/create/form">
              <BoardForm />
            </Route>
            <Route exact path="/board/detail/:boardId(\d+)">
              <BoardDetail />
            </Route>
            <Route exact path="/ingredients/cheeses">
              <IngredientList type="cheese" title="Cheeses" />
            </Route>
            <Route exact path="/ingredients/meats">
              <IngredientList type="meat" title="Meats" />
            </Route>
            <Route exact path="/ingredients/fruits">
              <IngredientList type="fruit" title="Fruits" />
            </Route>
            <Route exact path="/ingredients/nuts">
              <IngredientList type="nut" title="Nuts" />
            </Route>
            <Route exact path="/ingredients/jams+spreads">
              <IngredientList type="jam+spread" title="Jams + Spreads" />
            </Route>
            <Route exact path="/test">
              <FormTest />
            </Route>
          </section>

        </ IngredientProvider>
      </ BoardProvider>
    </>
  )
}