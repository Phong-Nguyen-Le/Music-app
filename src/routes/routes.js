import DetailPage from "../pages/Home/components/Body/DetailPage/DetailPage"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import CartPage from "../pages/CartPage"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"

import { AuthContext } from "../components/Context/AuthProvider"
import {  Navigate, Outlet } from "react-router-dom";
import { useContext } from "react"



export const publicRoutes = [
  {path: '/', component: Home },
  {path: '/detailpage/:id', component: DetailPage},
  {path: '/shop', component: Shop}, 
  // {path: '/cartpage', component:CartPage},
  {path: '/login', component:Login, layout: 'login'},
  {path: '/signup', component:SignUp, layout: 'signup'}
]   


export const privateRoutes = [
  {path:'/cartpage', component: CartPage}
]



export const PrivateRoute = () => {
  const user = useContext(AuthContext)
 
  return (
    user.email? <Outlet/> : <Navigate to='/login'/>
  );
};