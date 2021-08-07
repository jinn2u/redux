import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import timelineReducer from "../timeline/state"
import friendReducer from "../friend/state/index"
import createSagaMiddleware from "@redux-saga/core";
import { all } from "@redux-saga/core/effects";
import timelineSaga from "../timeline/state/saga"

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
function* rootSaga(){
  yield all([timelineSaga()])
}
sagaMiddleware.run(rootSaga)
export default store