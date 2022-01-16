import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '@/store'
import { TextInputActions } from '@/action'
import { SignIn } from '@/pages/signIn'

export type SignInHandler = {
  handleOnChangeValue: (value: string) => void
}

const mapStateToProps = (appState: AppState) => {
  return {
    inputValue: appState.state.inputValue
  }
}

const mapDispatchToProps = (dispatch: Dispatch): SignInHandler => {
  return {
    handleOnChangeValue: (value: string) => {
      dispatch(TextInputActions.updateTextInputValue(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
