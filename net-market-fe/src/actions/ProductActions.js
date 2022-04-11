//import HttpClient from "../services/HttpClient";
import axios from "axios";

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel= axios.isCancel;

export const getProducts = (request) => {
  return new Promise((resolve, eject) => {
    instance.get(
      `/api/Product?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`
    ).then((response) => {
      resolve(response);
    });
  });
};
