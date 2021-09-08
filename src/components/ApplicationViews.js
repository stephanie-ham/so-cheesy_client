import React from "react"
import { Route } from "react-router-dom"
import { IngredientProvider } from "./ingredient/IngredientProvider"
import { CheeseList } from "./ingredient/CheeseList"
import { MeatList } from "./ingredient/MeatList"
import { FruitList } from "./ingredient/FruitList"
import { NutList } from "./ingredient/NutList"
import { JamList } from "./ingredient/JamList"
import { BoardForm } from "./board/BoardForm"
import { BoardIntro } from "./board/BoardIntro"
import { Header } from "./header/Header"
import "./ingredient/Ingredient.css"

export const ApplicationViews = () => {
  return (
    <>
      <IngredientProvider>
        <Route className="home__page" exact path="/">
          <section className="home__components">
              <Header />
            <div className="padding">
              <BoardIntro />
              <BoardForm />
            </div>
          </section>
        </Route>
        <section className="padding">
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
    </>
  )
}