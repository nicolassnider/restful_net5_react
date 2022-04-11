export const initialState = {
	user: {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		userName: "",
		image: "",
	},
	authenticated: false,
};

const userSessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case "START_SESSION":
			return {
				...state,
				user: action.session,
				authenticated: action.authenticated,
			};
		case "CLOSE_SESSION":
			return {
				...state,
				user: action.newUser,
				authenticated: action.authenticated,
			};
		case "UPDATE_USER":
			return {
				...state,
				user: action.newUser,
				authenticated: action.authenticated,
			};

		default:
			return state;
	}
};

export default userSessionReducer;
