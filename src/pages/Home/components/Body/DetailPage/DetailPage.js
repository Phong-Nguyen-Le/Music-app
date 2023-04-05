import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function DetailPage () {
  const params = useParams()
  console.log(params)
  // const [color, setColor] = useState()
  // useEffect(()=> {
  //   getDetail(params.id)
  // }, [id])
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 h-96">
      <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt="Product" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">Product Name</h2>
        <p className="text-gray-700 text-base">Product description goes here.</p>
        <div className="mt-4">
          <span className="text-gray-700 font-bold text-xl">$19.99</span>
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
