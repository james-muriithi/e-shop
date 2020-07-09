import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const initialState = localStorage.getItem('myCart')
    ? JSON.parse(localStorage.getItem('myCart'))
    : {}
const middleware = [thunk]
const globalWindow = typeof window !== "undefined" && window

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        globalWindow && globalWindow.__REDUX_DEVTOOLS_EXTENSION__ && globalWindow.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

store.subscribe(() => {
    localStorage.setItem('myCart', JSON.stringify(store.getState()))
})

export default store;

