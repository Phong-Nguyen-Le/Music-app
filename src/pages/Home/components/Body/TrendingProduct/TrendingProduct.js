import ProductCard from "../../../../../components/ProductCard/ProductCard"
import Data from '../../../../../data/data.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TrendingProduct() {
  const productList = Data.product.slice(0,8)
  console.log(productList)

  
  const settings = {
    // dots: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed:5000,
    autoplay: true,
    pauseOnHover:false,
    pauseOnFocus:true,
    centerPadding: "20px",
    arrows: false
    // className: "h-[600px]	"
};

  return (
    <div>
    <h2 className='text-3xl text-center m-pri-marginTop'>Trending Product</h2>
    <p className='text-lg text-center py-2 mb-10'>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
   
      <Slider {...settings}>
      {productList.map((productItem, index) => {
        return (
          <ProductCard key={index} product={{...productItem}} nameTest="helo"/>
        )
      })}
      </Slider>
    
    </div>
  )
}