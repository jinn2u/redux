import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { actions } from "../state/index";

export default function TimelineMain() {
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);
  // forceUpdate 함수가 호출될 때마다 컴포넌트가 렌더링되게 하기 위해 만들었다.
  const dispatch = useDispatch();
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  console.log(isLoading, "error");
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송중... </p>}
      {!!error && <p>에러발생: {error}</p>}
    </div>
  );
}
