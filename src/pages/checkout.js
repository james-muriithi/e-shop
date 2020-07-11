import React from "react"

import { Provider } from "react-redux"

import store from "../store"
import BreadCrumb from "../components/shoppingCart/BreadCrumb"
import Recommended from "../components/recommendationSector/Recommended"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Checkout from "../components/checkout/Checkout"

export default function CheoutPage() {
  return (
    <Provider store={store}>
      <Layout>
        <SEO />
        <BreadCrumb current="Check Out" />
        <Checkout />
        <Recommended title="People Also Bought" />
      </Layout>
    </Provider>
  )
}
