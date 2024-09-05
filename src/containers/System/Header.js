import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
import './Header.scss'
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/cart.svg'
import listIcon from '../../assets/images/ph_heart.svg'
import CartMenu from './CartMenu';
import ListMenu from './ListMenu';

function Header({ cart, increaseQuantity, decreaseQuantity, removeToCart, addToCart, list }) {
    const totalItemsCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalItemsList = list.reduce((acc, item) => acc + item.quantity, 0);
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
                                {totalItemsCart !== 0 && <div className='numberOfProduct'>{totalItemsCart}</div>}
                                <img src={cartIcon} alt="Cart" />
                                <Nav.Link>Cart</Nav.Link>
                            </li>
                            <li className="list" href="" onClick={toggleWishlist}>
                                {totalItemsList !== 0 && <div className='numberOfProduct'>{totalItemsList}</div>}
                                <img src={listIcon} alt="Wishlist" />
                                <Nav.Link>Wishlist</Nav.Link>
                            </li>
                            <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {totalItemsCart !== 0 && isCartOpen && <CartMenu
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeToCart={removeToCart}
            />}
            {totalItemsList !== 0 && isWishlistOpen &&
                <ListMenu
                    list={list}
                    addToCart={addToCart}
                />
            }
        </>
    );
}

export default Header;