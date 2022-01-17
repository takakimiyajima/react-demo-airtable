import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Top } from "@/pages";
import { AppState } from "@/store";
import { getAllClasses, getStudent, getAllStudents } from "@/action";

export type TopHandler = {
  onGetAllClasses: () => void;
  onGetStudent: (studentID: string) => void;
  onGetAllStudents: () => void;
};

const mapStateToProps = (appState: AppState) => {
  return {
    classes: appState.state.classes,
    studentID: appState.state.studentID,
    students: appState.state.students,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): TopHandler => {
  return {
    onGetAllClasses: () => {
      dispatch<any>(getAllClasses());
    },
    onGetStudent: (studentID: string) => {
      dispatch<any>(getStudent(studentID));
    },
    onGetAllStudents: () => {
      dispatch<any>(getAllStudents());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
