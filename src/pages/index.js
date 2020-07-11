import React from "react"
import { Provider } from "react-redux"

import store from "../store"
import App from "../App"

const IndexPage = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default IndexPage
