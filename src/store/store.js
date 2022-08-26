import {configureStore, combineReducers} from '@reduxjs/toolkit';

import productReducer from './slice/product.slice'

const rootReducer = combineReducers ({productReducer})

const store =  configureStore({
    reducer:rootReducer
})

export default store;
