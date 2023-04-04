import ProductList from "./components/ProductList/ProductList";
import SideBar from "./components/SideBar/SideBar";



export default function Shop() {
    return (
        <div>
            <div className="h-[200px] text-center leading-[200px] bg-[#f6f6f6]">
                SHOP
            </div>
            <div className="max-w-[1200px] mx-auto grid grid-cols-4 m-pri-marginTop">
                <div>
                    <SideBar />
                </div>
                <div className=" col-span-3">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}
