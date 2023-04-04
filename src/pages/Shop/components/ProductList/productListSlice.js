import { createSlice } from "@reduxjs/toolkit";
import data from '../../../../data/data.json'

export const productListSlice = createSlice({
  name: 'productList',
  initialState: data.product,
  reducers: {
    
  }
})