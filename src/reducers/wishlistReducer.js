import {
    TOGGLE_TO_WISHLIST,
} from "../actions/types"

const initialState = {
    wishlistItems: []
}

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TO_WISHLIST:

            let existed_item = state.wishlistItems.find(
                item => action.item.id === item.id
            )

            if (existed_item) {
                return {
                    wishlistItems: [...state.cartItems.filter(item => item.id == action.item.id) ]
                }
            }
            return {
                wishlistItems: [ action.item, ...state.wishlistItems ],
            }

            default:
            return state
    }
}
export default wishlistReducer;
