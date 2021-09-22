import React from "react"
import { Route } from "react-router-dom"
import { Header } from "./header/Header"
import { FriendProvider } from "./friend/FriendProvider"
import { FriendList } from "./friend/FriendList"
import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"
import { IngredientProvider } from "./ingredient/IngredientProvider"
import { IngredientList } from "./ingredient/IngredientList"
import { BoardProvider } from "./board/BoardProvider"
import { BoardCreate } from "./board/BoardCreate"
import { BoardList } from "./board/BoardList"
import { BoardDetail } from "./board/BoardDetail"
import HeaderHome from "../images/header-home.jpg"
import HeaderCreate from "../images/header-create.jpg"
import HeaderFriend from "../images/header-friend.jpg"
import "./board/boardform.css"
import "../styles/button.css"

import { FormList } from "./form/FormList"
import { FormHeader } from "./form/FormHeader"
// import ScrollToTop from './components/ScrollToTop';

export const ApplicationViews = () => {
  return (
    <>
      <BoardProvider>
        <IngredientProvider>
          <UserProvider>
            <FriendProvider>
              <section className="header__page">
                <Route exact path="/">
                  <Header imageSource={HeaderHome} />
                  <BoardList className="padding main__component" />
                </Route>
                <Route exact path="/boards/:userId(\d+)">
                  <Header imageSource={HeaderHome} />
                  <BoardList className="padding main__component" />
                </Route>
                <Route path="/create">
                  <Header imageSource={HeaderCreate} />
                  <BoardCreate className="padding main__component" />
                </Route>
                <Route path="/friends">
                  <Header imageSource={HeaderFriend} />
                </Route>
                <Route path="/TESTform">
                  <Header imageSource={HeaderCreate} />
                  <FormHeader className="padding main__component" />
                </Route>
                <section className="friend__components">
                  <Route exact path="/friends">
                    <div className="friend__component">
                      <FriendList />
                    </div>
                    <div className="user__sidebar">
                      <UserList />
                    </div>
                  </Route>
                </section>
              </section>
              <section className="padding">
                <Route path="/TESTform/create">
                  <FormList />
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
                <Route exact path="/ingredients/nuts">
                  <IngredientList type="nut" title="Nuts" />
                </Route>
                <Route exact path="/ingredients/fruits">
                  <IngredientList type="fruit" title="Fruits" />
                </Route>
                <Route exact path="/ingredients/jams+spreads">
                  <IngredientList type="jam+spread" title="Jams + Spreads" />
                </Route>
              </section>
            </ FriendProvider>
          </ UserProvider>
        </ IngredientProvider>
      </ BoardProvider>
    </>
  )
}