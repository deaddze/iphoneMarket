import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
export const fetchMarket = createAsyncThunk('market/fetchMarketStatus',
    async(params) => {
        const {
            searchValue,
            categoryType, 
            page,
            sort,
            order} = params
        const res = await axios.get(`https://64f785679d7754084953ac39.mockapi.io/items?${page}${searchValue}&limit=7&${sort}${categoryType}${order}`)
        return res.data
    }
)

const initialState = {
    items: [],
    status: 'loading',
}

export const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchMarket.pending]: (state, action) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchMarket.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchMarket.rejected]: (state, action) => {
            state.items = [];
            state.status = 'error';
        },
    }
})

export const {setItems} = marketSlice.actions
export default marketSlice.reducer