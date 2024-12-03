import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  TOGGLE_LOADING,
  CLEAR_ERROR_MESSAGE,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SET_AUTH_USER,
} from "./types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const AuthState = ({ children }) => {
  const auth = getAuth();
  const initialState = {
    user: null,
    error: false,
    message: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Sets the authenticated user
  const setAuthUser = (user) => {
    dispatch({ type: SET_AUTH_USER, payload: user });
  };

  const login = async (email, password) => {
    dispatch({ type: TOGGLE_LOADING });
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.user });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message.split(": ")[1],
      });
    }
  };

  const signup = async (formData) => {
    dispatch({ type: TOGGLE_LOADING });
    try {
      const { name, email, password } = formData;

      const res = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      dispatch({ type: SIGNUP_SUCCESS, payload: res.user });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.message.split(": ")[1],
      });
    }
  };

  const logout = async () => {
    try {
      const res = await signOut(auth);
      console.log(res);
      dispatch({ type: LOGOUT, payload: "Signed out successfully!" });
    } catch (error) {
      dispatch({ type: CLEAR_ERROR_MESSAGE });
    }
  };

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR_MESSAGE });
  };

  const changeLoadingState = () => {
    dispatch({ type: TOGGLE_LOADING });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        message: state.message,
        error: state.error,
        loading: state.loading,
        login,
        logout,
        signup,
        clearError,
        setAuthUser,
        changeLoadingState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
