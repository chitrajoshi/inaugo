import React from 'react';

const Product = ({dataid, product, sizeHandleChange, qtyHandleChange, onHandleDelete}) => {
  return(
    <>
      <div className="product-description">
            <div className="product-img">
              <img src={product.img} />
              <p>
                {product.name} <br/>
                Free Delivery on order above Rs. 1199<br/>
                Cash on delivery might be available
              </p>
            </div>
            <div className="product-size">
            <form>
                <select dataid={dataid} onChange={sizeHandleChange} value={product.selectedSize}>
                  {product.size.map((item, index) => {return (<option key={index} value={item}>{item}</option>)})}
                </select>
            </form>
            </div>
            <div className="product-qty">
              <form >
                  <select dataid={dataid} onChange={qtyHandleChange} value={product.selectedQty}>
                    {product.qty.map((item, index) => {return (<option key={index} value={item}>{item}</option>)})}
                  </select>
              </form>
            </div>
            <div className="product-price">
                $685
            </div>
      </div>
      <div className="product-remove" dataid={dataid} onClick={onHandleDelete}>Remove</div>
    </>
  );
}

export default Product;
