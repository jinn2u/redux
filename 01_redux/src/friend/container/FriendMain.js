import React, { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getNextFriend } from "../../common/mockData";
import store from "../../common/store"
import FriendList from "../component/FriendList";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common"
import NumberSelect from "../component/NumberSelect"
import { getAgeLimit, getFreindsWithAgeShowLimit, getFriendsWithAgeLimit, getShowLimit } from "../state/selector";
import { actions } from "../state";

 

export default function FriendMain() {
  const [ageLimit, showLimit, friendsWithAgeLimit, friendsWithAgeShowLimit] = useSelector(state => [
    getAgeLimit(state),
    getShowLimit(state),
    getFriendsWithAgeLimit(state),
    getFreindsWithAgeShowLimit(state)
  ], shallowEqual)
  const dispatch = useDispatch()
  function onAdd() {
    const friend = getNextFriend()
    dispatch(actions.addFriend(friend))
  }
  console.log('FriendMain render')
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={v => dispatch(actions.setValue('ageLimit', v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={v => dispatch(actions.setValue('showLimit', v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기(연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  )
}
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT]
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT]