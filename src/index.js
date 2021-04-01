import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {Provider} from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';

const pizzaOrder = ( state=[], action )=>{
    return state;
}

const pizzaCart = ( state=[], action ) =>{
    if(action.type === 'add-to-cart'){
        console.log( 'in pizzaCart', action.payload );
        return [ ...state, action.payload ]
    }
    return state;
}

const store=createStore(
    combineReducers({
        pizzaOrder: pizzaOrder,
        pizzaCart: pizzaCart
    }), applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
