import React, { useState } from "react"
import { Col } from "reactstrap"
import { Link } from "gatsby"
import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import { connect } from "react-redux"

import "./ProductCard.css"
import Like from "../favourite/Like"
import ProductSheet from "../bottomSheet/ProductSheet"
import Stars from "../rating/Stars"
import { addToCart } from "../../actions/cartActions"

function ProductCard({ product, addToCart, ...props }) {
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  const onChange = e => {
    if (e.target.value && !isNaN(+e.target.value)) {
      setQuantity(e.target.value)
    }
  }

  const onClick = e => {
    e && e.preventDefault()
    setOpen(prevState => !prevState)
  }

  return (
    <Col {...props}>
      <div className="product-item">
        <div className="pi-pic">
          <img
            data-src={product.src}
            alt={product.name}
            src="https://res.cloudinary.com/james-m/image/upload/a_hflip,c_pad,h_303,w_270/v1594207296/1612585_j6ym3x.webp"
            className="lazyload"
          />
          {product.label && <div className="sale">{product.label}</div>}
          <div className="icon like">
            <Like />
          </div>
          <ul>
            <li className="w-icon active">
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault()
                  addToCart(product)
                }}
              >
                <i className="fa fa-shopping-bag"></i>
              </Link>
            </li>
            <li className="quick-view d-md-none">
              <Link to="#" onClick={onClick}>
                + View
              </Link>
            </li>
            <li className="w-icon">
              <Link to="#">
                <i className="fa fa-share"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="pi-text">
          <Link to="#">
            <h5>{product.name}</h5>
          </Link>
          <div className="ratings">
            <Stars rating={product.rating} />
          </div>
          <div className="product-price">Ksh. {product.price}</div>
        </div>
      </div>
      <ProductSheet open={open} onChange={onClick}>
        <div className="product_name">
          <h4>{product.name}</h4>
        </div>
        {product.sizes.length && (
          <div className="mt-4 product_sizes">
            <h6 className="text-secondary">Sizes</h6>
            <ul className="product_sizes">
              {product.sizes.map((item, i) => (
                <li key={i} className="text-muted mx-2 px-2 text-center">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 product_quantity">
          <h6 className="text-secondary">Qty.</h6>
          <div className="d-flex px-2">
            <button
              onClick={decreaseQuantity}
              className="minus btn-outline-warning text-secondary btn"
            >
              <i className="fa fa-minus"></i>
            </button>

            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={onChange}
              className="mx-2 form-control text-center"
              autoComplete="off"
            />

            <button
              onClick={incrementQuantity}
              className="plus btn-outline-warning text-secondary text-secondary btn"
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="add_to_cart mt-5">
          <button
            className="primary-btn btn w-100 text-center"
            onClick={e => {
              e.preventDefault()
              product.quantity = quantity
              addToCart(product)
            }}
          >
            <i className="fa fa-shopping-bag pr-2"></i>ADD TO CART
          </button>
        </div>
      </ProductSheet>
    </Col>
  )
}

// const mapStateToProps = state => ({
//   cartItems: state.cart.cartItems,
//   total: state.cart.total
// })

export default connect(null, { addToCart })(ProductCard)
