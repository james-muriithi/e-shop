import React from "react"
import { Container, Row } from "reactstrap"
import ProductCard from "../productCard/ProductCard"
import styled from "styled-components"

export default function Products({ title }) {
  const Heading = styled.h3`
    font-size: 20px;
    color: #171717;
    margin-right: 22px;
    position: relative;
    cursor: pointer;
    padding-bottom: 20px;
    padding-left: 20px;
    &:before {
      opacity: 1;
      position: absolute;
      left: 0;
      bottom: -3px;
      width: auto;
      height: 2px;
      background: #171717;
      content: "";
    }
  `

  return (
    <Container style={{ marginTop: "40px" }}>
      <Heading>{title ? title : "You may Also Like"} </Heading>
      <Row>
        {items.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            lg="2"
            md="4"
            sm="6"
            xs="6"
          />
        ))}
      </Row>
    </Container>
  )
}
