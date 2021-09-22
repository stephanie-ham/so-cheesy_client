import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { FriendContext } from "../friend/FriendProvider"
import { UserContext } from "./UserProvider"


export const UserButton = (props) => {
  const { friends, addFriend, removeFriend, getFriends } = useContext(FriendContext)
  const { getUsers } = useContext(UserContext)
  const [friend, setFriend] = useState([{ user: {} }])
  // const { friendId } = useParams();
  const history = useHistory();
  const currentUser = parseInt(sessionStorage.getItem("block-cheese-app_user"));

  useEffect(() => {
    getFriends().then(getUsers())
      .then(() => {
        const thisFriend = friends.find(f => f.id === parseInt(props.friendId)) || { user: {} }
        setFriend(thisFriend)
      })
  }, [props.friendId])

  const handleSaveFriend = (user) => {
    addFriend({
      userId: parseInt(props.user.id),
      currentUserId: currentUser
    })
      .then(() => history.push(`/friends`))
  }

  const addFriendButton = () => {
    return (
      <button className="user__button small__button" onClick={event => {
        event.preventDefault()
        handleSaveFriend()
      }}>
        Add Friend
      </button>
    )
  }

  const handleRemoveFriend = () => {
    removeFriend(props.friendId)
      .then(() => {
        history.push("/friends")
      })
  }

  const removeFriendButton = () => {
    return (
      <button className="user__button small__button" onClick={event => {
        event.preventDefault()
        handleRemoveFriend()
      }}>
        Unfriend
      </button>
    )
  }

  return (
    <>
      {props.isFriend ? removeFriendButton() : addFriendButton()}
    </>
  )
}

// const viewButton = () => {
//   return (
//     <button 
//       onClick={() => history.push(`/boards/${props.user.id}`)}
//       className="user__button small__button" 
//     >
//       View
//     </button>
//   )
// }