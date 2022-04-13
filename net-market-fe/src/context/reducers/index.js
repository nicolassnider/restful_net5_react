
import shoppingCartSessionReducer from "./shoppingCartSessionReducer";
import userSessionReducer from "./userSessionReducer";

export const mainReducer = ({userSession,shoppingCartSession}, action) => {
    return{
        userSession: userSessionReducer(userSession, action),
        shoppingCartSession: shoppingCartSessionReducer(shoppingCartSession, action),
    }
}