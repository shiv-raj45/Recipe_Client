import { createSlice } from '@reduxjs/toolkit'


const initialState={recipes:[],isLoading:false,lightTheme:true}
export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
   fetchRecipe(state,action){
    state.isLoading=true
   },
   getRecipeSuccess(state,action){
     state.recipes=action.payload
     state.isLoading=false
   },
   getRecipeFailure(state){
state.isLoading=false
   },
   setTheme(state,{payload}){

    state.lightTheme=payload
   },
   
   
}
})

export const { fetchRecipe,getRecipeSuccess,getRecipeFailure,setTheme,getUserdetails} = recipeSlice.actions
export default recipeSlice.reducer