import React from "react"
import { Route } from "react-router-dom"
import { IngredientProvider } from "./ingredient/IngredientProvider"
import { CheeseList } from "./ingredient/CheeseList"
import { MeatList } from "./ingredient/MeatList"
import { FruitList } from "./ingredient/FruitList"
import { NutList } from "./ingredient/NutList"
import { JamList } from "./ingredient/JamList"
import { Header } from "./header/Header"
import { BoardList } from "./board/BoardList"
import { BoardForm } from "./board/BoardForm"
import { BoardProvider } from "./board/BoardProvider"
import "./ingredient/ingredient.css"
import "./board/boardform.css"


export const ApplicationViews = () => {
  return (
    <>
      <BoardProvider>
        <IngredientProvider>
          <Route className="feed__page" exact path="/">
            <section className="feed__components">
              <Header />
              <div className="padding">
                <BoardList />
              </div>
            </section>
          </Route>
          <section className="padding">
            <Route exact path="/create">
              <BoardForm />
            </Route>
            <Route exact path="/ingredients/cheeses">
              <CheeseList />
            </Route>
            <Route exact path="/ingredients/meats">
              <MeatList />
            </Route>
            <Route exact path="/ingredients/fruits">
              <FruitList />
            </Route>
            <Route exact path="/ingredients/nuts">
              <NutList />
            </Route>
            <Route exact path="/ingredients/jams">
              <JamList />
            </Route>
          </section>
        </ IngredientProvider>
      </ BoardProvider>
    </>
  )
}