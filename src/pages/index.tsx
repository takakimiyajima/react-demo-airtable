import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TextInput } from '@/components/TextInput'
import { Class, Student } from '@/repositories'
import { TopHandler } from '@/containers/TopContainer'
import { ClassContainer } from '@/components/ClassContainer'

type ClassInfo = {
  classRoom: string
  names: string
}

type ContainerProps = {
  classes: Array<Class>
  studentID: string
  students: Array<Student>
}

type Props = {
  className?: string
} & ContainerProps & TopHandler

const Component = ({
  className,
  classes,
  studentID,
  students,
  onGetAllClasses,
  onGetStudent,
  onGetAllStudents
}: Props): JSX.Element => {
  const [name, setName] = useState('')
  const [classInfo, setClassInfo] = useState<Array<ClassInfo>>([])

  const login = () => {
    onGetAllClasses()
    onGetStudent(name)
    onGetAllStudents()
  }

  useEffect(() => {
    const filteredClass = classes.filter(({ students }) => students.includes(studentID))
    const classAndStudent: Array<ClassInfo> = filteredClass.flatMap((c) => {
      const names = c.students.map((studentId) => students.find(({ id }) => id === studentId)?.name ?? 'Unknown')

      return {
        classRoom: c.name,
        names: names.join(', ')
      }
    })

    setClassInfo(classAndStudent)
  }, [studentID, classes, students])

  return (
    <div className={className}>
      {classInfo.length > 0 ? (
        <ClassContainer classInfo={classInfo} />
      ) : (
        <>
          <TextInput
            title="Student Name: "
            inputValue={name}
            onChangeValue={setName}
          />
          <button className='login' onClick={login}>Login</button>
        </>
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
