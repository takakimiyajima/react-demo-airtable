import React from 'react'
import { TopPageHandler } from '@/containers/TopPageContainer'
import { TextInput } from '@/components/TextInput'
import { RadioInput } from '@/components/RadioInput'
import { ShowState } from '@/components/ShowState'
import { SubmitButton } from '@/components/SubmitButton'

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
