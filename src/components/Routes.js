import React from 'react';
import { Route, Switch } from "react-router-dom";
import ProductList from './product/ProductList';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ProductList} />
            </Switch>
        )
    }
}

export default Routes;
