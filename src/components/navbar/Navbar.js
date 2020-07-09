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

import product1 from "../../images/products/product-1.jpg"
import product2 from "../../images/products/product-5.jpg"

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
              <span className="number">3</span>
            </div>
            <div className="cart-hover">
              <div className="select-items">
                <table>
                  <tbody>
                    <tr>
                      <td className="si-pic">
                        <img src={product1} alt="" />
                      </td>
                      <td className="si-text">
                        <div className="product-selected">
                          <p>Ksh. 200 x 1</p>
                          <h6>Sweater</h6>
                        </div>
                      </td>
                      <td className="si-close">
                        <i className="fa fa-close"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="si-pic">
                        <img src={product2} alt="" />
                      </td>
                      <td className="si-text">
                        <div className="product-selected">
                          <p>Ksh 200 x 1</p>
                          <h6>Cape</h6>
                        </div>
                      </td>
                      <td className="si-close">
                        <i className="fa fa-close"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="select-total">
                <span>total:</span>
                <h5>$120.00</h5>
              </div>
              <div className="select-button">
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

export default NavBar
