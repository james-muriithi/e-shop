import { ADD_TO_CART, REMOVE_FROM_CART } from "./types"

export const addToCart = item => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    item,
  })
}

export const removeFromCart = item => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    item,
  })
}
