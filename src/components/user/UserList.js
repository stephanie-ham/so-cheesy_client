import React, { useContext, useEffect } from "react"
import { UserCard } from "./UserCard"
import { UserContext } from "./UserProvider"
import "../../styles/list.css"

export const UserList = () => {
  const { users, getUsers } = useContext(UserContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h2 className="page__title"> ADD FRIENDS </h2>
      <section className="user__list">
        {
          users.filter(user => user.id !== currentUser).map(
            user => {
              return (
                <section className="user">
                  <UserCard
                    key={user.id}
                    user={user} />
                </section>
              )
            })
        }
      </section>
    </>
  )
}