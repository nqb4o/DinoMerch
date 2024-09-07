import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


function CartMenu({ cart, increaseQuantity, decreaseQuantity, removeToCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length > 0) {
            navigate('/payment', { state: { cart } })
        } else {
            alert('Your cart is empty. Please add products to cart before checkout.');
        }
    };

    return (
        <div className="cart-menu">
            {cart.map((item) => (
                <div key={item.id} className="cart-menu-links">
                    <div className="cart-menu-link">
                        <img src={item.image} alt={item.name} />
                        <div className="prd-name">{item.name}</div>
                        <div className="number">
                            <div onClick={() => decreaseQuantity(item.id)} className="minus">-</div>
                            <div className="quantity">{item.quantity}</div>
                            <div onClick={() => increaseQuantity(item.id)} className="plus">+</div>
                        </div>
                        <div className="price">${item.price * item.quantity}</div>
                        <div className="trast">
                            <FontAwesomeIcon
                                onClick={() => removeToCart(item.id)}
                                icon={faTrashAlt}
                            />
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            ))}
            <div className="menu-footer">
                <div>Total : ${totalPrice}</div>
                <button className="checkOut"
                    onClick={handleCheckout}>
                    Check Out
                </button>
            </div>
        </div>
    )
}

export default CartMenu