import { configureStore } from "@reduxjs/toolkit";
import { sideBarSlice } from "../pages/Shop/components/SideBar/sideBarSlice";
import { productListSlice } from "../pages/Shop/components/ProductList/productListSlice";
import { topBarSlice } from "../pages/Shop/components/TopBar/topBar.Slice";
import { cartSlice } from "../pages/CartPage/CartSlice";


const store = configureStore({
  reducer: {
    sideBarFilter: sideBarSlice.reducer,
    productList: productListSlice.reducer,
    topBarFilter: topBarSlice.reducer,
    cartInfo: cartSlice.reducer
  }
})

export default store

