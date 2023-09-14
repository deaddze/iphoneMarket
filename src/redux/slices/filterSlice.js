import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
        type: 'desc'
    },
    limit: 7,
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload
        },
        setSortType(state, action){
            state.sort = action.payload
        },
        setPageCount(state, action){
            state.pageCount = action.payload
        },
    }
})

export const {setCategoryId, setSortType, setPageCount} = filterSlice.actions
export default filterSlice.reducer