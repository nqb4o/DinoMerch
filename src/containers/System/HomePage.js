import React, { useState, useEffect } from 'react';
import './HomePage.scss';
import Header from './Header';
import arrow1 from '../../assets/images/Arrow 1.svg'
import dino from '../../assets/images/dino.svg'
import heart1 from '../../assets/images/heart1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        })
    }

    const removeToCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const addToList = (product) => {
        setList((prevList) => {
            const existingProduct = prevList.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevList
            } else {
                return [...prevList, { ...product, quantity: 1 }];
            }
        })
    }

    const removeToList = (productId) => {
        setList((prevList) => prevList.filter((item) => item.id !== productId));
    }

    const isInList = (productId) => {
        return list.find((item) => item.id === productId);
    }

    return (
        <div id="container">
            <Header
                cart={cart}
                addToCart={addToCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeToCart={removeToCart}
                list={list}
            />
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
                    <div key={product.id} className="g-col-4">
                        <div className="product-img">
                            <img className="prd" src={product.image} alt={product.name} />
                            {!isInList(product.id)
                                ? <img
                                    onClick={() => addToList(product)}
                                    className="heart"
                                    src={heart1}
                                    alt="Wishlist"
                                />
                                :
                                <FontAwesomeIcon
                                    color='red'
                                    onClick={() => removeToList(product.id)}
                                    className="heart"
                                    alt="Wishlist"
                                    icon={faHeart}
                                />
                            }
                        </div>
                        <div className='product-body'>
                            <p className="product-title">{product.name}</p>
                            <div className="product-price">
                                <p>${product.price}</p>
                                <div onClick={() => addToCart(product)} className="button">
                                    Add to cart
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
