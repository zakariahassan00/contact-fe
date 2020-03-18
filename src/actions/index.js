import axios from "axios";
// let token = localStorage.getItem("token");
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTZkNmE2YTExN2ZmYTAwMTcxMmU5YjgiLCJpYXQiOjE1ODQyMzA5MTN9.gUY7qDiQJ0AZzB7bXcQETtb-s0fvdZhVWG6o_v_L9vQ";
const ENDPOINT = "https://serene-ridge-26896.herokuapp.com";

export const GET_USER = "get_user";
export const GET_USER_ERROR = "get_user_error";
export const getUser = () => async dispatch => {
  if (!token) return dispatch({ type: GET_USER, payload: false });

  const res = await axios.get(`${ENDPOINT}/api/users/profile/me`, {
    headers: { "x-auth-token": token }
  });

  // const pic = await axios.get(`${ENDPOINT}/api/image/getProfPic`, {
  //   headers: { "x-auth-token": token }
  // });

  dispatch({
    type: GET_USER,
    payload: res.data
  });
};

export const login = (credentials, redirect) => async dispatch => {
  try {
    const res = await axios.post(`${ENDPOINT}/api/auth/signIn`, credentials);

    dispatch({
      type: GET_USER,
      payload: res.data
    });

    localStorage.setItem("token", res.headers["x-auth-token"]);

    redirect();
  } catch (e) {
    dispatch({
      type: GET_USER_ERROR,
      payload: "Incorrect Email or Password"
    });
  }
};

export const register = (credentials, redirect) => async dispatch => {
  try {
    const res = await axios.post(`${ENDPOINT}/api/users/signUp`, credentials);

    dispatch({
      type: GET_USER,
      payload: res.data
    });

    localStorage.setItem("token", res.headers["x-auth-token"]);
    redirect();
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_USER_ERROR,
      payload: "Incorrect Email or Password"
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: GET_USER,
    payload: false
  };
};

export const uploadProfilePic = image => async dispatch => {
  const res = await axios.post(`${ENDPOINT}/api/image/uploadProfPic`, image);

  console.log(res);
};

export const GET_FRIENDS = "get_friends";
export const searchFriends = query => async dispatch => {
  try {
    const res = await axios.get(`${ENDPOINT}/api/friends?query=${query}`);

    dispatch({ action: GET_FRIENDS, payload: res.data });
  } catch (e) {
    dispatch({ action: GET_FRIENDS, payload: null });
  }
};

// search for all people including friends.
export const GET_PEOPLE = "get_people";
export const searchPeople = query => async dispatch => {
  try {
    const res = await axios.get(
      `${ENDPOINT}/api/users/findUser?search=${query}`
    );

    dispatch({ type: GET_PEOPLE, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_PEOPLE, payload: null });
  }
};
