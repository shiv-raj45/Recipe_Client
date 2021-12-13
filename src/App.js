import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes,Route,Switch } from 'react-router-dom';
import Header from './Components/Header';
import ToggleTheme from './Components/ToggleTheme';
import'./Css/App.css'
import { authenticate } from './Features/userSlice';
import AddRecipes from './Pages/AddRecipes';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import RecipeDetails from './Pages/RecipeDetails';
import SearchPage from './Pages/SearchPage';
import SignupForm from './Pages/Signup';

function App() {

  const theme=useSelector(state=>state.recipes.lightTheme);
  console.log(theme);
const dispatch=useDispatch()
useEffect(()=>{
const token=localStorage.getItem("accessToken");
if(token){
  dispatch(authenticate(true))
}
else{
  dispatch(authenticate(false))

}
},[dispatch])


  return (
    <div className="App" style={{background:theme?'white':'wheat'}}>
      <ToggleTheme/>
        <Header/>
       <Routes>
        <Route exact path={"/"} element={<Home/>} />

        <Route exact path={`/addrecipes`} element={<AddRecipes/>} />
        <Route exact path={`/signup`} element={<SignupForm/>} />
        <Route exact path={`/login`} element={<Login/>} />
        <Route exact path={`/cart`} element={<Cart/>} />
        <Route exact path={`/searchpage`} element={<SearchPage/>} />
        
        <Route exact path={`/recipeDetails/:id`} element={<RecipeDetails/>} />
        
       </Routes>
         </div>
  );
}

export default App;
