import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Actions } from "@/action";
import { Class, Student } from "@/repositories";

export interface State {
  classes: Array<Class>;
  studentID: string;
  students: Array<Student>;
  isFetching: boolean;
}

export const initialState: State = {
  classes: [],
  studentID: "",
  students: [],
  isFetching: false,
};

/** Return new state */
export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.isFetching, (state, isFetching) => {
    return {
      ...state,
      isFetching,
    };
  })
  .case(Actions.fetchAllClasses, (state, classes) => {
    return {
      ...state,
      classes,
      isFetching: false,
    };
  })
  .case(Actions.fetchStudent, (state, studentID) => {
    return {
      ...state,
      studentID,
    };
  })
  .case(Actions.fetchAllStudents, (state, students) => {
    return {
      ...state,
      students,
    };
  })
  .case(Actions.clearAll, (state) => {
    state = initialState;
    return {
      ...state,
    };
  });
