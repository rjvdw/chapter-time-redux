import { createStore } from 'redux'
import './style.sass'

// Definitie van de state
type StateType = {
  counter: {
    count: number,
  },
  user: {
    name: string | null,
  },
}
const INITIAL_STATE: StateType = {
  counter: {
    count: 0,
  },
  user: {
    name: null,
  },
}

// Definities van de mogelijke acties
type IncrementAction = { type: 'increment', payload: number }
type DecrementAction = { type: 'decrement', payload: number }
type SetUserName = { type: 'set-user-name', payload: string }

type ActionType = IncrementAction | DecrementAction | SetUserName

// Opzetten store
const store = createStore(
  (state: StateType = INITIAL_STATE, action: ActionType): StateType => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          counter: {
            ...state.counter,
            count: state.counter.count + action.payload,
          },
        }
      case 'decrement':
        return {
          ...state,
          counter: {
            ...state.counter,
            count: state.counter.count - action.payload,
          },
        }
      case 'set-user-name':
        return {
          ...state,
          user: {
            ...state.user,
            name: action.payload,
          },
        }
      default:
        return state
    }
  }
)

// Registreer acties
q('.actions > .increment').addEventListener('click', () => {
  store.dispatch({
    type: 'increment',
    payload: getInputValue(),
  })
})

q('.actions > .decrement').addEventListener('click', () => {
  store.dispatch({
    type: 'decrement',
    payload: getInputValue(),
  })
})

q('#user-name').addEventListener('input', event => {
  const target = event.target as HTMLInputElement

  store.dispatch({
    type: 'set-user-name',
    payload: target.value,
  })
})

// Met store.subscribe laat je weten dat je geïnteresseerd bent in wijzigingen aan de state
store.subscribe(writeStateToDom)
writeStateToDom()


function writeStateToDom() {
  q('#output').innerHTML = JSON.stringify(store.getState(), null, 2)
}

function q(id: string): HTMLElement {
  return document.querySelector(id) as HTMLElement
}

function getInputValue(): number {
  return parseInt((q('#input-value') as HTMLInputElement).value)
}
