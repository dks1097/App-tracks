import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    // case "clear_error_message":
    //   return { ...state, errorMessage: "" };
    // case "signout":
    //   return { ...state, token: null };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      navigate("TrackList");
    } catch (err) {
      dispatch({ type: "add_error", payload: "error message!!!" });
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign in with email and password
  };
};

const signout = (dispatch) => {
  return () => {
    // make api request to sign out
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
