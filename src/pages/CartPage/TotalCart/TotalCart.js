import { useSelector } from "react-redux"
import { cartSelector } from "../../../redux/selector"
import { Button } from "@material-tailwind/react"
import formatNumberFunc from "../../../components/numericFormat";



export default function TotalCart () {
  let totalCart = useSelector(cartSelector)[1]

  return (
    <div className="flex justify-end">
    {totalCart !== 0? ( <div className=" w-[500px] mt-10 px-3 sm:text-xs">
      <h3 className="pb-3 text-center text-xl font-bold border-solid border-b-2 border-[#494a4b6c] sm:text-sm">Thông tin thanh toán</h3>
      <div className="flex justify-between py-3 border-solid border-b-2 border-[#494a4b6c]">
        <span className="">Tổng số tiền</span>
        <span className="">{formatNumberFunc(totalCart)}</span>
      </div>
      <div  className="flex justify-between py-3 border-solid border-b-2 border-[#494a4b6c]">
        <span>Số tiền được giảm</span>
        <span>0 đ</span>
      </div>
      <div  className="flex justify-between py-3 border-solid border-b-2 border-[#494a4b6c]">
        <span>Phí vận chuyển</span>
        <span>0 đ</span>
      </div>
      <div  className="flex justify-between py-3 border-solid border-b-2 border-[#494a4b6c]">
        <span>Số tiền thanh toán</span>
        <span>{formatNumberFunc(totalCart)}</span>
      </div>
      <Button className="w-full text-base sm:text-xs">Tiến hành thanh toán</Button>
    </div>): <></>}
    </div>
  )
}