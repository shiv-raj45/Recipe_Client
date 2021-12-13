import React from 'react'
import { useSelector } from 'react-redux';
import SingleItem from '../Components/SingleItem';
import '../Css/cart.css';

function Cart() {
const auth=useSelector((state)=>state.user.auth)
    const cart=useSelector((state)=>state.cart.cart);
    
    return (
        <div className="cart">
        {cart.map((cartElement,index)=>(<div key={index}> <SingleItem onlyRemoveButton={true} product={cartElement} /> </div>))}
        
        {!auth &&<div className="result_unavailable"> Sorry You must login first :( </div> }
        {cart.length===0 && <div className="result_unavailable"> You don't have anything on cart :( </div>}
        </div>
    )
}

export default Cart
