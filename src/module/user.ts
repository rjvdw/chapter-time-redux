type StateType = {
  name: string | null,
}

const INITIAL_STATE: StateType = {
  name: null,
}

type SetUserName = { type: 'chapter-time/user/set-user-name', payload: string }

type ActionType = SetUserName

export default function reducer(state: StateType = INITIAL_STATE, action: ActionType): StateType {
  switch (action.type) {
    case 'chapter-time/user/set-user-name':
      return {
        ...state,
        name: action.payload,
      }
    default:
      return state
  }
}

export function setUserName(to: string): SetUserName {
  return {
    type: 'chapter-time/user/set-user-name',
    payload: to,
  }
}
