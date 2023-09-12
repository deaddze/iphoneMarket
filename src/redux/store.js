import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/CartSlice'
import market from './slices/marketSlice'
export const store = configureStore({
  reducer: {
    filter,
    cart,
    market,
  },
})