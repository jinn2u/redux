import { useEffect, useReducer } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../../common/friend/state";
import { getNextFriend } from "../../common/mockData";
import store from "../../common/store"
import FriendList from "../component/FriendList";

export default function FriendMain() {
  const friends = useSelector(state => state.friend.friends)
  const dispatch = useDispatch()
  function onAdd() {
    const friend = getNextFriend()
    dispatch(addFriend(friend))
  }
  console.log('FriendMain render')
  console.log(store.getState(),"friends")
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  )
}