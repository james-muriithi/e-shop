import React from "react"
import { Container, Row, Col } from "reactstrap"
import { connect } from "react-redux"

import emptyCartSvg from "../../images/empty_cart.svg"
import mpesa from "../../images/mpesa.png"
import "./Checkout.css"

function Checkout(props) {
  return (
    <section className="checkout-section pad">
      <Container>
        <form action="#" className="checkout-form">
          <Row className="justify-content-center">
            <Col lg="8">
              {props.cartItems.length > 0 ? (
                <div className="place-order">
                  <h4>Your Order</h4>
                  <div className="order-total">
                    <ul className="order-table">
                      <li>
                        Product <span>Total</span>
                      </li>
                      {props.cartItems.map(item => (
                        <li className="fw-normal" key={item.id}>
                          {item.name} x {item.quantity}{" "}
                          <span>Ksh {item.price * item.quantity}</span>
                        </li>
                      ))}
                      <li className="total-price">
                        Total <span>Ksh {props.total}</span>
                      </li>
                    </ul>

                    <div className="mb-4 d-flex w-100 align-items-center mpesa">
                      <img
                        src={mpesa}
                        alt="mpesa"
                        className="d-none d-lg-block"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Mpesa number"
                        className="form-control ml-3"
                      />
                    </div>

                    <Row>
                      <Col md="12">
                        <div className="order-btn">
                          <button type="submit" className="site-btn place-btn">
                            Place Order
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
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
            </Col>
          </Row>
        </form>
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

export default connect(mapStateToProps, null)(Checkout)
