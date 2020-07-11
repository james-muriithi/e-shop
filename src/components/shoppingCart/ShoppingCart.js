import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import { connect } from "react-redux"

import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "../../actions/cartActions"
import emptyCartSvg from "../../images/empty_cart.svg"
import "./cart.css"

function ShoppingCart(props) {
  return (
    <section className="shopping-cart pad">
      <Container>
        <Row>
          <Col lg="12">
            <div className="cart-table">
              {props.cartItems.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th className="p-name">Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th aria-label="remove from cart">
                        <i className="fa fa-close"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cartItems.map((item, index) => (
                      <tr key={index}>
                        <td className="cart-pic first-row">
                          <img src={item.src} alt={item.name} />
                        </td>
                        <td className="cart-title first-row">
                          <Link to="/">
                            <h5>{item.name}</h5>
                          </Link>
                        </td>
                        <td className="p-price first-row">Ksh. {item.price}</td>
                        <td className="qua-col first-row">
                          <div className="quantity">
                            <div className="pro-qty">
                              <span
                                className="dec qtybtn"
                                onClick={() => {
                                  props.decreaseQuantity(item)
                                }}
                              >
                                -
                              </span>
                              <input
                                type="text"
                                value={item.quantity}
                                readOnly
                                aria-label="item quantity"
                              />
                              <span
                                onClick={() => {
                                  props.addToCart(item)
                                }}
                                className="inc qtybtn"
                              >
                                +
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="total-price first-row">
                          Ksh {item.price * item.quantity}
                        </td>
                        <td className="close-td first-row">
                          <i
                            className="fa fa-close"
                            onClick={() => {
                              props.removeFromCart(item)
                            }}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <Col lg="12 text-center">
                  <img
                    src={emptyCartSvg}
                    alt="empty cart"
                    style={{ maxHeight: "200px", maxWidth: "200px" }}
                  />
                  <p className="text-primary mt-4">
                    Your shopping cart is empty.
                  </p>
                </Col>
              )}
            </div>
            <Row>
              {props.cartItems.length > 0 ? (
                <>
                  <Col lg="4">
                    <div className="cart-buttons">
                      <Link to="/" className="primary-btn continue-shop">
                        Continue shopping
                      </Link>
                    </div>
                    <div className="discount-coupon">
                      <h6>Discount Codes</h6>
                      <form action="#" className="coupon-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your coupon code"
                          aria-label="coupon code"
                        />
                        <button type="button" className="site-btn coupon-btn">
                          Apply
                        </button>
                      </form>
                    </div>
                  </Col>
                  <Col lg={{ offset: 4, size: 4 }}>
                    <div className="proceed-checkout">
                      <ul style={{ marginInlineStart: "0px" }}>
                        <li className="subtotal">
                          Subtotal <span>Ksh {props.total}</span>
                        </li>
                        <li className="cart-total">
                          Total <span>Ksh {props.total}</span>
                        </li>
                      </ul>
                      <Link href="/checkout" className="proceed-btn">
                        PROCEED TO CHECK OUT
                      </Link>
                    </div>
                  </Col>
                </>
              ) : (
                <Col lg="4">
                  <div className="cart-buttons">
                    <Link to="/" className="primary-btn continue-shop">
                      Continue shopping
                    </Link>
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    total: state.cart.total,
  }
}

const cartActions = { removeFromCart, addToCart, decreaseQuantity }

export default connect(mapStateToProps, cartActions)(ShoppingCart)
