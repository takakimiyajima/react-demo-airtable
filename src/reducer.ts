import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Actions } from "@/action";
import { ClassEntity, StudentEntity, ErrorEntity } from "@/repositories";

export type State = {
  classes: Array<ClassEntity>;
  studentID: string;
  students: Array<StudentEntity>;
  isFetching: boolean;
  error: ErrorEntity | null;
}

export const initialState: State = {
  classes: [],
  studentID: "",
  students: [],
  isFetching: false,
  error: null
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
      ...classes,
      isFetching: false,
    };
  })
  .case(Actions.fetchStudent, (state, studentID) => {
    return {
      ...state,
      ...studentID,
    };
  })
  .case(Actions.fetchAllStudents, (state, students) => {
    return {
      ...state,
      ...students,
    };
  })
  .case(Actions.clearAll, (state) => {
    state = initialState;
    return {
      ...state,
    };
  });
