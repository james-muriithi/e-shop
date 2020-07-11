import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY } from "./types"

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

export const decreaseQuantity = item =>dispatch => {
  dispatch({
    type: DECREASE_QUANTITY,
    item
  })
}
