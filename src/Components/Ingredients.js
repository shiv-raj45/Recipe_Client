import React from 'react'
import '../Css/Ingredients.css'
function Ingredients({ ingredient }) {
    return (
        <div className="ingredient_row">
            <span className="row_unit">{ingredient.name}</span>
            <span className="row_unit">{ingredient.quantity}</span>
            <span className="row_unit">{ingredient.unit}</span>

        </div>
    )
}

export default Ingredients
