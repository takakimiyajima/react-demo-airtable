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
  onIsFetching: () => void;
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
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapDispatchToProps = (dispatch: Dispatch): TopHandler => {
  return {
    onIsFetching: () => {
      dispatch<any>(isFetching());
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
