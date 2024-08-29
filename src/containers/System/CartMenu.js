import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
function CartMenu() {

    return (
        <div className="cart-menu">
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
                    <div className="trast"><FontAwesomeIcon icon={faTrashAlt} /></div>
                </div>
                <div className='line'></div>
            </div>
            <div className="menu-footer">
                <div>Total : $96.00</div>
                <a href="" target="_blank">
                    <button className="checkOut">Checkout</button>
                </a>
            </div>
        </div>
    )
}

export default CartMenu