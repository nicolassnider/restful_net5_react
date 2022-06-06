import HttpClient from "../services/HttpClient";
import axios from "axios";
import { uploadImage } from "../firebase";

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getProducts = (request) => {
	return new Promise((resolve, eject) => {
		instance
			.get(
				`/api/Product?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`
			)
			.then((response) => {
				resolve(response);
			});
	});
};

export const getProduct = (id) => {
	return new Promise((resolve, eject) => {
		instance
			.get(`/api/Product/${id}`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const registerProduct = async (product) => {
	const urlImage = await uploadImage(product.file);
	product.Image = urlImage;
	return new Promise((resolve, eject) => {
		instance
			.post(`/api/Product`, product)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};
