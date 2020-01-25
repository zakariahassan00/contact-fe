import axios from "axios";
const token = localStorage.getItem("token");
const ENDPOINT = "";

export const USER_SIGNIN = "user_signIn";
export const USER_SIGNIN_ERROR = "user_signIn_error";
export const login = credentials => async dispatch => {
  try {
    const res = await axios.post(`${ENDPOINT}/login`, credentials);

    // localStorage.setItem('token', res.headers('x-outh-token'))
    dispatch({
      action: USER_SIGNIN,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      action: USER_SIGNIN_ERROR,
      payload: "Incorrect Email or Password"
    });
  }
};

export const USER_REGISTER = "user_register";
export const USER_REGISTER_ERROR = "user_register_error";
export const register = credentials => async dispatch => {
  try {
    const res = await axios.post(`${ENDPOINT}/register`, credentials);

    // localStorage.setItem('token', res.headers('x-outh-token'))
    dispatch({
      action: USER_REGISTER,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      action: USER_REGISTER_ERROR,
      payload: "Incorrect Email or Password"
    });
  }
};
