import { connect } from "react-redux"
import { Dispatch } from "redux"
import { Top } from "@/pages"
import { AppState } from "@/store"
import {
  getAllClasses,
  getStudent,
  getAllStudents,
  clearAll
} from "@/action"

export type TopHandler = {
  onGetAllClasses: () => Promise<void>
  onGetStudent: (studentID: string) => Promise<void>
  onGetAllStudents: () => Promise<void>
  onClearAll: () => void
}

const mapStateToProps = (appState: AppState) => {
  return {
    classes: appState.state.classes,
    studentID: appState.state.studentID,
    students: appState.state.students,
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapDispatchToProps = (dispatch: Dispatch): TopHandler => {
  return {
    onGetAllClasses: async () => {
      dispatch<any>(await getAllClasses())
    },
    onGetStudent: async (studentID: string) => {
      dispatch<any>(await getStudent(studentID))
    },
    onGetAllStudents: async () => {
      dispatch<any>(await getAllStudents())
    },
    onClearAll: () => {
      dispatch<any>(clearAll())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)
