import { all, call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { actions, types } from "./index";
import { callApiLike } from "../../common/api";

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  // positive 방식으로 처리 (api가 성공했다고 가정하고 미리 반영하는 방식이다. )
  yield put(actions.addLike(action.timeline.id, 1));
  yield put(actions.setValue("error", ""));
  try {
    yield call(callApiLike);
  } catch (e) {
    yield put(actions.setValue("error", e));
    yield put(actions.addLike(action.timeline.id, -1));
  }
  yield put(actions.setLoading(false));
}
export default function* () {
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}
//takeLeading 아직 처리중인 액션이 있을 때 그 사이에 들어온 액션은 무시한다.
// takeLatest는 뒤의 우선순의를 높게 준다.(처리중인것을 취소한다.)
