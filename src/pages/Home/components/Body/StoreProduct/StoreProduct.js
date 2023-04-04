import ProductCard from "../../../../../components/ProductCard/ProductCard"
import { Button } from "@material-tailwind/react";
import Data from '../../../../../data/data.json'

export default function StoreProduct() {

  const productList = Data.product.slice(0,8)
  

  return (
    <div>
      <h2 className='text-3xl text-center m-pri-marginTop'>New Products</h2>
      <p className='text-lg text-center py-2 mb-10'>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
      <div className="grid grid-cols-4">
        {productList.map((productItem, index) => {
          return (
            <ProductCard key={index} product={{...productItem}}/>
          )
        })}        
        </div>
        <div className="flex justify-center my-5">
           <Button>View More Product</Button>
        </div>
    </div>

  )
}