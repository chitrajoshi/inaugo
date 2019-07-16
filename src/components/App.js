import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from "prop-types";
import Routes from '../components/Routes';

class App extends React.Component {
    render() {
        return (
            <div className="app">
              <Routes />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);
