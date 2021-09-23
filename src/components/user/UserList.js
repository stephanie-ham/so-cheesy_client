import React, { useContext, useEffect } from "react"
import { UserCard } from "./UserCard"
import { Card } from "../card/Card"
import { UserButton } from "./UserButton"
import { UserContext } from "./UserProvider"
import { FriendContext } from "../friend/FriendProvider"
import "../../styles/list.css"

export const UserList = (props) => {
  const { users, getUsers } = useContext(UserContext)
  const { friends, getFriends } = useContext(FriendContext)
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));

  useEffect(() => {
    getUsers().then(getFriends())
  }, [])

  const isUserFriend = (user) => {
    return friends.find((friend) => (
      currentUser === friend.currentUserId &&
      user.id === friend.userId
    ))
  }

  const findFriendId = (user) => {
    let friendId

    friends.map((friend) => {
      if (currentUser === friend.currentUserId &&
        user.id === friend.userId) {
        friendId = friend.id
      }
    })
    return friendId
  }

  const findUserId = (user) => {
    let userId

    friends.map((friend) => {
      if (currentUser === friend.currentUserId &&
        user.id === friend.userId) {
        userId = friend.userId
      }
    })
    return userId
  }

  return (
    <>
      <h2 className="page__title"> ADD FRIENDS </h2>
      <section className="user__list padding-bottom">
        {
          users.filter(user =>  user.id !== currentUser &&
            user.id !== parseInt(findUserId(user))).map(
            user => {
                return (
                  <section className="user">
                    <UserCard
                      key={`user--${user.id}`}
                      user={user}
                      isFriend={isUserFriend(user)}
                      friendId={findFriendId(user)}
                    />
                  </section>
                )
            })
        }
      </section>
    </>
  )
}