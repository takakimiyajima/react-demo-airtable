import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {}

export const initialState: State = {}

export const Reducer = reducerWithInitialState(initialState)
