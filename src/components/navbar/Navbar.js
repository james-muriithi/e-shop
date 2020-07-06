import React, { useState } from 'react';
import { Link } from "gatsby";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import './Navbar.css';

const NavBar = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" fixed>
                <Link to="/" className="navbar-brand">E-Shop</Link>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link">Contact</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/" className="nav-link">About</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Item 1
                                </DropdownItem>
                                <DropdownItem>
                                    Item 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    something else
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <div className="header__cart d-flex ml-auto">
                    <Link to="#" className="nav-link">
                        <i class="fa fa-heart"></i>
                        <span>2</span>
                    </Link>
                    <Link to="#" className="nav-link">
                        <i className="fa fa-shopping-bag"></i>
                        <span>3</span>
                    </Link>
                </div>
                <NavbarToggler onClick={toggle} />
            </Navbar>
        </div>
    );
}

export default NavBar;