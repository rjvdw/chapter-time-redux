import { createStore } from 'redux'
import './style.sass'

// Definitie van de state
type StateType = {}
const INITIAL_STATE: StateType = {}

// Definities van de mogelijke acties
type ActionType = any

// Opzetten store
const store = createStore(
  (state: StateType = INITIAL_STATE, action: ActionType): StateType => {
    switch (action.type) {
      default:
        return state
    }
  }
)

// Met store.subscribe laat je weten dat je geïnteresseerd bent in wijzigingen aan de state
store.subscribe(writeStateToDom)
writeStateToDom()


function writeStateToDom() {
  const output = document.getElementById('output') as HTMLElement
  output.innerHTML = JSON.stringify(store.getState(), null, 2)
}
