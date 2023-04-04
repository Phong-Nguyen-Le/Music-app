import StorePolicy from "./StorePolicy/StorePolicy"
import Promotion from "./Promotion/Promotion"
import Slider from "./Slider/Slider"
import StoreProduct from "./StoreProduct/StoreProduct"
import Banner from "./Banner/Banner"
import TrendingProduct from "./TrendingProduct/TrendingProduct"


export default function Body() {

  return (
    <div className="max-w-[1200px] mx-auto">
      <div><StorePolicy/></div>
      {/* <div ><Slider/></div> */}
      <div><Promotion/></div>
      <div><StoreProduct/></div>
      <div><Banner/></div>
      <div><TrendingProduct/></div>
    </div>
  )
}