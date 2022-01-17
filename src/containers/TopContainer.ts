import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Top } from "@/pages";
import { AppState } from "@/store";
import {
  isFetching,
  getAllClasses,
  getStudent,
  getAllStudents,
  clearAll,
} from "@/action";

export type TopHandler = {
  onIsFetching: (is: boolean) => void;
  onGetAllClasses: () => void;
  onGetStudent: (studentID: string) => void;
  onGetAllStudents: () => void;
  onClearAll: () => void;
};

const mapStateToProps = (appState: AppState) => {
  return {
    classes: appState.state.classes,
    studentID: appState.state.studentID,
    students: appState.state.students,
    isFetching: appState.state.isFetching,
    error: appState.state.error,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapDispatchToProps = (dispatch: Dispatch): TopHandler => {
  return {
    onIsFetching: (is: boolean) => {
      dispatch<any>(isFetching(is));
    },
    onGetAllClasses: () => {
      dispatch<any>(getAllClasses());
    },
    onGetStudent: (studentID: string) => {
      dispatch<any>(getStudent(studentID));
    },
    onGetAllStudents: () => {
      dispatch<any>(getAllStudents());
    },
    onClearAll: () => {
      dispatch<any>(clearAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
