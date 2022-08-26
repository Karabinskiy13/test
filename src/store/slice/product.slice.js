import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productService} from "../../services/product.service"

export const getAllProducts = createAsyncThunk(
    'productSlice/getAllProducts',
    async(_, {rejectWithValue})=>{
        try{
            return await productService.getAll()
        }
        catch(e){
            rejectWithValue(e.message)
        }
    }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllProducts.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.products = action.payload.products;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})

const productReducer = productSlice.reducer;

export default productReducer;
