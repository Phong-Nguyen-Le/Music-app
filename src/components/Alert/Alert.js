import { Link } from "react-router-dom";

export default function Alert({ shown, handleShown }) {
    return (
        <div class="w-[250px] bg-gray-300 p-4 rounded-lg shadow-lg absolute top-20 z-50">
            <p class="text-lg font-medium mb-2 text-center">Xin lỗi. bạn phải đăng nhập để sử dụng giỏ hàng</p>
            <div class="grid grid-cols-2 ">
                
                <button class=" w-[90%] bg-blue-500 hover:bg-blue-600 text-white font-medium px-2 rounded transition duration-300 ease-in-out mx-auto">
                <Link to='/login'>
                    Đăng nhập ngay
                </Link>
                </button>
                
                <button
                    onClick={handleShown}                 
                    class="w-[90%] bg-red-500 hover:bg-red-600 text-white font-medium px-2 rounded transition duration-300 ease-in-out mx-auto"
                >
                    Để lúc khác
                </button>
            </div>
        </div>
    );
}
