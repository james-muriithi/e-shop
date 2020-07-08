import React from 'react'
import { Container, Row } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../productCard/ProductCard';
import styled from 'styled-components';

export default function Products() {
    const items = [
        {
            src: require('../../images/products/product-1.jpg'),
            name: 'Sweater',
            id: uuidv4(),
            price: 200,
            description: "A sweater that keeps you warm.",
            color: 'yellow',
            label: 'New',
            rating: '4.5',
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
        {
            src: require('../../images/products/product-2.jpg'),
            name: 'Sweater',
            id: uuidv4(),
            price: 250,
            color: 'grey',
            description: "A sweater that keeps you warm.",
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
        {
            src: require('../../images/products/product-3.jpg'),
            name: 'Jacket',
            id: uuidv4(),
            price: 500,
            color: 'light green',
            description: "A sweater that keeps you warm.",
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
        {
            src: require('../../images/products/product-4.jpg'),
            name: 'Scarf',
            id: uuidv4(),
            price: 250,
            color: 'light green',
            description: "A scarf that keeps you warm.",
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
        {
            src: require('../../images/products/product-5.jpg'),
            name: 'Cape',
            id: uuidv4(),
            color: 'yellow',
            price: 200,
            description: "A sweater that keeps you warm.",
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
        {
            src: require('../../images/products/product-6.jpg'),
            name: 'Sweater',
            id: uuidv4(),
            price: 200,
            color: 'yellow and white',
            description: "A sweater that keeps you warm.",
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
        {
            src: require('../../images/products/product-11.jpg'),
            name: 'Sneakers',
            id: uuidv4(),
            price: 2000,
            color: 'yellow and white',
            description: "A sweater that keeps you warm.",
            sizes: [
                'xxl',
                'xxl',
                'xl'
            ]
        },
    ];

    const Heading = styled.h3`
        font-size: 20px;
        color: #171717;
        margin-right: 22px;
        position: relative;
        cursor: pointer;
        padding-bottom: 20px;
        padding-left: 20px;
        &:before{
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
        <Container style={{marginTop: "40px"}}>
            <Heading>Clothing</Heading>
            <Row>
                {items.map(item =>(
                    <ProductCard key={item.id} product={item} lg="3" md="4" sm="6" xs="6" />
                ))}
            </Row>
        </Container>
    )
}
