import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo/Seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import HomeCarousel from "../components/carousel/HomeCarousel"

const IndexPage = () => (
  <Layout>
    <SEO />
    <HomeCarousel />
  </Layout>
)

export default IndexPage
