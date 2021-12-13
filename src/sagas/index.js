import { put, call, takeEvery } from 'redux-saga/effects';
import { getRecipeSuccess } from '../Features/recipeSlice';

function* workGetRecipe (){
  const recipes=yield call(()=>fetch('http://localhost:5000/recipes'));
const data=yield recipes.json();
yield put(getRecipeSuccess(data));
}

const recipesSaga= function* () {
   yield takeEvery('recipes/fetchRecipe',workGetRecipe)
}

export  {recipesSaga}