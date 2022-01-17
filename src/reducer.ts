import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Actions } from '@/action'
import { Class, Student } from '@/repositories'

export interface State {
  classes: Array<Class>
  studentId: string
  students: Array<Student>
}

export const initialState: State = {
  classes: [],
  studentId: '',
  students: [],
}

/** Return new state */
export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.fetchAllClasses, (state, classes) => {
    return {
      ...state,
      classes
    }
  })
  .case(Actions.fetchStudent, (state, studentId) => {
    return {
      ...state,
      studentId
    }
  })
  .case(Actions.fetchAllStudents, (state, students) => {
    return {
      ...state,
      students
    }
  })
