import { useEffect, useReducer } from "react"
import { addFriend } from "../../common/friend/state";
import { getNextFriend } from "../../common/mockData";
import store from "../../common/store"
import FriendList from "../component/FriendList";

export default function FriendMain() {
  const [, forceUpdate] = useReducer(v => v+1, 0)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate());
    return () => unsubscribe()
  },[])
  function onAdd() {
    const friend = getNextFriend()
    store.dispatch(addFriend(friend))
  }
  console.log('FriendMain render')
  const friends = store.getState().friend.friends
  console.log(store.getState(),"friends")
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  )
}