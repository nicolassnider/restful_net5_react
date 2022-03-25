import HttpClient from "../services/HttpClient";

export const registerUser = (user) => {
  return new Promise((resolve, eject) => {
    HttpClient.post("/api/User/register", user)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error);
      });
  });
};
