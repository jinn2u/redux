import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { getNextTimeline } from "../../common/mockData";
import store from "../../common/store"
import { addTimeline } from "../../common/timeline/state";
import TimelineList from "../component/TimelineList";

export default function TimelineMain() {
  const timelines = useSelector(state => state.timeline.timelines)
  
  // forceUpdate 함수가 호출될 때마다 컴포넌트가 렌더링되게 하기 위해 만들었다.
  const [, forceUpdate] = useReducer(v => v + 1, 0)
 
  function onAdd() {
    const timeline = getNextTimeline()
    store.dispatch(addTimeline(timeline))
  }
  console.log('timelinemain render')
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  )
}