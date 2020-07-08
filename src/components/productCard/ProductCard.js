import React from 'react'
import { Col } from "reactstrap";
import { Link } from "gatsby";

import './ProductCard.css';
import Like from '../favourite/Like';
import placeholder from "../../images/products/placeholder.png";
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export default function ProductCard({product, ...props}) {
    return (
        <Col {...props}>
            <div className="product-item">
                <div className="pi-pic">
                    <img data-src={product.src ? product.src : placeholder} alt={product.name} src="https://res.cloudinary.com/james-m/image/upload/a_hflip,c_pad,h_303,w_270/v1594207296/1612585_j6ym3x.webp"  className="lazyload" />
                    <div className="icon like">
                        <Like />
                    </div>
                    <ul>
                        <li className="w-icon active">
                            <Link to="#"><i className="fa fa-shopping-bag"></i></Link>
                        </li>
                        <li className="quick-view d-md-none">
                            <Link to="#">+ View</Link>
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
