import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter  } from "react-router-dom";

import { recipesSaga } from './sagas';
import recipeReducer from './Features/recipeSlice';
import cartReducer from './Features/cartSlice';
import userReducer from './Features/userSlice'

import createSagaMiddleware from 'redux-saga'
const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    cart:cartReducer,
    user:userReducer
  },
  middleware: [saga]

});
saga.run(recipesSaga)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,

  </Provider>,
  document.getElementById('root'),
);
