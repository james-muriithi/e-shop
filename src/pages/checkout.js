import React from "react"

import { Provider } from "react-redux"

import store from "../store"
import BreadCrumb from "../components/shoppingCart/BreadCrumb"
import Recommended from "../components/recommendationSector/Recommended"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import CheckoutSection from "../components/checkoutSection/Checkout"

export default function CheckoutPage() {
  return (
    <Provider store={store}>
      <Layout>
        <SEO />
        <BreadCrumb current="Check Out" />
        <CheckoutSection />
        <Recommended title="People Also Bought" />
      </Layout>
    </Provider>
  )
}
