import { ThunkAction } from 'redux-thunk'
import { Car, fetchCarsNok, fetchCarsOk } from '../mocks/cars'

type StateType = {
  loading: boolean,
  initialized: boolean
  error: string | null,
  data: Car[],
}

const INITIAL_STATE: StateType = {
  loading: false,
  initialized: false,
  error: null,
  data: [],
}

type LOADING_ACTION = { type: 'chapter-time/cars/loading' }

type LOADED_ACTION = {
  type: 'chapter-time/cars/loaded',
  payload: Car[],
}

type ERROR_ACTION = {
  type: 'chapter-time/cars/error',
  payload: Error,
}

type ActionType = LOADING_ACTION | LOADED_ACTION | ERROR_ACTION

export default function reducer(state: StateType = INITIAL_STATE, action: ActionType): StateType {
  switch (action.type) {
    case 'chapter-time/cars/loading':
      return {
        ...state,
        loading: true,
      }
    case 'chapter-time/cars/loaded':
      return {
        ...state,
        loading: false,
        initialized: true,
        error: null,
        data: action.payload,
      }
    case 'chapter-time/cars/error':
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }
    default:
      return state
  }
}

export function fetchCars(ok: boolean): ThunkAction<void, StateType, Error, ActionType> {
  return async dispatch => {
    dispatch({ type: 'chapter-time/cars/loading' })

    try {
      const cars = await (ok ? fetchCarsOk : fetchCarsNok)()
      dispatch({
        type: 'chapter-time/cars/loaded',
        payload: cars,
      })
    } catch (err) {
      dispatch({ type: 'chapter-time/cars/error', payload: err })
    }
  }
}
