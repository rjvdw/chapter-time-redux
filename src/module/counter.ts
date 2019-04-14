type StateType = {
  count: number,
}

const INITIAL_STATE: StateType = {
  count: 0,
}

type IncrementAction = { type: 'increment', payload: number }
type DecrementAction = { type: 'decrement', payload: number }

type ActionType = IncrementAction | DecrementAction

export default function reducer(state: StateType = INITIAL_STATE, action: ActionType): StateType {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'decrement':
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
    type: 'increment',
    payload: by,
  }
}

export function decrement(by: number): DecrementAction {
  return {
    type: 'decrement',
    payload: by,
  }
}
