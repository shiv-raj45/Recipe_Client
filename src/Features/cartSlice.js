import { createSlice } from '@reduxjs/toolkit'


const initialState={cart:[]}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart(state,action){
state.cart=[...state.cart,action.payload]
   },
   removeFromCart(state,action){
state.cart=[...state.cart.filter(el=>el.id!==action.payload.id)]
   },
   userLogout(state){
state.cart=[]
   }
}
})

export const {addToCart,removeFromCart,userLogout} = cartSlice.actions
export default cartSlice.reducer