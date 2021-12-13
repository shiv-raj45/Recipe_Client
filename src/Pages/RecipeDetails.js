import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Ingredients from '../Components/Ingredients';
import Methods from '../Components/Methods';
import '../Css/RecipeDetails.css'

function RecipeDetails() {
const {id}=useParams()
const product=useSelector(state=>state.recipes.recipes)  ;
return (
        <div className="recipe_details">
            {product.map((el,i)=>el.id===id && <div key={i}>
                {el.dishName}
                
                <img src={el.recipe.imgUrl} className="recipe_details_img" alt="dishImage"/>
  <div className="details_wrapper">    
  
  <div className="ingredient_container">
 <b> Ingredients</b>

  <div className="recipeDetails_ingredient_row" >
            <span className="row_unit">Name</span>
            <span className="row_unit">Quantity</span>
            <span className="row_unit">Unit</span>

        </div>

   {el.recipe.ingredients.map(ingredient=>(
          <div className="ingredient_wrapper" >
        
        <Ingredients ingredient={ingredient}/>
        </div>
        
        ))}
        </div>
      <div className="mehods_display">
<b> Directions</b>
        {el.recipe.methods.map((method,s)=>(
        <Methods method={method}step={s+1} />))}
        </div>
</div>
                </div>)}
        
        </div>
    )
}

export default RecipeDetails
