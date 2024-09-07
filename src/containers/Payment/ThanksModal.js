import React, { useState } from 'react';
import './Payment.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import checkIcon from '../../assets/images/icon-park-outline_check-one.svg'

function ThanksModal({ totalPrice }) {

    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Confirm Orders</Button>
            <Modal
                size="md"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body>
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
                                <p>${totalPrice.toFixed(2)}</p>
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
                                <p>${(totalPrice + 6.50 + 0.80).toFixed(2)}</p>
                            </div>
                            <a href="index.html#products">
                                <button type="button" onClick="closeThanks()">
                                    Continue Shopping
                                </button>
                            </a>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>


    )
}

export default ThanksModal
