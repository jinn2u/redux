import { createReducer, createValueAction, setValueReducer } from "../../common/redux-helper"
import { MAX_AGE_LIMIT } from "../common"
import { MAX_SHOW_LIMIT } from "../common"

const ADD = 'friend/ADD'
const REMOVE = 'friend/REMOVE'
const EDIT = 'friend/EDIT'
const SET_VALUE = 'friend/SET_VALUE'

export const actions = {
  addFriend: friend => ({ type: ADD, friend }),
  removeFriend: friend => ({ type: REMOVE, friend }),
  editFriend: friend => ({ type: EDIT, friend }),
  setValue: createValueAction(SET_VALUE)
}

const INITIAL_STATE = { friends: [], ageLimit: MAX_AGE_LIMIT, showLimit: MAX_SHOW_LIMIT }

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) => state.friends.filter(friend => friend.id !== action.friend.id),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(friend => friend.id === action.friend)
    if (index >= 0) {
      state.friends[index] = action.friend
    }
  },
  [SET_VALUE]: setValueReducer
})
export default reducer