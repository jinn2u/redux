## useSelector를 여러번 사용해야 할 경우엔 어떻게 해야할까?

- shallowEqual을 통하여 해결할 수 있다.

- ```jsx
  const [friends, friends2] = useSelector(state => [state.friend.friends, state.firend.friends2], shallowEqual)
  ```

  - shallowEqual은 레퍼런스를 비교하는것이 아니라 얕은 비교를 하기 때문에 배열안의 두 값이 변경되었을 때만 컴포넌트가 렌더링된다.
  - shallowEqual을 사용하지 않으면 배열이 매번 생성되기 때문에 리덕스에서 액션이 처리될 때마다 렌더링될 수 있다.

### shallowEqual을 반복적으로 사용할 경우

```jsx
function useMySelctor(selector) {
  return useSelector(selector, shallowEqual)
}

function MyComponent() {
  const [value1, value2] = useMySelctor(state => [state.value1, state.value2]) //1
}
```

- customHook을 통하여 해결할 수 있다.
- 이때 주의점은 1부분에서 배열을 반환하지 않고 state.value1을 반환한다면  value1의 모든 속성값을 비교한다. 따라서 가급적 배열로 반환하는것이 좋다.

