import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers } from 'redux'
import reducer from './countReducers'
import {Provider} from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension"
import countReducer from "./countReducers"
import productReducer from './productReducer'
import modalReducer from './modalReducer'
import Modal from './Modal'


 const store = createStore(combineReducers({
   countState: countReducer,
   modalState: modalReducer,
   productState: productReducer
 }),
composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="random value"/>;
      <Modal />
  </Provider>
  )
};
 
export default App;