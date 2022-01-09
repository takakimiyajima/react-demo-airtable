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

export class TopPageForm extends React.Component<Props> {
  render() {
    return(
      <>
        <TextInput
          title='Input'
          inputValue={this.props.inputValue}
          onChangeValue={this.props.handleOnChangeValue}
        />
        <RadioInput
          title='Radio'
          selectedValue={this.props.selectedValue}
          onChangeValue={this.props.handleOnSelectValue}
        />
        <SubmitButton
          title='Click Me'
          onClick={this.props.handleOnClick}
        />
        <ShowState
          inputValue={this.props.inputValue}
          selectedValue={this.props.selectedValue}
          clickCount={this.props.clickCount}
        />
      </>
    )
  }
}
