import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import wishlistReducer from "./wishlistReducer"

export default combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer
})
