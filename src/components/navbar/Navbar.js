import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { connect } from "react-redux"

import emptyCartSvg from "../../images/empty_cart.svg"
import { removeFromCart } from "../../actions/cartActions"

import "./Navbar.css"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <Link to="/" className="navbar-brand">
          <span>e</span>-shop
        </Link>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="nav-link">
                About
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Item 1</DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>something else</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <div className="header__cart d-flex ml-auto">
          <Link to="#" className="nav-link">
            <i className="fa fa-heart"></i>
            <span className="number">2</span>
          </Link>
          <div to="#" className="nav-link cart-icon">
            <div>
              <i className="fa fa-shopping-bag"></i>

              {props.cartItems.length > 0 && (
                <span className="number">{props.cartItems.length}</span>
              )}
            </div>
            <div className="cart-hover">
              <div className="select-items">
                {props.cartItems.length > 0 ? (
                  <table>
                    <tbody>
                      {props.cartItems.map((item, index) => (
                        <tr key={index}>
                          <td className="si-pic">
                            <img src={item.src} alt="" />
                          </td>
                          <td className="si-text">
                            <div className="product-selected">
                              <p>
                                Ksh. {item.price} x {item.quantity}
                              </p>
                              <h6>{item.name}</h6>
                            </div>
                          </td>
                          <td
                            className="si-close"
                            onClick={() => {
                              props.removeFromCart(item)
                            }}
                          >
                            <i className="fa fa-close"></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center">
                    <img src={emptyCartSvg} alt="empty cart" />
                    <p className="mt-2 mb-3">Your shopping cart is empty.</p>
                  </div>
                )}
              </div>
              <div className="select-total">
                <span>total:</span>
                <h5>Ksh. {props.total ? props.total : 0}</h5>
              </div>
              <div className="select-button">
                <Link to="/shoping-cart" className="primary-btn view-card">
                  VIEW CART
                </Link>
                <Link to="/" className="primary-btn checkout-btn">
                  CHECK OUT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    total: state.cart.total,
  }
}

export default connect(mapStateToProps, { removeFromCart })(NavBar)
