import React,{useState} from 'react'
import { Col } from "reactstrap";
import { Link } from "gatsby";

import './ProductCard.css';
import Like from '../favourite/Like';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import ProductSheet from '../bottomSheet/ProductSheet';

export default function ProductCard({product, ...props}) {
    const [open, setOpen] = useState(false);

    const onClick = (e) =>{
        e && e.preventDefault();
        setOpen(prevState => !prevState);
    }

    return (
        <Col {...props}>
            <div className="product-item">
                <div className="pi-pic">
                    <img data-src={product.src} alt={product.name} src="https://res.cloudinary.com/james-m/image/upload/a_hflip,c_pad,h_303,w_270/v1594207296/1612585_j6ym3x.webp"  className="lazyload" />
                    <div className="icon like">
                        <Like />
                    </div>
                    <ul>
                        <li className="w-icon active">
                            <Link to="#"><i className="fa fa-shopping-bag"></i></Link>
                        </li>
                        <li className="quick-view d-md-none">
                            <Link to="#" onClick={onClick}>+ View</Link>
                        </li>
                        <li className="w-icon">
                            <Link to="#"><i className="fa fa-share"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="pi-text">
                    <Link to="#">
                        <h5>{product.name}</h5>
                    </Link>
                    <div className="product-price">
                        Ksh. {product.price}
                    </div>
                </div>
            </div>
            <ProductSheet open={open} onChange={onClick} />
        </Col>
    )
}
