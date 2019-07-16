// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import productList from './productListReducer';

 const rootReducer = combineReducers({
  productList,
 });

 export default rootReducer;
