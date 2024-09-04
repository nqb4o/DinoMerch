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
    const [cart, setCart] = useState([]);
    const [list, setList] = useState([]);

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

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === product._id);
            if (existingProduct) {
                // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
                return prevCart.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Nếu chưa có, thêm sản phẩm vào giỏ hàng
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const addToList = (product) => {
        setList((prevList) => {
            const existingProduct = prevList.find((item) => item._id === product._id);
            if (existingProduct) {
                return prevList
            } else {
                return [...prevList, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <div id="container">
            <Header cart={cart} list={list} />
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
                            <img
                                onClick={() => addToList(product)}
                                className="heart"
                                src={heart1}
                                alt="Wishlist"
                            />
                        </div>
                        <div className='product-body'>
                            <p className="product-title">{product.name}</p>
                            <div className="product-price">
                                <p>${product.price}</p>
                                <div className="button">
                                    <p onClick={() => addToCart(product)}>Add to cart</p>
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
