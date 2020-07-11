import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
} from "../actions/types"

const initialState = {
  cartItems: [],
  total: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newTotal = state.total + action.item.price

      let existed_item = state.cartItems.find(
        item => action.item.id === item.id
      )

      if (existed_item) {
        existed_item.quantity += 1
        return {
          ...state,
          total: newTotal,
        }
      }
      action.item.quantity = action.item.quantity ? action.item.quantity : 1
      newTotal = state.total + action.item.price * action.item.quantity
      return {
        cartItems: [action.item, ...state.cartItems],
        total: newTotal,
      }

    case REMOVE_FROM_CART:
      let existing_item = state.cartItems.find(
        item => action.item.id === item.id
      )

      if (existing_item) {
        let newTotal = state.total - action.item.price * existing_item.quantity
        return {
          cartItems: [
            ...state.cartItems.filter(item => action.item.id !== item.id),
          ],
          total: newTotal,
        }
      }
      break
    case DECREASE_QUANTITY:
      let item_exist = state.cartItems.find(item => action.item.id === item.id)

      if (item_exist) {
        let newTotal = state.total - action.item.price
        if (item_exist.quantity > 1) {
          item_exist.quantity -= 1
          return {
            ...state,
            total: newTotal,
          }
        } else {
          return {
            cartItems: [
              ...state.cartItems.filter(item => action.item.id !== item.id),
            ],
            total: newTotal,
          }
        }
      }
      break

    default:
      return state
  }
}
export default cartReducer
