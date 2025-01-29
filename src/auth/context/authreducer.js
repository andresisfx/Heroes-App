import { types } from "../types/types";

// const initialState = {
//     logged:false
// }

export const authReducer = (state=[],action) => {
    switch (action.type) {
        case types.login:
            return {... state,
                 user:action.payload,
                 logged:true}
        case types.logout:
            return {
                ...state,
                logged:false
            }
        default:
            return state;
    }
}