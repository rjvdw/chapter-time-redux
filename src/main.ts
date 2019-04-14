import { createStore } from 'redux'
import './style.sass'

// Definitie van de state
type StateType = {
  count: number,
}
const INITIAL_STATE: StateType = {
  count: 0,
}

// Definities van de mogelijke acties
type IncrementAction = { type: 'increment', payload: number }
type DecrementAction = { type: 'decrement', payload: number }

type ActionType = IncrementAction | DecrementAction

// Opzetten store
const store = createStore(
  (state: StateType = INITIAL_STATE, action: ActionType): StateType => {
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
