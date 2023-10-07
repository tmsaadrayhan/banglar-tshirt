import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './../Tshirt/Tshirt';
import Cart from './../Cart/Cart';
import "./Home.css"
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt => {
        if(cart.find(ts=> ts._id === tshirt._id)) {
            toast("You have already added this T-shirt")
        }
        else {
            setCart([ ...cart, tshirt ]);
        }
    }
    const handleRemoveFromCart = id => {
        setCart(cart.filter(tshirts => tshirts._id !== id));
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>

        </div>
    );
};

export default Home;