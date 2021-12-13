import React from "react";

import '../Css/Header.css'
import { Add, ExitToApp, FavoriteBorderOutlined, FormatColorFillOutlined, HomeOutlined, NotesOutlined, PersonOutlined, SearchRounded, ShoppingCartOutlined, SpaRounded } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink,useNavigate } from 'react-router-dom'
import { userLogout } from "../Features/cartSlice";
import { authenticate } from "../Features/userSlice";
function Header() {
  const dispatch=useDispatch()
    const theme = useSelector(state => state.recipes.lightTheme)
    const cart=useSelector((state)=>state.cart.cart)
  const auth=useSelector((state)=>state.user.auth);
  const navigate=useNavigate()
const logOut=()=>{
dispatch(userLogout());
dispatch(authenticate(false))
localStorage.removeItem("accessToken");
navigate('/login')
}    
  //className="header_link" activeClassName="nav_active"
    return (
    <div className="header" style={{ background: theme ? 'white' : 'wheat' }}>
      <nav className="header_navbar">

        <div className="header_left">
          <span className="header_logo">
            <NavLink to="/" className="header_link"> Recipes  </NavLink>
          </span>
        </div>
        <div className="header_right">
          <NavLink className={(navData) => navData.isActive ? "nav_active" : "header_link" }  to="/">
            <span className="link_title">Home </span> <HomeOutlined />
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? "nav_active" : "header_link" }  to="/cart">

            <span className="link_title"> cart </span> <ShoppingCartOutlined /> <span className="cart_count"> {cart.length}</span>
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? "nav_active" : "header_link" }  to="/addrecipes">
            <span className="link_title">  Add</span> <Add />
          </NavLink>
          <NavLink className={(navData) => navData.isActive ? "nav_active" : "header_link" }  to="/searchpage">
            <span className="link_title"> search </span><SearchRounded />
          </NavLink>


          {!auth? (
            <>
              <NavLink className={(navData) => navData.isActive ? "nav_active" : "header_link" }  to="/login">
                <span className="link_title"> login </span> <PersonOutlined />
              </NavLink>
              <NavLink className={(navData) => navData.isActive ? "nav_active" : "header_link" }  to="/signup">
                <span className="link_title"> signup </span> <NotesOutlined/>
              </NavLink>
            </>
          ) : (
            <span className="header_link" onClick={logOut} activeClassName="nav_active" >
              <span className="link_title">Logout </span>  <ExitToApp />
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header

