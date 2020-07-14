import { TOGGLE_TO_WISHLIST } from "./types"

export const toggleWishlist = item => dispatch => {
    dispatch({
        type: TOGGLE_TO_WISHLIST,
        item,
    })
}