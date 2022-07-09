import HttpClient from "../services/HttpClient";
import axios from "axios";
import { uploadImage } from "../firebase";

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getUserById = async (id) => {
	return new Promise((resolve, eject) => {
		HttpClient.get(`api/User/account/${id}`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const setRole = (id, role, dispatch) => {
	return new Promise((resolve, eject) => {
		HttpClient.put(`api/User/role/${id}`, role)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const getUsers = (request) => {
	return new Promise((resolve, eject) => {
		HttpClient.get(
			`api/User/pagination?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`
		)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const updateUser = async (id, user, dispatch) => {
	if (user.file) {
		const urlImage = await uploadImage(user.file);
		user.image = urlImage;
	}
	return new Promise((resolve, reject) => {
		HttpClient.put(`api/User/update/${id}`, user)
			.then((response) => {
				dispatch({
					type: "UPDATE_USER",
					newUser: response.data,
					authenticated: true,
				});
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const registerUser = (user, dispatch) => {
	return new Promise((resolve, eject) => {
		instance
			.post("api/User/register", user)
			.then((response) => {
				dispatch({
					type: "START_SESSION",
					session: response.data,
					authenticated: true,
				});
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const loginUser = (user, dispatch) => {
	return new Promise((resolve, eject) => {
		instance
			.post("api/User/login", user)
			.then((response) => {
				dispatch({
					type: "START_SESSION",
					session: response.data,
					authenticated: true,
				});
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const getUser = (dispatch) => {
	return new Promise((resolve, eject) => {
		HttpClient.get("api/User")
			.then((response) => {
				dispatch({
					type: "START_SESSION",
					session: response.data,
					authenticated: true,
				});
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};
