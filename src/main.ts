import { combineReducers, createStore } from 'redux'
import counter, { decrement, increment } from './module/counter'
import user, { setUserName } from './module/user'
import './style.sass'

const reducer = combineReducers({
  counter,
  user,
})

// Opzetten store
const store = createStore(reducer)

// Registreer acties
q('.actions > .increment').addEventListener('click', () => {
  store.dispatch(increment(getInputValue()))
})

q('.actions > .decrement').addEventListener('click', () => {
  store.dispatch(decrement(getInputValue()))
})

q('#user-name').addEventListener('input', event => {
  const target = event.target as HTMLInputElement

  store.dispatch(setUserName(target.value))
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
