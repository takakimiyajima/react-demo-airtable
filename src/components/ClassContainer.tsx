import React from 'react'
import styled from 'styled-components'
import { ClassContent } from '@/components/ClassContent'

type ClassInfo = {
  classRoom: string
  names: string
}

type ContainerProps = {
  classInfo: Array<ClassInfo>
}

type Props = {
  className?: string
} & ContainerProps

const Component = ({
  className,
  classInfo
}: Props): JSX.Element => {
  return (
    <div className={className}>
      {classInfo.map(({ classRoom, names }, index) => (
        <div key={`classRoom-${index}`} className='container'>
          <ClassContent className='content' title='Name' detail={classRoom} />
          <ClassContent className='content' title='Students' detail={names} />
        </div>
      ))}
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 30%;

  > .container {
    margin-top: 14px;
    padding: 14px;
    border: 2px solid #D5D4D5;
    border-radius: 4px;

    &:first-child {
      margin-top: 0;
    }

    > .content {
      margin-top: 14px;
      
      &:first-child {
        margin-top: 0;
      }
    }
  }
`

export const ClassContainer = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />
}
