import React from 'react'

import { Provider } from "react-redux"

import store from "../store"
import BreadCrumb from '../components/shoppingCart/BreadCrumb'
import Recommended from "../components/recommendationSector/Recommended"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"
import Cart from "../components/shoppingCart/ShoppingCart";

export default function ShopingCart() {
    return (
        <Provider store={store}>
            <Layout>
                <SEO />
                <BreadCrumb />
                <Cart />
                <Recommended />
            </Layout>
        </Provider>
    )
}
