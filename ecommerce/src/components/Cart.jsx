import React from 'react'
import './cart.css'

const Cart = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <hr className='hr-line'/>
                <p className='px-4'>Your cart is currently empty.</p>
                <button className='return-to-shop px-4 py-2'>RETURN TO SHOP</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart