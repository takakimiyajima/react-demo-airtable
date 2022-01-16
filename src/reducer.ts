import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { TextInputActions } from './action'

export interface State {
  inputValue: string
}

export const initialState: State = {
  inputValue: '',
}

/** Return new state */
export const Reducer = reducerWithInitialState(initialState)
  .case(TextInputActions.updateTextInputValue, (state, inputValue) => {
    return {
      ...state,
      inputValue
    }
  })
