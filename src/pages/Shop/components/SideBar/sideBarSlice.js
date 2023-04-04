import { createSlice } from "@reduxjs/toolkit";


export const sideBarSlice = createSlice({
  name: 'sideBarFilter',
  initialState: {
    typeOfCategory: 'All',
    priceRange: [],
    brand: []
  },
  reducers: {
    categoryFilterChange: (state, action) => {
      state.typeOfCategory = action.payload
      state.brand = []
    },
    priceRangeFilterChange: (state, action) => {
      state.priceRange = action.payload
      state.brand = []
    },
    brandFilterChange: (state,action) => {
      state.brand = action.payload
    }
  }
})


