 import SearchBar from "./SearchBar/SearchBar"
 import ProductSort from "./ProductSort"
 
 export default function TopBar () {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 sm:col-span-3 sm:mx-auto"><SearchBar/></div>
      <div className="sm:col-span-3 sm:mt-2 sm:mr-5"><ProductSort/></div>
    </div>
  )
 }