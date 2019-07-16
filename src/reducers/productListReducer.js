import * as types from '../constants/action-types';

const initialState = {products: []};

const productListReducer = (state = initialState, actions) => {
    switch(actions.type){

        case types.GET_PRODUCTS: {
            const newState = Object.assign({}, state);
            newState.products = [...actions.getProductList.products];
            return newState;
        }

        case types.DELETE_PRODUCT: {
            const id = actions.id;
            const newState = Object.assign({}, state);

            let newProduct = [...newState.products];
            const deleteIndex = newProduct.findIndex((item) => item._id === id);
            newProduct = [...newProduct.slice(0, deleteIndex), ...newProduct.slice(deleteIndex+1)];
            newState.products = [...newProduct];

            return newState;
        }

        case types.EDIT_SIZE: {
            const id = actions.editSize.id;
            const size = actions.editSize.size;
            const newState = Object.assign({}, state);

            let newProduct = [...newState.products];
            const editIndex = newProduct.findIndex((item) => item._id === id);

            let newObj = Object.assign({}, newProduct[editIndex]);
            newObj.selectedSize = size;
            newProduct[editIndex] = newObj;

            newState.products = [...newProduct];

            return newState;
        }

        case types.EDIT_QTY: {
          const id = actions.editQty.id;
          const qty = actions.editQty.qty;
          const newState = Object.assign({}, state);

          let newProduct = [...newState.products];
          const editIndex = newProduct.findIndex((item) => item._id === id);

          let newObj = Object.assign({}, newProduct[editIndex]);
          newObj.selectedQty = qty;
          newProduct[editIndex] = newObj;

          newState.products = [...newProduct];

          return newState;
      }

        default: {
            return state;
        }
    }
}

export default productListReducer;
