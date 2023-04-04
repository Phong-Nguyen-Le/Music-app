import { createSlice } from "@reduxjs/toolkit";

export const topBarSlice = createSlice({
  name: 'topBarFilter',
  initialState: {
      typeOfSort: '',
      searchText: ''
  },
  reducers: {
    sortFilterChange: (state, action) => {
      state.typeOfSort = action.payload
    },
    searchTextChange: (state, action) => {
      state.searchText = action.payload
    }

  }
})