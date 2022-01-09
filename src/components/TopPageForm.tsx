import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer'
import { TextInput } from './TextInput'
import { RadioInput } from './RadioInput'
import { ShowState } from './ShowState'
import { SubmitButton } from './SubmitButton'

type ContainerProps = {
  inputValue: string
  selectedValue: string
  clickCount: number
}

type Props = ContainerProps & TopPageHandler

export const TopPageForm: React.FC<Props> = props => {
  return(
    <>
      <TextInput
        title='Input'
        inputValue={props.inputValue}
        onChangeValue={props.handleOnChangeValue}
      />
      <RadioInput
        title='Radio'
        selectedValue={props.selectedValue}
        onChangeValue={props.handleOnSelectValue}
      />
      <SubmitButton
        title='Click Me'
        onClick={props.handleOnClick}
      />
      <ShowState
        inputValue={props.inputValue}
        selectedValue={props.selectedValue}
        clickCount={props.clickCount}
      />
    </>
  )
}
