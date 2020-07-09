import { ADD_TO_CART } from "../actions/types";

const initialState = {
    cartItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let newTotal = state.total + action.item.price
            return {
                cartItems: [
                    action.item,
                    ...state.cartItems
                ],
                total: newTotal
            }
    
        default:
            return state;
    }
}
export default cartReducer;