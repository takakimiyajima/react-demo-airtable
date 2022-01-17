import { reducerWithInitialState } from "typescript-fsa-reducers"
import { Actions } from "@/action"
import { Class, Student } from "@/repositories"

export interface State {
  classes: Array<Class>
  studentID: string
  students: Array<Student>
}

export const initialState: State = {
  classes: [],
  studentID: "",
  students: [],
}

/** Return new state */
export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.fetchAllClasses, (state, classes) => {
    return {
      ...state,
      classes,
    }
  })
  .case(Actions.fetchStudent, (state, studentID) => {
    return {
      ...state,
      studentID,
    }
  })
  .case(Actions.fetchAllStudents, (state, students) => {
    return {
      ...state,
      students,
    }
  })
  .case(Actions.clear, (state) => {
    state = initialState
    return {
      ...state,
    }
  })
