import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"

const SliderImage = ({src, alt}) => {
  const data = useStaticQuery(graphql`
    query {
      images : allFile{
        edges {
          node{
            relativePath
            name
            childImageSharp{
              fluid(maxWidth: 1100, quality : 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const Image = styled(Img)`
    width: 100%;
    height: 360px!important;
    @media (max-width: 576px) {
      height: 300px;
    }`

  const image = data.images.edges.find(n=>{
    return n.node.relativePath.includes(src)
  })

  if (!image) {
    return null;
  }

  return <Image
    alt={alt}
    fluid={image.node.childImageSharp.fluid}
    objectFit="contain" />
}

export default SliderImage
