import { ADD_TO_CART } from "../actions/types";

const initialState = {
    cartItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            let newTotal = state.total + action.item.price

            let existed_item = state.cartItems.find(item => action.item.id === item.id)

            if (existed_item) {
                console.log(existed_item);
                existed_item.quantity += 1 
                return {
                    ...state,
                    total: newTotal
                }
            }
            action.item.quantity = action.item.quantity ? action.item.quantity: 1;
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