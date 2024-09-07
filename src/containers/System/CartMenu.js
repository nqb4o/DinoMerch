import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CartMenu({ cart, increaseQuantity, decreaseQuantity, removeToCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className="cart-menu">
            {cart.map((item) => (
                <div key={item._id} className="cart-menu-links">
                    <div className="cart-menu-link">
                        <img src={item.image} alt={item.name} />
                        <div className="prd-name">{item.name}</div>
                        <div className="number">
                            <div onClick={() => decreaseQuantity(item._id)} className="minus">-</div>
                            <div className="quantity">{item.quantity}</div>
                            <div onClick={() => increaseQuantity(item._id)} className="plus">+</div>
                        </div>
                        <div className="price">${item.price * item.quantity}</div>
                        <div className="trast">
                            <FontAwesomeIcon
                                onClick={() => removeToCart(item._id)}
                                icon={faTrashAlt}
                            />
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            ))}
            <div className="menu-footer">
                <div>Total : ${totalPrice}</div>
                <button className="checkOut">
                    <Link
                        to="/payment"
                        state={{ cart: cart }}
                    >
                        Check Out
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default CartMenu