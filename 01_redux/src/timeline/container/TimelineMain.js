import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { addTimeline } from "../state";
export default function TimelineMain() {
  const timelines = useSelector(state => state.timeline.timelines)

  // forceUpdate 함수가 호출될 때마다 컴포넌트가 렌더링되게 하기 위해 만들었다.
  const dispatch = useDispatch()
  function onAdd() {
    const timeline = getNextTimeline()
    dispatch(addTimeline(timeline))
  }
  console.log('timelinemain render')
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  )
}