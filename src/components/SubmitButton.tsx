import React from 'react'

type Props = {
  title: string
  onClick: Function
}

export const SubmitButton: React.FC<Props> = props => {
  return(
    <div>
      <button onClick={() => props.onClick()}>{props.title}</button>
    </div>
  )
}