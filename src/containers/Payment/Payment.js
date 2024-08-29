import React, { useState, useEffect } from 'react';
import './Payment.scss';
import { useNavigate } from "react-router-dom";
import { path } from '../../utils'
import checkIcon from '../../assets/images/icon-park-outline_check-one.svg'
import Header from '../System/Header';

function Payment() {

    return (
        <>
            <div className="thanks" id="thanks">
                <div className="cont">
                    <img
                        className="checkIcon"
                        src={checkIcon}
                        alt=""
                    />
                    <h2>Thanks for you order!</h2>
                    <p className="intro">The order confirmation has been sent to your @email</p>
                    <img src="images/Line 10.svg" alt="" />
                    <div className="date">
                        <p className="stitle">Transaction Date</p>
                        <p className="scont">Friday, Nov 24, 2023</p>
                    </div>
                    <img src="images/Line 10.svg" alt="" />
                    <div className="method">
                        <p className="stitle">Payment Method</p>
                        <p className="scont">Mastercard</p>
                    </div>
                    <img src="images/Line 10.svg" alt="" />
                    <div className="subTotal">
                        <p>Sub total</p>
                        <p>$ 48.00</p>
                    </div>
                    <img src="images/Line 10.svg" alt="" />
                    <div>
                        <div className="taxCollected">
                            <p>Tax collected</p>
                            <p>$0.8</p>
                        </div>
                        <div className="ship-cost">
                            <p>Shipment cost</p>
                            <p>$ 6.50</p>
                        </div>
                    </div>
                    <img src="images/Line 10.svg" alt="" />
                    <div className="grandTotal">
                        <p>Grand total:</p>
                        <p>$55.30</p>
                    </div>
                    <a href="index.html#products">
                        <button type="button" onclick="closeThanks()">
                            Continue Shopping
                        </button>
                    </a>
                </div>
            </div>
            <div id="container">
                <Header />
                <div className="cart-menu" id="cart-menu">
                    <div className="cart-menu-links">
                        <div className="cart-menu-link">
                            <img src="images/binhnuoc.svg" alt="" />
                            <div className="prd-name">Dino Light-up Water Bottle</div>
                            <div className="number">
                                <div className="minus"></div>
                                <div className="quantity">1</div>
                                <div className="plus">
                                    <div className="ngang"></div>
                                    <div className="doc"></div>
                                </div>
                            </div>
                            <div className="price">$24.00</div>
                            <div><img className="trast" src="images/trast.svg" alt="" /></div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="cart-menu-links">
                        <div className="cart-menu-link">
                            <img src="images/binhnuoc.svg" alt="" />
                            <div className="prd-name">Dino Light-up Water Bottle</div>
                            <div className="number">
                                <div className="minus"></div>
                                <div className="quantity">1</div>
                                <div className="plus">
                                    <div className="ngang"></div>
                                    <div className="doc"></div>
                                </div>
                            </div>
                            <div className="price">$24.00</div>
                            <div><img className="trast" src="images/trast.svg" alt="" /></div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="cart-menu-links">
                        <div className="cart-menu-link">
                            <img src="images/binhnuoc.svg" alt="" />
                            <div className="prd-name">Dino Light-up Water Bottle</div>
                            <div className="number">
                                <div className="minus"></div>
                                <div className="quantity">1</div>
                                <div className="plus">
                                    <div className="ngang"></div>
                                    <div className="doc"></div>
                                </div>
                            </div>
                            <div className="price">$24.00</div>
                            <div><img className="trast" src="images/trast.svg" alt="" /></div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="cart-menu-links">
                        <div className="cart-menu-link">
                            <img src="images/binhnuoc.svg" alt="" />
                            <div className="prd-name">Dino Light-up Water Bottle</div>
                            <div className="number">
                                <div className="minus"></div>
                                <div className="quantity">1</div>
                                <div className="plus">
                                    <div className="ngang"></div>
                                    <div className="doc"></div>
                                </div>
                            </div>
                            <div className="price">$24.00</div>
                            <div><img className="trast" src="images/trast.svg" alt="" /></div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="cart-menu-links">
                        <div className="cart-menu-link">
                            <img src="images/binhnuoc.svg" alt="" />
                            <div className="prd-name">Dino Light-up Water Bottle</div>
                            <div className="number">
                                <div className="minus"></div>
                                <div className="quantity">1</div>
                                <div className="plus">
                                    <div className="ngang"></div>
                                    <div className="doc"></div>
                                </div>
                            </div>
                            <div className="price">$24.00</div>
                            <div><img className="trast" src="images/trast.svg" alt="" /></div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="menu-footer">
                        <div>Total : $96.00</div>
                        <a href="payment.html" target="_blank">
                            <button className="checkOut">Checkout</button>
                        </a>
                    </div>
                </div>
                <div className="list-menu" id="list-menu">
                    <div className="list-menu-links">
                        <div className="list-menu-link">
                            <img src="images/cocnuoc1.svg" alt="" />
                            <div className="atc-inf">
                                <div className="prd-name">Chrome Dino Mug</div>
                                <div className="price">$14.00</div>
                                <div className="box1">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="list-menu-links">
                        <div className="list-menu-link">
                            <img src="images/cocnuoc1.svg" alt="" />
                            <div className="atc-inf">
                                <div className="prd-name">Chrome Dino Mug</div>
                                <div className="price">$14.00</div>
                                <div className="box1">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="list-menu-links">
                        <div className="list-menu-link">
                            <img src="images/cocnuoc1.svg" alt="" />
                            <div className="atc-inf">
                                <div className="prd-name">Chrome Dino Mug</div>
                                <div className="price">$14.00</div>
                                <div className="box1">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="list-menu-links">
                        <div className="list-menu-link">
                            <img src="images/cocnuoc1.svg" alt="" />
                            <div className="atc-inf">
                                <div className="prd-name">Chrome Dino Mug</div>
                                <div className="price">$14.00</div>
                                <div className="box1">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                    <div className="list-menu-links">
                        <div className="list-menu-link">
                            <img src="images/cocnuoc1.svg" alt="" />
                            <div className="atc-inf">
                                <div className="prd-name">Chrome Dino Mug</div>
                                <div className="price">$14.00</div>
                                <div className="box1">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                        <img src="images/Line 4.svg" alt="" />
                    </div>
                </div>
                <div className="back">
                    <a href="index.html">
                        <img src="images/Arrow 2.svg" alt="" />
                        <p>Back to homepage</p>
                    </a>
                </div>
                <div className="input">
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
                <div className="output">
                    <div className="order">
                        <p>Order Details</p>
                        <div className="order-box">
                            <div className="prd-inf">
                                <img src="images/binhnuoc.svg" alt="" />
                                <div className="inf">
                                    <p><b>Dino Light-up Water Bottle</b></p>
                                    <p>Price: <b>$24.00</b></p>
                                    <p>Quantity: <b>01</b></p>
                                </div>
                                <div className="price">$24.00</div>
                            </div>
                            <div className="prd-inf">
                                <img src="images/cocnuoc1.svg" alt="" />
                                <div className="inf">
                                    <p><b>Dino Chrome Dino Mug</b></p>
                                    <p>Price: <b>$14.00</b></p>
                                    <p>Quantity: <b>01</b></p>
                                </div>
                                <div className="price">$14.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <p>Order Summary</p>
                        <div>
                            <div className="item">
                                <div>Item (2):</div>
                                <div>$ 48.00</div>
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
                            <div>$55.30</div>
                        </div>
                        <button type="submit" onclick="openThanks()">Confirm order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
