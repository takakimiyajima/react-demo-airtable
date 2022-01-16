import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SignInHandler } from '@/containers/SignInContainer'
import { TextInput } from '@/components/TextInput'
import { ClassRepository } from '@/repositories/classRepository'

type ContainerProps = {
  inputValue: string
}

type Props = {
  className?: string
} & ContainerProps & SignInHandler

const Component = ({
  className,
  inputValue,
  handleOnChangeValue
}: Props): JSX.Element => {

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const records = await ClassRepository.fetchClass()
        console.log('records')
        console.log(records)
      } catch (error) {
        console.log('error')
      }
    })()
  }, [])

  return (
    <div className={className}>
      <div className='container'>
        <div className='input'>
          <TextInput
            title="Student Name: "
            inputValue={inputValue}
            onChangeValue={handleOnChangeValue}
          />
        </div>
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  position: relative;
  width: 100%;
  height: 100vh;

  > .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    > .input {

    }
  }
`

export const SignIn = (props: Props): JSX.Element => {
  return <StyledComponent {...props} />;
}
