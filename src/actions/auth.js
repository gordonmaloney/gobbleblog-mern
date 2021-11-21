import * as api from "../api";
import { AUTH } from "./ActionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)

    dispatch({ type: AUTH, data })

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log("action, ", formData)
    
    const { data } = await api.signUp(formData)
    
    dispatch({ type: AUTH, data })

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};