import React from 'react'
import { Container, Row, Col } from "reactstrap";

import './Categories.css';
export default function Categories() {
    return (
        <div class="banner-section">
            <Container fluid>
                <Row >
                    <Col lg="4">
                        <div class="single-banner">
                            <img src={require("../../images/banner-1.jpg")} alt="" />
                            <div class="inner-text">
                                <h4>Men’s</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div class="single-banner">
                            <img src={require("../../images/banner-2.jpg")} alt="" />
                                <div class="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div class="single-banner">
                            <img src={require("../../images/banner-3.jpg")} alt="" />
                                <div class="inner-text">
                                    <h4>Kid’s</h4>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
