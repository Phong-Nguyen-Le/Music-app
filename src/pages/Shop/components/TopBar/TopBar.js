 import SearchBar from "./SearchBar/SearchBar"
 import ProductSort from "./ProductSort"
 
 export default function TopBar () {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2"><SearchBar/></div>
      <ProductSort/>
    </div>
  )
 }