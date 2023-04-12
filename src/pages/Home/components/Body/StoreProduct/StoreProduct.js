import ProductCard from "../../../../../components/ProductCard/ProductCard"
import { Button } from "@material-tailwind/react";
import Data from '../../../../../data/data.json'
import { Link } from "react-router-dom";


export default function StoreProduct() {

  const productList = Data.product.slice(0,8)
  

  return (
    <div>
      
      <h2 className='text-3xl text-center m-pri-marginTop sm:text-lg'>New Products</h2>
      <p className='text-lg text-center py-2 mb-10 sm:text-base'>Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero</p>
      <div className="grid grid-cols-4 sm:grid-cols-2">
        {productList.map((productItem, index) => {
          return (
            <ProductCard key={index} product={{...productItem}}/>
          )
        })}        
        </div>

        <div className="flex justify-center my-5">
            <Link to='/shop'>
           <Button>View More Product</Button>
            </Link>
        </div>
    </div>

  )
}