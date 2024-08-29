import React, { useState, useEffect } from 'react';
import './HomePage.scss';

function ListMenu() {

    return (
        <div className="list-menu">
            <div className="list-menu-links">
                <div className="list-menu-link">
                    <div className='product-image' >
                        <img src="" alt="" />
                    </div>
                    <div className="atc-inf">
                        <div className="prd-name">Chrome Dino Mug</div>
                        <div className="price">$14.00</div>
                        <button className="box">Add to cart</button>
                    </div>
                </div>
                <div className='line'></div>
            </div>
        </div>
    )
}

export default ListMenu