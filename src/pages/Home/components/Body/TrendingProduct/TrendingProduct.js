import ProductCard from "../../../../../components/ProductCard/ProductCard"
import Data from '../../../../../data/data.json'

export default function TrendingProduct() {
  const productList = Data.product.slice(0,4)
  console.log(productList)

  return (
    <div>
    <h2 className='text-3xl text-center m-pri-marginTop'>Trending Product</h2>
    <p className='text-lg text-center py-2 mb-10'>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
    <div className="grid grid-cols-4">
      {productList.map((productItem, index) => {
        return (
          <ProductCard key={index} product={{...productItem}} nameTest="helo"/>
        )
      })}
    </div>
    </div>
  )
}