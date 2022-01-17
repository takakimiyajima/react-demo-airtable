import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from '@/components/TextInput'
import { Class } from '@/repositories'
import { TopHandler } from '@/containers/TopContainer'

type ContainerProps = {
  classes: Array<Class>
}

type Props = {
  className?: string
} & ContainerProps & TopHandler

const Component = ({
  className,
  classes,
  onGetAllClasses,
  onGetStudent,
  onGetAllStudents
}: Props): JSX.Element => {
  const [name, setName] = useState('')

  const login = () => {
    onGetAllClasses()
    onGetStudent(name)
    onGetAllStudents()
  }

  return (
    <div className={className}>
      <TextInput
        title="Student Name: "
        inputValue={name}
        onChangeValue={setName}
      />
      <button className='login' onClick={login}>Login</button>
      {classes.length > 0 ? (
        classes.map(({ name }, index) => (
          <p key={`classes-${index}`}>{name}</p>
        ))
      ) : (
        <p>Nothing</p>
      )}
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > .login {
    margin-top: 10px;
  }
`

export const Top = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />
}
