import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addItem(state, action){
            const findItem = state.items.find(obj => obj.id === action.payload.id)
            if(findItem){
                findItem.count++
                
            }else{
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum 
            }, 0)
        },
        decrementCount(state, action){
            const findItem = state.items.find(obj => obj.id === action.payload)
            findItem.count--
            state.totalPrice = state.totalPrice - findItem.price

        },
        removeItem(state, action){
            state.items = state.items.filter(obj => obj.id !== action.payload.id)
            state.totalPrice = state.totalPrice - (action.payload.price * action.payload.count)
        },
        clearItems(state){
            state.items = [];
            state.totalPrice = 0;
        }
    }
})

export const {addItem, removeItem, decrementCount, clearItems} = cartSlice.actions
export default cartSlice.reducer