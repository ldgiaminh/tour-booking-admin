import {
  LOADING_TOGGLE_ACTION,
  LOGIN_CONFIRMED_ACTION,
  LOGIN_FAILED_ACTION,
  LOGOUT_ACTION,
  SIGNUP_CONFIRMED_ACTION,
  SIGNUP_FAILED_ACTION,
} from "../actions/AuthActions";

const initialState = {
  auth: {
    userName: "",
    token: "",
    expiresIn: "",
  },
  errorMessage: "",
  successMessage: "",
  showLoading: false,
};

export function AuthReducer(state = initialState, action) {
  if (action.type === SIGNUP_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: action.payload,
      errorMessage: "",
      successMessage: "Signup Successfully Completed",
      showLoading: false,
    };
  }
  if (action.type === LOGIN_CONFIRMED_ACTION) {
    return {
      ...state,
      auth: action.payload,
      errorMessage: "",
      successMessage: "Login Successfully Completed",
      showLoading: false,
    };
  }

  if (action.type === LOGOUT_ACTION) {
    return {
      ...state,
      errorMessage: "",
      successMessage: "",
      auth: {
        userName: "",
        token: "",
        expiresIn: "",
      },
    };
  }

  if (
    action.type === SIGNUP_FAILED_ACTION ||
    action.type === LOGIN_FAILED_ACTION
  ) {
    return {
      ...state,
      errorMessage: action.payload,
      successMessage: "",
      showLoading: false,
    };
  }

  if (action.type === LOADING_TOGGLE_ACTION) {
    return {
      ...state,
      showLoading: action.payload,
    };
  }
  return state;
}
