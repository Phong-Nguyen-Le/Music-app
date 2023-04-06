import { Link } from "react-router-dom";

export default function Alert({ shown, handleShown }) {
    return (
        <div class="w-200 bg-gray-100 p-4 rounded-lg shadow-lg absolute top-28">
            <p class="text-lg font-medium mb-2">Notification Title</p>
            <p class="text-gray-500 mb-4">Notification message goes here.</p>
            <div class="flex flex-col justify-end space-x-2">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded transition duration-300 ease-in-out">
                    Đăng nhập ngay
                </button>
                <button
                    onClick={handleShown}
                   
                    class="bg-red-500 hover:bg-red-600 text-white font-bold px-4 rounded transition duration-300 ease-in-out"
                >
                    Để lúc khác
                </button>
            </div>
        </div>
    );
}
