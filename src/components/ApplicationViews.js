import React from "react"
import { Route } from "react-router-dom"
// import { CheeseList } from "./cheese/CheeseList"

export const ApplicationViews = () => {
  return (
    <>
      <section className="margins">
        <Route exact path="/"></Route>
        <Route exact path="/cheeses">
        </Route>
        <Route path="/meats"></Route>
        <Route path="/fruits"></Route>
        <Route path="/nuts"></Route>
        <Route path="/jams"></Route>
      </section>
    </>
  )
}