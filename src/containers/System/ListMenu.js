import React from 'react';
import './Header.scss';

function ListMenu({ list, addToCart }) {
    return (
        <div className="list-menu">
            {list.map((item) => (
                <div key={item._id} className="list-menu-links">
                    <div className="list-menu-link">
                        <div className='product-image' >
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="atc-inf">
                            <div className="prd-name">{item.name}</div>
                            <div className="price">${item.price}</div>
                            <button
                                onClick={() => addToCart(item)}
                                className="box">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            ))}
        </div>
    )
}

export default ListMenu