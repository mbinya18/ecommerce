import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <hr />
                <p>Your cart is currently empty.</p>
                <button>RETURN TO SHOP</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart