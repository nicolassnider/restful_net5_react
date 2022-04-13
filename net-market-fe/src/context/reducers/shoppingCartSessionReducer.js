export const initialState = {
	id:"",
    items:[],
};

const shoppingCartSessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SHOPPING_CART_SESSION":
			return {
				...state,
				id: action.id,
				items: action.items,
			};	

		default:
			return state;
	}
};

export default shoppingCartSessionReducer;
