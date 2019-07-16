import * as types from '../constants/action-types';

// Get Products
export const get_products = () => {
  let getProductList = JSON.parse(localStorage.getItem('products'));
  return {
    type: types.GET_PRODUCTS,
    getProductList
  }
}

// Edit size
export const edit_size = (id, size) => {
  let editSize = {id: id, size: size};
  return {
    type: types.EDIT_SIZE,
    editSize
  }
}

// Edit qty
export const edit_qty = (id, qty) => {
  let editQty = {id: id, qty: qty};
  return {
    type: types.EDIT_QTY,
    editQty
  }
}

// Delete Product
export const delete_product = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}







