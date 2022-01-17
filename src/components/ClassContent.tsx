import React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  title: string
  detail: string
}

type Props = {
  className?: string
} & ContainerProps

const Component = ({
  className,
  title,
  detail
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <div className='title'>{title}</div>
      <div className='detail'>{detail}</div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  .title {
    font-weight: bold;
  }

  .detail {
    margin-top: 10px;
  }
`

export const ClassContent = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />
}
