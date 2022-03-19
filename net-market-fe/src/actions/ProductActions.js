import HttpClient from "../services/HttpClient";

export const getProducts = (request) => {
  return new Promise((resolve, eject) => {
    HttpClient.get(
      `/api/Product?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`
    ).then((response) => {
      resolve(response);
    });
  });
};
