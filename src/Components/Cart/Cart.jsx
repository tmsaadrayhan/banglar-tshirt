import React from 'react';
import "./Cart.css"

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log(cart);
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <p>Thanks for purchasing</p>
    }
    return (
        <div>
            <p className= {`header ${cart.length === 0 ? "red" : "green"}`}> <span className='header-first-letter'>O</span><span className='header-other-letter'>rder Summary: {cart.length}</span></p>
            {
                cart.length > 2
                    ? <span>Good</span>
                    : <span>Please order some more</span>
            }
            {message}
            {

                cart.map(tshirt => <div key={tshirt._id}>
                    <h3> {tshirt.name}</h3>
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </div>)
            }
            {
                cart.length === 2 && <p>Double bonanza!</p>
            }
            {
                cart.length !== 3 || <h3>Nice trilogy!!!</h3>
            }
        </div>
    );
};

export default Cart;