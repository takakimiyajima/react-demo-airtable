import { Dispatch } from 'redux'
import { actionCreatorFactory } from 'typescript-fsa'
import {
  Class,
  ClassRepository,
  Student,
  StudentRepository
} from '@/repositories'

export const DISPATCH_STRING = {
  FETCH_ALL_CLASSES: 'FETCH_ALL_CLASSES',
  FETCH_STUDENT: 'FETCH_STUDENT',
  FETCH_ALL_STUDENTS: 'FETCH_ALL_STUDENTS',
  CLEAR_STATE: 'CLEAR_STATE',
}

const actionCreator = actionCreatorFactory()

export const Actions = {
  fetchAllClasses: actionCreator<Array<Class>>(DISPATCH_STRING.FETCH_ALL_CLASSES),
  fetchStudent: actionCreator<string>(DISPATCH_STRING.FETCH_STUDENT),
  fetchAllStudents: actionCreator<Array<Student>>(DISPATCH_STRING.FETCH_ALL_STUDENTS),
  clearAll: actionCreator(DISPATCH_STRING.CLEAR_STATE),
}

export const getAllClasses = () => {
  return async (dispatch: Dispatch) => {
    const allClasses = await ClassRepository.fetchAllClasses()
    if (allClasses) {
      dispatch(Actions.fetchAllClasses(allClasses))
    }
  }
}

export const getStudent = (studentName: string) => {
  return async (dispatch: Dispatch) => {
    const studentID = await StudentRepository.fetchStudent(studentName)
    if (studentID) {
      dispatch(Actions.fetchStudent(studentID))
    }
  }
}

export const getAllStudents = () => {
  return async (dispatch: Dispatch) => {
    const allStudents = await StudentRepository.fetchAllStudents()
    if (allStudents) {
      dispatch(Actions.fetchAllStudents(allStudents))
    }
  }
}

export const clearAll = () => {
  return async (dispatch: Dispatch) => {
    dispatch(Actions.clearAll())
  }
}

// TODO: error追加