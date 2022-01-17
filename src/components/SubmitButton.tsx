import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  title: string
  onClick: () => void
}

type Props = {
  className?: string
} & ContainerProps

const Component =({
  className,
  onClick,
  title,
}: Props): JSX.Element => {
  return(
    <div className={className}>
      <button onClick={() => onClick()}>{title}</button>
    </div>
  )
}

const StyledComponent = styled(Component)``

export const SubmitButton = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />
}