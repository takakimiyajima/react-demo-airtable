import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Reducer, State } from '@/reducer'

export type AppState = {
  state: State
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers<AppState>({
    state: Reducer
  }),
  storeEnhancers(applyMiddleware(thunk, logger))
)

export default store
