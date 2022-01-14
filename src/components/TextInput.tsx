import React from 'react'

type Props = {
  title: string
  inputValue: string
  onChangeValue: (value: string) => void
}

export const TextInput: React.FC<Props> = props => {
  return (
    <div>
      <span>{props.title}</span>
      <input
        name={props.title}
        type='text'
        value={props.inputValue}
        onChange={(e) => props.onChangeValue(e.target.value)}
      />
    </div>
  )
}
