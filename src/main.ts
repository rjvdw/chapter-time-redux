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
type IncrementAction = { type: 'increment' }
type DecrementAction = { type: 'decrement' }

type ActionType = IncrementAction | DecrementAction

// Opzetten store
const store = createStore(
  (state: StateType = INITIAL_STATE, action: ActionType): StateType => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          count: state.count + 1,
        }
      case 'decrement':
        return {
          ...state,
          count: state.count - 1,
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
  })
})

q('.actions > .decrement').addEventListener('click', () => {
  store.dispatch({
    type: 'decrement',
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
