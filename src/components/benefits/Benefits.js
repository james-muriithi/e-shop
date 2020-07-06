import React from 'react'
import { Row, Col } from "reactstrap";

import './Benefits.css';

export default function Benefits() {
    return (
        <div className="benefit-items mx-3">
            <Row>
                <Col lg="4">
                    <div className="single-benefit">
                        <div className="sb-icon">
                            <img src={require('../../images/icons/icon-1.png')} alt="" />
                        </div>
                        <div className="sb-text">
                            <h6>Free Shipping</h6>
                            <p>For all order over Ksh. 999</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="single-benefit">
                        <div className="sb-icon">
                            <img src={require('../../images/icons/icon-2.png')} alt="" />
                        </div>
                        <div className="sb-text">
                            <h6>Delivery On Time</h6>
                            <p>Fast delivery of goods</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="single-benefit">
                        <div className="sb-icon">
                            <img src={require('../../images/icons/icon-3.png')} alt="" />
                        </div>
                        <div className="sb-text">
                            <h6>Secure Payment</h6>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
