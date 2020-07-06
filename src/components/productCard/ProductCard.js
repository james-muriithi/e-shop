import React from 'react'
import { Col } from "reactstrap";
import { Link } from "gatsby";

import './ProductCard.css';
import Like from '../favourite/Like';
import product4 from "../../images/products/product-4.jpg";

export default function ProductCard({product, ...props}) {
    return (
        <Col {...props}>
            <div className="product-item">
                <div className="pi-pic">
                    <img src={product.src ? product.src : product4} alt={product.name} />
                    <div className="icon like">
                        <Like />
                    </div>
                    <ul>
                        <li className="w-icon active">
                            <Link to="#"><i className="fa fa-shopping-bag"></i></Link>
                        </li>
                        <li className="quick-view d-md-none">
                            <Link to="#">+ Quick View</Link>
                        </li>
                        <li className="w-icon">
                            <Link to="#"><i className="fa fa-share"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="pi-text">
                    <div className="catagory-name">Towel</div>
                    <Link to="#">
                        <h5>{product.name}</h5>
                    </Link>
                    <div className="product-price">
                        Ksh. {product.price}
                    </div>
                </div>
            </div>
        </Col>
    )
}
