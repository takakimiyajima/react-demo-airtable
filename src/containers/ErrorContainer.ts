import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ErrorPage } from "@/pages/error";
import { AppState } from "@/store";
import { clearAll } from "@/action";

export type ErrorPageHandler = {
  onClearAll: () => void;
};

const mapStateToProps = (appState: AppState) => {
  return {
    error: appState.state.error,
  };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const mapDispatchToProps = (dispatch: Dispatch): ErrorPageHandler => {
  return {
    onClearAll: () => {
      dispatch<any>(clearAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
