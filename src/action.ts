import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

/** Simple object */
export const TextInputActions = {
  updateTextInputValue: actionCreator<string>('ACTIONS_UPDATE_TEXT_INPUT_VALUE')
}
