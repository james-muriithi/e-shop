import React from 'react'
import {Link} from 'gatsby'
import { Container, Row, Col } from "reactstrap";

import './BreadCrumb.css';

export default function BreadCrumb() {
    return (
        <div className="breacrumb-section">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="breadcrumb-text product-more">
                            <Link to="/"><i className="fa fa-home"></i> Home</Link>
                            <span>Shopping Cart</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
