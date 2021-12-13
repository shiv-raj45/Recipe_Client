import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import '../Css/SingleItem.css'
import { addToCart, removeFromCart } from '../Features/cartSlice';
function SingleItem({ product, onlyRemoveButton }) {
    console.log(product);
   const [loggedIn, setloggedIn] = useState(false)
    const authState=useSelector((state)=>state.user.auth);
    useEffect(()=>{
        const token=localStorage.getItem("accessToken")
        if(token){setloggedIn(authState)}
        
},[authState])
    const dispatch = useDispatch()
    const [added, setAdded] = useState(false);
    const navigate = useNavigate()
    const handleAddTocart = (product) => {
if(loggedIn){

        dispatch(addToCart(product));
        setAdded(true);
}
else{

    navigate('/login')
}

    }
    const handleRemovecart = (product) => {
        dispatch(removeFromCart(product));
        setAdded(false)

    }
    return (


        <div className="single_item">
            <img className="product_img" src={product.recipe.imgUrl} alt="product_image" />
            <div className="product_name">
            <Link to={`recipeDetails/${product.id}`}style={{textDecoration:'none',color:'red'}} > {product.recipe.dishname}</Link>
            </div>
            <div className="product_info">
                <div className="wrapper">    
                 <span  className="text_title">time</span>
                    <span  className="info_text"> {product.recipe.time} mins</span></div>
                    <div className="wrapper">    
                <span className="text_title">servings</span>
                <span className="info_text">{product.recipe.portion} persons</span></div>
            </div>
                {!onlyRemoveButton ? (
                    added ?
                        <button className="add_remove_button" onClick={() => handleRemovecart(product)}>remove</button> :
                        <button className="add_remove_button" onClick={() => handleAddTocart(product)}>Add to cart</button>
                ) :
                    <button className="add_remove_button" onClick={() => handleRemovecart(product)}>remove</button>
                }
        </div>
    )
}

export default SingleItem
