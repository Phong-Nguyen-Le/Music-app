import DetailPage from "../pages/Home/components/Body/DetailPage/DetailPage"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import CartPage from "../pages/CartPage"
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp"



export const publicRoutes = [
  {path: '/', component: Home },
  {path: '/detailpage/:id', component: DetailPage},
  {path: '/shop', component: Shop}, 
  {path: '/cartpage', component:CartPage},
  {path: '/login', component:Login, layout: 'login'},
  {path: '/signup', component:SignUp, layout: 'signup'}
]   