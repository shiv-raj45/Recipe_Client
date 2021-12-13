import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Ingredients from './Ingredients';
import '../Css/AddRecipeForm.css'
import Methods from './Methods';
import { DeleteOutlined } from '@material-ui/icons';
import baseURL from '../utils/utils';
function AddRecipeForm() {
  const [dishname, setDishname] = useState('');
  const [ingredientData, setIngredientData] = useState({ name: '', quantity: '', unit: '' })
  const [ingredients, setIngredients] = useState([]);
  const [methodData, setMethodData] = useState('')
  const [methods, setMethods] = useState([]);
  const [imgUrl, setImgUrl] = useState('')
  const [buttonDisable, setButtonDisable] = useState(true)
  const [ingredientbutton, setIngredientbutton] = useState(true)
  const [time, setTime] = useState('')
  const [portion, setPortion] = useState('')
  const addIngredient = (data) => {

    setIngredients([...ingredients, data])

    setIngredientData({ name: '', quantity: '', unit: '' })

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIngredientData({ ...ingredientData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDishname('');
    setImgUrl('');
setIngredients([]);
setMethods([])

    const formdata = {
      dishname,
      ingredients,
      methods,
      imgUrl,
      time,
      portion
    }
    axios.post(`${baseURL}/recipes`, formdata).then((response) => {
      console.log(response);
    })
  }
  const addMethod = (data) => {
    setMethodData('')
    setMethods([...methods, data]);
  }

  const deleteIngredient = (index) => {
    setIngredients([...ingredients.filter((el, i) => i !== index)])
  }
  useEffect(() => {



    if (ingredients.length === 0 || !dishname || methods.length === 0 || !time || !portion || !imgUrl) {
      setButtonDisable(true)
    }
    else {
      setButtonDisable(false)
    }
  }, [ingredients, dishname, methods.length, time, portion, imgUrl]);

  useEffect(() => {
    if (!ingredientData.name || !ingredientData.quantity || !ingredientData.unit) {
      setIngredientbutton(true)
    }
    else {
      setIngredientbutton(false)
    }
  }, [ingredientData.name, ingredientData.quantity, ingredientData.unit])

  return (
    <div className="form_wrapper">
      <form className="add_recipe_form" onSubmit={handleSubmit}>

        <div className="dishName">
          <input type="text" placeholder="Dishname" id="dishName" className="inputText" value={dishname}
            onChange={(e) => setDishname(e.target.value)}
          />
        </div>
        <div className="ingredient_form">
          <input type="text" placeholder="Ingredient" id="ingredient_name" className="inputText"
            name="name"
            value={ingredientData.name}
            onChange={handleChange}></input>
          <input type="text" placeholder="quantity" id="quantity" className="inputText"
            name="quantity"
            value={ingredientData.quantity}
            onChange={handleChange}></input>
          <select
            onClick={handleChange} name="unit"
          >

            <option name="unit" value="gram" onClick={handleChange}
            >gram </option>
            <option value="kg" name="unit" onClick={handleChange}
            >KG </option>
            <option value="mL" onClick={handleChange}
              name="unit" >milliliter </option>

            <option value="l" onClick={handleChange}
              name="unit">liter </option>
            <option value="tea spoon" onClick={handleChange}
              name="unit" >tea spoon </option>
            <option value="table spoon" onClick={handleChange}
              name="unit">table spoon </option>


          </select>

          <div className="add_ingredient_div" disabled={ingredientbutton} onClick={() => addIngredient(ingredientData)}>Add</div>
        </div>

        <div className="methods_form" >
          <textarea onChange={(e) => setMethodData(e.target.value)} placeholder="Add your steps here" value={methodData}>



          </textarea>

          <div className="add_methods" onClick={() => addMethod(methodData)}>Add Methods</div>

        </div>

        <div className="input_container">
          <input type="text" placeholder="Time" id="time" className="inputText"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}></input>

          <input type="text" placeholder="Servings" id="servings" className="inputText"
            name="portion"
            value={portion}
            onChange={(e) => setPortion(e.target.value)}></input>
          <input type="text" placeholder="Image Url" className="image_URL" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />

        </div>
        <button type="submit" disabled={buttonDisable} className="recipe_submit_button" >Submit</button>
      </form>
      <div className="info_container">
      <div className="ingredient_container">
<span className="ingredient_text">Ingredients</span>
        {ingredients.map((ingredient, index) => (
          <div className="ingredient_wrapper" key={index}>
            {index+1}
            <Ingredients ingredient={ingredient} />
            <button  className="ingredient_delete"onClick={() => deleteIngredient(index)} ><DeleteOutlined/> </button>
          </div>))}
      </div>
    
      <div className="mehods_display">
        Directions
         {methods.map((method, index) => (<div key={index}><Methods method={method} step={index+1}/> </div>))} </div>
         </div>
    </div>
  )
}

export default AddRecipeForm
