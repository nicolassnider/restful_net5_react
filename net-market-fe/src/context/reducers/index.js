
import userSessionReducer from "./userSessionReducer";

export const mainReducer = ({userSession}, action) => {
    return{
        userSession: userSessionReducer(userSession, action)
    }
}