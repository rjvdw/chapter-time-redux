type StateType = {
  count: number,
}

const INITIAL_STATE: StateType = {
  count: 0,
}

type IncrementAction = { type: 'chapter-time/counter/increment', payload: number }
type DecrementAction = { type: 'chapter-time/counter/decrement', payload: number }

type ActionType = IncrementAction | DecrementAction

export default function reducer(state: StateType = INITIAL_STATE, action: ActionType): StateType {
  switch (action.type) {
    case 'chapter-time/counter/increment':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'chapter-time/counter/decrement':
      return {
        ...state,
        count: state.count - action.payload,
      }
    default:
      return state
  }
}

export function increment(by: number): IncrementAction {
  return {
    type: 'chapter-time/counter/increment',
    payload: by,
  }
}

export function decrement(by: number): DecrementAction {
  return {
    type: 'chapter-time/counter/decrement',
    payload: by,
  }
}
