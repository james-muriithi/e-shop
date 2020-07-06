import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo/Seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import HomeCarousel from "../components/carousel/HomeCarousel"
import Products from "../components/productsSection/Products";
import Benefits from '../components/benefits/Benefits';
import Recommended from '../components/recommendationSector/Recommended';

const IndexPage = () => (
  <Layout>
    <SEO />
    <HomeCarousel />
    <Benefits />
    <Products />
    <Recommended />
  </Layout>
)

export default IndexPage
