import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function CartMenu({ cart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className="cart-menu">
            {cart.map((item) => (
                <div key={item._id} className="cart-menu-links">
                    <div className="cart-menu-link">
                        <img src={item.image} alt={item.name} />
                        <div className="prd-name">{item.name}</div>
                        <div className="number">
                            <div className="minus"></div>
                            <div className="quantity">{item.quantity}</div>
                            <div className="plus">
                                <div className="ngang"></div>
                                <div className="doc"></div>
                            </div>
                        </div>
                        <div className="price">${item.price}</div>
                        <div className="trast"><FontAwesomeIcon icon={faTrashAlt} /></div>
                    </div>
                    <div className='line'></div>
                </div>
            ))}
            <div className="menu-footer">
                <div>Total : ${totalPrice}</div>
                <a href="/" target="_blank">
                    <button className="checkOut">Checkout</button>
                </a>
            </div>
        </div>
    )
}

export default CartMenu