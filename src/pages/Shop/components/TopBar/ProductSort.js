import { useDispatch } from "react-redux"
import { topBarSlice } from "./topBar.Slice"






export default function ProductSort () {

const dispatch = useDispatch()

const handleSortChange = (e) => {
  dispatch(topBarSlice.actions.sortFilterChange(e.target.value))
} 

  return (
    <div className="w-full flex items-center"> 
      <div>Sort by</div>
      <select onChange={handleSortChange} className=" w-32 ml-3 border-solid border-2 border-slate-100">
        <option value="Relevant">Relevant</option>
        <option value="a-b">Giá thấp đến cao</option>
        <option value="b-a">Giá cao đến thấp</option>
      </select>
    </div>
  )
}