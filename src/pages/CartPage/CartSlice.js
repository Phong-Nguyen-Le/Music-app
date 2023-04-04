import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cartInfo',
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      state = state.push(action.payload)
    },
    removeProductFromCart: (state, action) => {
      return state.filter((item) => item.name !== action.payload)
    },
    increaseQuantityProduct: (state, action) => {
      let currentItem = state.find((item) => item.name === action.payload[0])
      currentItem.quantity += 1
    },
    decreaseQuantityProduct: (state, action) => {
      let currentItem = state.find((item) => item.name === action.payload[0])
      currentItem.quantity -= 1
    }
  }

})

