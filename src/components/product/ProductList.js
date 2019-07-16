import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import './product.scss';
import Product from './Product';
import * as actions from '../../actions/productActions';

class ProductList extends React.Component {

  componentDidMount() {
    this.props.actions.get_products();
  }

  sizeHandleChange = (event) => {
    const id = event.currentTarget.getAttribute("dataid");
    const size = event.currentTarget.value;
    this.props.actions.edit_size(id, size);
  }

  qtyHandleChange = (event) => {
    const id = event.currentTarget.getAttribute("dataid");
    const qty = event.currentTarget.value;
    this.props.actions.edit_qty(id, qty);
  }

  onHandleDelete = (event) => {
    const id = event.currentTarget.getAttribute("dataid");
      this.props.actions.delete_product(id);
  }

  mapProducts = (product, index) => {
    return(
      <li key= {product._id}>
        <Product
          dataid = {product._id}
          product = {product}
          sizeHandleChange = {this.sizeHandleChange}
          qtyHandleChange = {this.qtyHandleChange}
          onHandleDelete = {this.onHandleDelete}
        />
      </li>
    );
  }

  render(){

    return(
      <div className="product-wrapper">
          <div className="product-top-bar">
            <div className="product-top-product">PRODUCT</div>
            <div className="product-top-size">SIZE</div>
            <div className="product-top-qty">QTY</div>
            <div className="product-top-price">PRICE</div>
          </div>
          <ul>
            {this.props.products.map(this.mapProducts)}
          </ul>
      </div>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    products: state.productList.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
