import axios from "axios";

const instance = axios.create();
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export const getShoppingCart = (dispatch, id) => {
	return new Promise((resolve, eject) => {
		instance
			.get(`api/ShoppingCart?id=${id}`)
			.then((response) => {
				dispatch({
					type: "SHOPPING_CART_SESSION",
					id: response.data.id,
					items: response.data.items,
				});
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const setShoppingCart = (dispatch, shoppingCart) => {
	return new Promise((resolve, eject) => {
		instance
			.post(`api/ShoppingCart`, shoppingCart)
			.then((response) => {
				dispatch({
					type: "SHOPPING_CART_SESSION",
					id: response.data.id,
					items: response.data.items,
				});
				resolve(response);
			})
			.catch((error) => {
				resolve(error.response);
			});
	});
};

export const addItemToShoppingCart = (shoppingCart,item,dispatch) => {
    if (!shoppingCart.items) {
        shoppingCart.items=[];                
    }
    const index = shoppingCart.items.findIndex(i=>i.id===item.id);
    if (index===-1) {
        shoppingCart.items.push(item)
    }
    else{
        shoppingCart.items[index].quantity+=item.quantity;
    }
    setShoppingCart(dispatch, shoppingCart);
}
