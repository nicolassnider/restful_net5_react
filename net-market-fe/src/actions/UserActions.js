import HttpClient from "../services/HttpClient";
import axios from "axios";

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel= axios.isCancel;

export const registerUser = (user,dispatch) => {
  return new Promise((resolve, eject) => {
    instance.post("api/User/register", user)
      .then((response) => {
        dispatch({
          type: "START_SESSION",
          session:response.data,
          authenticated:true
        })
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const loginUser = (user,dispatch) => {
  return new Promise((resolve, eject) => {
    instance.post("api/User/login", user)
      .then((response) => {
        dispatch({
          type: "START_SESSION",
          session:response.data,
          authenticated:true
        })
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
};

export const getUser = (dispatch)=>{
  return new Promise((resolve, eject) => {
    HttpClient.get("api/User")
      .then((response) => {
        dispatch(
          {
            type:"START_SESSION",
            session:response.data,
            authenticated:true
          }
        );
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
}