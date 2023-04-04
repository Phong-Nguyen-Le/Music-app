import DetailCart from "./DetailCart/DetailCart";
import TotalCart from "./TotalCart/TotalCart";


export default function CartPage() {
  return (
      <div>
          <div className="h-[200px] text-center leading-[200px] bg-[#f6f6f6]">
              Cart
          </div>
          <div className="max-w-[1200px] min-h-[300px] mx-auto m-pri-marginTop">
             <DetailCart />
             <TotalCart />
          </div>
      </div>
  );
}
