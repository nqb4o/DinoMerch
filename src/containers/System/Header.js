import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import './Header.scss'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'
import list from '../../assets/images/ph_heart.svg'
import CartMenu from './CartMenu';
import ListMenu from './ListMenu';

function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isWishlistOpen, setIsWishlistOpen] = useState(false)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
        if (!isCartOpen) {
            setIsWishlistOpen(false);
        }
    }
    const toggleWishlist = () => {
        setIsWishlistOpen(!isWishlistOpen)
        if (!isWishlistOpen) {
            setIsCartOpen(false);
        }
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Dinomerch
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <li className="cart" href="" onClick={toggleCart}>
                                <img src={cart} alt="Cart" />
                                <Nav.Link>Cart</Nav.Link>
                            </li>
                            <li className="list" href="" onClick={toggleWishlist}>
                                <img src={list} alt="Wishlist" />
                                <Nav.Link>Wishlist</Nav.Link>
                            </li>
                            <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {isCartOpen && <CartMenu />}
            {isWishlistOpen && <ListMenu />}
        </>
    );
}

export default Header;