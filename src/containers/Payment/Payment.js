import React from 'react';
import './Payment.scss';
import { useLocation } from 'react-router-dom';
import Arrow from '../../assets/images/Arrow 2.svg'
import ThanksModal from './ThanksModal';
import Header from '../System/Header'

function Payment() {
    const location = useLocation()
    const cart = location.state?.cart || []

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <>
            <Header />
            <div className="container">
                <div className="back">
                    <a href="/">
                        <img src={Arrow} alt="" />
                        <p>Back to homepage</p>
                    </a>
                </div>
                <div className="up">
                    <div className="shipping">
                        <p className="title">Shipping Address</p>
                        <div className="shipping-input">
                            <div className="name">
                                <div className="firstname">
                                    <p>First Name</p>
                                    <input type="" />
                                </div>
                                <div className="lastname">
                                    <p>Last Name</p>
                                    <input type="" />
                                </div>
                            </div>
                            <div className="phonenumber">
                                <p>Phone Number</p>
                                <input type="" />
                            </div>
                            <div className="address">
                                <p>Street Address</p>
                                <input type="" />
                            </div>
                        </div>
                    </div>
                    <div className="payment">
                        <p className="title">Payment Details</p>
                        <div className="payment-input">
                            <div className="how">
                                <button>
                                    <img src="images/ion_card-outline.svg" alt="" />
                                    <p>Visa / Mastercard</p>
                                </button>
                            </div>
                            <div className="cardname">
                                <p>Cardholder Name</p>
                                <input type="" />
                            </div>
                            <div className="cardnum">
                                <p>Card Number</p>
                                <input type="" />
                            </div>
                            <div className="more-inf">
                                <div className="date">
                                    <p>Expiration Date</p>
                                    <input type="" />
                                </div>
                                <div className="cvv">
                                    <p>CVV</p>
                                    <input type="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="down">
                    <div className="order">
                        <p>Order Details</p>
                        <div className="order-box">
                            {cart.length > 0 ? (
                                cart.map((item) => (
                                    <div className="prd-inf" key={item._id}>
                                        <img src={item.image} alt={item.name} />
                                        <div className="inf">
                                            <p><b>{item.name}</b></p>
                                            <p>Price: <b>${item.price}</b></p>
                                            <p>Quantity: <b>{item.quantity}</b></p>
                                        </div>
                                        <div className="price">${(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                ))
                            ) : (
                                <p>No items in cart</p>
                            )}
                        </div>
                    </div>
                    <div className="summary">
                        <p>Order Summary</p>
                        <div>
                            <div className="item">
                                <div>Item ({cart.length}):</div>
                                <div>${totalPrice.toFixed(2)}</div>
                            </div>
                            <div className="shipCost">
                                <div>Shipment Cost:</div>
                                <div>$ 6.50</div>
                            </div>
                            <div className="tax">
                                <div>Tax Collected:</div>
                                <div>$ 0.80</div>
                            </div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                        <div className="total">
                            <div>Order total:</div>
                            <div>${(totalPrice + 6.50 + 0.80).toFixed(2)}</div>
                        </div>
                        <ThanksModal totalPrice={totalPrice} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
