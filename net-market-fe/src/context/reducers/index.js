import shoppingCartSessionReducer from "./shoppingCartSessionReducer";
import userSessionReducer from "./userSessionReducer";
import openSnackbarReducer from "./openSnackbarReducer"

export const mainReducer = ({ userSession, shoppingCartSession, openSnackbar }, action) => {
	return {
		userSession: userSessionReducer(userSession, action),
		shoppingCartSession: shoppingCartSessionReducer(
			shoppingCartSession,
			action
		),
		openSnackbar: openSnackbarReducer(openSnackbar, action)
	};
};