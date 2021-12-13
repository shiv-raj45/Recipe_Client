import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../Css/Home.css'
import SingleItem from '../Components/SingleItem';
import { fetchRecipe } from '../Features/recipeSlice'
function Home() {
    const recipes = useSelector((state) => state.recipes.recipes);
const user=useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRecipe());
        console.log(`user is ${user}`);
    }, [dispatch,user])
    return (
        <div className="home" >
            {recipes.map((recipe,index) => (<SingleItem key={index} product={recipe}/>))}      
              </div>
    )
}

export default Home
