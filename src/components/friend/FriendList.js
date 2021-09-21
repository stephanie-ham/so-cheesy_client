import React, { useContext, useEffect } from "react"
import { UserCard } from "../user/UserCard"
import { UserContext } from "../user/UserProvider"
import { FriendContext } from "./FriendProvider"
import "../../styles/list.css"

export const FriendList = () => {
  const { getUsers } = useContext(UserContext)
  const { friends, getFriends } = useContext(FriendContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));

  useEffect(() => {
    getFriends().then(getUsers())
  }, [])

  return (
    <>
      <h2 className="page__title"> YOUR FRIENDS </h2>
      <section className="friend__list">
        {
          friends.map(friend => {
            if (currentUser === friend.currentUserId) {
              return (
                <section className="friend">
                  <UserCard
                    key={friend.id}
                    user={friend.user}
                    friendId={friend.id} />
                </section>
              )
            }
          })
        }
      </section>
    </>
  )
}