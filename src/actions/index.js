import axios from "axios";
const token = localStorage.getItem("token");
const ENDPOINT = "";

const user = {
  name: "Mark Zuckerberg",
  email: "mark_wiza1984@yahoo.com",
  friends: 20,
  followers: 12,
  summary:
    "Hi I am mark iam the inventor of facebook, when i was kid i made a clinic system for my father and a game for me",
  img:
    "data:image/jpeg;base64,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",
  newEvents: [
    { event: "Your Frined Ahmed has sent you a Friend Request" },
    { event: "Your Frined Mohamed has sent you a Friend Request" },
    { event: "Your Frined Khaled has sent you a Friend Request" },
    { event: "Your Frined Saad has sent you a Friend Request" },
    { event: "Your Frined Ehab has sent you a Friend Request" }
  ]
};

export const GET_USER = "get_user";
export const GET_USER_ERROR = "get_user_error";

export const getUser = () => async dispatch => {
  // if (!token) return dispatch({ type: GET_USER, payload: false });

  // const res = await axios.get(`${ENDPOINT}/users/me`, {
  //   headers: { "x-auth-token": token }
  // });

  // dispatch({
  //   type: GET_USER,
  //   payload: res.data
  // });

  dispatch({ type: GET_USER, payload: user });
};

// export const USER_SIGNIN = "user_signIn";
// export const USER_SIGNIN_ERROR = "user_signIn_error";

export const login = credentials => async dispatch => {
  try {
    const res = await axios.post(`${ENDPOINT}/login`, credentials);

    localStorage.setItem("token", res.headers("x-outh-token"));
    dispatch({
      action: GET_USER,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      action: GET_USER_ERROR,
      payload: "Incorrect Email or Password"
    });
  }
};

// export const USER_REGISTER = "user_register";
// export const USER_REGISTER_ERROR = "user_register_error";
export const register = credentials => async dispatch => {
  try {
    const res = await axios.post(`${ENDPOINT}/register`, credentials);

    localStorage.setItem("token", res.headers("x-outh-token"));
    dispatch({
      action: GET_USER,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      action: GET_USER_ERROR,
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
    const res = await axios.get(`${ENDPOINT}/api/people?query=${query}`);

    dispatch({ type: GET_PEOPLE, payload: res.data });
  } catch (e) {
    dispatch({ type: GET_PEOPLE, payload: null });
  }
};
