import "@babel/polyfill";

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore, {history} from './store/configureStore';
import Root from './components/Root';

const store = configureStore();

let productList = { products: [
  {_id: '01', name: 'Dress 1', description: 'Dummy Description about Dress 1', img:'https://photo.venus.com/im/Z79059-RD_Y42572-NU.054.jpg?preset=product', size: ['XS','S','M','L','XL'], qty: [1, 2, 3, 4, 5], selectedSize:'XS', selectedQty:1, price: 2000},
  {_id: '02', name: 'Dress 2', description: 'Dummy Description about Dress 2', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCg8DeLO7ZwpYUyxTG4VNz2kJwuSoE9_6CA3OuzD7THPXQy9f', size: ['XS','S','M','L','XL'], qty: [1, 2, 3],selectedSize:'S', selectedQty:1, price: 5000},
  {_id: '03', name: 'Dress 3', description: 'Dummy Description about Dress 3', img:'https://www.lulus.com/images/product/xlarge/2887130_575882.jpg', size: ['XS','S','M','L','XL'], qty: [1, 2],selectedSize:'XS', selectedQty:2, price: 7000}
]}
localStorage.setItem('products', JSON.stringify(productList));


render(
    <AppContainer>
        <Root store={store} history={history}/>
    </AppContainer>,
    document.getElementById('app')
);

if(module.hot){
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}

