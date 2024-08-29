import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import Header from './Header';
import arrow1 from '../../assets/images/Arrow 1.svg'
import dino from '../../assets/images/dino.svg'
import heart1 from '../../assets/images/heart1.svg'
import { fetchProductsApi } from '../../services/userService';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetchProductsApi()
                setProducts(response);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div id="container">
            <Header />
            <div className="banner w-75">
                <div className="cont">
                    <div className="text">
                        <h2>Shop the Look: dinomerch - Define Your Style!</h2>
                        <p>Elevate Your Wardrobe with Exclusive merch</p>
                    </div>
                    <a href="#products">
                        <button type='button' className="button">
                            <p>Scroll down for more</p>
                            <img src={arrow1} alt="" />
                        </button>
                    </a>
                </div>
                <div className="img"><img src={dino} alt="" /></div>
            </div>
            <h1>Chrome Dino Merch</h1>
            <div className="product-lib">
                {products.map((product) => (
                    <div key={product._id} className="g-col-4">
                        <div className="product-img">
                            <img className="prd" src={product.image} alt={product.name} />
                            <img className="heart" src={heart1} alt="Wishlist" />
                        </div>
                        <div className='product-body'>
                            <p className="product-title">{product.name}</p>
                            <div className="product-price">
                                <p>${product.price}</p>
                                <div className="button">
                                    <p>Add to cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default HomePage
